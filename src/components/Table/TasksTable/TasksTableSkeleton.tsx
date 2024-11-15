import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const TasksTableSkeleton = () => {
	const TasksColumns = [
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			width: '11.845%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Task Name/ID',
			dataIndex: 'name',
			key: 'name',
			width: '26.266%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Timestamp',
			dataIndex: 'created',
			key: 'created',
			width: '18.369%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Trigger',
			dataIndex: 'service',
			key: 'service',
			width: '14.506%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Duration',
			dataIndex: 'duration',
			key: 'duration',
			width: '16.73%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={48} />,
		},
	];

	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 80);

	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `tasks-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={TasksColumns} />;
};

export default TasksTableSkeleton;
