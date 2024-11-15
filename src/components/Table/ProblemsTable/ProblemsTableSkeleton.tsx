import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const ProblemsTableSkeleton = () => {
	const ProblemsColumns = [
		{
			title: 'CVE ID',
			dataIndex: 'identifier',
			key: 'identifier',
			width: '12.25%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Detected',
			dataIndex: 'created',
			key: 'created',
			width: '11.25%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Source',
			dataIndex: 'source',
			key: 'source',
			width: '13.6%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Service',
			dataIndex: 'service',
			key: 'service',
			width: '9.89%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Package',
			dataIndex: 'packageWithVersion',
			key: 'packageWithVersion',
			width: '20.87%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			width: '21.77%',
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
		key: `problems-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={ProblemsColumns} />;
};

export default ProblemsTableSkeleton;
