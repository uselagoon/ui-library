import React, { ReactNode, useEffect, useState } from 'react';
import { TableProps, Tooltip } from 'antd';
import { ActionWrap } from '../styles';
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

dayjs.extend(duration);
dayjs.extend(utc);

export type Environment = {
	id?: number;
	title: string;
	deployType: string;
	envType: LagoonCardLabelProps['type'];
	region: null | string;
	navigateTo: () => void;
	quickActions?: DefaultCardProps['quickActions'];
	activeRoutes?: JSX.Element[];
	last_deployment?: string;
};

export type EnvironmentsProps = {
	environments: Environment[];
	newEnvironmentModal: ReactNode;
	resultsPerPage?: number;
	filterString?: string;
	skeleton?: false;
};

export type EnvironmentsTableSkeleton = {
	skeleton: true;
};

type RowType = Environment & { lastRow?: boolean };

export type EnvironmentsTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> &
	(EnvironmentsTableSkeleton | EnvironmentsProps);

const EnvironmentsTable = (props: EnvironmentsTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <EnvironmentsTableSkeleton />;
	}

	const { resultsPerPage, filterString = '', environments, newEnvironmentModal } = props;

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
				return Object.values(item).some((fieldValue) =>
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
			render: (_: string, record: RowType) => (
				<div style={{ display: 'flex', placeContent: 'center' }}>
					<LagoonCardLabel type={record.envType} variant="horizontal" />
				</div>
			),
			width: '10.9%',
		},
		{
			title: 'Env Name',
			dataIndex: 'title',
			key: 'title',
			render: (name: string, record: RowType) => (
				<LinkContainer>
					<span onClick={() => record.navigateTo()}>{name}</span>
				</LinkContainer>
			),
			width: '17.31%',
		},
		{
			title: 'Region',
			dataIndex: 'region',
			key: 'region',
			render: (region: string, record: RowType) => {
				if (record.lastRow) return <></>;

				return <div>{region ? region : '-'}</div>;
			},
			width: '10.64%',
		},
		{
			title: 'Type',
			dataIndex: 'deployType',
			key: 'deployType',
			width: '10.64%',
			render: (deployType: string, record: RowType) => {
				if (record.lastRow) return <></>;
				return <div>{deployType ? formatEnvType(deployType) : '-'}</div>;
			},
		},
		{
			title: 'Last Deployment',
			dataIndex: 'last_deployment',
			key: 'last_deployment',
			width: '10.64%',
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

	// highlight found text
	const wrappedColumns =
		envColumns &&
		envColumns.map((col) => ({
			...col,
			render: (renderElement: any, record: any, index: number): React.ReactNode | RenderedCell<any> => {
				const renderedContent = col.render ? col.render(renderElement, record) : renderElement;

				// RenderedCell or ReactNode
				if (typeof renderedContent === 'object' && 'children' in renderedContent) {
					return {
						...renderedContent,
						children: highlightTextInElement(renderedContent.children, filterString, index),
					};
				}

				return highlightTextInElement(renderedContent, filterString, index);
			},
		}));

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
				last_deployment: environment.last_deployment ? (
					<Tooltip placement="top" title={environment.last_deployment}>
						{dayjs.utc(environment.last_deployment).local().fromNow()}
					</Tooltip>
				) : (
					'-'
				),

				actions: (
					<ActionWrap>
						<LinkContainer>
							<EyeOutlined onClick={() => environment.navigateTo()} />
						</LinkContainer>
						{actions}
					</ActionWrap>
				),
			};
		});

	const lastRow = {
		envType: newEnvironmentModal,
		lastRow: true,
	};

	return (
		<>
			<BaseTable
				dataSource={[...remappedEnvs, lastRow]}
				columns={wrappedColumns}
				rowKey={(record) => record.name}
				lastRowBordered={true}
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

export default EnvironmentsTable;
