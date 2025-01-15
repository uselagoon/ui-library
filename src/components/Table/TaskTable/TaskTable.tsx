import BaseTable from '../Base';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ActionWrap, EmptyAction } from '../styles';
import duration from 'dayjs/plugin/duration';
import { Tooltip } from 'antd';
import isBetween from 'dayjs/plugin/isBetween';
import { StatusContainer } from '../DeploymentsTable/styles';
import StatusTag from '../../StatusTag';

import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import TaskTableSkeleton from './TaskTableSkeleton';
dayjs.extend(isBetween);
dayjs.extend(duration);
dayjs.extend(utc);

export type Task = {
	id: number;
	name: string;
	taskName: string;
	status: 'running' | 'complete' | 'failed' | 'error' | 'queued' | 'new' | 'cancelled';
	created: string;
	started: string | null;
	completed: string | null;
	service: string;
	logs: string | null;
	adminOnlyView: boolean;
	files: {
		id: number;
		filename: string;
		download: string;
		created: string;
	}[];
};

export type TaskTableSkeleton = {
	skeleton: true;
};

export type TaskTableProps =
	| {
			task: Task;
			cancelTask: (task: Task) => JSX.Element;
			skeleton?: false;
			children?: ReactNode;
	  }
	| TaskTableSkeleton;

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

const TaskTable = (props: TaskTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <TaskTableSkeleton />;
	}

	const { task, cancelTask, children } = props;

	const [expandedRowIds, setExpandedRowIds] = useState<number[]>([task.id]);

	// manually handle row expansion
	const handleExpand = (expanded: boolean, record: Task) => {
		setExpandedRowIds(expanded ? [...expandedRowIds, record.id] : expandedRowIds.filter((id) => id !== record.id));
	};

	const TaskColumns = [
		{
			title: 'Task name',
			dataIndex: 'name',
			key: 'name',
			width: '49.6%',
			render: (identifier: string, task: Task) => {
				return (
					<ExpandName onClick={() => handleExpand(!expandedRowIds.includes(task.id), task)}>{identifier}</ExpandName>
				);
			},
		},

		{
			title: 'Service',
			dataIndex: 'service',
			key: 'service',
			width: '14.506%',
		},

		{
			title: 'Created',
			dataIndex: 'created',
			key: 'created',
			width: '14.506%',
		},

		{
			title: 'Duration',
			dataIndex: 'duration',
			key: 'duration',
			width: '14.506%',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			width: '14.506%',
			render: (statusTag: ReturnType<typeof StatusTag>) => {
				return <StatusContainer>{statusTag}</StatusContainer>;
			},
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const remappedTask =
		task &&
		[task].map((task) => {
			const createdLocalTime = dayjs.utc(task.created).local();
			return {
				...task,
				created: (
					<Tooltip placement="top" title={createdLocalTime.format('YYYY-MM-DD HH:mm:ss')}>
						{createdLocalTime.fromNow()}
					</Tooltip>
				),
				status: (
					<>
						<StatusTag type={task.status} />
					</>
				),
				duration: getTaskDuration(task),
				actions: (
					<ActionWrap>
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
			<BaseTable
				dataSource={remappedTask}
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
				columns={TaskColumns}
				rowKey={(record) => record.id}
			/>
		</>
	);
};

export default TaskTable;

export const ExpandName = styled.span`
	text-decoration: underline;
	cursor: pointer;
`;

export const ExpandedRow = styled.div`
	margin: 0;
	background-color: ${(props) => (props.theme.colorScheme === 'light' ? '#fff' : 'transparent')};
`;
