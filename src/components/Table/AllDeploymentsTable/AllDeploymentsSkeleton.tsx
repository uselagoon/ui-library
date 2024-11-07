import Skeleton from '../../Skeleton';
import BaseTable from '../Base';

const AllDeploymentsSkeleton = () => {
	const allDeploymentColumns = [
		{
			title: 'Project',
			dataIndex: 'project_name',
			key: 'project_name',
			width: '10%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Environment',
			dataIndex: 'environment_name',
			key: 'environment_name',
			width: '10%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Cluster',
			dataIndex: 'openshift_name',
			key: 'openshift_name',
			width: '10%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Deployment Name',
			dataIndex: 'deployment_name',
			key: 'deployment_name',
			width: '10%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Priority',
			dataIndex: 'priority',
			key: 'priority',
			width: '10%',
			render: () => <Skeleton height={48} />,
		},

		{
			title: 'Created',
			dataIndex: 'created',
			key: 'created',
			width: '20%',
			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			width: '10%',

			render: () => <Skeleton height={48} />,
		},
		{
			title: 'Duration',
			dataIndex: 'duration',
			key: 'duration',
			width: '10%',
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

	return (
		<BaseTable variant="alternate" dataSource={[...Array<undefined>(skeletonCount)]} columns={allDeploymentColumns} />
	);
};

export default AllDeploymentsSkeleton;
