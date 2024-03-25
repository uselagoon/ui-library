import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Text } from '../components/Text';

const meta: Meta<typeof Text> = {
	component: Text,
	title: 'Components/Text and Link',
	argTypes: {
		children: {
			description: '`ReactNode`',
		},
		type: {
			description: '`danger` | `warning` | `success` | `secondary`',
		},
		href: {
			type: 'string',
			description: 'If href is set it will act as a link',
		},
		target: {
			type: 'string',
			description: 'Only works in conjunction with `href`',
		},
	},
};

type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		children: 'Some random normal text',
	},
};

export const DangerText: Story = {
	args: {
		children: 'Danger text!',
		type: 'danger',
	},
};

export const WarningText: Story = {
	args: {
		children: 'Warning text!',
		type: 'warning',
	},
};

export const Link: Story = {
	args: {
		children: 'Link text',
		href: 'https://www.lagoon.sh/',
		target: '_blank',
	},
};
export default meta;
