import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Controls, Primary, Stories, Title } from '@storybook/blocks';
import Tip from '../components/Tip';

const meta: Meta<typeof Tip> = {
	component: Tip,
	title: 'Components/Tip',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Tip component used as explainers</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
};

type Story = StoryObj<typeof Tip>;

export const Default: Story = {
	args: {
		content:
			' Add the branch you wish to build this environment from. This branch must already exist in your git repository. Please note, that only lowercase alpha characters and “-” are available for group names.  ',
	},
};

export default meta;
