import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const EnvironmentsTableSkeleton = () => {
	const envColumns = [
		{
			title: 'Usage',
			dataIndex: 'envType',
			key: 'envType',
			render: () => <Skeleton height={35} />,
			width: '10.9%',
		},
		{
			title: 'Env Name',
			dataIndex: 'title',
			key: 'title',
			render: () => <Skeleton height={35} />,
			width: '17.31%',
		},
		{
			title: 'Region',
			dataIndex: 'region',
			key: 'region',
			render: () => <Skeleton height={35} />,
			width: '10.64%',
		},
		{
			title: 'Type',
			dataIndex: 'deployType',
			key: 'deployType',
			width: '10.64%',
			render: () => <Skeleton height={35} />,
		},
		{
			title: 'Last Deployment',
			dataIndex: 'last_deployment',
			key: 'last_deployment',
			width: '10.64%',
			render: () => <Skeleton height={35} />,
		},
		{
			title: 'Routes',
			dataIndex: 'activeRoutes',
			key: 'activeRoutes',
			width: '29.69%',
			render: () => <Skeleton height={35} />,
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={35} />,
		},
	];
	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 80);
	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `envs-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={envColumns} />;
};

export default EnvironmentsTableSkeleton;
