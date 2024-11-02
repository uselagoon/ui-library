import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as BaseTable } from '../components/Table';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';
import { EyeOutlined, SmileOutlined } from '@ant-design/icons';

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
		<BaseTable
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

export const DeploymentsTable: Story = {
	render: () => (
		<BaseTable.DeploymentsTable
			basePath="/"
			// resultsPerPage={-1}
			// filterDateRange={["2023-09-19", "2023-10-11"]}
			cancelDeployment={() => <></>}
			deployments={[
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
					bulkId: null,
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
			]}
		/>
	),
};

export const DeploymentsTableSkeleton: Story = {
	render: () => <BaseTable.DeploymentsTable skeleton />,
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
			// problems={[
			// 	{
			// 		id: 53512,
			// 		identifier: 'CVE-2023-39325',
			// 		environment: {
			// 			id: null,
			// 			name: null,
			// 		},
			// 		data: '{}',
			// 		severity: 'HIGH',
			// 		source: 'insights-handler-trivy',
			// 		service: 'php',
			// 		created: '2024-10-01 06:49:35',
			// 		deleted: '0000-00-00 00:00:00',
			// 		severityScore: 0,
			// 		associatedPackage: 'stdlib',
			// 		description:
			// 			'A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing. With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection. This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2. The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.',
			// 		version: '1.21.1',
			// 		fixedVersion: '1.20.10, 1.21.3',
			// 		links: '',
			// 	},
			// 	{
			// 		id: 53512,
			// 		identifier: 'CVE-2023-39325',
			// 		environment: {
			// 			id: null,
			// 			name: null,
			// 		},
			// 		data: '{}',
			// 		severity: 'HIGH',
			// 		source: 'insights-handler-trivy',
			// 		service: 'php',
			// 		created: '2024-10-01 06:49:35',
			// 		deleted: '0000-00-00 00:00:00',
			// 		severityScore: 0,
			// 		associatedPackage: 'stdlib',
			// 		description:
			// 			'A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing. With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection. This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2. The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.',
			// 		version: '1.21.1',
			// 		fixedVersion: '1.20.10, 1.21.3',
			// 		links: '',
			// 	},
			// 	{
			// 		id: 53512,
			// 		identifier: 'CVE-2023-39325',
			// 		environment: {
			// 			id: null,
			// 			name: null,
			// 		},
			// 		data: '{}',
			// 		severity: 'HIGH',
			// 		source: 'insights-handler-trivy',
			// 		service: 'php',
			// 		created: '2024-10-01 06:49:35',
			// 		deleted: '0000-00-00 00:00:00',
			// 		severityScore: 0,
			// 		associatedPackage: 'stdlib',
			// 		description:
			// 			'A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing. With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection. This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2. The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.',
			// 		version: '1.21.1',
			// 		fixedVersion: '1.20.10, 1.21.3',
			// 		links: '',
			// 	},
			// ]}
			problems={[]}
		/>
	),
};

export const ProblemsTableSkeleton: Story = {
	render: () => <BaseTable.ProblemsTable skeleton />,
};

export const FactsTable: Story = {
	render: () => (
		<BaseTable.FactsTable
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
			basePath="/"
			tasks={[
				{
					id: 756,
					name: 'Drush cache-clear',
					taskName: 'lagoon-task-aiycwi',
					status: 'complete',
					created: '2024-10-08 05:08:09',
					service: 'cli',
					adminOnlyView: false,
				},
				{
					id: 755,
					name: 'Drush cache-clear',
					taskName: 'lagoon-task-p0te66',
					status: 'complete',
					created: '2024-10-01 07:07:10',
					service: 'cli',
					adminOnlyView: false,
				},
				{
					id: 357,
					name: 'Drush sql-dump',
					taskName: 'lagoon-task-vfzokv',
					status: 'complete',
					created: '2023-03-07 05:41:30',
					service: 'cli',
					adminOnlyView: false,
				},
				{
					id: 356,
					name: 'Drush cache-clear',
					taskName: 'lagoon-task-ut677j',
					status: 'complete',
					created: '2023-03-07 05:40:46',
					service: 'cli',
					adminOnlyView: false,
				},
				{
					id: 350,
					name: 'Drush cron',
					taskName: 'lagoon-task-w7esh4',
					status: 'complete',
					created: '2023-03-07 00:22:53',
					service: 'cli',
					adminOnlyView: false,
				},
				{
					id: 349,
					name: 'Drush sql-dump',
					taskName: 'lagoon-task-6010fi',
					status: 'complete',
					created: '2023-03-06 21:17:37',
					service: 'cli',
					adminOnlyView: false,
				},
			]}
		/>
	),
};

export const TasksTableSkeleton: Story = {
	render: () => <BaseTable.TasksTable skeleton />,
};

export const InsightsTable: Story = {
	render: () => (
		<BaseTable.InsightsTable
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

export default meta;
