import Skeleton from '../../../Skeleton';
import BaseTable from '../../Base';

const OrgGroupsSkeleton = () => {
	const groupsColumns = [
		{
			title: 'Group Name',
			dataIndex: 'name',
			key: 'name',
			width: '60.17%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'Members',
			dataIndex: 'memberCount',
			key: 'memberCount',
			width: '27.4%',
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
		key: `org-group-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={groupsColumns} />;
};

export default OrgGroupsSkeleton;
