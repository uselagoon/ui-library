import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const BackupsTableSkeleton = () => {
	const backupsColumns = [
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			width: '9.5%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Source',
			dataIndex: 'source',
			key: 'source',
			width: '11.76%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Backup ID',
			dataIndex: 'backupId',
			key: 'backupId',
			width: '44.81%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Timestamp',
			dataIndex: 'created',
			key: 'created',
			width: '17.43%',
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
		key: `backups-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={backupsColumns} />;
};

export default BackupsTableSkeleton;
