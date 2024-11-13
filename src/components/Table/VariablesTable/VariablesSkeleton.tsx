import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const VariablesSkeleton = () => {
	const projectVariablesCols = [
		{
			title: 'Variable Name',
			dataIndex: 'name',
			key: 'name',
			width: '44%',
			render: () => <Skeleton height={35} />,
		},
		{
			title: 'Scope',
			dataIndex: 'scope',
			key: 'scope',
			width: '11.32%',
			render: () => <Skeleton height={35} />,
		},
		{
			title: 'Value',
			dataIndex: 'value',
			key: 'value',
			render: () => <Skeleton height={35} />,
			width: '32.3%',
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={35} />,
		},
	];

	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 80);

	return (
		<BaseTable variant="default" dataSource={[...Array<undefined>(skeletonCount)]} columns={projectVariablesCols} />
	);
};

export default VariablesSkeleton;
