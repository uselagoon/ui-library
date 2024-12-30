import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as DetailedStats } from '../components/DetailedStats';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';
import CopyToClipboard from '../components/CopyToClipboard';

const meta: Meta<typeof DetailedStats> = {
	component: DetailedStats,
	title: 'Components/DetailedStats',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Detailed stats component</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},

	argTypes: {
		items: {
			description:
				'Array of `{key: string; label:string ;children: ReactNode}` <br/> <br/> key - unique id `string` | `number` <br/> <br/> label - section label `ReactNode` <br/> <br/> children - rendered details `ReactNode``',
		},
	},
};

type Story = StoryObj<typeof DetailedStats>;

const detailedItems = [
	{
		key: '1',
		label: 'Environment type',
		children: 'production (standby)',
		span: 24,
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
		items: detailedItems,
	},
};

export default meta;
