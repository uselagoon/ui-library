import { EyeOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ActionWrap, EmptyAction } from '../styles';
import { useEffect, useState } from 'react';
import duration from 'dayjs/plugin/duration';
import StatusTag from '../../StatusTag';
import type { RenderedCell } from 'rc-table/lib/interface';
import { useLinkComponent } from '../../../providers/NextLinkProvider';
import Pagination from '../../Pagination';

import { Tooltip } from 'antd';

import { Deployment } from '../DeploymentsTable/DeploymentsTable';
import { BuildStepTooltip, LinkContainer, StatusContainer } from '../DeploymentsTable/styles';
import AllDeploymentsSkeleton from './AllDeploymentsSkeleton';
import { highlightTextInElement } from '../../../_util/helpers';

dayjs.extend(duration);
dayjs.extend(utc);

const getDeploymentDuration = (deployment: SingleDeployment) => {
	const deploymentStart = deployment.started || deployment.created;
	const durationStart = deploymentStart ? dayjs.utc(deploymentStart) : dayjs.utc();
	const durationEnd = deployment.completed ? dayjs.utc(deployment.completed) : dayjs.utc();
	const duration = dayjs.duration(durationEnd.diff(durationStart));

	const hours = String(Math.floor(duration.asHours())).padStart(2, '0');
	const minutes = String(duration.minutes()).padStart(2, '0');
	const seconds = String(duration.seconds()).padStart(2, '0');

	let result = '';
	if (hours !== '00') result += `${hours}hr `;
	result += `${minutes}m ${seconds}sec`;

	return result.trim();
};

type SingleDeployment = Omit<Deployment, 'sourceType' | 'bulkId'>;

export type AllDeploymentsProps = {
	deployments: SingleDeployment[];
	cancelDeployment: (deployment: SingleDeployment) => JSX.Element;
	skeleton?: false;
};

export type AllDeploymentsSkeleton = {
	skeleton: true;
};
export type AllDeploymentsTableProps = {
	resultsPerPage?: number;
	filterString?: string;
} & (AllDeploymentsSkeleton | AllDeploymentsProps);

const AllDeploymentsTable = (props: AllDeploymentsTableProps) => {
	const { resultsPerPage, filterString = '' } = props;

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setResultsPerPage] = useState(resultsPerPage || 10);

	useEffect(() => {
		if (resultsPerPage) {
			setResultsPerPage(resultsPerPage);
		}
	}, [resultsPerPage]);

	const Link = useLinkComponent();

	if ('skeleton' in props && props.skeleton) {
		return <AllDeploymentsSkeleton />;
	}

	const { deployments, cancelDeployment } = props as AllDeploymentsProps;

	// paginate based on the current filtered data
	const filteredDeployments = deployments
		? deployments.filter((item) => {
				const fieldsToCheck = [
					item.name,
					item.environment?.openshift.name,
					item.environment?.project.name,
					item.environment?.name,
				];

				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// paginated data based on filtered results
	const paginatedData =
		pageSize > 0
			? filteredDeployments.slice((currentPage - 1) * pageSize, currentPage * pageSize)
			: filteredDeployments;

	const totalFilteredCount = filteredDeployments.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const allDeploymentColumns = [
		{
			title: 'Project',
			dataIndex: 'project_name',
			key: 'project_name',
			width: '10%',
			render: (project_name: string) => {
				return (
					<LinkContainer>
						<Link href={`/projects/${project_name}`}>{project_name}</Link>
					</LinkContainer>
				);
			},
		},
		{
			title: 'Environment',
			dataIndex: 'environment_name',
			key: 'environment_name',
			width: '10%',
			render: (environment_name: string, deployment: Deployment) => {
				return (
					<LinkContainer>
						<Link
							href={`/projects/${deployment.environment?.project.name}/${deployment.environment?.openshiftProjectName}`}
						>
							{environment_name}
						</Link>
					</LinkContainer>
				);
			},
		},
		{
			title: 'Cluster',
			dataIndex: 'openshift_name',
			key: 'openshift_name',
			width: '10%',
		},
		{
			title: 'Deployment Name',
			dataIndex: 'deployment_name',
			key: 'deployment_name',
			width: '10%',
			sorter: (a: { deployment_name: string }, b: { deployment_name: string }) =>
				a.deployment_name.localeCompare(b.deployment_name),
			render: (deployment_name: string, deployment: Deployment) => {
				return (
					<LinkContainer>
						<Link href={`/projects/${deployment.environment?.project.name}/deployments/${deployment_name}`}>
							{deployment_name}
						</Link>
					</LinkContainer>
				);
			},
		},
		{
			title: 'Priority',
			dataIndex: 'priority',
			key: 'priority',
			width: '10%',
			render: (priority: string | null) => {
				return priority ? priority : '-';
			},
		},

		{
			title: 'Created',
			dataIndex: 'created',
			key: 'created',
			width: '20%',
			sorter: (a: Deployment, b: Deployment) => new Date(a.created).getTime() - new Date(b.created).getTime(),
			render: (created: string) => {
				return (
					<Tooltip placement="top" title={created}>
						{dayjs.utc(created).local().fromNow()}
					</Tooltip>
				);
			},
		},
		{
			title: 'Status', // sorter
			dataIndex: 'status',
			key: 'status',
			width: '10%',
			sorter: (a: Deployment, b: Deployment) => a.status.localeCompare(b.status),

			render: (_: string, record: Deployment) => {
				return (
					<StatusContainer>
						<StatusTag type={record.status} />

						{!['complete', 'cancelled', 'failed'].includes(record.status) && record.buildStep && (
							<BuildStepTooltip placement="right" title={record.buildStep}>
								<StatusTag className="buildstep" type="custom" color="#118EE9" icon={<></>}>
									{record.buildStep}
								</StatusTag>
							</BuildStepTooltip>
						)}

						{record.buildStep && ['deployCompletedWithWarnings'].includes(record.buildStep) && (
							<BuildStepTooltip placement="right" title={record.buildStep}>
								<StatusTag className="buildstep" type="custom" color="#ffbe00" icon={<></>}>
									Completed with warnings
								</StatusTag>
							</BuildStepTooltip>
						)}
					</StatusContainer>
				);
			},
		},
		{
			title: 'Duration',
			dataIndex: 'duration',
			key: 'duration',
			width: '10%',
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	// highlight found text (only certain fields)
	const fieldsToCheck = ['project_name', 'environment_name', 'openshift_name', 'deployment_name'];
	const wrappedColumns =
		allDeploymentColumns &&
		allDeploymentColumns.map((col) => {
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

	const remappedDeployments =
		paginatedData &&
		paginatedData.map((deployment) => {
			return {
				...deployment,
				project_name: deployment.environment?.project.name,
				environment_name: deployment.environment?.name,
				openshift_name: deployment.environment?.openshift.name,
				deployment_name: deployment.name,
				priority: deployment.priority,
				created: deployment.created,
				status: deployment.status,
				duration: getDeploymentDuration(deployment),
				actions: (
					<ActionWrap>
						<LinkContainer>
							<Link href={`/projects/${deployment.environment?.project.name}/deployments${deployment.name}`}>
								<Tooltip placement="bottom" title="View deployment">
									<EyeOutlined />
								</Tooltip>
							</Link>
						</LinkContainer>
						{['new', 'pending', 'queued', 'running'].includes(deployment.status) ? (
							cancelDeployment(deployment)
						) : (
							<EmptyAction></EmptyAction>
						)}
					</ActionWrap>
				),
			};
		});

	return (
		<>
			<BaseTable
				variant="alternate"
				dataSource={remappedDeployments}
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

export default AllDeploymentsTable;
