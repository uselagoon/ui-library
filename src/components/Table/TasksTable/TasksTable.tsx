import { EyeOutlined } from '@ant-design/icons';
import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ActionWrap, EmptyAction } from '../styles';
import { ReactNode, useEffect, useState } from 'react';
import duration from 'dayjs/plugin/duration';
import StatusTag from '../../StatusTag';
import { useLinkComponent } from '../../../providers/NextLinkProvider';
import Pagination from '../../Pagination';
import { Tooltip } from 'antd';
import { LinkContainer, StatusContainer } from '../DeploymentsTable/styles';
import TasksTableSkeleton from './TasksTableSkeleton';
import { PaginationWithSelector } from '../FactsTable/FactsTable';

dayjs.extend(duration);
dayjs.extend(utc);

type Task = {
	adminOnlyView: boolean;
	created: string;
	id: number;
	name: string;
	service: string;
	status: string;
	taskName: string;
	started: string | null;
	completed: string | null;
};

export type TasksProps = {
	tasks: Task[];
	basePath: string;
	cancelTask: (task: Task) => JSX.Element;
	skeleton?: false;
	resultDropdown?: ReactNode;
};

export type TasksTableSkeleton = {
	skeleton: true;
};

export type TasksTableProps = {
	resultsPerPage?: number;
} & (TasksTableSkeleton | TasksProps);

export const getTaskDuration = (task: Task) => {
	const taskStart = task.started || task.created;
	const durationStart = taskStart ? dayjs.utc(taskStart) : dayjs.utc();
	const durationEnd = task.completed ? dayjs.utc(task.completed) : dayjs.utc();
	const duration = dayjs.duration(durationEnd.diff(durationStart));

	const hours = String(Math.floor(duration.asHours())).padStart(2, '0');
	const minutes = String(duration.minutes()).padStart(2, '0');
	const seconds = String(duration.seconds()).padStart(2, '0');

	let result = '';
	if (hours !== '00') result += `${hours}hr `;
	result += `${minutes}m ${seconds}sec`;

	return result.trim();
};

const TasksTable = (props: TasksTableProps) => {
	const { resultsPerPage } = props;

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
		return <TasksTableSkeleton />;
	}

	const { tasks, basePath, resultDropdown, cancelTask } = props as TasksProps;

	// paginated data based on filtered results
	const paginatedData = pageSize > 0 ? tasks.slice((currentPage - 1) * pageSize, currentPage * pageSize) : tasks;

	const totalFilteredCount = tasks.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const TasksColumns = [
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
			title: 'Task Name/ID',
			dataIndex: 'name',
			key: 'name',
			width: '26.266%',
			render: (name: string, record: Task) => {
				return (
					<LinkContainer>
						<Link href={`${basePath}/${record.taskName}`}>{name}</Link>
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
			dataIndex: 'service',
			key: 'service',
			width: '14.506%',
		},
		{
			title: 'Duration',
			dataIndex: 'duration',
			key: 'duration',
			width: '16.73%',
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const remappedTasks =
		paginatedData &&
		paginatedData.map((task) => {
			const createdLocalTime = dayjs.utc(task.created).local();
			return {
				...task,
				created: (
					<Tooltip placement="top" title={createdLocalTime.format('YYYY-MM-DD HH:mm:ss')}>
						{createdLocalTime.fromNow()}
					</Tooltip>
				),
				//@ts-ignore
				status: <StatusTag type={task.status === 'succeeded' ? 'complete' : task.status} />,
				duration: getTaskDuration(task),
				actions: (
					<ActionWrap>
						<LinkContainer>
							<Link href={`${basePath}/${task.taskName}`}>
								<Tooltip placement="bottom" title="View task">
									<EyeOutlined />
								</Tooltip>
							</Link>
						</LinkContainer>
						{['new', 'pending', 'queued', 'running'].includes(task.status) ? (
							cancelTask(task)
						) : (
							<EmptyAction></EmptyAction>
						)}
					</ActionWrap>
				),
			};
		});

	return (
		<>
			<BaseTable dataSource={remappedTasks} columns={TasksColumns} rowKey={(record) => record.id} />

			<PaginationWithSelector>
				<section className="selector">{resultDropdown}</section>

				<Pagination
					total={totalFilteredCount}
					pageSize={pageSize === -1 ? Infinity : pageSize}
					current={currentPage}
					onChange={handlePageChange}
				/>
			</PaginationWithSelector>
		</>
	);
};

export default TasksTable;
