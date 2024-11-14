import { EyeOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ActionWrap, EmptyAction } from '../styles';
import duration from 'dayjs/plugin/duration';
import StatusTag from '../../StatusTag';

import { useLinkComponent } from '../../../providers/NextLinkProvider';

import { Tooltip } from 'antd';

import { Deployment } from '../DeploymentsTable/DeploymentsTable';
import { BuildStepTooltip, LinkContainer, StatusContainer } from '../DeploymentsTable/styles';
import BulkDeploymentsSkeleton from './BulkDeploymentsSkeleton';

dayjs.extend(duration);
dayjs.extend(utc);

const getDeploymentDuration = (deployment: BulkDeployment) => {
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

type BulkDeployment = {
	id: number;
	name: string;
	status: string;
	created: string;
	buildStep: string | null;
	started: string | null;
	completed: string | null;
	bulkId: string;
	bulkName: string;
	priority: number | null;
	environment: {
		name: string;
		openshiftProjectName: string;
		project: {
			name: string;
		};
	};
};

export type BulkDeploymentsProps = {
	deployments: BulkDeployment[];
	cancelDeployment: (deployment: BulkDeployment) => JSX.Element;
	skeleton?: false;
};

export type BulkDeploymentsSkeleton = {
	skeleton: true;
};
export type BulkDeploymentsTableProps = BulkDeploymentsSkeleton | BulkDeploymentsProps;

const BulkDeploymentsTable = (props: BulkDeploymentsTableProps) => {
	const Link = useLinkComponent();

	if ('skeleton' in props && props.skeleton) {
		return <BulkDeploymentsSkeleton />;
	}

	const { deployments, cancelDeployment } = props as BulkDeploymentsProps;

	const bulkDeploymentsColumns = [
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
			title: 'Deployment Name',
			dataIndex: 'deployment_name',
			key: 'deployment_name',
			width: '20%',
			sorter: (a: { deployment_name: string }, b: { deployment_name: string }) =>
				a.deployment_name.localeCompare(b.deployment_name),
			render: (deployment_name: string, deployment: Deployment) => {
				return (
					<LinkContainer>
						<Link
							href={`/projects/${deployment.environment?.project.name}/${deployment.environment?.openshiftProjectName}/deployments/${deployment_name}`}
						>
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

	const remappedDeployments =
		deployments &&
		deployments.map((deployment) => {
			return {
				...deployment,
				project_name: deployment.environment?.project.name,
				environment_name: deployment.environment?.name,
				deployment_name: deployment.name,
				priority: deployment.priority,
				created: deployment.created,
				status: deployment.status,
				duration: getDeploymentDuration(deployment),
				actions: (
					<ActionWrap>
						<LinkContainer>
							<Link
								href={`/projects/${deployment.environment?.project.name}/${deployment.environment?.openshiftProjectName}/deployments/${deployment.name}`}
							>
								<EyeOutlined />
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
				columns={bulkDeploymentsColumns}
				rowKey={(record) => record.id}
			/>
		</>
	);
};

export default BulkDeploymentsTable;
