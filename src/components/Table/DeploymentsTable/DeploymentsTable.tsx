import { EyeOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ActionWrap, EmptyAction } from '../styles';
import { useEffect, useMemo, useState } from 'react';
import duration from 'dayjs/plugin/duration';
import StatusTag from '../../StatusTag';
import { BuildStepTooltip, LinkContainer, StatusContainer } from './styles';
import { useLinkComponent } from '../../../providers/NextLinkProvider';
import Pagination from '../../Pagination';
import DeploymentsTableSkeleton from './DeploymentsTableSkeleton';
import { Tooltip } from 'antd';
import isBetween from 'dayjs/plugin/isBetween';
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
	environment?: {
		name: string;
		openshiftProjectName: string;
		openshift: {
			id: number;
			name: string;
		};
		project: {
			id: number;
			name: string;
		};
	};

	bulkId?: string | null;
	priority: number | null;
	sourceType: 'API' | 'WEBHOOK';
	buildStep?: string | null;
};

export type DeploymentProps = {
	deployments: Deployment[];
	cancelDeployment: (deployment: Deployment) => JSX.Element;
	/**
	 * The base path for the deployments.
	 * This is used to construct URLs for specific deployments.
	 */
	basePath: string;
	skeleton?: false;
};

export type DeploymentsTableSkeleton = {
	skeleton: true;
};

export type DeploymentsTableProps = {
	resultsPerPage?: number;
	filterStatus?: Deployment['status'];
	filterDateRange?: string[] | null;
} & (DeploymentsTableSkeleton | DeploymentProps);

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

const DeploymentsTable = (props: DeploymentsTableProps) => {
	const { resultsPerPage, filterStatus, filterDateRange } = props;

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
		return <DeploymentsTableSkeleton />;
	}

	const { deployments, basePath, cancelDeployment } = props as DeploymentProps;

	// paginate based on the current filtered data ( status and date range )
	const filteredDeployments = useMemo(() => {
		return deployments
			? deployments.filter((item) => {
					const statusMatches = filterStatus ? item.status === filterStatus : true;

					const dateMatches =
						filterDateRange && filterDateRange.every(Boolean)
							? dayjs(item.created).utc().isBetween(
									dayjs(filterDateRange[0]).utc().startOf('day'),
									dayjs(filterDateRange[1]).utc().endOf('day'),
									null,
									'[)', // inclusive of start date, exclusive of end date
								)
							: true;

					return statusMatches && dateMatches;
				})
			: [];
	}, [deployments, filterStatus, filterDateRange]);

	// paginated data based on filtered results
	const paginatedData =
		pageSize > 0
			? filteredDeployments.slice((currentPage - 1) * pageSize, currentPage * pageSize)
			: filteredDeployments;

	const totalFilteredCount = filteredDeployments.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
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
			render: (name: string, deployment: Deployment) => {
				return (
					<LinkContainer>
						<Link href={`${basePath}/${name}`}>{name}</Link>
						{deployment.bulkId ? (
							<span className="bulk-link">
								<Link href={`/bulkdeployment/${deployment.bulkId}`}>BULK</Link>
							</span>
						) : null}
					</LinkContainer>
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

	const remappedDeployments =
		paginatedData &&
		paginatedData.map((deployment) => {
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
						<LinkContainer>
							<Link href={`${basePath}/${deployment.name}`}>
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
			<BaseTable dataSource={remappedDeployments} columns={DeploymentColumns} rowKey={(record) => record.id} />
			<Pagination
				total={totalFilteredCount}
				pageSize={pageSize === -1 ? Infinity : pageSize}
				current={currentPage}
				onChange={handlePageChange}
			/>
		</>
	);
};

export default DeploymentsTable;
