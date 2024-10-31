import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const FactsTableSkeleton = () => {
	const factsColumns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: '17.18%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			width: '24.7%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Source',
			dataIndex: 'source',
			key: 'source',
			width: '20.94%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Value',
			dataIndex: 'value',
			key: 'value',
			width: '20.94%',
			render: () => <Skeleton height={48} />,
		},
	];

	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 80);

	return <BaseTable dataSource={[...Array<undefined>(skeletonCount)]} columns={factsColumns} />;
};

export default FactsTableSkeleton;
