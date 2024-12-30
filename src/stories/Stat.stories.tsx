import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Stat } from '../components/Stat';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Stat> = {
	component: Stat,
	title: 'Components/Stat',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Simple Statistic component</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},

	argTypes: {
		title: {
			description: 'Title of the Stat component',
			control: 'text',
		},
		value: {
			description: 'Value of the stat component ( can be a number with `precision`)',
			control: 'text',
		},
		prefix: {
			description: 'Prefix icon for value - any valid `ReactNode`',
		},
		suffix: {
			description: 'Suffix icon for value - any valid `ReactNode`',
		},
	},
};

type Story = StoryObj<typeof Stat>;

export const Default: Story = {
	args: {
		title: 'Some Quota',
		value: 'Some quota: 10 out of 100',
	},
};

export const Numeric: Story = {
	args: {
		title: 'Environments',
		value: 2,
	},
};

export const UsingReactNode: Story = {
	args: {
		title: 'Environments',
		value: <div>Count: 123</div>,
	},
};

export default meta;
