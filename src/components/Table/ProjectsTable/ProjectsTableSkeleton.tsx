import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const ProjectsTableSkeleton = () => {
	const projectsColumns = [
		{
			title: 'Project',
			dataIndex: 'name',
			key: 'name',
			render: () => <Skeleton height={30} />,
			width: '25%',
		},
		{
			title: 'Environments',
			dataIndex: 'environment_count',
			key: 'environment_count',
			render: () => <Skeleton height={30} />,
			width: '5%',
		},
		{
			title: 'Last Deployment',
			dataIndex: 'last_deployment',
			key: 'last_deployment',
			width: '10%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'Prod Route',
			dataIndex: 'prod_route',
			key: 'prod_route',
			width: '20%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'GitUrl',
			dataIndex: 'gitUrl',
			key: 'gitUrl',
			width: '30%',
			render: () => <Skeleton height={30} />,
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <Skeleton height={30} />,
			width: '10%',
		},
	];

	const skeletonCount = Math.floor((window.innerHeight * 8) / 10 / 40);

	const skeletons = [...Array(skeletonCount)].map((_, index) => ({
		key: `project-skeleton-${index}`,
	}));

	return <BaseTable variant="alternate" dataSource={skeletons} columns={projectsColumns} />;
};

export default ProjectsTableSkeleton;
