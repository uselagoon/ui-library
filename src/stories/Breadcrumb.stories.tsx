import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as BreadCrumb, type BreadCrumbProps } from '../components/Breadcrumb';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof BreadCrumb> = {
	component: BreadCrumb,
	title: 'Components/BreadCrumb',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>
						A breadcrumb displays the current location within a hierarchy. It allows going back higher up in the
						hierarchy.
					</p>
					<Primary />
					<Controls />

					<h2>Items</h2>
					<p>
						The <code>items</code> prop is an array that defines the breadcrumb items. Each item can be an object with a
						'title' property and optional 'navOnClick' and 'key' properties.
					</p>
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/Dashboard?type=design&node-id=0-13288&mode=design&t=P00gx6yjJRZgHUuj-4',
		},
	},
	argTypes: {
		items: {
			defaultValue: { summary: '-' },
			description: "Array of `BreadCrumbProps['items']`",
			table: {
				category: 'Props',
				defaultValue: { summary: '-' },
			},
			control: 'object',
		},
		activeKey: {
			control: 'text',
			type: 'string',
			description: 'Currently active item (matches key in item in the array)',
			defaultValue: { summary: '-' },
			table: {
				category: 'Props',
			},
		},
		//@ts-ignore
		title: {
			control: 'none',
			type: { summary: 'string' },
			description: 'Title of the breadcrumb item.',
			table: {
				category: "BreadCrumbProps['items']",
			},
		},
		navOnClick: {
			control: 'none',
			type: { summary: '() => void' },
			description: 'Function to handle navigation click for the breadcrumb item.',
			table: {
				category: "BreadCrumbProps['items']",
			},
		},
		key: {
			control: 'none',
			type: { summary: `ReactNode` },
			description: 'Key to identify the active breadcrumb item.',
			table: {
				category: "BreadCrumbProps['items']",
			},
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
		title: 'as-demo',
	},
	{
		title: 'master',
		key: 'activeItem',
		navOnClick: () => {
			console.log('nav should be handled here');
		},
	},
];

const LinkItems: BreadCrumbProps['items'] = [
	{
		title: <a href="#">Projects</a>,
	},
	{
		title: <a href="#">as-demo</a>,
	},
	{
		title: <a href="#">Environment</a>,
		key: 'activeItem',
	},
];

const OrgLinkitems: BreadCrumbProps['items'] = [
	{
		title: <a href="#">Organizations</a>,
	},
	{
		title: <a href="#">Some org</a>,
	},
	{
		title: <a href="#">as-demo</a>,
		key: 'activeItem',
	},
];

export const DefaultEnvsWithActiveLinks: Story = {
	args: {
		items: LinkItems,
		activeKey: 'activeItem',
		type: 'default',
	},
};
export const DefaultOrgsWithActiveLinks: Story = {
	args: {
		items: OrgLinkitems,
		activeKey: 'activeItem',
		type: 'orgs',
	},
};
export const ItemsWithClickHandlers: Story = {
	args: {
		items: items,
		activeKey: 'activeItem',
	},
};

export const PrependedSeparator: Story = {
	args: {
		items: items,
		activeKey: 'activeItem',
	},
};

export default meta;
