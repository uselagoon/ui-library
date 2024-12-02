import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const ProjectsTableSkeleton = () => {
	const projectsColumns = [
		{
			title: 'Project',
			dataIndex: 'name',
			key: 'name',
			width: '24.6%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'No. Envs',
			dataIndex: 'environment_count',
			key: 'environment_count',
			width: '8.39%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'Cluster',
			dataIndex: 'cluster',
			key: 'cluster',
			width: '10.32%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'Last Deployment',
			dataIndex: 'last_deployment',
			key: 'last_deployment',
			width: '10.32%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'Origin',
			dataIndex: 'origin',
			key: 'origin',
			width: '30.89%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={30} />,
		},
	];
	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 40);

	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `project-skeleton-${index}`,
	}));

	return <BaseTable variant="alternate" dataSource={skeletons} columns={projectsColumns} />;
};

export default ProjectsTableSkeleton;
