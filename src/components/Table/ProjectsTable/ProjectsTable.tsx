import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLinkComponent } from '../../../providers/NextLinkProvider';
import { TableProps, Tooltip } from 'antd';
import { ActionWrap } from '../styles';
import { LinkContainer } from '../DeploymentsTable/styles';
import { EyeOutlined, LoadingOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import Pagination from '../../Pagination';

import type { RenderedCell } from 'rc-table/lib/interface';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import ProjectsTableSkeleton from './ProjectsTableSkeleton';
import { highlightTextInElement } from '../../../_util/helpers';
import { debounce } from '../_utils';

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

export type ProjectsTableSkeletonProps = {
	skeleton: true;
};

export type ProjectsTableProps = Omit<TableProps, 'pagination' | 'filteredValue'> &
	(ProjectsTableSkeletonProps | ProjectsProps);

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

	// used for debounced filtering
	const [loading, setLoading] = useState(false);
	const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects || []);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	const Link = useLinkComponent();

	const timerLengthPercentage = useMemo(
		() => Math.min(1000, Math.max(40, Math.floor(projects.length * 0.0725))),
		[projects.length],
	);

	const debouncedFilter = useCallback(
		debounce((filterString: string) => {
			const filteredData =
				projects?.filter((project) => {
					const fieldsToCheck = [project.name, project.kubernetes.name, project.origin];
					return fieldsToCheck.some((fieldValue) =>
						String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
					);
				}) || [];

			setFilteredProjects(filteredData);
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
		pageSize > 0 ? filteredProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize) : filteredProjects;

	const totalFilteredCount = filteredProjects.length;

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
			title: 'Environments',
			dataIndex: 'environment_count',
			key: 'environment_count',
			render: (text: string) => <div style={{ textAlign: 'center' }}>{text}</div>,
			width: '8.39%',
		},
		{
			title: 'Cluster',
			dataIndex: 'cluster',
			key: 'cluster',
			width: '10.32%',
		},
		{
			title: 'Last Deployment',
			dataIndex: 'last_deployment',
			key: 'last_deployment',
			width: '10.32%',
		},
		{
			title: 'GitUrl',
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

	// highlight found text (only certain fields)
	const fieldsToCheck = ['name', 'cluster', 'origin'];
	const wrappedColumns =
		projectsColumns &&
		projectsColumns.map((col) => {
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
								<Tooltip placement="bottom" title="View project">
									<EyeOutlined />
								</Tooltip>
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

export default ProjectsTable;
