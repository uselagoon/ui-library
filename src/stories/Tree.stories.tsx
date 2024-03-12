import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Tree, { default as UIDropdown } from '../components/Tree';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof UIDropdown> = {
	component: UIDropdown,
	title: 'Components/Tree',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Dropdown select tree</p>
					<Primary />
					<Controls />
					<span>
						Complete list of props <a href="https://ant.design/components/tree#tree-props">Here</a>
					</span>
					<Stories />
				</>
			),
		},
	},
};

type Story = StoryObj<typeof UIDropdown>;

const items = [
	{
		title: 'Critical Problems',
		key: 'problems',
		selectable: false,
		children: [
			{
				title: 'Major problems',
				key: 'major',
				selectable: false,
				children: [
					{
						title: 'A major problem',
						key: 'majorprob',
					},
				],
			},

			{
				title: 'Minor problems',
				key: 'minor',
				selectable: false,
				children: [
					{
						title: 'A minor problem',
						key: 'minorprob',
					},
				],
			},

			{
				title: 'Unrelated problem',
				key: '123',
			},
		],
	},
];
export const Default: Story = {
	args: {
		items,
	},
};

export default meta;
