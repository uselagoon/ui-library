import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const DeploymentTableSkeleton = () => {
	const DeploymentColumns = [
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			width: '11.845%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Name/ID',
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
			dataIndex: 'sourceType',
			key: 'sourceType',
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
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={48} />,
		},
	];

	const skeletonCount = 1;
	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `deployment-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={DeploymentColumns} />;
};

export default DeploymentTableSkeleton;
