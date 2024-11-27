import Skeleton from '../../../Skeleton';
import BaseTable from '../../Base';

const OrgUsersSkeleton = ({ type }: { type: 'standalone' | 'subTable' }) => {
	const usersColumns = [
		{
			title: 'First Name',
			dataIndex: 'firstName',
			key: 'firstName',
			width: '23.65%',
			render: () => <Skeleton height={30} />,
		},

		{
			title: 'Last Name',
			dataIndex: 'lastName',
			key: 'lastName',
			width: '19.56%',
			render: () => <Skeleton height={30} />,
		},

		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			width: '24.78%',
			render: () => <Skeleton height={30} />,
		},

		...(type === 'standalone'
			? [
					{
						title: 'Groups',
						dataIndex: 'groupCount',
						key: 'groupCount',
						width: '19.56%',
						render: () => <Skeleton height={30} />,
					},
				]
			: [
					{
						title: 'Role',
						dataIndex: 'role',
						key: 'role',
						width: '19.56%',
						render: () => <Skeleton height={30} />,
					},
				]),

		,
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={30} />,
		},
	];

	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 80);

	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `org-user-skeleton-${index}`,
	}));
	// @ts-ignore
	return <BaseTable dataSource={skeletons} columns={usersColumns} />;
};

export default OrgUsersSkeleton;
