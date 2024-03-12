import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Details } from '../components/Details';
import { DetailsType } from '../components/Details';
import CopyToClipboard from '../components/CopyToClipboard';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Details> = {
	component: Details,
	title: 'Components/Details',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Display multiple read-only fields in groups.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-15542&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		items: {
			description:
				"Array of `DetailsType['items']` <br/> <br/> key - unique id `string` | `number` <br/> <br/> label - section label `ReactNode` <br/> <br/> children - rendered details `ReactNode``",
		},
		bordered: {
			control: 'radio',
			options: [true, false],
			description: 'Bordered style `boolean`',
			defaultValue: { summary: 'false' },
		},
		title: {
			description: 'Details section title `ReactNode`',
			control: 'text',
			defaultValue: { summary: '-' },
		},
		layout: {
			description: 'Layout style `vertical` | `horizontal` ',
			control: 'radio',
			options: ['horizontal', 'vertical'],
			defaultValue: { summary: 'horizontal' },
		},
	},
};

type Story = StoryObj<typeof Details>;

const items: DetailsType['items'] = [
	{
		label: 'Created',
		children: '22 Jul 2021, 12:52:10 (+09:30)',
	},
	{
		label: 'Description',
		children: 'Some details',
	},
];

const detailedItems: DetailsType['items'] = [
	{
		key: '1',
		label: 'Environment type',
		children: 'production (standby)',
	},
	{
		key: '2',
		label: 'Deployment Type',
		children: 'branch',
	},
	{
		key: '3',
		label: 'Created',
		children: '22 Jul 2021, 12:55:07 (+09:30)',
	},
	{
		key: '4',
		label: 'Source',
		children: 'github.com/amazeeio-demos/as-demo/tree/master',
	},
	{
		key: '5',
		label: 'STANDBY ENVIRONMENT ROUTES',
		span: 2,
		children: 'https://as-demo-standby.test6.amazee.io',
	},
	{
		key: '6',
		label: 'Routes 1',
		span: 1,
		children: 'https://as-demo-standby.test6.amazee.io',
	},
	{
		key: '7',
		label: 'Routes 2',
		span: 2,
		children: 'https://nginx.master.as-demo.test6.amazee.io',
	},
	{
		key: '8',
		label: 'Deploy key',
		span: 2,
		children: (
			<CopyToClipboard
				type="hidden"
				text="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICLCOWp+g1m6DrIMuK820Uk+fakoYb5nHVarOhb6yCfy"
			/>
		),
	},
];

export const Default: Story = {
	args: {
		title: 'Environment details',
		bordered: true,
		items: detailedItems,
	},
};
export const Basic: Story = {
	args: {
		title: 'Details component',
		items,
	},
};
export const BasicBordered: Story = {
	args: {
		title: 'Details component',
		items,
		bordered: true,
	},
};

export const NoTitle: Story = {
	args: {
		items,
		bordered: true,
	},
};

export const VerticalLayout: Story = {
	render: () => <Details layout="vertical" bordered items={detailedItems} />,
};

export default meta;
