import Skeleton from '../../../Skeleton';
import BaseTable from '../../Base';

const OrgAdminsTableSkeleton = () => {
	const ownersColumns = [
		{
			title: 'First Name',
			dataIndex: 'firstName',
			key: 'firstName',
			width: '19.56%',
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
			title: 'Email / Role',
			dataIndex: 'email',
			key: 'email',
			width: '25.65%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'Groups',
			dataIndex: 'groupCount',
			key: 'groupCount',
			width: '22.17%',
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
		key: `org-admin-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={ownersColumns} />;
};

export default OrgAdminsTableSkeleton;
