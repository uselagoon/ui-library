import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const InsightsTableSkeleton = () => {
	const insightsColumns = [
		{
			title: 'Name',
			dataIndex: 'file',
			key: 'file',
			width: '17.18%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Service',
			dataIndex: 'service',
			key: 'service',
			width: '24.7%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Type',
			dataIndex: 'type',
			key: 'type',
			width: '20.94%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Created',
			dataIndex: 'created',
			key: 'created',
			width: '20.94%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Size',
			dataIndex: 'size',
			key: 'size',
			width: '20.94%',
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
		key: `insights-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={insightsColumns} />;
};

export default InsightsTableSkeleton;
