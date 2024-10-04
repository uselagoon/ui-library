import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as ProjectsTable } from '../components/ProjectsTable';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';
import { EyeOutlined, SmileOutlined } from '@ant-design/icons';

const meta: Meta<typeof ProjectsTable> = {
	component: ProjectsTable,
	title: 'Lagoon specific/ProjectsTable',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI Projects Table.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
};

type Story = StoryObj<typeof ProjectsTable>;

const cols = [
	{
		title: 'Health',
		dataIndex: 'health',
		key: 'health',
		// nested elements
		render: (item) => <div>{item}</div>,
	},
	{
		title: 'Project',
		dataIndex: 'name',
		key: 'name',
		// nested elements
		render: (text: string) => (
			<div>
				<span>{text}</span>
			</div>
		),
	},
	{
		title: 'Envs',
		dataIndex: 'envs',
		key: 'envs',
		// just a reactNode
		render: (text: string) => <div style={{ border: '1px solid black' }}>{text}</div>,
	},
	{
		title: 'Cluster',
		dataIndex: 'cluster',
		key: 'cluster',
	},
	{
		title: 'Last Deployment',
		dataIndex: 'last_deploy',
		key: 'last_deploy',
	},
	{
		title: 'Origin',
		dataIndex: 'origin',
		key: 'origin',
	},
	{
		title: 'Actions',
		dataIndex: 'actions',
		key: 'actions',
	},
];

export const Default: Story = {
	render: () => (
		<ProjectsTable
			filterString=""
			dataSource={[
				{
					health: <SmileOutlined />,
					name: 'project 1',
					envs: '10',
					cluster: 'EU',
					last_deploy: '12/12/24',
					origin: 'main',
					actions: <EyeOutlined />,
				},
				{
					health: <SmileOutlined />,
					name: 'Second project',
					envs: '20',
					cluster: 'EU',
					last_deploy: '12/12/24',
					origin: '/demo-2',
					actions: <EyeOutlined />,
				},
				{
					health: <SmileOutlined />,
					name: 'Third',
					envs: '20',
					cluster: 'EU',
					last_deploy: '12/12/24',
					origin: 'demo-another',
					actions: <EyeOutlined />,
				},
			]}
			columns={cols}
		/>
	),
};

export default meta;
