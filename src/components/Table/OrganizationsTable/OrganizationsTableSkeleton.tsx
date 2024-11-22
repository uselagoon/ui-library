import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const OrganizationsTableSkeleton = () => {
	const orgsColumns = [
		{
			title: 'Organization Name',
			dataIndex: 'orgname',
			key: 'orgname',
			width: '25.46%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'No. of Groups',
			dataIndex: 'group_count',
			key: 'group_count',
			render: () => <Skeleton height={30} />,
			width: '19.1%',
		},
		{
			title: 'No. of Projects',
			dataIndex: 'project_count',
			key: 'project_count',
			render: () => <Skeleton height={30} />,
			width: '24.2%',
		},
		{
			title: 'Target',
			dataIndex: 'target',
			key: 'target',
			width: '19.1%',
			render: () => <Skeleton height={30} />,
		},

		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={30} />,
		},
	];

	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 80);

	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `org-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={orgsColumns} />;
};

export default OrganizationsTableSkeleton;
