import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as BaseTable } from '../components/Table';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';
import {
	CarryOutOutlined,
	DeleteOutlined,
	DisconnectOutlined,
	EditOutlined,
	EyeOutlined,
	SmileOutlined,
	UserAddOutlined,
} from '@ant-design/icons';
import { LinkContainer } from '../components/Table/DeploymentsTable/styles';
import UISelect from '../components/Select/Select';

const meta: Meta<typeof BaseTable> = {
	component: BaseTable,
	title: 'Lagoon specific/Tables',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI Basic Table.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
};

type Story = StoryObj<typeof BaseTable>;

const cols = [
	{
		title: 'First Field',
		dataIndex: 'first',
		key: 'first',
		// nested elements
		render: (item) => <div>{item}</div>,
	},
	{
		title: 'Second',
		dataIndex: 'second',
		key: 'second',
		// nested elements
		render: (text: string) => (
			<div>
				<span>{text}</span>
			</div>
		),
	},
	{
		title: 'Third',
		dataIndex: 'third',
		key: 'third',
		// just a reactNode
		render: (text: string) => <div>{text}</div>,
	},
	{
		title: 'Another',
		dataIndex: 'another',
		key: 'another',
	},
	{
		title: 'Actions',
		dataIndex: 'actions',
		key: 'actions',
	},
];

export const Default: Story = {
	render: () => (
		<BaseTable.DefaultTable
			dataSource={[
				{
					first: <SmileOutlined />,
					second: 'Any data',
					third: 'Some data',
					another: 'Another data',
					actions: <EyeOutlined />,
				},
				{
					first: <SmileOutlined />,
					second: 'Any data',
					third: 'Some data',
					another: 'Another data',
					actions: <EyeOutlined />,
				},
				{
					first: <SmileOutlined />,
					second: 'Any data',
					third: 'Some data',
					another: 'Another data',
					actions: <EyeOutlined />,
				},
			]}
			columns={cols}
		/>
	),
};

export const ProjectsTable: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('demo');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.ProjectsTable
					projects={[
						{
							id: 18,
							name: 'lagoon-demo',
							problemsUi: 1,
							factsUi: 1,
							created: '2024-09-26 17:55:36',
							gitUrl: 'https://github.com/amazeeio-demos/some-project',
							productionEnvironment: 'main',
							environments: [
								{
									route: 'https://lagoondemo.example.org',
									name: 'main',
									updated: '2024-11-02 00:24:40',
									kubernetes: {
										id: 4,
										name: 'ui-kubernetes',
										cloudRegion: null,
									},
								},
							],
						},
						{
							id: 20,
							name: 'lagoon-demo-another',
							problemsUi: 1,
							factsUi: 1,
							created: '2024-09-26 17:55:36',
							gitUrl: 'https://github.com/amazeeio-demos/some-project',
							productionEnvironment: 'main',
							environments: [
								{
									route: 'https://lagoondemo.example.org',
									name: 'main',
									updated: '',
									kubernetes: {
										id: 4,
										name: 'ui-kubernetes',
										cloudRegion: null,
									},
								},
							],
						},
						{
							gitUrl: 'https://github.com/amazeeio-demos/project',
							id: 180,
							name: 'lagoon-demo-org',
							problemsUi: 1,
							factsUi: 1,
							created: '2024-09-26 17:55:41',
							productionEnvironment: 'main',
							environments: [
								{
									name: 'dev',
									route: 'https://lagoondemoorg.example.org',
									updated: '2024-11-01 20:39:57',
									kubernetes: {
										id: 5,
										name: 'ui-kubernetes-2',
										cloudRegion: null,
									},
								},
							],
						},
					]}
					basePath="/"
					filterString={filterString}
				/>
			</>
		);
	},
};
export const ProjectsTableSkeleton: Story = {
	render: () => <BaseTable.ProjectsTable skeleton />,
};

const envQuickActions = [
	{
		sectionTitle: 'Jump to an Environment',
		sectionChildren: [<></>],
	},
	{
		sectionTitle: 'Variables',
		sectionChildren: [
			<LinkContainer>
				<CarryOutOutlined />
				<span>View and create project variables</span>
			</LinkContainer>,
		],
	},
	{
		sectionTitle: 'Deploy',
		sectionChildren: [<></>],
	},
];

const fakeActiveRoutes = [<a target="_blank">{'some-route'}</a>, <a target="_blank">{'some-other-route'}</a>];

export const EnvironmentsTable: Story = {
	render: () => (
		<BaseTable.EnvironmentsTable
			basePath="/"
			filterString=""
			newEnvironmentModal={<button>Add Env</button>}
			environments={[
				{
					id: 3,
					title: 'main',
					name: 'main',
					deployType: 'branch',
					envType: 'production',
					region: 'US3',
					last_deployment: '2024-11-01 20:39:57',
					quickActions: envQuickActions,
				},
				{
					id: 4,
					title: 'staging',
					name: 'staging-env',
					deployType: 'branch',
					envType: 'standby production',
					region: 'US3',
					quickActions: envQuickActions,
				},
				{
					id: 6,
					title: 'pr-175',
					name: 'pr-some-name',
					deployType: 'pullrequest',
					envType: 'active production',
					region: 'US3',
					quickActions: envQuickActions,
				},
				{
					id: 181,
					title: 'Env name',
					name: 'as-demo-hmm-this-is-a-really-long-branch-name-designed-0d7b',
					deployType: 'branch',
					envType: 'development',
					region: 'US3',
					last_deployment: '2024-10-01 20:39:57',
					activeRoutes: fakeActiveRoutes,
					quickActions: envQuickActions,
				},
			]}
		/>
	),
};

export const EnvironmentsTableSkeleton: Story = {
	render: () => <BaseTable.EnvironmentsTable skeleton />,
};

export const DeploymentsTable: Story = {
	render: () => (
		<BaseTable.DeploymentsTable
			basePath="/"
			// resultsPerPage={-1}
			// filterDateRange={["2023-09-19", "2023-10-11"]}
			cancelDeployment={() => <></>}
			deployments={[
				{
					id: 4924,
					name: 'lagoon-build-gkv519',
					status: 'complete',
					created: '2024-12-02 06:22:53',
					buildStep: 'gatheringInsights',
					started: '2024-12-02 06:22:54',
					completed: '2024-12-02 06:29:28',
					bulkId: null,
					priority: null,
					sourceType: 'API',
				},
				{
					id: 3134,
					name: 'lagoon-build-8u9hye',
					status: 'running',
					created: '2023-10-18 03:06:54',
					buildStep: 'runningPostRolloutTasks',
					started: '2023-10-18 03:11:06',
					completed: '2023-10-18 03:12:26',
					bulkId: null,
					sourceType: 'API',
					priority: null,
				},
				{
					id: 1234,
					name: 'lagoon-build-new',
					status: 'new',
					created: '2023-10-18 03:06:54',
					buildStep: 'runningPostRolloutTasks',
					started: '2023-10-18 03:11:06',
					completed: '2023-10-18 03:12:26',
					bulkId: null,
					sourceType: 'API',
					priority: null,
				},
				{
					id: 3133,
					name: 'lagoon-build-svu3kd',
					status: 'failed',
					created: '2023-10-18 03:04:53',
					buildStep: 'runningPostRolloutTasks',
					started: '2023-10-18 03:05:24',
					completed: '2023-10-18 03:10:30',
					bulkId: 'someid',
					sourceType: 'WEBHOOK',
					priority: null,
				},
				{
					id: 2878,
					name: 'lagoon-build-anakk',
					status: 'complete',
					created: '2023-09-19 07:10:54',
					buildStep: 'deployCompletedWithWarnings',
					started: '2023-09-19 07:11:24',
					completed: '2023-09-19 07:17:22',
					bulkId: null,
					sourceType: 'API',
					priority: null,
				},
				{
					id: 2878,
					name: 'lagoon-build-anakk',
					status: 'cancelled',
					created: '2024-11-06 21:15:02',
					started: '2024-11-07 01:11:24',
					completed: '2024-11-07 01:17:22',
					bulkId: null,
					sourceType: 'API',
					priority: null,
				},
			]}
		/>
	),
};

export const DeploymentsTableSkeleton: Story = {
	render: () => <BaseTable.DeploymentsTable skeleton />,
};

export const DeploymentTable: Story = {
	render: () => (
		<BaseTable.DeploymentTable
			cancelDeployment={() => <></>}
			children={<>Extra children elements ( usually logViewer )</>}
			deployment={{
				id: 3134,
				name: 'lagoon-build-8u9hye',
				status: 'running',
				created: '2023-10-18 03:06:54',
				buildStep: 'runningPostRolloutTasks',
				started: '2023-10-18 03:11:06',
				completed: '2023-10-18 03:12:26',
				bulkId: null,
				sourceType: 'API',
				priority: null,
			}}
		/>
	),
};

export const DeploymentTableSkeleton: Story = {
	render: () => <BaseTable.DeploymentTable skeleton />,
};
export const AllDeploymentsTable: Story = {
	render: () => (
		<BaseTable.AllDeploymentsTable
			filterString=""
			cancelDeployment={() => <>cancel</>}
			deployments={[
				{
					id: 4830,
					name: 'lagoon-build-s9f37h',
					status: 'new',
					created: '2025-01-15 15:36:56',
					buildStep: null,
					priority: null,
					started: null,
					completed: null,
					environment: {
						name: 'davits-env-test',
						openshiftProjectName: 'davits-project-davits-env-test',
						openshift: {
							id: 1,
							name: 'test6.amazee.io',
						},
						project: {
							id: 693,
							name: 'davits-project',
						},
					},
				},
				{
					id: 4831,
					name: 'lagoon-build-asdfg',
					status: 'running',
					created: '2024-11-07 00:46:56',
					buildStep: null,
					priority: null,
					started: null,
					completed: null,
					environment: {
						name: 'davits-env-test-2',
						openshiftProjectName: 'davits-project-davits-env-test-another',
						openshift: {
							id: 1,
							name: 'test6.amazee.io',
						},
						project: {
							id: 693,
							name: 'davits-project',
						},
					},
				},
			]}
		/>
	),
};

export const AllDeploymentsTableSkeleton: Story = {
	render: () => <BaseTable.AllDeploymentsTable skeleton />,
};

export const BulkDeploymentsTable: Story = {
	render: () => (
		<BaseTable.BulkDeploymentsTable
			cancelDeployment={() => <>cancel</>}
			deployments={[
				{
					id: 2610,
					name: 'lagoon-build-jcox7g',
					status: 'failed',
					created: '2023-08-07 01:19:42',
					buildStep: 'routeConfigurationComplete',
					started: '2023-08-07 01:19:43',
					completed: '2023-08-07 01:21:00',
					bulkId: '23c6deb6-c248-4466-811d-f14bb709a7d9',
					bulkName: 'testing qos',
					priority: 3,
					environment: {
						name: 'master-alt-test1',
						openshiftProjectName: 'as-demo-test1-master-alt-test1',
						project: {
							name: 'as-demo-test1',
						},
					},
				},
				{
					id: 2611,
					name: 'lagoon-build-jcox7g',
					status: 'failed',
					created: '2024-08-07 01:19:42',
					buildStep: 'routeConfigurationComplete',
					started: '2023-08-07 01:19:43',
					completed: '2023-08-07 01:21:00',
					bulkId: '23c6deb6-c248-4466-811d-f14bb709a7d9',
					bulkName: 'testing qos',
					priority: 3,
					environment: {
						name: 'master-alt-test1',
						openshiftProjectName: 'as-demo-test1-master-alt-test1',
						project: {
							name: 'as-demo-test1',
						},
					},
				},
			]}
		/>
	),
};

export const BulkDeploymentsSkeleton: Story = {
	render: () => <BaseTable.BulkDeploymentsTable skeleton />,
};

export const BackupsTable: Story = {
	render: () => (
		<BaseTable.BackupsTable
			backups={[
				{
					id: 2,
					source: 'files',
					backupId: 'e2e1d31b4a7dfc1687f469b6673f6bf2c0aabee0cc6b3f1bdbde710a9bc6280f',
					created: '2023-10-14 00:33:16',
					restore: null,
				},
				{
					id: 1,
					source: 'mariadb',
					backupId: 'e2e1d31b4a7dfc1687f469b6673f6bf2c0aabee0cc6b3f1bdbde710a9bc6280d',
					created: '2023-10-14 00:33:16',
					restore: {
						id: 1,
						status: 'pending',
						restoreLocation: null,
						restoreSize: null,
					},
				},
				{
					id: 4,
					source: 'files',
					backupId: 'bf072a09e17726da54adc79936ec8745521993599d41211dfc9466dfd5bc32a5',
					created: '2023-10-13 00:33:16',
					restore: {
						id: 3,
						status: 'successful',
						restoreLocation: null,
						restoreSize: null,
					},
				},
				{
					id: 3,
					source: 'mariadb',
					backupId: 'e260f07c374e4a3319c5d46e688dab6f1eb23c3e61c166a37609d55762d2ee0b',
					created: '2023-10-13 00:33:16',
					restore: {
						id: 3,
						status: 'failed',
						restoreLocation: null,
						restoreSize: null,
					},
				},
			]}
			//@ts-ignore
			retrieveBackup={null}
		/>
	),
};

export const BackupsTableSkeleton: Story = {
	render: () => <BaseTable.BackupsTable skeleton />,
};

export const ProblemsTable: Story = {
	render: () => (
		<BaseTable.ProblemsTable
			problems={[
				{
					id: 53512,
					identifier: 'CVE-2023-39324',
					environment: {
						id: null,
						name: null,
					},
					data: '{}',
					severity: 'HIGH',
					source: 'insights-handler-trivy',
					service: 'php',
					created: '2024-10-01 06:49:35',
					deleted: '0000-00-00 00:00:00',
					severityScore: 0,
					associatedPackage: 'stdlib',
					description:
						'A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing. With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection. This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2. The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.',
					version: '1.21.1',
					fixedVersion: '1.20.10, 1.21.3',
					links: '',
				},
				{
					id: 53513,
					identifier: 'CVE-2023-39325',
					environment: {
						id: null,
						name: null,
					},
					data: '{}',
					severity: 'HIGH',
					source: 'insights-handler-trivy',
					service: 'php',
					created: '2024-10-01 06:49:35',
					deleted: '0000-00-00 00:00:00',
					severityScore: 0,
					associatedPackage: 'stdlib',
					description:
						'A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing. With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection. This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2. The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.',
					version: '1.21.1',
					fixedVersion: '1.20.10, 1.21.3',
					links: '',
				},
				{
					id: 53514,
					identifier: 'CVE-2024-39326',
					environment: {
						id: null,
						name: null,
					},
					data: '{}',
					severity: 'HIGH',
					source: 'insights-handler-trivy',
					service: 'php',
					created: '2024-11-01 08:49:35',
					deleted: '0000-00-00 00:00:00',
					severityScore: 0,
					associatedPackage: 'stdlib',
					description:
						'A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing. With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection. This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2. The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.',
					version: '1.21.1',
					fixedVersion: '1.20.10, 1.21.3',
					links: '',
				},
			]}
		/>
	),
};

export const ProblemsTableSkeleton: Story = {
	render: () => <BaseTable.ProblemsTable skeleton />,
};

export const FactsTableWithCustomSorters: Story = {
	render: () => (
		<BaseTable.FactsTable
			resultDropdown={<UISelect placeholder="Results per page" />}
			sortBy="source_asc"
			facts={[
				{
					id: 15686,
					name: 'PHP',
					value: '8.0.30',
					source: 'insights:image:cli',
					description: 'The currently installed PHP version',
				},
				{
					id: 15695,
					name: 'Drush',
					value: '11.0.6',
					source: 'insights:sbom:nginx',
					description: 'pkg:composer/drush/drush@11.0.6',
				},
			]}
		/>
	),
};

export const FactsTableSkeleton: Story = {
	render: () => <BaseTable.FactsTable skeleton />,
};

export const TasksTable: Story = {
	render: () => (
		<BaseTable.TasksTable
			cancelTask={() => <></>}
			basePath="/"
			tasks={[
				{
					id: 756,
					name: 'Drush cache-clear',
					taskName: 'lagoon-task-aiycwi',
					status: 'complete',
					service: 'cli',
					adminOnlyView: false,
					created: '2023-10-18 03:06:54',
					started: '2023-10-18 03:11:06',
					completed: '2023-10-18 03:12:26',
				},
				{
					id: 755,
					name: 'Drush cache-clear',
					taskName: 'lagoon-task-p0te66',
					status: 'complete',
					service: 'cli',
					adminOnlyView: false,
					created: '2023-10-18 03:06:54',
					started: '2023-10-18 03:11:06',
					completed: '2023-10-18 03:12:26',
				},
				{
					id: 357,
					name: 'Drush sql-dump',
					taskName: 'lagoon-task-vfzokv',
					status: 'complete',
					service: 'cli',
					adminOnlyView: false,
					created: '2023-10-18 03:06:54',
					started: '2023-10-18 03:11:06',
					completed: '2023-10-18 03:12:26',
				},
				{
					id: 356,
					name: 'Drush cache-clear',
					taskName: 'lagoon-task-ut677j',
					status: 'complete',
					service: 'cli',
					adminOnlyView: false,
					created: '2023-10-18 03:06:54',
					started: '2023-10-18 03:11:06',
					completed: '2023-10-18 03:12:26',
				},
				{
					id: 350,
					name: 'Drush cron',
					taskName: 'lagoon-task-w7esh4',
					status: 'complete',
					service: 'cli',
					adminOnlyView: false,
					created: '2023-10-18 03:06:54',
					started: '2023-10-18 03:11:06',
					completed: '2023-10-18 03:12:26',
				},
				{
					id: 349,
					name: 'Drush sql-dump',
					taskName: 'lagoon-task-6010fi',
					status: 'complete',
					service: 'cli',
					adminOnlyView: false,
					created: '2023-10-18 03:06:54',
					started: '2023-10-18 03:11:06',
					completed: '2023-10-18 03:12:26',
				},
			]}
		/>
	),
};

export const TasksTableSkeleton: Story = {
	render: () => <BaseTable.TasksTable skeleton />,
};

export const TaskTable: Story = {
	render: () => (
		<BaseTable.TaskTable
			cancelTask={() => <></>}
			children={<>Extra children elements ( usually logViewer )</>}
			task={{
				id: 756,
				name: 'Drush cache-clear',
				taskName: 'lagoon-task-aiycwi',
				status: 'complete',
				service: 'cli',
				adminOnlyView: false,
				created: '2023-10-18 03:06:54',
				started: '2023-10-18 03:11:06',
				logs: null,
				files: [],
				completed: '2023-10-18 03:12:26',
			}}
		/>
	),
};

export const TaskTableSkeleton: Story = {
	render: () => <BaseTable.TaskTable skeleton />,
};

export const InsightsTable: Story = {
	render: () => (
		<BaseTable.InsightsTable
			sortBy="name_desc"
			resultDropdown={<UISelect placeholder="Number of results" />}
			insights={[
				{
					id: 1,
					file: 'image-drupal9-base-gitlab-main-cli.json',
					fileId: null,
					service: 'cli',
					type: 'image',
					size: '15.6 KB',
					downloadUrl:
						'https://storage.googleapis.com/amazeeio-test6-lagoon-files/insights/drupal9-base-gitlab/main/image-drupal9-base-gitlab-main-cli.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GOOG1EXLRRRVFU2BASVJRBGYKJOHHXXIH7M2P7C37BWC42MSOQRJ52HUW5OUQ%2F20241031%2FEUROPE-WEST6%2Fs3%2Faws4_request&X-Amz-Date=20241031T025537Z&X-Amz-Expires=600&X-Amz-Signature=25291e376a062d57216c0240a98112f2d6fd0c2fb787a9fceff875da981652d7&X-Amz-SignedHeaders=host',
					created: '2024-10-01T06:48:40.272Z',
				},
				{
					id: 3,
					file: 'image-drupal9-base-gitlab-main-php.json',
					fileId: null,
					service: 'php',
					type: 'image',
					size: '9.7 KB',
					downloadUrl:
						'https://storage.googleapis.com/amazeeio-test6-lagoon-files/insights/drupal9-base-gitlab/main/image-drupal9-base-gitlab-main-php.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GOOG1EXLRRRVFU2BASVJRBGYKJOHHXXIH7M2P7C37BWC42MSOQRJ52HUW5OUQ%2F20241031%2FEUROPE-WEST6%2Fs3%2Faws4_request&X-Amz-Date=20241031T025537Z&X-Amz-Expires=600&X-Amz-Signature=235f3106a6c8b18c6b3363032cb0948c8f2e9f6115fde95d76c77434f737c098&X-Amz-SignedHeaders=host',
					created: '2024-10-01T06:49:20.005Z',
				},
			]}
		/>
	),
};

export const InsightsTableSkeleton: Story = {
	render: () => <BaseTable.InsightsTable skeleton />,
};

export const ProjectVariablesTable: Story = {
	render: () => {
		return (
			<BaseTable.VariablesTable
				type="project"
				newVariableModal={<>+ ADD NEW</>}
				deleteVariableModal={(current) => (
					<>
						<DeleteOutlined />
					</>
				)}
				editVariableModal={(current) => (
					<>
						<EditOutlined />
					</>
				)}
				variables={[
					{
						id: 3268,
						name: 'fsdfsd',
						scope: 'build',
						value:
							'MIIEowIBAAKCAQEAl284IYTVPSt0Jz8/abcdefabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc',
					},
					{
						id: 154,
						name: 'INTERNAL_REGISTRY_PASSWORD',
						scope: 'internal_container_registry',
						value:
							'MIIEowIBAAKCAQEAl284IYTVPSt0Jz8/abcdefabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc',
					},
					{
						id: 152,
						name: 'INTERNAL_REGISTRY_URL',
						scope: 'internal_container_registry',
						value:
							'MIIEowIBAAKCAQEAl284IYTVPSt0Jz8/abcdefabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc',
					},
					{
						id: 153,
						name: 'INTERNAL_REGISTRY_USERNAME',
						scope: 'internal_container_registry',
						value:
							'MIIEowIBAAKCAQEAl284IYTVPSt0Jz8/abcdefabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc',
					},
					{
						id: 235,
						name: 'LAGOON_BAAS_BUCKET_NAME',
						scope: 'global',
						value:
							'MIIEowIBAAKCAQEAl284IYTVPSt0Jz8/abcdefabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc',
					},
					{
						id: 229,
						name: 'LAGOON_FEATURE_FLAG_ROOTLESS_WORKLOAD',
						value: 'some random value that is not too long',
						scope: 'global',
					},
					{
						id: 3269,
						name: 'sdfsdg',
						scope: 'runtime',
					},
				]}
			/>
		);
	},
};

export const ProjectVariablesTableSkeleton: Story = {
	render: () => {
		return <BaseTable.VariablesTable skeleton />;
	},
};

export const ProjectVariablesTableWithoutValuesSkeleton: Story = {
	render: () => {
		return <BaseTable.VariablesTable withValues={false} skeleton />;
	},
};

export const ProjectVariablesTableWithoutValues: Story = {
	render: () => {
		return (
			<BaseTable.VariablesTable
				type="project"
				withValues={false}
				newVariableModal={<>+ ADD NEW</>}
				deleteVariableModal={(current) => (
					<>
						<DeleteOutlined />
					</>
				)}
				editVariableModal={(current) => (
					<>
						<EditOutlined />
					</>
				)}
				variables={[
					{
						id: 3268,
						name: 'fsdfsd',
						scope: 'build',
					},
					{
						id: 154,
						name: 'INTERNAL_REGISTRY_PASSWORD',
						scope: 'internal_container_registry',
					},
					{
						id: 152,
						name: 'INTERNAL_REGISTRY_URL',
						scope: 'internal_container_registry',
					},
					{
						id: 153,
						name: 'INTERNAL_REGISTRY_USERNAME',
						scope: 'internal_container_registry',
					},
					{
						id: 235,
						name: 'LAGOON_BAAS_BUCKET_NAME',
						scope: 'global',
					},
					{
						id: 229,
						name: 'LAGOON_FEATURE_FLAG_ROOTLESS_WORKLOAD',
						scope: 'global',
					},
					{
						id: 3269,
						name: 'sdfsdg',
						scope: 'runtime',
					},
				]}
			/>
		);
	},
};

export const EnvVariablesTable: Story = {
	render: () => {
		return (
			<BaseTable.VariablesTable
				type="environment"
				resultDropdown={<UISelect />}
				newVariableModal={<>+ ADD NEW</>}
				deleteVariableModal={(current) => (
					<>
						<DeleteOutlined />
					</>
				)}
				editVariableModal={(current) => (
					<>
						<EditOutlined />
					</>
				)}
				variables={[
					{
						id: 3268,
						name: 'fsdfsd',
						scope: 'build',
						value:
							'MIIEowIBAAKCAQEAl284IYTVPSt0Jz8/abcdefabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc',
					},
					{
						id: 154,
						name: 'INTERNAL_REGISTRY_PASSWORD',
						scope: 'internal_container_registry',
						value:
							'MIIEowIBAAKCAQEAl284IYTVPSt0Jz8/abcdefabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc',
					},
					{
						id: 152,
						name: 'INTERNAL_REGISTRY_URL',
						scope: 'internal_container_registry',
						value: '123321321123',
					},
					{
						id: 153,
						name: 'INTERNAL_REGISTRY_USERNAME',
						scope: 'internal_container_registry',
						value: 'MIIEowIBAAKCAQEAl284IYTVPSt0Jz8',
					},
					{
						id: 235,
						name: 'LAGOON_BAAS_BUCKET_NAME',
						scope: 'global',
						value:
							'MIIEowIBAAKCAQEAl284IYTVPSt0Jz8/abcdefabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc',
					},
					{
						id: 229,
						name: 'LAGOON_FEATURE_FLAG_ROOTLESS_WORKLOAD',
						value: 'some random value that is not too long',
						scope: 'global',
					},
					{
						id: 3269,
						name: 'sdfsdg',
						scope: 'runtime',
					},
				]}
			/>
		);
	},
};

export const EnvVariablesTableSkeleton: Story = {
	render: () => {
		return <BaseTable.VariablesTable skeleton />;
	},
};

export const EnvVariablesTableWithoutValues: Story = {
	render: () => {
		return (
			<BaseTable.VariablesTable
				type="environment"
				resultDropdown={<UISelect />}
				newVariableModal={<>+ ADD NEW</>}
				withValues={false}
				deleteVariableModal={(current) => (
					<>
						<DeleteOutlined />
					</>
				)}
				editVariableModal={(current) => (
					<>
						<EditOutlined />
					</>
				)}
				variables={[
					{
						id: 3268,
						name: 'fsdfsd',
						scope: 'build',
					},
					{
						id: 152,
						name: 'INTERNAL_REGISTRY_URL',
						scope: 'internal_container_registry',
					},
					{
						id: 153,
						name: 'INTERNAL_REGISTRY_USERNAME',
						scope: 'internal_container_registry',
					},
					{
						id: 235,
						name: 'LAGOON_BAAS_BUCKET_NAME',
						scope: 'global',
					},
					{
						id: 229,
						name: 'LAGOON_FEATURE_FLAG_ROOTLESS_WORKLOAD',
						scope: 'global',
					},
					{
						id: 3269,
						name: 'sdfsdg',
						scope: 'runtime',
					},
				]}
			/>
		);
	},
};

export const EnvVariablesTableWithoutValuesSkeleton: Story = {
	render: () => {
		return <BaseTable.VariablesTable withValues={false} skeleton />;
	},
};

export const SshTable: Story = {
	render: () => (
		<BaseTable.SshTable
			sshKeys={[
				{
					id: 860,
					name: 'test_key',
					keyType: 'ssh-rsa',
					keyValue:
						'AAAAB3NzaC1yc2EAAAADAQABAAABAQDHtdKrUiIH0k3gBtt+B+TysUFKbbVcqTMryOc4UaEtrkr5ll6MGEMxg3ciHe0cbNRJTkOTZkX6X2+wTFZ2AdWgX4XHdN5NSV05w6ghN5rZLRN5hp2U8PGIL23zYwauQRRBBpikBSu1VSy/FVDbdTq1KXs8Mbon+b4gVgKubHo/fqX6z6UkRHDWpKN21O2Sm/438lTA9zrmzHwUtS+C74cgHhtUR3C+xyDuabSO0mr2hpxAZ88G+8Kl+xskhm7rbLRhozfRe6OumGUKha9Ji9pcUxg6A1GiEnt1eAPA17+gGL2eHY7jviu/DN2cA+zvnLrhlRX/fRN0xGfWyGZB/rv7',
					created: '2024-10-16 07:41:52',
					keyFingerprint: 'SHA256:7Ttu+Jr/RWEq56OUvpme5wceKMCcOkKmVuv6f8TSdiE',
				},
				{
					id: 862,
					name: 'test_key2',
					keyType: 'ssh-rsa',
					keyValue:
						'AAAAB3NzaC1yc2EAAAADAQABAAABAQDHtdKrUiIH0k3gBtt+B+TysUFKbbVcqTMryOc4UaEtrkr5ll6MGEMxg3ciHe0cbNRJTkOTZkX6X2+wTFZ2AdWgX4XHdN5NSV05w6ghN5rZLRN5hp2U8PGIL23zYwauQRRBBpikBSu1VSy/FVDbdTq1KXs8Mbon+b4gVgKubHo/fqX6z6UkRHDWpKN21O2Sm/438lTA9zrmzHwUtS+C74cgHhtUR3C+xyDuabSO0mr2hpxAZ88G+8Kl+xskhm7rbLRhozfRe6OumGUKha9Ji9pcUxg6A1GiEnt1eAPA17+gGL2eHY7jviu/DN2cA+zvnLrhlRX/fRN0xGfWyGZB/rv1',
					created: '2024-10-16 09:51:26',
					keyFingerprint: 'SHA256:zzjbga1eKP2w4b++1VADPHTQD98aJIvkJNzLTm1X/zg',
				},
			]}
			addNewKey={{
				loading: true,
				// @ts-ignore
				addMutation: () => {},
			}}
		/>
	),
};

export const OrganizationsTable: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('test');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrganizationsTable
					filterString={filterString}
					basePath="/organizations"
					organizations={[
						{
							id: 26,
							name: 'test-organization',
							description: 'some description',
							friendlyName: 'test-organization',
							quotaProject: 1,
							quotaGroup: 10,
							groups: [
								{
									id: 'some-id',
									type: 'project-default-group',
								},
								{
									id: 'some-id-2',
								},
							],
							projects: [
								{
									id: 654,
								},
							],
							deployTargets: [
								{
									id: 1,
									name: 'test6.amazee.io',
								},
								{
									id: 2,
									name: 'us2.amazee.io',
								},
								{
									id: 3,
									name: 'amazeeio-test1',
								},
								{
									id: 4,
									name: 'amazeeio-test9',
								},
							],
						},
					]}
				/>
			</>
		);
	},
};
export const OrganizationsTableSkeleton: Story = {
	render: () => <BaseTable.OrganizationsTable skeleton />,
};

export const OrgGroupsTable: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrgGroupsTable
					newGroupModal={<>+ Add group</>}
					deleteUserModal={(current) => (
						<>
							<DeleteOutlined />
						</>
					)}
					addUserModal={(current) => (
						<>
							<UserAddOutlined />
						</>
					)}
					resultDropdown={<UISelect placeholder="Results per page" defaultOpen={false} />}
					filterString={filterString}
					basePath="/groups"
					showDefaults
					groups={[
						{
							id: 'randomstring',
							name: 'some-group',
							type: 'null',
							memberCount: 1,
						},
						{
							id: 'randomstring2',
							name: 'davits-test-group',
							type: 'null',
							memberCount: 20,
						},
						{
							id: 'randomstring3',
							name: 'third-group',
							type: 'null',
							memberCount: 2,
						},
						{
							id: 'randomstring4',
							name: 'default-group',
							type: 'project-default-group',
							memberCount: 1,
						},
						{
							id: 'randomstring5',
							name: 'another-default',
							type: 'project-default-group',
							memberCount: 1,
						},
					]}
				/>
			</>
		);
	},
};
export const OrgGroupsSkeleton: Story = {
	render: () => <BaseTable.OrgGroupsTable skeleton />,
};

export const OrgsUsersTable: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrgUsersTable
					newUserModal={<>+ Add user</>}
					deleteUserModal={(current) => (
						<>
							<DeleteOutlined />
						</>
					)}
					resultDropdown={<UISelect placeholder="Results per page" defaultOpen={false} />}
					filterString={filterString}
					basePath="/users"
					users={[
						{
							id: '1',
							firstName: 'Admin',
							lastName: 'Adminson',
							email: 'adminuser@amazee.io',
							groupRoles: [
								{
									id: 'g1',
									role: 'MAINTAINER',
								},
								{
									id: 'g2',
									role: 'OWNER',
								},
								{
									id: 'g3',
									role: 'MAINTAINER',
								},
								{
									id: 'g4',
									role: 'MAINTAINER',
								},
							],
						},
						{
							id: '2342e5f5-258e-4e61-b7de-3175523ae524',
							firstName: 'Someone',
							lastName: 'Else',
							email: 'someone.somewhere@amazee.io',
							groupRoles: [
								{
									id: '123',
									role: 'MAINTAINER',
								},
								{
									id: '321',
									role: 'OWNER',
								},
							],
						},
						{
							id: '1233',
							firstName: 'Larry',
							lastName: 'User-one',
							email: 'someUser@example.com',
							groupRoles: [
								{
									id: '3211',
									role: 'OWNER',
								},
							],
						},

						{
							id: '5',
							firstName: null,
							lastName: null,
							email: 'default-user@project-testing',
							groupRoles: [
								{
									id: '4',
									role: 'MAINTAINER',
								},
							],
						},
						{
							id: '1',
							firstName: null,
							lastName: null,
							email: 'default-user@service',
							groupRoles: [
								{
									id: '2',
									role: 'MAINTAINER',
								},
							],
						},
					]}
				/>
			</>
		);
	},
};
export const OrgUsersTableSkeleton: Story = {
	render: () => <BaseTable.OrgUsersTable skeleton type="standalone" />,
};

export const OrgUserGroupsTable: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrgUserGroupsTable
					unlinkGroupModal={(current) => (
						<>
							<DisconnectOutlined />
						</>
					)}
					editUserRoleModal={(current) => (
						<>
							<EditOutlined />
						</>
					)}
					resultDropdown={<UISelect placeholder="Results per page" defaultOpen={false} />}
					filterString={filterString}
					basePath="/users"
					userGroups={[
						{
							id: '1',
							name: 'some-group',
							role: 'DEVELOPER',
							groupType: 'null',
						},
						{
							id: '2',
							name: 'some-other-group',
							role: 'OWNER',
							groupType: 'null',
						},
						{
							id: '2',
							name: 'default',
							role: 'REPORTER',
							groupType: 'project-default-group',
						},
					]}
				/>
			</>
		);
	},
};
export const OrgUserGroupsSkeleton: Story = {
	render: () => <BaseTable.OrgUserGroupsTable skeleton />,
};

export const OrgsUsersTableSub: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrgUsersTable
					type="subTable"
					newUserModal={<>+ Add user</>}
					unlinkUserModal={(current) => (
						<>
							<DisconnectOutlined />
						</>
					)}
					editUserGroupRoleModal={(currentUser) => {
						return (
							<>
								<EditOutlined />
							</>
						);
					}}
					resultDropdown={<UISelect placeholder="Results per page" defaultOpen={false} />}
					filterString={filterString}
					basePath="/users"
					users={[
						{
							firstName: 'Admin',
							lastName: 'Adminson',
							email: 'adminuser@amazee.io',
							role: 'MAINTAINER',
						},
						{
							firstName: 'Someone',
							lastName: 'Else',
							email: 'someone.somewhere@amazee.io',
							role: 'OWNER',
						},
						{
							firstName: 'Larry',
							lastName: 'User-one',
							email: 'someUser@example.com',
							role: 'GUEST',
						},

						{
							firstName: null,
							lastName: null,
							email: 'default-user@project-testing',
							role: 'OWNER',
						},
						{
							firstName: null,
							lastName: null,
							email: 'default-user@service',
							role: 'MAINTAINER',
						},
					]}
				/>
			</>
		);
	},
};

export const OrgUsersTableSkeletonSub: Story = {
	render: () => <BaseTable.OrgUsersTable skeleton type="subTable" />,
};

export const OrgProjectsTable: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrgProjectsTable
					newProjectModal={<>+ Add Project</>}
					deleteProjectModal={(current) => (
						<>
							<DeleteOutlined />
						</>
					)}
					resultDropdown={<UISelect placeholder="Results per page" defaultOpen={false} />}
					filterString={filterString}
					basePath="/projects"
					projects={[
						{
							id: 1,
							name: 'a-lot-of-testing',
							groupCount: 2,
						},
						{
							id: 2,
							name: 'some-project',
							groupCount: 0,
						},
						{
							id: 3,
							name: 'test-nginx',
							groupCount: 1,
						},
						{
							id: 4,
							name: 'project-testing',
							groupCount: 1,
						},
						{
							id: 5,
							name: 'test-project-example',
							groupCount: 2,
						},
						{
							id: 6,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 7,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 8,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 9,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 10,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 11,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 12,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 13,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 14,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 15,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 16,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 17,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 18,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 19,
							name: 'teststaticpoc',
							groupCount: 1,
						},
						{
							id: 20,
							name: 'teststaticpoc',
							groupCount: 1,
						},
					]}
				/>
			</>
		);
	},
};
export const OrgProjectsSkeleton: Story = {
	render: () => <BaseTable.OrgProjectsTable skeleton type="standalone" />,
};

export const OrgProjectsTableSub: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrgProjectsTable
					type="subTable"
					newProjectModal={<>+ Add Project</>}
					unlinkProjectModal={(current) => (
						<>
							<DisconnectOutlined />
						</>
					)}
					resultDropdown={<UISelect placeholder="Results per page" defaultOpen={false} />}
					filterString={filterString}
					basePath="/projects"
					projects={[
						{
							id: 1,
							name: 'a-lot-of-testing',
						},
						{
							id: 2,
							name: 'some-project',
						},
						{
							id: 3,
							name: 'test-nginx',
						},
						{
							id: 4,
							name: 'project-testing',
						},
						{
							id: 5,
							name: 'test-project-example',
						},
						{
							id: 6,
							name: 'teststaticpoc',
						},
					]}
				/>
			</>
		);
	},
};
export const OrgProjectsSkeletonSub: Story = {
	render: () => <BaseTable.OrgProjectsTable skeleton type="subTable" />,
};

export const OrgNotificationsTable: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrgNotificationsTable
					orgName="some-org"
					newNotificationModal={<>+ Add Notification</>}
					editNotificationModal={(current) => (
						<>
							<EditOutlined />
						</>
					)}
					deleteNotificationModal={(current) => (
						<>
							<DeleteOutlined />
						</>
					)}
					filterString={filterString}
					notifications={{
						slacks: [
							{
								webhook: 'slackhook-edited-foo',
								name: 'slack-edited-foo',
								channel: 'channelslack-edited-foo',
							},
							{
								webhook: '9999999991',
								name: 'slack-edited1',
								channel: 'channelslack-edited21',
							},
						],
						emails: [
							{
								emailAddress: 'email-OG@gmail.com',
								name: 'test-email-edited-again',
							},
							{
								emailAddress: 'email2@gmail.com',
								name: 'test-email-edited',
							},
						],
						rocketChats: [
							{
								webhook: 'rocket-edited-again-test2',
								name: 'rocket-test-edited-again',
								channel: 'somechannel',
							},
						],
						webhooks: [
							{
								webhook: 'webhook-edited-again-test2',
								name: 'webhook-test-edited-again',
							},
						],
					}}
				/>
			</>
		);
	},
};
export const OrgNotificationsSkeleton: Story = {
	render: () => <BaseTable.OrgNotificationsTable skeleton type="standalone" />,
};

export const OrgNotificationsTableSub: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrgNotificationsTable
					orgName="some-org"
					type="subTable"
					newNotificationModal={<>+ Link Notification</>}
					unlinkNotificationModal={(current) => (
						<>
							<DisconnectOutlined />
						</>
					)}
					filterString={filterString}
					notifications={{
						slacks: [
							{
								name: 'slack-edited-foo',
							},
							{
								name: 'slack-edited1',
							},
						],
						emails: [
							{
								name: 'test-email-edited-again',
							},
							{
								name: 'test-email-edited',
							},
						],
						webhooks: [
							{
								name: 'webhook-test-edited-again',
							},
						],
					}}
				/>
			</>
		);
	},
};
export const OrgNotificationsSkeletonSub: Story = {
	render: () => <BaseTable.OrgNotificationsTable skeleton type="subTable" />,
};

export const OrgAdminsTable: Story = {
	render: () => {
		const [filterString, setFilterString] = useState('');

		return (
			<>
				<input type="text" placeholder="placeholder filter string" onChange={(e) => setFilterString(e.target.value)} />

				<br />
				<BaseTable.OrgAdminsTable
					addNewOwnerModal={<>+ Add Admin</>}
					editOwnerModal={(current) => (
						<>
							<EditOutlined />
						</>
					)}
					deleteOwnerModal={(current) => (
						<>
							<DeleteOutlined />
						</>
					)}
					filterString={filterString}
					owners={[
						{
							id: '11111',
							firstName: 'Saul',
							lastName: 'Goodman',
							email: 'email@amazee.io',
							owner: true,
							admin: null,
							groupRoles: [{ id: '123' }],
						},

						{
							id: '1234',
							firstName: 'Another',
							lastName: 'UserOwner',
							email: 'ownerUser@amazee.io',
							owner: true,
							admin: null,
							groupRoles: [{ id: '123' }, { id: '1234' }],
						},
						{
							id: '321',
							firstName: null,
							lastName: null,
							email: 'default-user@testing',
							owner: null,
							admin: true,
							groupRoles: [{ id: '123' }],
						},
						{
							id: '12345',
							firstName: 'User',
							lastName: 'lastname',
							email: 'some.one@amazee.io',
							owner: null,
							admin: null,
							groupRoles: [{ id: '123' }],
						},
					]}
				/>
			</>
		);
	},
};
export const OrgAdminsSkeleton: Story = {
	render: () => <BaseTable.OrgAdminsTable skeleton />,
};
export default meta;
