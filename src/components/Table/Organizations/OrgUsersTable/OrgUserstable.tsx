import { ReactNode, useEffect, useMemo, useState } from 'react';
import type { RenderedCell } from 'rc-table/lib/interface';
import { SystemDefault, TotalDescription } from '../styles';
import { ActionWrap, EmptyAction } from '../../styles';
import { LinkContainer } from '../../DeploymentsTable/styles';
import { useLinkComponent } from '../../../../providers/NextLinkProvider';
import { EyeOutlined } from '@ant-design/icons';
import { highlightTextInElement } from '../../../../_util/helpers';
import { PaginationWithSelector } from '../../FactsTable/FactsTable';
import BaseTable from '../../Base';
import Pagination from '../../../Pagination';
import OrgUsersSkeleton from './OrgUsersSkeleton';

type User = {
	id: string;
	firstName: string | null;
	lastName: string | null;
	email: string;
	groupRoles: {
		id: string;
		role: string;
	}[];
};

export type UsersTableProps = {
	users: User[];
	newUserModal: ReactNode;
	deleteUserModal: (group: User) => ReactNode;
	basePath: string;
	skeleton?: false;
};

export type UsersTableSkeleton = {
	skeleton: true;
};

export type UsersProps = {
	resultsPerPage?: number;
	filterString?: string;
	showDefaults?: boolean;
	sortBy?:
		| 'firstName_asc'
		| 'firstName_desc'
		| 'lastName_asc'
		| 'lastName_desc'
		| 'email_asc'
		| 'email_desc'
		| 'groupCount_asc'
		| 'groupCount_desc'
		| null;
	/*
	 * For stylistic reasons, `results per page` select component next to pagination
	 */
	resultDropdown?: ReactNode;
} & (UsersTableSkeleton | UsersTableProps);

const OrgUsersTable = (props: UsersProps) => {
	const { resultsPerPage, showDefaults = false, resultDropdown = null, sortBy = null, filterString = '' } = props;

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	if ('skeleton' in props && props.skeleton) {
		return <OrgUsersSkeleton />;
	}

	const { users, basePath, deleteUserModal, newUserModal } = props;

	const Link = useLinkComponent();

	const filteredUsers = users
		? users.filter((user) => {
				const fieldsToCheck = [user.firstName, user.lastName, user.email];
				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// sorting based on sortBy
	const sortColumn = sortBy ? sortBy.split('_')[0] : null;
	const sortOrder = sortBy ? sortBy.split('_')[1] : null;

	const sortedUsers = [...filteredUsers].sort((a, b) => {
		if (sortColumn) {
			let aValue = a[sortColumn as keyof User];
			let bValue = b[sortColumn as keyof User];

			if (sortColumn === 'groupCount') {
				//@ts-ignore
				aValue = a.groupRoles.length;
				//@ts-ignore
				bValue = b.groupRoles.length;
			}

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

	const defaultFilteredUsers = useMemo(() => {
		if (!sortedUsers) return [];

		if (!showDefaults) {
			return sortedUsers.filter((user) => !user.email.startsWith('default-user'));
		}

		return sortedUsers;
	}, [sortedUsers, showDefaults]);

	// paginated data based on filtered results
	const paginatedUsers =
		pageSize > 0
			? defaultFilteredUsers.slice((currentPage - 1) * pageSize, currentPage * pageSize)
			: defaultFilteredUsers;

	const totalFilteredCount = defaultFilteredUsers.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const getSortedClass = (columnKey: string) => {
		return sortColumn === columnKey ? 'custom-sorted' : '';
	};

	const usersColumns = [
		{
			title: 'First Name',
			dataIndex: 'firstName',
			key: 'firstName',
			width: '23.65%',
			render: (name: string) => {
				return <>{name}</>;
			},
			className: getSortedClass('firstName'),
		},

		{
			title: 'Last Name',
			dataIndex: 'lastName',
			key: 'lastName',
			width: '19.56%',
			render: (lastName: string, user: User) => {
				return user.email.startsWith('default-user') ? (
					<p style={{ textAlign: 'center' }}>
						<SystemDefault $noSpace>DEFAULT USER</SystemDefault>
					</p>
				) : (
					<>{lastName}</>
				);
			},
			className: getSortedClass('lastName'),
		},

		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			width: '24.78%',
			render: (email: string) => {
				return (
					<LinkContainer>
						<Link href={`${basePath}/${email}`}>{email}</Link>
					</LinkContainer>
				);
			},
			className: getSortedClass('email'),
		},

		{
			title: 'Groups',
			dataIndex: 'groupCount',
			key: 'groupCount',
			width: '19.56%',
			render: (groupCount: number) => {
				return <>Groups: {groupCount}</>;
			},
			className: getSortedClass('groupCount'),
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const usersWithActions =
		paginatedUsers &&
		paginatedUsers.map((user) => {
			return {
				...user,
				groupCount: user.groupRoles.length,
				actions: (
					<ActionWrap>
						<LinkContainer>
							<Link href={`${basePath}/${user.email}`}>
								<EyeOutlined />
							</Link>
						</LinkContainer>

						{!user.email.startsWith('default-user') ? deleteUserModal(user) : <EmptyAction></EmptyAction>}
					</ActionWrap>
				),
			};
		});

	// highlight found text (only certain fields)
	const fieldsToCheck = ['firstname', 'lastName', 'email'];

	const highlightedColumns =
		usersColumns &&
		usersColumns.map((col) => {
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

	const summary = () => <tr className="summary">{newUserModal}</tr>;

	return (
		<>
			<BaseTable
				dataSource={usersWithActions}
				columns={highlightedColumns}
				rowKey={(record) => record.id}
				summary={summary}
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
				Showing {totalFilteredCount} of {users.length} users
			</TotalDescription>
		</>
	);
};

export default OrgUsersTable;
