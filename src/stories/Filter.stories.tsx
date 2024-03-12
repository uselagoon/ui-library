import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as LagoonFilter } from '../components/Filter';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof LagoonFilter> = {
	component: LagoonFilter,
	title: 'Lagoon specific/Filter',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI specific Filter.</p>
					<span>TBD</span>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
};

type Story = StoryObj<typeof LagoonFilter>;

export const Default: Story = {
	render: () => <LagoonFilter />,
};

export default meta;
