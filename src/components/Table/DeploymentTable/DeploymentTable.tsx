import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ActionWrap, EmptyAction } from '../styles';
import duration from 'dayjs/plugin/duration';
import { Tooltip } from 'antd';
import isBetween from 'dayjs/plugin/isBetween';
import { BuildStepTooltip, StatusContainer } from '../DeploymentsTable/styles';
import StatusTag from '../../StatusTag';
import DeploymentTableSkeleton from './DeploymentTableSkeleton';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';
dayjs.extend(isBetween);
dayjs.extend(duration);
dayjs.extend(utc);

export type Deployment = {
	id: number;
	name: string;
	status: 'running' | 'complete' | 'failed' | 'error' | 'queued' | 'new' | 'cancelled';
	created: string;
	started: string | null;
	completed: string | null;
	buildLog?: string;
	bulkId?: string | null;
	priority: number | null;
	sourceType: 'API' | 'WEBHOOK';
	buildStep?: string | null;
};

export type DeploymentTableSkeleton = {
	skeleton: true;
};

export type DeploymenTableProps =
	| {
			deployment: Deployment;
			cancelDeployment: (deployment: Deployment) => JSX.Element;
			skeleton?: false;
			children?: ReactNode;
	  }
	| DeploymentTableSkeleton;

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

const DeploymentTable = (props: DeploymenTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <DeploymentTableSkeleton />;
	}

	const { deployment, cancelDeployment, children } = props;

	const [expandedRowIds, setExpandedRowIds] = useState<number[]>([deployment.id]);

	// manually handle row expansion
	const handleExpand = (expanded: boolean, record: Deployment) => {
		setExpandedRowIds(expanded ? [...expandedRowIds, record.id] : expandedRowIds.filter((id) => id !== record.id));
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
			render: (identifier: string, deployment: Deployment) => {
				return (
					<ExpandName onClick={() => handleExpand(!expandedRowIds.includes(deployment.id), deployment)}>
						{identifier}
					</ExpandName>
				);
			},
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

	const remappedDeployment =
		deployment &&
		[deployment].map((deployment) => {
			return {
				...deployment,
				created: (
					<Tooltip placement="top" title={deployment.created}>
						{dayjs.utc(deployment.created).local().fromNow()}
					</Tooltip>
				),
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
				dataSource={remappedDeployment}
				expandable={{
					expandedRowKeys: expandedRowIds,
					expandRowByClick: true,
					showExpandColumn: false,
					expandedRowRender: () => (
						<ExpandedRow>
							<br />
							{children}
						</ExpandedRow>
					),
				}}
				disableScrollable
				columns={DeploymentColumns}
				rowKey={(record) => record.id}
			/>
		</>
	);
};

export default DeploymentTable;

export const ExpandName = styled.span`
	text-decoration: underline;
	cursor: pointer;
`;

export const ExpandedRow = styled.div`
	margin: 0;
	background-color: ${(props) => (props.theme.colorScheme === 'light' ? '#fff' : 'transparent')};
`;
