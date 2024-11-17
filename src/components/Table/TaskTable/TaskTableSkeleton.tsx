import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const TaskTableSkeleton = () => {
	const TaskColumns = [
		{
			title: 'Task name',
			dataIndex: 'name',
			key: 'name',
			width: '49.6%',
			render: () => <Skeleton height={48} />,
		},

		{
			title: 'Service',
			dataIndex: 'service',
			key: 'service',
			width: '14.506%',
			render: () => <Skeleton height={48} />,
		},

		{
			title: 'Created',
			dataIndex: 'created',
			key: 'created',
			width: '14.506%',
			render: () => <Skeleton height={48} />,
		},

		{
			title: 'Duration',
			dataIndex: 'duration',
			key: 'duration',
			width: '14.506%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			width: '14.506%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={48} />,
		},
	];

	const skeletonCount = 1;
	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `task-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={TaskColumns} />;
};

export default TaskTableSkeleton;
