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
import { TotalDescription } from '../Organizations/styles';
import { PaginationWithSelector } from '../FactsTable/FactsTable';

dayjs.extend(duration);
dayjs.extend(utc);

export type Project = {
	id: number;
	name: string;
	problemsUi: number | null;
	factsUi: number | null;
	created: string;
	gitUrl: string;
	productionEnvironment: string | null;
	environments: Array<{
		name: string;
		route: string;
		updated: string;
		kubernetes: {
			id: number;
			name: string;
			cloudRegion: string | null;
		};
	}>;
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

const ProjectsTable: React.FC<ProjectsTableProps> = (props) => {
	if ('skeleton' in props && props.skeleton) {
		return <ProjectsTableSkeleton />;
	}

	const { resultsPerPage, filterString, projects, basePath } = props;

	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(resultsPerPage || 10);
	const [loading, setLoading] = useState(false);
	const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
	const [customSort, setCustomSort] = useState<[string, 'ascend' | 'descend' | undefined]>(['', undefined]);

	const Link = useLinkComponent();

	const timerLengthPercentage = useMemo(
		() => Math.min(1000, Math.max(40, Math.floor(projects.length * 0.0725))),
		[projects.length],
	);

	const filterAndSortProjects = useCallback(
		(filterStr: string, sortField: string, sortOrder: 'ascend' | 'descend' | undefined) => {
			let result = projects?.filter((project) => {
				const prodRoute = project.environments.find((env) => env.name === project.productionEnvironment)?.route;
				const routeToCheck = prodRoute && prodRoute !== 'undefined' ? prodRoute.replace(/^https?:\/\//i, '') : '';
				const fieldsToCheck = [project.name, project.gitUrl, routeToCheck];
				return fieldsToCheck.some((field) => String(field).toLowerCase().includes(filterStr.toLowerCase()));
			});

			if (sortField && sortOrder) {
				result.sort((a, b) => {
					if (sortField === 'name') {
						return sortOrder === 'ascend' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
					} else if (sortField === 'last_deployment') {
						const dateA = getLatestDate(a.environments);
						const dateB = getLatestDate(b.environments);
						return sortOrder === 'ascend'
							? (dateA ? new Date(dateA).getTime() : 0) - (dateB ? new Date(dateB).getTime() : 0)
							: (dateB ? new Date(dateB).getTime() : 0) - (dateA ? new Date(dateA).getTime() : 0);
					}
					return 0;
				});
			}

			return result;
		},
		[projects],
	);

	const debouncedFilterAndSort = useMemo(
		() =>
			debounce((params: { filterStr: string; sortField: string; sortOrder: 'ascend' | 'descend' | undefined }) => {
				const result = filterAndSortProjects(params.filterStr, params.sortField, params.sortOrder);
				setFilteredProjects(result);
				setLoading(false);
			}, timerLengthPercentage),
		[filterAndSortProjects, timerLengthPercentage],
	);

	useEffect(() => {
		setLoading(true);
		debouncedFilterAndSort({ filterStr: filterString, sortField: customSort[0], sortOrder: customSort[1] });
	}, [filterString, customSort, debouncedFilterAndSort]);

	useEffect(() => {
		if (resultsPerPage) {
			setPageSize(resultsPerPage);
		}
	}, [resultsPerPage]);

	useEffect(() => {
		setCurrentPage(1);
	}, [filterString]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const paginatedData =
		pageSize > 0 ? filteredProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize) : filteredProjects;

	const projectsColumns = [
		{
			title: 'Project',
			dataIndex: 'name',
			key: 'name',
			sorter: true,
			render: (_: string, record: Project) => (
				<LinkContainer>
					<Link href={`${basePath}/${record.name}`}>{record.name}</Link>
				</LinkContainer>
			),
			width: '25%',
		},
		{
			title: 'Last Deployment',
			dataIndex: 'last_deployment',
			key: 'last_deployment',
			sorter: true,
			render: (lastDeploy: string) =>
				lastDeploy ? (
					<Tooltip placement="top" title={dayjs.utc(lastDeploy).local().format('YYYY-MM-DD HH:mm:ss')}>
						{dayjs.utc(lastDeploy).local().fromNow()}
					</Tooltip>
				) : (
					'-'
				),
			width: '10%',
		},
		{
			title: 'Production Route',
			dataIndex: 'prod_route',
			key: 'prod_route',
			width: '25%',
		},
		{
			title: 'Git Repository URL',
			dataIndex: 'gitUrl',
			key: 'gitUrl',
			width: '30%',
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: (item: string) => <div style={{ textAlign: 'center', fontSize: '1.25rem' }}>{item}</div>,
			width: '10%',
		},
	];

	const fieldsToCheck = ['name', 'prod_route', 'gitUrl'];
	const wrappedColumns = projectsColumns.map((col) => ({
		...col,
		render: (renderElement: any, record: any, index: number): React.ReactNode | RenderedCell<any> => {
			const renderedContent = col.render ? col.render(renderElement, record) : renderElement;
			const shouldHighlight = fieldsToCheck.includes(col.dataIndex);
			if (shouldHighlight) {
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
	}));

	const remappedProjects =
		paginatedData &&
		paginatedData.map((project) => {
			const lastDeployment = getLatestDate(project.environments);
			const prodRoute = project.environments.find((env) => env.name === project.productionEnvironment)?.route;
			return {
				...project,
				prod_route: prodRoute && prodRoute !== 'undefined' ? prodRoute.replace(/^https?:\/\//i, '') : '',
				last_deployment: lastDeployment,
				created: (
					<Tooltip placement="top" title={dayjs.utc(project.created).local().format('YYYY-MM-DD HH:mm:ss')}>
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
				disableScrollable
				onChange={(_, __, sorter: any) => {
					const { field, order } = sorter;
					setCustomSort([field, order]);
				}}
				variant="alternate"
				dataSource={remappedProjects}
				columns={wrappedColumns}
				rowKey={(record) => record.id}
				components={{
					body: {
						row: (props: any) => <tr {...props} data-cy="project-row" />,
					},
				}}
				loading={{
					spinning: loading,
					indicator: <LoadingOutlined />,
				}}
			/>

			<PaginationWithSelector>
				<Pagination
					total={filteredProjects.length}
					pageSize={pageSize === -1 ? Infinity : pageSize}
					current={currentPage}
					onChange={handlePageChange}
				/>
				<TotalDescription data-cy="projects-total">{`Total: ${filteredProjects.length} Projects`}</TotalDescription>
			</PaginationWithSelector>
		</>
	);
};

export default ProjectsTable;
