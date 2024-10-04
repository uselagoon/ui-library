import { TableProps } from 'antd';
import Pagination from '../Pagination';
import { StyledTable } from './styles';
import React, { forwardRef, ReactNode, useEffect, useState } from 'react';
import Highlighter from "react-highlight-words";
import type { RenderedCell } from 'rc-table/lib/interface';

type ProjectsTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> & {
	filterString: string;
	resultsPerPage?: number;
};

const highlightTextInElement = (element: ReactNode, searchString: string, key: string | number): any => {
	// recursively apply highlighting to all text nodes
	if (typeof element === 'string') {
		return (
			<Highlighter highlightClassName="highlighted" searchWords={[searchString]} autoEscape textToHighlight={element} />
		);
	}

	if (React.isValidElement(element)) {
		return React.cloneElement(
			element,
			{ ...element.props, key: `item-${key}` },
			React.Children.map(element.props.children, (child, index) =>
				highlightTextInElement(child, searchString, `${index}-${key}`),
			),
		);
	}

	return element;
};

const InternalTable: React.ForwardRefRenderFunction<HTMLDivElement, ProjectsTableProps> = (
	{ filterString, resultsPerPage, columns, dataSource, children, ...props }: ProjectsTableProps,
	_,
) => {
	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	// paginate based on the current filtered data
	const filteredData = dataSource
		? dataSource.filter((item) => {
				return Object.values(item).some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// paginated data based on filtered results
	const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
	const totalFilteredCount = filteredData.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	// highlight found text
	const wrappedColumns =
		columns &&
		columns.map((col) => ({
			...col,
			render: (renderElement: any, record: any, index: number): React.ReactNode | RenderedCell<any> => {
				const renderedContent = col.render ? col.render(renderElement, record, index) : renderElement;

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

	return (
		<>
			<StyledTable dataSource={paginatedData} columns={wrappedColumns} ref={null} pagination={false} {...props} />
			<Pagination total={totalFilteredCount} pageSize={pageSize} current={currentPage} onChange={handlePageChange} />
		</>
	);
};

const ProjectsTable = forwardRef<HTMLDivElement, ProjectsTableProps>(InternalTable);

ProjectsTable.displayName = 'ProjectsTable';

export default ProjectsTable;

export type { ProjectsTableProps as ProjectsTableProps };
