import { ReactNode, useEffect, useMemo, useState } from 'react';
import type { RenderedCell } from 'rc-table/lib/interface';
import { RoleBadge, SystemDefault, TotalDescription } from '../styles';
import { ActionWrap, EmptyAction } from '../../styles';
import { LinkContainer } from '../../DeploymentsTable/styles';
import { useLinkComponent } from '../../../../providers/NextLinkProvider';
import { EyeOutlined } from '@ant-design/icons';
import { highlightTextInElement } from '../../../../_util/helpers';
import { PaginationWithSelector } from '../../FactsTable/FactsTable';
import BaseTable from '../../Base';
import Pagination from '../../../Pagination';
import OrgUserGroupsSkeleton from './OrgUserGroupsSkeleton';
import { Tooltip } from 'antd';

type UserGroup = {
	id: string;
	name: string;
	role: 'GUEST' | 'DEVELOPER' | 'REPORTER' | 'MAINTAINER' | 'OWNER';
	groupType?: 'null' | 'project-default-group';
};

export type UserGroupsProps = {
	userGroups: UserGroup[];
	editUserRoleModal: (userGroup: UserGroup) => ReactNode;
	unlinkGroupModal: (userGroup: UserGroup) => ReactNode;
	basePath: string;
	skeleton?: false;
};

export type UserGroupsSkeleton = {
	skeleton: true;
};

export type OrgUserGroupsTableProps = {
	resultsPerPage?: number;
	filterString?: string;
	showDefaults?: boolean;
	sortBy?: 'name_asc' | 'name_desc' | null;
	filterRoleType?: 'GUEST' | 'DEVELOPER' | 'REPORTER' | 'MAINTAINER' | 'OWNER';
	/*
	 * For stylistic reasons, `results per page` select component next to pagination
	 */
	resultDropdown?: ReactNode;
} & (UserGroupsSkeleton | UserGroupsProps);

const OrgUserGroupsTable = (props: OrgUserGroupsTableProps) => {
	const { resultsPerPage, showDefaults = false, resultDropdown = null, sortBy = null, filterString = '' } = props;

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	useEffect(() => {
		setCurrentPage(1);
	}, [filterString]);

	if ('skeleton' in props && props.skeleton) {
		return <OrgUserGroupsSkeleton />;
	}

	const { userGroups, basePath, unlinkGroupModal, editUserRoleModal, filterRoleType } = props;

	const Link = useLinkComponent();

	const filteredGroups = userGroups
		? userGroups.filter((group) => {
				const fieldsToCheck = [group.name];

				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// show ones only by role
	const sortedByRole = useMemo(() => {
		return filteredGroups
			? filteredGroups.filter((item) => {
					const statusMatches = filterRoleType ? item.role === filterRoleType : true;
					return statusMatches;
				})
			: [];
	}, [filteredGroups, filterRoleType]);

	// sorting based on sortBy
	const sortColumn = sortBy ? sortBy.split('_')[0] : null;
	const sortOrder = sortBy ? sortBy.split('_')[1] : null;

	const sortedGroups = [...sortedByRole].sort((a, b) => {
		if (sortColumn) {
			const aValue = a[sortColumn as keyof UserGroup];
			const bValue = b[sortColumn as keyof UserGroup];

			// determine the sort direction (1 for asc, -1 for desc)
			const direction = sortOrder === 'asc' ? 1 : -1;

			// possible null checks.
			if (aValue === null && bValue === null) return 0;
			if (aValue === null) return direction;
			if (bValue === null) return -direction;

			if (aValue && bValue) {
				if (aValue > bValue) return direction;
				if (aValue < bValue) return -direction;
			}
		}
		return 0;
	});

	const defaultFilteredGroups = useMemo(() => {
		if (!sortedGroups) return [];

		if (!showDefaults) {
			return sortedGroups.filter((group) => group.groupType !== 'project-default-group');
		}

		return sortedGroups;
	}, [sortedGroups, showDefaults]);

	// paginated data based on filtered results
	const paginatedGroups =
		pageSize > 0
			? defaultFilteredGroups.slice((currentPage - 1) * pageSize, currentPage * pageSize)
			: defaultFilteredGroups;

	const totalFilteredCount = defaultFilteredGroups.length;

	const getResultRange = () => {
		const currentPageLength = paginatedGroups.length;
		if (currentPageLength === 0) return 0;
		if (currentPageLength === 1 && currentPage === 1) return 1;

		const startRange = currentPage === 1 ? 1 : (currentPage - 1) * pageSize + 1;
		// currentPageLength is never greater than pageSize
		const endRange = startRange - 1 + currentPageLength;

		const rangeText = startRange === endRange ? 'the last entry' : `${startRange} - ${endRange}`;

		return rangeText;
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const getSortedClass = (columnKey: string) => {
		return sortColumn === columnKey ? 'custom-sorted' : '';
	};

	const groupsColumns = [
		{
			title: 'Group Name',
			dataIndex: 'name',
			key: 'name',
			width: '60.17%',
			render: (name: string, group: UserGroup) => {
				return (
					<LinkContainer>
						<Link href={`${basePath}/${group.name}`}>
							{name} {group.groupType === 'project-default-group' ? <SystemDefault>SYSTEM GROUP</SystemDefault> : null}
						</Link>
					</LinkContainer>
				);
			},
			className: getSortedClass('name'),
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
			width: '27.4%',
			render: (role: 'GUEST' | 'REPORTER' | 'DEVELOPER' | 'MAINTAINER' | 'OWNER') => {
				return <RoleBadge $type={role}>{role}</RoleBadge>;
			},
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const groupsWithActions =
		paginatedGroups &&
		paginatedGroups.map((group) => {
			return {
				...group,
				actions: (
					<ActionWrap>
						{editUserRoleModal(group)}

						<LinkContainer>
							<Link href={`${basePath}/${group.name}`}>
								<Tooltip placement="bottom" title="View group">
									<EyeOutlined />
								</Tooltip>
							</Link>
						</LinkContainer>

						{group.groupType !== 'project-default-group' ? unlinkGroupModal(group) : <EmptyAction></EmptyAction>}
					</ActionWrap>
				),
			};
		});

	// highlight found text (only certain fields)
	const fieldsToCheck = ['name'];
	const highlightedColumns =
		groupsColumns &&
		groupsColumns.map((col) => {
			return {
				...col,
				render: (renderElement: any, record: any, index: number): React.ReactNode | RenderedCell<any> => {
					// @ts-ignore
					const renderedContent = col.render ? col.render(renderElement, record) : renderElement;

					const shouldHighlight = fieldsToCheck.includes(col.dataIndex);
					if (shouldHighlight) {
						// RenderedCell or ReactNode
						if (typeof renderedContent === 'object' && 'children' in renderedContent) {
							return {
								...renderedContent,
								children: highlightTextInElement(renderedContent.children, filterString, index),
							};
						}

						return highlightTextInElement(renderedContent, filterString, index);
					}
					return renderedContent;
				},
			};
		});

	return (
		<>
			<BaseTable
				dataSource={groupsWithActions}
				columns={highlightedColumns}
				rowKey={(record) => record.id ?? record.name}
				components={{
					body: {
						row: (props: any) => <tr {...props} data-cy="user-group-row" />,
					},
				}}
			/>

			<PaginationWithSelector>
				<section className="selector">{resultDropdown}</section>
				<Pagination
					total={totalFilteredCount}
					pageSize={pageSize === -1 ? Infinity : pageSize}
					current={currentPage}
					onChange={handlePageChange}
				/>
			</PaginationWithSelector>

			<TotalDescription>
				Showing {getResultRange()} of {totalFilteredCount} groups
			</TotalDescription>
		</>
	);
};

export default OrgUserGroupsTable;
