import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as TreeList } from '../components/TreeList';
import { CarryOutOutlined } from '@ant-design/icons';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';
import Button from '../components/Button';
import Text from '../components/Text';

const meta: Meta<typeof TreeList> = {
	component: TreeList,
	title: 'Lagoon specific/TreeList',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI specific TreeList (used for quick actions on environments page)</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
	argTypes: {
		data: {
			description:
				'Array of tree items <br/> sectionTitle - `string` | `ReactNode` <br/> sectionChildren -`ReactNode`[] ',
		},
		children: {
			description: 'ReactNode which will show/hide TreeList on/off hover',
		},
	},
};

type Story = StoryObj<typeof TreeList>;

const data = [
	{
		sectionTitle: 'Run a Task',
		sectionChildren: [
			<>
				<CarryOutOutlined /> Clear Drupal caches
			</>,
			<>
				<CarryOutOutlined /> Run Drupal cron [drush cron]
			</>,
			<>
				<CarryOutOutlined /> Copy database between environments [drush sql-sync]
			</>,
			<>
				<CarryOutOutlined /> Copy files between backup [drush sql-dump]
			</>,
		],
	},
	{
		sectionTitle: 'Backup',
		sectionChildren: [
			<>
				<CarryOutOutlined /> Trigger environment backup
			</>,
		],
	},
	{
		sectionTitle: 'Deploy',
		sectionChildren: [
			<>
				<CarryOutOutlined /> Trigger a deployment
			</>,
		],
	},
];

export const Default: Story = {
	args: {
		data,
		children: <Button>Hover to reveal</Button>,
	},
};

export const HoverOnText: Story = {
	args: {
		data,
		children: <Text>Hover to reveal</Text>,
	},
};
export default meta;
