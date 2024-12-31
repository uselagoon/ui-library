import React, { ReactNode, useEffect, useState } from 'react';
import { TableProps, Tooltip } from 'antd';
import { ActionWrap, TableSummary } from '../styles';
import { LinkContainer } from '../DeploymentsTable/styles';
import { EyeOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import Pagination from '../../Pagination';

import type { RenderedCell } from 'rc-table/lib/interface';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { highlightTextInElement } from '../../../_util/helpers';
import LagoonCardLabel, { LagoonCardLabelProps } from '../../CardLabel';
import { DefaultCardProps } from '../../Card/Card';
import TreeList from '../../TreeList';
import { StyledMoreActionsIcon } from '../../Card/styles';
import { formatEnvType } from '../_utils';
import EnvironmentsTableSkeleton from './EnvironmentsTableSkeleton';
import { useLinkComponent } from '../../../providers/NextLinkProvider';
import { TotalDescription } from '../Organizations/styles';

dayjs.extend(duration);
dayjs.extend(utc);

export type Environment = {
	id?: number;
	name: string;
	title: string;
	deployType: string;
	envType: LagoonCardLabelProps['type'];
	region: null | string;
	quickActions?: DefaultCardProps['quickActions'];
	activeRoutes?: ReactNode;
	last_deployment?: string;
};

export type EnvironmentsProps = {
	environments: Environment[];
	newEnvironmentModal: ReactNode;
	basePath: string;
	resultsPerPage?: number;
	filterString?: string;
	skeleton?: false;
};

export type EnvironmentsTableSkeleton = {
	skeleton: true;
};

export type EnvironmentsTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> &
	(EnvironmentsTableSkeleton | EnvironmentsProps);

const EnvironmentsTable = (props: EnvironmentsTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <EnvironmentsTableSkeleton />;
	}

	const { resultsPerPage, basePath, filterString = '', environments, newEnvironmentModal } = props;

	const Link = useLinkComponent();

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	// paginate based on the current filtered data
	const filteredData = environments
		? environments.filter((item) => {
				const fieldsToCheck = [item.title, item.region, item.deployType, item.envType];

				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// paginated data based on filtered results

	const paginatedData =
		pageSize > 0 ? filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize) : filteredData;

	const totalFilteredCount = filteredData.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const envColumns = [
		{
			title: 'Usage',
			dataIndex: 'envType',
			key: 'envType',
			render: (_: string, record: Environment) => (
				<div style={{ display: 'flex', placeContent: 'center' }}>
					<LagoonCardLabel type={record.envType} variant="horizontal" />
				</div>
			),
			width: '10.9%',
		},
		{
			title: 'Env Name',
			dataIndex: 'title',
			sorter: (a: Environment, b: Environment) => a.name.localeCompare(b.name),
			key: 'title',
			render: (title: string, record: Environment) => (
				<LinkContainer>
					<Link href={`${basePath}/${record.name}`}>{title}</Link>
				</LinkContainer>
			),
			width: '17.31%',
		},
		{
			title: 'Region',
			dataIndex: 'region',
			key: 'region',
			render: (region: string) => {
				return <div>{region ? region : '-'}</div>;
			},
			width: '10.64%',
		},
		{
			title: 'Type',
			dataIndex: 'deployType',
			key: 'deployType',
			width: '10.64%',
			render: (deployType: string) => {
				return <div>{deployType ? formatEnvType(deployType) : '-'}</div>;
			},
		},
		{
			title: 'Last Deployment',
			dataIndex: 'last_deployment',
			key: 'last_deployment',
			width: '10.64%',

			sorter: (a: Environment, b: Environment) => {
				const dateA = a.last_deployment ? new Date(a.last_deployment).getTime() : -Infinity;
				const dateB = b.last_deployment ? new Date(b.last_deployment).getTime() : -Infinity;

				return dateA - dateB;
			},
			render: (lastDeploy: string) =>
				lastDeploy ? (
					<Tooltip placement="top" title={lastDeploy}>
						{dayjs.utc(lastDeploy).local().fromNow()}
					</Tooltip>
				) : (
					'-'
				),
		},
		{
			title: 'Routes',
			dataIndex: 'activeRoutes',
			key: 'activeRoutes',
			width: '29.69%',
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: (item: string) => <div style={{ textAlign: 'center', fontSize: '1.25rem' }}>{item}</div>,
		},
	];

	// highlight found text (only certain fields)
	const fieldsToCheck = ['envType', 'title', 'region', 'deployType'];
	const wrappedColumns =
		envColumns &&
		envColumns.map((col) => {
			return {
				...col,
				render: (renderElement: any, record: any, index: number): React.ReactNode | RenderedCell<any> => {
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

	const remappedEnvs =
		paginatedData &&
		paginatedData.map((environment) => {
			const actions = environment.quickActions && (
				<TreeList data={environment.quickActions}>
					<StyledMoreActionsIcon key="ellipsis" />
				</TreeList>
			);

			return {
				...environment,
				last_deployment: environment.last_deployment,

				actions: (
					<ActionWrap>
						<LinkContainer>
							<Link href={`${basePath}/${environment.name}`}>
								<Tooltip placement="bottom" title="View environment">
									<EyeOutlined />
								</Tooltip>
							</Link>
						</LinkContainer>
						{actions}
					</ActionWrap>
				),
			};
		});

	return (
		<>
			<BaseTable dataSource={remappedEnvs} columns={wrappedColumns} rowKey={(record) => record.title} hasSummary />
			<TableSummary>{newEnvironmentModal}</TableSummary>
			<Pagination
				total={totalFilteredCount}
				pageSize={pageSize === -1 ? Infinity : pageSize}
				current={currentPage}
				onChange={handlePageChange}
			/>

			<TotalDescription>
				Showing {totalFilteredCount} of {environments.length} Environments
			</TotalDescription>
		</>
	);
};

export default EnvironmentsTable;
