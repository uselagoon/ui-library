import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLinkComponent } from '../../../providers/NextLinkProvider';

import { ActionWrap } from '../styles';
import { LinkContainer } from '../DeploymentsTable/styles';
import { EyeOutlined, LoadingOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import Pagination from '../../Pagination';

import type { RenderedCell } from 'rc-table/lib/interface';
import { highlightTextInElement } from '../../../_util/helpers';
import { debounce } from '../_utils';
import OrganizationsTableSkeleton from './OrganizationsTableSkeleton';

export type Organization = {
	id: number;
	name: string;
	description: string | null;
	friendlyName: string | null;
	quotaProject: number;
	quotaGroup: number;
	groups: { id: string }[];
	projects: { id: number }[];
	deployTargets: { id: number; name: string }[];
};

export type OrgsProps = {
	organizations: Organization[];
	basePath: string;
	resultsPerPage?: number;
	filterString: string;
	skeleton?: false;
};

export type OrganizationsTableSkeletonProps = {
	skeleton: true;
};

export type OrganizationsTableProps = OrganizationsTableSkeletonProps | OrgsProps;

const OrganizationsTable = (props: OrganizationsTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <OrganizationsTableSkeleton />;
	}

	const { resultsPerPage, filterString, organizations, basePath } = props;

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	// used for debounced filtering
	const [loading, setLoading] = useState(false);
	const [filteredOrgs, setFilteredOrgs] = useState<Organization[]>(organizations || []);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	const Link = useLinkComponent();

	const timerLengthPercentage = useMemo(
		() => Math.min(1000, Math.max(40, Math.floor(organizations.length * 0.0725))),
		[organizations.length],
	);

	const debouncedFilter = useCallback(
		debounce((filterString: string) => {
			const filteredData =
				organizations?.filter((org) => {
					const fieldsToCheck = [org.name];

					return fieldsToCheck.some((fieldValue) =>
						String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
					);
				}) || [];

			setFilteredOrgs(filteredData);
			setLoading(false);
		}, timerLengthPercentage),
		[],
	);
	useEffect(() => {
		setLoading(true);
		debouncedFilter(filterString);
	}, [filterString, debouncedFilter]);

	// paginated data based on filtered results
	const paginatedData =
		pageSize > 0 ? filteredOrgs.slice((currentPage - 1) * pageSize, currentPage * pageSize) : filteredOrgs;

	const totalFilteredCount = filteredOrgs.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const orgsColumns = [
		{
			title: 'Organization Name',
			dataIndex: 'orgname',
			key: 'orgname',
			width: '25.46%',
			render: (_: string, org: Organization) => (
				<LinkContainer>
					<Link href={`${basePath}/${org.name}`}>{org.friendlyName ?? org.name}</Link>
				</LinkContainer>
			),
		},
		{
			title: 'No. of Groups',
			dataIndex: 'group_count',
			key: 'group_count',
			render: (groupCount: number, org: Organization) => (
				<div>
					{groupCount} of {org.quotaGroup} groups
				</div>
			),
			width: '19.1%',
		},
		{
			title: 'No. of Projects',
			dataIndex: 'project_count',
			key: 'project_count',
			render: (projectCount: number, org: Organization) => (
				<div>
					{projectCount} of {org.quotaGroup} projects
				</div>
			),
			width: '24.2%',
		},
		{
			title: 'Target',
			dataIndex: 'target',
			key: 'target',
			width: '19.1%',
		},

		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: (item: string) => <div style={{ textAlign: 'center', fontSize: '1.25rem' }}>{item}</div>,
		},
	];

	// highlight found text (only certain fields)
	const fieldsToCheck = ['orgname'];

	const wrappedColumns =
		orgsColumns &&
		orgsColumns.map((col) => {
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

	const remappedOrgs =
		paginatedData &&
		paginatedData.map((org) => {
			return {
				...org,
				group_count: org.groups?.length,
				project_count: org.projects?.length,
				target: (
					<>
						{org.deployTargets.map((deploytarget) => (
							<div key={deploytarget.id} className="target">
								{deploytarget.name}
							</div>
						))}
					</>
				),
				actions: (
					<ActionWrap>
						<LinkContainer>
							<Link href={`${basePath}/${org.name}`}>
								<EyeOutlined />
							</Link>
						</LinkContainer>
					</ActionWrap>
				),
			};
		});

	return (
		<>
			<BaseTable
				withBg
				dataSource={remappedOrgs}
				columns={wrappedColumns}
				rowKey={(record) => record.id}
				loading={{
					spinning: loading,
					indicator: <LoadingOutlined />,
				}}
			/>
			<Pagination
				total={totalFilteredCount}
				pageSize={pageSize === -1 ? Infinity : pageSize}
				current={currentPage}
				onChange={handlePageChange}
			/>
		</>
	);
};

export default OrganizationsTable;
