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
