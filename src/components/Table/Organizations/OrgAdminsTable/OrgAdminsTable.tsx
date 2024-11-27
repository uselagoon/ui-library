import { ReactNode, useEffect, useMemo, useState } from 'react';
import type { RenderedCell } from 'rc-table/lib/interface';
import { OwnerBadge, OwnerField, SystemDefault, TotalDescription } from '../styles';
import { ActionWrap } from '../../styles';
import { highlightTextInElement } from '../../../../_util/helpers';
import { PaginationWithSelector } from '../../FactsTable/FactsTable';
import BaseTable from '../../Base';
import Pagination from '../../../Pagination';
import OrgAdminsTableSkeleton from './OrgAdminsTableSkeleton';

type Owner = {
	id: string;
	firstName: string | null;
	lastName: string | null;
	email: string;
	admin: true | null;
	owner: true | null;
	groupRoles: { id: string }[] | null;
};

export type OwnersProps = {
	owners: Owner[];
	addNewOwnerModal: ReactNode;
	deleteOwnerModal: (owner: Owner) => ReactNode;
	editOwnerModal: (owner: Owner) => ReactNode;
	skeleton?: false;
};

export type OwnersTableSkeleton = {
	skeleton: true;
};

export type OwnersTableProps = {
	resultsPerPage?: number;
	filterString?: string;
	filterOwnerType?: 'admin' | 'owner' | 'viewer';
	/*
	 * For stylistic reasons, `results per page` select component next to pagination
	 */
	resultDropdown?: ReactNode;
} & (OwnersTableSkeleton | OwnersProps);

const OrgAdminsTable = (props: OwnersTableProps) => {
	const { resultsPerPage, resultDropdown = null, filterString = '' } = props;

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	if ('skeleton' in props && props.skeleton) {
		return <OrgAdminsTableSkeleton />;
	}

	const { owners, addNewOwnerModal, deleteOwnerModal, editOwnerModal, filterOwnerType } = props;

	const filteredOwners = owners
		? owners.filter((owner) => {
				const fieldsToCheck = [owner.firstName, owner.lastName, owner.email];
				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	const sortedOwners = useMemo(() => {
		return filteredOwners
			? filteredOwners.filter((owner) => {
					let ownerType: 'admin' | 'owner' | 'viewer';

					if (owner.admin) {
						ownerType = 'admin';
					} else if (owner.owner) {
						ownerType = 'owner';
					} else {
						ownerType = 'viewer';
					}

					const ownerMatches = filterOwnerType ? ownerType === filterOwnerType : true;

					return ownerMatches;
				})
			: [];
	}, [filteredOwners, filterOwnerType]);

	// paginated data based on filtered results
	const paginatedOwners =
		pageSize > 0 ? sortedOwners.slice((currentPage - 1) * pageSize, currentPage * pageSize) : sortedOwners;

	const totalFilteredCount = sortedOwners.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const ownersColumns = [
		{
			title: 'First Name',
			dataIndex: 'firstName',
			key: 'firstName',
			width: '19.56%',
			sorter: (a: Owner, b: Owner) => {
				return a.firstName && b.firstName ? a.firstName.localeCompare(b.firstName) : 0;
			},

			render: (firstName: string, owner: Owner) => {
				return <>{firstName}</>;
			},
		},
		{
			title: 'Last Name',
			dataIndex: 'lastName',
			key: 'lastName',
			width: '19.56%',
			sorter: (a: Owner, b: Owner) => {
				return a.lastName && b.lastName ? a.lastName.localeCompare(b.lastName) : 0;
			},

			render: (lastName: string, owner: Owner) => {
				return (
					<>
						{owner.email.startsWith('default-user') ? <SystemDefault $noSpace>DEFAULT USER</SystemDefault> : lastName}
					</>
				);
			},
		},
		{
			title: 'Email / Role',
			dataIndex: 'email',
			key: 'email',
			width: '25.65%',
			sorter: (a: Owner, b: Owner) => a.email.localeCompare(b.email),
			render: (email: string, owner: Owner) => {
				let ownerType: 'admin' | 'owner' | 'viewer';

				if (owner.admin) {
					ownerType = 'admin';
				} else if (owner.owner) {
					ownerType = 'owner';
				} else {
					ownerType = 'viewer';
				}

				return (
					<OwnerField>
						{email} <OwnerBadge $type={ownerType}>{ownerType}</OwnerBadge>
					</OwnerField>
				);
			},
		},
		{
			title: 'Groups',
			dataIndex: 'groupCount',
			key: 'groupCount',
			width: '22.17%',
			sorter: (a: Owner, b: Owner) => {
				if (a.groupRoles && b.groupRoles) {
					return a.groupRoles.length - b.groupRoles.length;
				}
				return 0;
			},
			render: (groupCount: number) => {
				return <>Groups: {groupCount}</>;
			},
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const ownersWithActions =
		paginatedOwners &&
		paginatedOwners.map((owner) => {
			return {
				...owner,
				groupCount: owner.groupRoles ? owner.groupRoles.length : 0,
				actions: (
					<ActionWrap>
						{editOwnerModal(owner)}
						{deleteOwnerModal(owner)}
					</ActionWrap>
				),
			};
		});

	// highlight found text (only certain fields)
	const fieldsToCheck = ['firstName', 'lastName', 'email'];
	const highlightedColumns =
		ownersColumns &&
		ownersColumns.map((col) => {
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

	const summary = () => <tr className="summary">{addNewOwnerModal}</tr>;

	return (
		<>
			<BaseTable
				dataSource={ownersWithActions}
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
				Showing {totalFilteredCount} of {owners.length} users
			</TotalDescription>
		</>
	);
};

export default OrgAdminsTable;
