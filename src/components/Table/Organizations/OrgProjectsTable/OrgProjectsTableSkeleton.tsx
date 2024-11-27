import Skeleton from '../../../Skeleton';
import BaseTable from '../../Base';

const OrgProjectsTableSkeleton = ({ type }: { type: 'standalone' | 'subTable' }) => {
	const projectsColumns = [
		{
			title: 'Project Name',
			dataIndex: 'name',
			key: 'name',
			width: type === 'standalone' ? '60.17%' : '87.57%',
			render: () => <Skeleton height={30} />,
		},

		...(type === 'standalone'
			? [
					{
						title: 'Groups',
						dataIndex: 'groupCount',
						key: 'groupCount',
						width: '27.4%',
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
		key: `org-project-skeleton-${index}`,
	}));

	return <BaseTable dataSource={skeletons} columns={projectsColumns} />;
};

export default OrgProjectsTableSkeleton;
