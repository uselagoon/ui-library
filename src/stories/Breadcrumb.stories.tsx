import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as BreadCrumb, type BreadCrumbProps } from '../components/Breadcrumb';

const meta: Meta<typeof BreadCrumb> = {
	component: BreadCrumb,
	title: 'Components/BreadCrumb',

	argTypes: {
		activeKey: {
			control: 'text',
			type: 'string',
			description: 'Currently active item (matches key in item in the array)',
			defaultValue: { summary: '-' },
		},
	},
};

type Story = StoryObj<typeof BreadCrumb>;

const items: BreadCrumbProps['items'] = [
	{
		title: 'Home',
	},
	{
		title: 'Projects',
		navOnClick: () => {
			console.log('nav should be handled here');
		},
	},
	{
		title: 'Demo',
	},
	{
		title: 'Master',
		key: 'activeItem',
		navOnClick: () => {
			console.log('nav should be handled here');
		},
	},
];
export const DefaultWithActive: Story = {
	args: {
		items: items,
		activeKey: 'activeItem',
	},
};

export const PrependedSeparator: Story = {
	args: {
		items: items,
		activeKey: 'activeItem',
		prependSeparator: '/',
	},
};

export const PrependedWithAnything: Story = {
	args: {
		items: items,
		activeKey: 'activeItem',
		prependSeparator: '(ง •̀_•́)ง',
	},
};
export default meta;
