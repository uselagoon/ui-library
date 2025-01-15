import { ReactNode, useEffect, useMemo, useState } from 'react';
import type { RenderedCell } from 'rc-table/lib/interface';
import { SystemDefault, TotalDescription } from '../styles';
import { ActionWrap, EmptyAction, TableSummary } from '../../styles';
import { LinkContainer } from '../../DeploymentsTable/styles';
import { useLinkComponent } from '../../../../providers/NextLinkProvider';
import { EyeOutlined } from '@ant-design/icons';
import { highlightTextInElement } from '../../../../_util/helpers';
import { PaginationWithSelector } from '../../FactsTable/FactsTable';
import BaseTable from '../../Base';
import Pagination from '../../../Pagination';
import OrgGroupsSkeleton from './OrgGroupsSkeleton';
import { Tooltip } from 'antd';

type Group = {
	id: string;
	memberCount: number;
	name: string;
	type: 'null' | 'project-default-group';
};

export type GroupsProps = {
	groups: Group[];
	newGroupModal: ReactNode;
	deleteUserModal?: (group: Group) => ReactNode;
	addUserModal?: (group: Group) => ReactNode;
	basePath: string;
	skeleton?: false;
};

export type GroupsTableSkeleton = {
	skeleton: true;
};

export type GroupsTableProps = {
	resultsPerPage?: number;
	filterString?: string;
	showDefaults?: boolean;
	sortBy?: 'name_asc' | 'name_desc' | 'memberCount_asc' | 'memberCount_desc' | null;
	/*
	 * For stylistic reasons, `results per page` select component next to pagination
	 */
	resultDropdown?: ReactNode;
} & (GroupsTableSkeleton | GroupsProps);

/*
 * Groups table used on organizations/orgName/groups or organizations/orgName/projects
 */
const OrgGroupsTable = (props: GroupsTableProps) => {
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
		return <OrgGroupsSkeleton />;
	}

	const { groups, basePath, addUserModal, deleteUserModal, newGroupModal } = props;

	const Link = useLinkComponent();

	const filteredGroups = groups
		? groups.filter((group) => {
				const fieldsToCheck = [group.name, group.memberCount];

				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// sorting based on sortBy
	const sortColumn = sortBy ? sortBy.split('_')[0] : null;
	const sortOrder = sortBy ? sortBy.split('_')[1] : null;

	const sortedGroups = [...filteredGroups].sort((a, b) => {
		if (sortColumn) {
			const aValue = a[sortColumn as keyof Group];
			const bValue = b[sortColumn as keyof Group];

			// determine the sort direction (1 for asc, -1 for desc)
			const direction = sortOrder === 'asc' ? 1 : -1;

			// possible null checks.
			if (aValue === null && bValue === null) return 0;
			if (aValue === null) return direction;
			if (bValue === null) return -direction;

			if (aValue > bValue) return direction;
			if (aValue < bValue) return -direction;
		}
		return 0;
	});

	const defaultFilteredGroups = useMemo(() => {
		if (!sortedGroups) return [];

		if (!showDefaults) {
			return sortedGroups.filter((group) => group.type !== 'project-default-group');
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
			sorter: (a: Group, b: Group) => a.name.localeCompare(b.name),
			render: (name: string, group: Group) => {
				return (
					<LinkContainer>
						<Link href={`${basePath}/${group.name}`}>
							{name} {group.type === 'project-default-group' ? <SystemDefault>SYSTEM GROUP</SystemDefault> : null}
						</Link>
					</LinkContainer>
				);
			},
			className: getSortedClass('name'),
		},
		{
			title: 'Members',
			dataIndex: 'memberCount',
			key: 'memberCount',
			width: '27.4%',
			sorter: (a: Group, b: Group) => {
				if (a.memberCount != undefined && b.memberCount != undefined) {
					return a.memberCount - b.memberCount;
				}
				return 0;
			},
			render: (members: number) => {
				return <>Active Members: {members}</>;
			},
			className: getSortedClass('memberCount'),
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
						{addUserModal && addUserModal(group)}

						<LinkContainer>
							<Link href={`${basePath}/${group.name}`}>
								<Tooltip placement="bottom" title="View group">
									<EyeOutlined />
								</Tooltip>
							</Link>
						</LinkContainer>

						{group.type !== 'project-default-group' ? (
							deleteUserModal ? (
								deleteUserModal(group)
							) : null
						) : (
							<EmptyAction></EmptyAction>
						)}
					</ActionWrap>
				),
			};
		});

	// highlight found text (only certain fields)
	const fieldsToCheck = ['name', 'memberCount'];
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
				rowKey={(record) => record.id}
				hasSummary
			/>
			<TableSummary>{newGroupModal}</TableSummary>
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

export default OrgGroupsTable;
