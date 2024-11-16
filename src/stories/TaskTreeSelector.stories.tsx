import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as TaskTreeSelector } from '../components/TaskTreeSelector';
import { CarryOutOutlined } from '@ant-design/icons';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof TaskTreeSelector> = {
	component: TaskTreeSelector,
	title: 'Lagoon specific/TaskTreeSelector',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI specific TreeSelect (used for tasks)</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=140-8457&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		treeData: {
			description:
				'Array of tree items <br/> title - `string` <br/> value - `string` | `number` <br/> icon - `ReactNode` <br/> selectable - `boolean` ',
		},
		placeholder: {
			description: 'Placeholder displayed',
		},
		sectionsCheckable: {
			control: 'radio',
			options: [true, false],
			description: 'If true, section headings select all children',
		},
	},
};

type Story = StoryObj<typeof TaskTreeSelector>;

const treeData = [
	{
		title: 'Run a task',
		value: 'first',
		selectable: false,
		children: [
			{
				title: 'Clear Drupal caches [drush cache-clear]',
				value: '1',
				icon: <CarryOutOutlined />,
			},
			{
				title: 'Run Drupal cron [drush cron]]',
				value: '2',
				icon: <CarryOutOutlined />,
			},
			{
				title: 'Copy database between environments [drush sql-sync]',
				value: '3',
				icon: <CarryOutOutlined />,
			},
			{
				title: 'Copy files between backup [drush sql-dump]',
				value: '4',
				icon: <CarryOutOutlined />,
			},
			{
				title: 'Generate database backup',
				value: '5',
				icon: <CarryOutOutlined />,
			},
			{
				title: 'Generate database and files backup (Drush 8 only) [drush archive-dump]',
				value: '6',
				icon: <CarryOutOutlined />,
			},
			{
				title: 'Generate login link [drush uli]',
				value: '7',
				icon: <CarryOutOutlined />,
			},
		],
	},
	{
		title: 'Backup',
		value: 'backup',
		selectable: false,
		children: [
			{
				title: 'Trigger environment backup',
				value: 'triggerBackup',
				icon: <CarryOutOutlined />,
			},
		],
	},
	{
		title: 'Deploy',
		value: 'deploy',
		selectable: false,
		children: [
			{
				title: 'Trigger a deployment',
				value: 'triggerDeploy',
				icon: <CarryOutOutlined />,
			},
		],
	},
];

export const Default: Story = {
	args: {
		treeData,
		placeholder: 'Select an action',
		onChange: (e) => console.log(e),
	},
};

export const SelectableSections: Story = {
	args: {
		treeData,
		placeholder: 'Select an action or the whole section',
		sectionsCheckable: true,
	},
};
export default meta;
