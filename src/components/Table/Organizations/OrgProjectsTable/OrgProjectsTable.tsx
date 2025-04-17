import { ReactNode, useEffect, useMemo, useState } from 'react';
import type { RenderedCell } from 'rc-table/lib/interface';
import { TotalDescription } from '../styles';
import { ActionWrap, TableSummary } from '../../styles';
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
import Skeleton from '../../../Skeleton';
import { useDebouncedEffect } from '../../hooks';

type ProjectBase = {
	id: number;
	name: string;
};

type StandaloneProject = ProjectBase & {
	groupCount?: number;
};

export type ProjectsProps = { newProjectModal: ReactNode; basePath: string; skeleton?: false } & (
	| {
			type?: 'standalone';
			projects: StandaloneProject[];
			deleteProjectModal: (project: ProjectBase) => ReactNode;
	  }
	| {
			type?: 'subTable';
			projects: ProjectBase[];
			unlinkProjectModal: (project: ProjectBase) => ReactNode;
	  }
);

export type ProjectsTableSkeleton = {
	skeleton: true;
	type: 'standalone' | 'subTable';
};

export type OrgProjectsProps = {
	resultsPerPage?: number;
	filterString?: string;
	sortBy?: 'name_asc' | 'name_desc' | 'groupCount_asc' | 'groupCount_desc' | null;
	/*
	 * For stylistic reasons, `results per page` select component next to pagination
	 */
	resultDropdown?: ReactNode;
	onVisibleDataChange?: (data: StandaloneProject[]) => void;
} & (ProjectsTableSkeleton | ProjectsProps);

/*
 * Projects table - used in organizations/orgName/projects as type `standalone` OR organizations/orgName/groups/groupName as type `subTable`
 */
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

	useEffect(() => {
		setCurrentPage(1);
	}, [filterString]);

	if ('skeleton' in props && props.skeleton) {
		return <OrgProjectsTableSkeleton type={props.type} />;
	}

	const { projects, basePath, newProjectModal, type = 'standalone', onVisibleDataChange } = props;

	const Link = useLinkComponent();

	const filteredProjects = useMemo(() => {
		if (!projects) return [];

		return projects.filter((project) => {
			const fieldsToCheck = [project.name];

			if (type === 'standalone') {
				fieldsToCheck.push(String((project as StandaloneProject)?.groupCount));
			}

			return fieldsToCheck.some((fieldValue) => String(fieldValue).toLowerCase().includes(filterString.toLowerCase()));
		});
	}, [projects, filterString]);

	// sorting based on sortBy
	const sortColumn = sortBy ? sortBy.split('_')[0] : null;
	const sortOrder = sortBy ? sortBy.split('_')[1] : null;

	const sortedProjects = useMemo(() => {
		if (!filteredProjects) return [];

		return [...filteredProjects].sort((a, b) => {
			if (!sortColumn) return 0;

			const aValue = a[sortColumn as keyof ProjectBase];
			const bValue = b[sortColumn as keyof ProjectBase];

			// determine the sort direction (1 for asc, -1 for desc)
			const direction = sortOrder === 'asc' ? 1 : -1;

			// possible null checks.
			if (aValue === null && bValue === null) return 0;
			if (aValue === null) return direction;
			if (bValue === null) return -direction;

			if (aValue > bValue) return direction;
			if (aValue < bValue) return -direction;

			return 0;
		});
	}, [filteredProjects, sortColumn, sortOrder]);

	// paginated data based on filtered results
	const paginatedProjects = useMemo(() => {
		return pageSize > 0 ? sortedProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize) : sortedProjects;
	}, [sortedProjects, currentPage, pageSize]);

	const totalFilteredCount = sortedProjects.length;

	const getResultRange = () => {
		const currentPageLength = paginatedProjects.length;
		if (currentPageLength === 0) return 0;
		if (currentPageLength === 1 && currentPage === 1) return 1;

		const startRange = currentPage === 1 ? 1 : (currentPage - 1) * pageSize + 1;
		// currentPageLength is never greater than pageSize
		const endRange = startRange - 1 + currentPageLength;

		const rangeText = startRange === endRange ? 'the last entry' : `${startRange} - ${endRange}`;

		return rangeText;
	};

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
			width: type === 'standalone' ? '60.17%' : '87.57%',
			sorter: (a: ProjectBase, b: ProjectBase) => a.name.localeCompare(b.name),
			render: (name: string) => {
				return (
					<LinkContainer>
						<Link href={`${basePath}/${name}`}>{name}</Link>
					</LinkContainer>
				);
			},
			className: getSortedClass('name'),
		},

		...(type === 'standalone'
			? [
					{
						title: 'Groups',
						dataIndex: 'groupCount',
						key: 'groupCount',
						width: '27.4%',
						sorter: (a: StandaloneProject, b: StandaloneProject) => {
							if (a.groupCount != undefined && b.groupCount != undefined) {
								return a.groupCount - b.groupCount;
							}
							return 0;
						},
						render: (members?: number) => {
							return <>Groups: {members != undefined ? members : <Skeleton height={15} width={15} />}</>;
						},
						className: getSortedClass('groupCount'),
					},
				]
			: []),

		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	// unlink or delete
	const renderDeleteModal = (project: ProjectBase) => {
		if (type === 'standalone' && 'deleteProjectModal' in props) {
			return props.deleteProjectModal(project);
		} else if (type === 'subTable' && 'unlinkProjectModal' in props) {
			return props.unlinkProjectModal(project);
		}
		return null;
	};

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
								<Tooltip placement="bottom" title="View project">
									<EyeOutlined />
								</Tooltip>
							</Link>
						</LinkContainer>

						{renderDeleteModal(project)}
					</ActionWrap>
				),
			};
		});

	// highlight found text (only certain fields)
	const fieldsToCheck = ['name'];
	if (type === 'standalone') {
		fieldsToCheck.push('groupCount');
	}

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

	// trigger onVisibleDataChange with currently visible rows
	useDebouncedEffect(
		() => {
			onVisibleDataChange?.(paginatedProjects);
		},
		[paginatedProjects],
		200,
	);

	return (
		<>
			<BaseTable
				dataSource={projectsWithActions}
				columns={highlightedColumns}
				rowKey={(record) => record.id}
				components={{
					body: {
						row: (props: any) => <tr {...props} data-cy="org-project-row" />,
					},
				}}
				hasSummary
			/>
			<TableSummary>{newProjectModal}</TableSummary>
			<PaginationWithSelector>
				<section className="selector">{resultDropdown}</section>
				<Pagination
					total={totalFilteredCount}
					pageSize={pageSize === -1 ? Infinity : pageSize}
					current={currentPage}
					onChange={handlePageChange}
				/>
			</PaginationWithSelector>

			<TotalDescription data-cy="total">
				Showing {getResultRange()} of {totalFilteredCount} projects
			</TotalDescription>
		</>
	);
};

export default OrgProjectsTable;
