import Skeleton from '../../../Skeleton';
import BaseTable from '../../Base';

const OrgNotificationsSkeleton = ({ type }: { type: 'standalone' | 'subTable' }) => {
	const notifColumns = [
		{
			title: 'Notification Name',
			dataIndex: 'name',
			key: 'name',
			width: '19.56%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'Badge',
			dataIndex: 'type',
			key: 'type',
			width: type === 'standalone' ? '17.4%' : '67.4%',
			render: () => <Skeleton height={30} />,
		},

		...(type === 'standalone'
			? [
					{
						title: 'Webhook or Channel Details',
						dataIndex: 'details',
						key: 'details',
						width: '50%',
						render: () => <Skeleton height={30} />,
					},
				]
			: []),

		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={30} />,
		},
	];

	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 80);

	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `org-notification-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={notifColumns} />;
};

export default OrgNotificationsSkeleton;
