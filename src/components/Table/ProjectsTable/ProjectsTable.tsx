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
	gitUrl: string;
	productionEnvironment: string | null;
	environments: [
		{
			name: string;
			route: string;
			updated: string;
			kubernetes: {
				id: number;
				name: string;
				cloudRegion: string | null;
			};
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

	// custom sorter
	const [customSort, setCustomSort] = useState<any[]>([]);

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
					const prodRoute = project.environments.find((environment) => {
						return environment.name === project.productionEnvironment;
					})?.route;
					const routeToCheck = prodRoute && prodRoute !== 'undefined' ? prodRoute.replace(/^https?\:\/\//i, '') : '';

					const fieldsToCheck = [project.name, project.gitUrl, routeToCheck];

					return fieldsToCheck.some((fieldValue) =>
						String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
					);
				}) || [];

			let sortedData = [...filteredData];

			if (customSort[1] !== undefined) {
				const direction = customSort[1] === 'ascend' ? 1 : -1;

				if (customSort[0] === 'name') {
					sortedData = sortedData.sort((a, b) => direction * a.name.localeCompare(b.name));
				}

				if (customSort[0] === 'last_deployment') {
					sortedData = sortedData.sort((a, b) => {
						const latestDeployment_first = getLatestDate(a.environments);
						const latestDeployment_second = getLatestDate(b.environments);

						const dateA = latestDeployment_first ? new Date(latestDeployment_first).getTime() : -Infinity;
						const dateB = latestDeployment_second ? new Date(latestDeployment_second).getTime() : -Infinity;

						return direction * (dateB - dateA);
					});
				}
			}

			setFilteredProjects(sortedData);
			setLoading(false);
		}, timerLengthPercentage),
		[customSort],
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
			sorter: () => {
				return 0;
			},
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
			width: '10%',
			sorter: () => {
				return 0;
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
			title: 'Prod Route',
			dataIndex: 'prod_route',
			key: 'prod_route',
			width: '25%',
		},
		{
			title: 'GitUrl',
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

	// highlight found text (only certain fields)
	const fieldsToCheck = ['name', 'prod_route', 'gitUrl'];
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
			const prodRoute = project.environments.find((environment) => {
				return environment.name === project.productionEnvironment;
			})?.route;

			return {
				...project,
				prod_route: prodRoute && prodRoute !== 'undefined' ? prodRoute.replace(/^https?\:\/\//i, '') : '',
				last_deployment: lastDeployment,
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
				disableScrollable
				onChange={(_, __, info: any) => {
					const col = info.field;
					const order = info.order;

					if (col && ['ascend', 'descend', undefined].includes(order)) {
						setCustomSort([col, order]);
					}
				}}
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
