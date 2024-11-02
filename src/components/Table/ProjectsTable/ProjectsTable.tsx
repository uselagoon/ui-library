import React, { ReactNode, useEffect, useState } from 'react';
import { useLinkComponent } from '../../../providers/NextLinkProvider';
import Highlighter from 'react-highlight-words';
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
import ProjectsTableSkeleton from './ProjectsTableSkeleton';

dayjs.extend(duration);
dayjs.extend(utc);

export type Project = {
	id: number;
	name: string;
	problemsUi: number | null;
	factsUi: number | null;
	created: string;
	origin: string;
	kubernetes: {
		id: number;
		name: string;
		cloudRegion: string | null;
	};
	environments: [
		{
			route: string;
			updated: string;
		},
	];
};

export type ProjectsProps = {
	projects: Project[];
	basePath: string;
	resultsPerPage?: number;
	filterString: string;
	skeleton?: false;
};

export type ProjectsTableSkeleton = {
	skeleton: true;
};

export type ProjectsTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> &
	(ProjectsTableSkeleton | ProjectsProps);

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

const getLatestDate = (environments: Project['environments']) => {
	return environments
		.map((env) => env.updated)
		.filter((date) => date != null)
		.sort()
		.pop();
};
const ProjectsTable = (props: ProjectsTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <ProjectsTableSkeleton />;
	}

	const { resultsPerPage, filterString, projects, basePath } = props;

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	const Link = useLinkComponent();

	// paginate based on the current filtered data
	const filteredData = projects
		? projects.filter((item) => {
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

	const projectsColumns = [
		{
			title: 'Project',
			dataIndex: 'name',
			key: 'name',
			render: (_: string, record: Project) => (
				<LinkContainer>
					<Link href={`${basePath}/${record.name}`}>{record.name}</Link>
				</LinkContainer>
			),
			width: '24.6%',
		},
		{
			title: 'No. Envs',
			dataIndex: 'environment_count',
			key: 'environment_count',
			render: (text: string) => <div style={{ textAlign: 'center' }}>{text}</div>,
			width: '8.39%',
		},
		{
			title: 'Cluster',
			dataIndex: 'cluster',
			key: 'cluster',
			render: (text: string) => <div style={{ textAlign: 'center' }}>{text}</div>,
			width: '10.32%',
		},
		{
			title: 'Last Deployment',
			dataIndex: 'last_deployment',
			key: 'last_deployment',
			width: '10.32%',
		},
		{
			title: 'Origin',
			dataIndex: 'origin',
			key: 'origin',
			width: '30.89%',
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
		projectsColumns &&
		projectsColumns.map((col) => ({
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

	const remappedProjects =
		paginatedData &&
		paginatedData.map((project) => {
			const lastDeployment = getLatestDate(project.environments);
			return {
				...project,
				environment_count: project.environments.length,
				cluster: project.kubernetes.name,
				last_deployment: (
					<Tooltip placement="top" title={lastDeployment}>
						{dayjs.utc(lastDeployment).local().fromNow()}
					</Tooltip>
				),
				created: (
					<Tooltip placement="top" title={project.created}>
						{dayjs.utc(project.created).local().fromNow()}
					</Tooltip>
				),

				actions: (
					<ActionWrap>
						<LinkContainer>
							<Link href={`${basePath}/${project.name}`}>
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
				variant="alternate"
				dataSource={remappedProjects}
				columns={wrappedColumns}
				rowKey={(record) => record.id}
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

export default ProjectsTable;
