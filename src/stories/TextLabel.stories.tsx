import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Textlabel } from '../components/TextLabel';

const meta: Meta<typeof Textlabel> = {
	component: Textlabel,
	title: 'Components/TextLabel',
	argTypes: {
		children: {
			description: '`ReactNode`',
		},
		type: {
			description: '`danger` | `warning` | `success` | `secondary`',
		},
		link: {
			type: 'boolean',
			description: 'Act as a link element',
		},
		href: {
			type: 'string',
			description: 'href if link is set to `true`',
		},
	},
};

type Story = StoryObj<typeof Textlabel>;

export const Text: Story = {
	args: {
		children: 'Some random normal text label',
	},
};

export const DangerText: Story = {
	args: {
		children: 'Danger text label',
		type: 'danger',
	},
};

export const Link: Story = {
	args: {
		children: 'Danger text label',
		link: true,
	},
};
export default meta;
