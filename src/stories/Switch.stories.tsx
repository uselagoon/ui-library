import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Switch } from '../components/Switch';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'Components/Switch',

	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Switch component, can also be used within the FormItem component</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-15479&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		showLabel: {
			control: 'radio',
			options: [true, false],
			description: 'Show ON/OFF label in the checkbox',
			defaultValue: { summary: true },
		},
	},
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	args: {
		showLabel: true,
	},
};
export const NoLabel: Story = {
	args: {
		showLabel: false,
	},
};

export default meta;
