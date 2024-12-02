import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { Tooltip } from 'antd';
import Text from '../../Text';
import { ActionWrap } from '../styles';
import { StyledDownloadButton } from './styles';
import InsightsTableSkeleton from './InsightsTableSkeleton';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { highlightTextInElement } from '../../../_util/helpers';

import type { RenderedCell } from 'rc-table/lib/interface';
import { PaginationWithSelector } from '../FactsTable/FactsTable';
import Pagination from '../../Pagination';

dayjs.extend(duration);
dayjs.extend(utc);

type Insight = {
	created: string;
	downloadUrl: string;
	file: string;
	fileId: number | null;
	id: number;
	service: string;
	size: string;
	type: string;
};

export type InsightsProps = {
	insights: Insight[];
	skeleton?: false;
};

export type InsightsTableSkeleton = {
	skeleton: true;
};

export type InsightsTableProps = {
	resultsPerPage?: number;
	filterString?: string;
	filterDateRange?: string[] | null;
	sortBy?:
		| 'name_asc'
		| 'name_desc'
		| 'service_asc'
		| 'service_desc'
		| 'type_asc'
		| 'type_desc'
		| 'created_asc'
		| 'created_desc'
		| 'size_asc'
		| 'size_desc'
		| null;
	/*
	 * For stylistic reasons, `results per page` select component next to pagination
	 */
	resultDropdown?: ReactNode;
} & (InsightsTableSkeleton | InsightsProps);

const ProblemsTable = (props: InsightsTableProps) => {
	const { resultsPerPage, filterDateRange, resultDropdown = null, sortBy = null, filterString = '' } = props;

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	if ('skeleton' in props && props.skeleton) {
		return <InsightsTableSkeleton />;
	}

	const { insights } = props;

	const filteredInsights = insights
		? insights.filter((item) => {
				const fieldsToCheck = [item.file, item.service, item.type, item.created, item.size];

				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// sorting based on sortBy
	const sortColumn = sortBy ? sortBy.split('_')[0] : null;
	const sortOrder = sortBy ? sortBy.split('_')[1] : null;

	const sortedInsights = [...filteredInsights].sort((a, b) => {
		if (sortColumn) {
			const aValue = a[sortColumn as keyof Insight];
			const bValue = b[sortColumn as keyof Insight];

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

	// paginate based on the current filtered data ( date range )
	const dateFilteredInsights = useMemo(() => {
		return sortedInsights
			? sortedInsights.filter((item) => {
					const dateMatches =
						filterDateRange && filterDateRange.every(Boolean)
							? dayjs(item.created).isBetween(
									dayjs(filterDateRange[0]).startOf('day'),
									dayjs(filterDateRange[1]).endOf('day'),
									null,
									'[]', // inclusive of both start and end dates
								)
							: true;

					return dateMatches;
				})
			: [];
	}, [sortedInsights, filterDateRange]);

	// paginated data based on filtered results
	const paginatedInsights =
		pageSize > 0
			? dateFilteredInsights.slice((currentPage - 1) * pageSize, currentPage * pageSize)
			: dateFilteredInsights;

	const totalFilteredCount = dateFilteredInsights.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const getSortedClass = (columnKey: string) => {
		return sortColumn === columnKey ? 'custom-sorted' : '';
	};

	const insightsColumns = [
		{
			title: 'Name',
			dataIndex: 'file',
			key: 'file',
			width: '17.18%',
			render: (file: string, _: Insight) => {
				return <>{file}</>;
			},
			className: getSortedClass('name'),
		},
		{
			title: 'Service',
			dataIndex: 'service',
			key: 'service',
			width: '24.7%',
			className: getSortedClass('service'),
		},
		{
			title: 'Type',
			dataIndex: 'type',
			key: 'type',
			width: '20.94%',
			className: getSortedClass('type'),
		},
		{
			title: 'Created',
			dataIndex: 'created',
			key: 'created',
			width: '20.94%',
			className: getSortedClass('created'),
		},
		{
			title: 'Size',
			dataIndex: 'size',
			key: 'size',
			width: '20.94%',
			className: getSortedClass('size'),
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const remappedInsights =
		paginatedInsights &&
		paginatedInsights.map((insight) => {
			return {
				...insight,
				created: (
					<Tooltip placement="top" title={insight.created}>
						{dayjs.utc(insight.created).local().fromNow()}
					</Tooltip>
				),

				actions: (
					<ActionWrap>
						<Text href={insight.downloadUrl} target="_blank">
							<Tooltip placement="bottom" title={`Download (${insight.size})`}>
								<StyledDownloadButton />
							</Tooltip>
						</Text>
					</ActionWrap>
				),
			};
		});

	// highlight found text (only certain fields)
	const fieldsToCheck = ['file', 'service', 'type', 'size'];
	const highlightedColumns =
		insightsColumns &&
		insightsColumns.map((col) => {
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

	return (
		<>
			<BaseTable dataSource={remappedInsights} columns={highlightedColumns} rowKey={(record) => record.id} />
			<PaginationWithSelector>
				<section className="selector">{resultDropdown}</section>
				<Pagination
					total={totalFilteredCount}
					pageSize={pageSize === -1 ? Infinity : pageSize}
					current={currentPage}
					onChange={handlePageChange}
				/>
			</PaginationWithSelector>
		</>
	);
};

export default ProblemsTable;
