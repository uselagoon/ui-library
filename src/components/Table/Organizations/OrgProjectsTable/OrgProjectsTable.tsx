import { ReactNode, useEffect, useState } from 'react';
import type { RenderedCell } from 'rc-table/lib/interface';
import { TotalDescription } from '../styles';
import { ActionWrap } from '../../styles';
import { LinkContainer } from '../../DeploymentsTable/styles';
import { useLinkComponent } from '../../../../providers/NextLinkProvider';
import { EyeOutlined } from '@ant-design/icons';
import { highlightTextInElement } from '../../../../_util/helpers';
import { PaginationWithSelector } from '../../FactsTable/FactsTable';
import BaseTable from '../../Base';
import Pagination from '../../../Pagination';
import { Tooltip } from 'antd';
import { IconLagoonOnly } from '../../../Icons';
import OrgProjectsTableSkeleton from './OrgProjectsTableSkeleton';

type Project = {
	id: number;
	name: string;
	groupCount: number;
};

export type ProjectsProps = {
	projects: Project[];
	newProjectModal: ReactNode;
	deleteProjectModal: (group: Project) => ReactNode;
	basePath: string;
	skeleton?: false;
};

export type ProjectsTableSkeleton = {
	skeleton: true;
};

export type OrgProjectsProps = {
	resultsPerPage?: number;
	filterString?: string;
	sortBy?: 'name_asc' | 'name_desc' | 'groupCount_asc' | 'groupCount_desc' | null;
	/*
	 * For stylistic reasons, `results per page` select component next to pagination
	 */
	resultDropdown?: ReactNode;
} & (ProjectsTableSkeleton | ProjectsProps);

const OrgProjectsTable = (props: OrgProjectsProps) => {
	const { resultsPerPage, resultDropdown = null, sortBy = null, filterString = '' } = props;

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	if ('skeleton' in props && props.skeleton) {
		return <OrgProjectsTableSkeleton />;
	}

	const { projects, basePath, deleteProjectModal, newProjectModal } = props;

	const Link = useLinkComponent();

	const filteredProjects = projects
		? projects.filter((project) => {
				const fieldsToCheck = [project.name, project.groupCount];

				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// sorting based on sortBy
	const sortColumn = sortBy ? sortBy.split('_')[0] : null;
	const sortOrder = sortBy ? sortBy.split('_')[1] : null;

	const sortedProjects = [...filteredProjects].sort((a, b) => {
		if (sortColumn) {
			const aValue = a[sortColumn as keyof Project];
			const bValue = b[sortColumn as keyof Project];

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

	// paginated data based on filtered results
	const paginatedProjects =
		pageSize > 0 ? sortedProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize) : sortedProjects;

	const totalFilteredCount = sortedProjects.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const getSortedClass = (columnKey: string) => {
		return sortColumn === columnKey ? 'custom-sorted' : '';
	};

	const projectsColumns = [
		{
			title: 'Project Name',
			dataIndex: 'name',
			key: 'name',
			width: '60.17%',
			render: (name: string) => {
				return (
					<LinkContainer>
						<Link href={`${basePath}/${name}`}>{name}</Link>
					</LinkContainer>
				);
			},
			className: getSortedClass('name'),
		},
		{
			title: 'Groups',
			dataIndex: 'groupCount',
			key: 'groupCount',
			width: '27.4%',
			render: (members: number) => {
				return <>Groups: {members}</>;
			},
			className: getSortedClass('groupCount'),
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const projectsWithActions =
		paginatedProjects &&
		paginatedProjects.map((project) => {
			return {
				...project,
				actions: (
					<ActionWrap>
						<LinkContainer>
							<Link target="_blank" href={`/projects/${project.name}`}>
								<Tooltip title="View dashboard" placement="bottom">
									<IconLagoonOnly />
								</Tooltip>
							</Link>
						</LinkContainer>

						<LinkContainer>
							<Link href={`${basePath}/${project.name}`}>
								<EyeOutlined />
							</Link>
						</LinkContainer>

						{deleteProjectModal(project)}
					</ActionWrap>
				),
			};
		});

	// highlight found text (only certain fields)
	const fieldsToCheck = ['name', 'groupCount'];
	const highlightedColumns =
		projectsColumns &&
		projectsColumns.map((col) => {
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

	const summary = () => <tr className="summary">{newProjectModal}</tr>;

	return (
		<>
			<BaseTable
				dataSource={projectsWithActions}
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
				Showing {totalFilteredCount} of {projects.length} projects
			</TotalDescription>
		</>
	);
};

export default OrgProjectsTable;
