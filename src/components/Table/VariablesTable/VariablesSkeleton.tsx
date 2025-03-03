import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const VariablesSkeleton = ({ withValues = true }: { withValues?: boolean }) => {
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
			width: withValues ? '11.32%' : '43.62%',
			render: () => <Skeleton height={35} />,
		},

		...(withValues
			? [
					{
						title: 'Value',
						dataIndex: 'value',
						key: 'value',
						render: () => <Skeleton height={35} />,
						width: '32.3%',
					},
				]
			: []),

		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={35} />,
		},
	];

	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 80);
	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `variables-skeleton-${index}`,
	}));

	return <BaseTable variant="default" dataSource={skeletons} columns={projectVariablesCols} />;
};

export default VariablesSkeleton;
