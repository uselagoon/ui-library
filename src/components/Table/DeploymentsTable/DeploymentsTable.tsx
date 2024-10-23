import { EyeOutlined, StopOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ActionWrap, EmptyAction } from '../styles';
import { useState } from 'react';
import duration from 'dayjs/plugin/duration';
import StatusTag from '../../StatusTag';
import { BuildStepTooltip, StatusContainer } from './styles';
import { useLinkComponent } from '../../../providers/NextLinkProvider';

dayjs.extend(duration);
dayjs.extend(utc);

type BasicFn = (...args: any[]) => any;
type Deployment = {
	id: number;
	name: string;
	status: 'running' | 'complete' | 'failed' | 'error' | 'queued';
	created: string;
	started: string;
	completed: string;
	sourceType: 'API' | 'WEBHOOK';
	environment?: string;
	remoteId?: string;
	buildLog?: string;
	buildStep?: string;
	bulkId: number | null;
	priority: string | null;
};

export type DeploymentsTableProps = {
	deployments: Deployment[];
	/**
	 * The base path for the deployments.
	 * This is used to construct URLs for specific deployments.
	 */
	basePath: string;
};

const DeploymentColumns = [
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		width: '11.845%',
		render: (statusTag: ReturnType<typeof StatusTag>) => {
			return <StatusContainer>{statusTag}</StatusContainer>;
		},
	},
	{
		title: 'Name/ID',
		dataIndex: 'name',
		key: 'name',
		width: '26.266%',
	},
	{
		title: 'Timestamp',
		dataIndex: 'created',
		key: 'created',
		width: '18.369%',
	},
	{
		title: 'Trigger',
		dataIndex: 'sourceType',
		key: 'sourceType',
		width: '14.506%',
	},
	{
		title: 'Duration',
		dataIndex: 'duration',
		key: 'duration',
		width: '14.506%',
	},
	{
		title: 'Actions',
		dataIndex: 'actions',
		key: 'actions',
	},
];

export const getDeploymentDuration = (deployment: Deployment) => {
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

const DeploymentsaTable = ({ deployments, basePath }: DeploymentsTableProps) => {
	const [selectedKey, setSelectedKey] = useState<Deployment>();

	const Link = useLinkComponent();

	const handleCancelDeployment = () => {
		// deleteKey.delete(selectedKey?.id).finally(() => {
		// 	refetch();
		// 	handleDeleteModalClose();
		// });
	};

	const remappedDeployments =
		deployments &&
		deployments.map((deployment) => {
			return {
				...deployment,
				status: (
					<>
						<StatusTag type={deployment.status} />

						{!['complete', 'cancelled', 'failed'].includes(deployment.status) && deployment.buildStep && (
							<BuildStepTooltip placement="right" title={deployment.buildStep}>
								<StatusTag className="buildstep" type="custom" color="#118EE9" icon={<></>}>
									{deployment.buildStep}
								</StatusTag>
							</BuildStepTooltip>
						)}

						{deployment.buildStep && ['deployCompletedWithWarnings'].includes(deployment.buildStep) && (
							<BuildStepTooltip placement="right" title={deployment.buildStep}>
								<StatusTag className="buildstep" type="custom" color="#ffbe00" icon={<></>}>
									Completed with warnings
								</StatusTag>
							</BuildStepTooltip>
						)}
					</>
				),
				duration: getDeploymentDuration(deployment),
				actions: (
					<ActionWrap>
						<Link href={`${basePath}/${deployment.name}`}>
							<EyeOutlined
								onClick={() => {
									setSelectedKey(deployment);
								}}
							/>
						</Link>

						{['new', 'pending', 'queued', 'running'].includes(deployment.status) ? (
							<StopOutlined
								onClick={() => {
									setSelectedKey(deployment);
								}}
							/>
						) : (
							<EmptyAction></EmptyAction>
						)}
					</ActionWrap>
				),
			};
		});

	return <BaseTable dataSource={remappedDeployments} columns={DeploymentColumns} />;
};

export default DeploymentsaTable;
