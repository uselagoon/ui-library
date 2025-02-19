import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import FactsTableSkeleton from './FactsTableSkeleton';
import Pagination from '../../Pagination';
import { ReactNode, useEffect, useState } from 'react';
import { highlightTextInElement } from '../../../_util/helpers';
import type { RenderedCell } from 'rc-table/lib/interface';
import styled from 'styled-components';

dayjs.extend(duration);
dayjs.extend(utc);

type Fact = {
	description: string;
	id: number;
	name: string;
	source: string;
	value: string;
};

export type FactsProps = {
	facts: Fact[];
	skeleton?: false;
};

export type FactsTableSkeleton = {
	skeleton: true;
};

export type FactsTableProps = {
	resultsPerPage?: number;
	filterString?: string;
	sortBy?:
		| 'name_asc'
		| 'name_desc'
		| 'description_asc'
		| 'description_desc'
		| 'source_asc'
		| 'source_desc'
		| 'value_asc'
		| 'value_desc'
		| null;
	/*
	 * For stylistic reasons, `results per page` select component next to pagination
	 */
	resultDropdown?: ReactNode;
} & (FactsTableSkeleton | FactsProps);

const ProblemsTable = (props: FactsTableProps) => {
	const { resultsPerPage, resultDropdown = null, sortBy = null, filterString = '' } = props;

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
		return <FactsTableSkeleton />;
	}

	const { facts } = props;

	const filteredFacts = facts
		? facts.filter((item) => {
				const fieldsToCheck = [item.name, item.description, item.source, item.value];

				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// sorting based on sortBy
	const sortColumn = sortBy ? sortBy.split('_')[0] : null;
	const sortOrder = sortBy ? sortBy.split('_')[1] : null;

	const sortedFacts = [...filteredFacts].sort((a, b) => {
		if (sortColumn) {
			const aValue = a[sortColumn as keyof Fact];
			const bValue = b[sortColumn as keyof Fact];

			// Determine the sort direction (1 for asc, -1 for desc)
			const direction = sortOrder === 'asc' ? 1 : -1;

			if (aValue > bValue) return direction;
			if (aValue < bValue) return -direction;
		}
		return 0;
	});

	// paginated data based on filtered results
	const paginatedFacts =
		pageSize > 0 ? sortedFacts.slice((currentPage - 1) * pageSize, currentPage * pageSize) : sortedFacts;

	const totalFilteredCount = sortedFacts.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const getSortedClass = (columnKey: string) => {
		return sortColumn === columnKey ? 'custom-sorted' : '';
	};
	const factsColumns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: '17.18%',
			render: (name: string, _: Fact) => {
				return <>{name}</>;
			},
			className: getSortedClass('name'),
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			width: '24.7%',
			className: getSortedClass('description'),
		},
		{
			title: 'Source',
			dataIndex: 'source',
			key: 'source',
			width: '20.94%',
			className: getSortedClass('source'),
		},
		{
			title: 'Value',
			dataIndex: 'value',
			key: 'value',
			width: '20.94%',
			className: getSortedClass('value'),
		},
	];

	// highlight found text (only certain fields)
	const fieldsToCheck = ['name', 'description', 'source', 'value'];
	const highlightedColumns =
		factsColumns &&
		factsColumns.map((col) => {
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
			<BaseTable
				dataSource={paginatedFacts}
				columns={highlightedColumns}
				rowKey={(record) => record.id}
				components={{
					body: {
						row: (props: any) => <tr {...props} data-cy="fact-row" />,
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
		</>
	);
};

export const PaginationWithSelector = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	> section.selector {
		max-width: 220px;
		> & {
			max-width: 220px !important;
		}
	}
`;
export default ProblemsTable;
