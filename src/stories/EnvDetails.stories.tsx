import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as LagoonEnvironmentDetails } from '../components/EnvironmentDetails';
import CopyToClipboard from '../components/CopyToClipboard';

import TextLabel from '../components/TextLabel';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof LagoonEnvironmentDetails> = {
	component: LagoonEnvironmentDetails,
	title: 'Lagoon specific/Environment Details',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI specific environment details component.</p>
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
		environmentType: {
			description: 'Env type `string`',
		},
		deploymentType: {
			description: 'Deployment type `string`',
		},
		created: {
			description: 'Creation time `string`',
		},
		source: {
			description: 'Source `string`',
		},
		standbyRoutes: {
			description: 'Link item `TextLabel`',
			control: 'none',
		},
		routes: {
			description: 'Array of `TextLabel`',
		},
		deployKey: {
			control: 'none',
			description: '`CopyToClipboard` component',
		},
	},
};

type Story = StoryObj<typeof LagoonEnvironmentDetails>;

const items = {
	environmentType: 'production (standby)',
	deploymentType: 'branch',
	created: '22 Jul 2021, 12:55:07 (+09:30)',
	source: 'github.com/amazeeio-demos/as-demo/tree/master',

	standbyRoutes: (
		<TextLabel link href={'https://as-demo-standby.test6.amazee.io'} target="_blank">
			https://as-demo-standby.test6.amazee.io
		</TextLabel>
	),
	routes: [
		<TextLabel link href={'https://as-demo-standby.test6.amazee.io'} target="_blank">
			https://as-demo-standby.test6.amazee.io
		</TextLabel>,
		<TextLabel link href={'https://nginx.master.as-demo.test6.amazee.io'} target="_blank">
			https://nginx.master.as-demo.test6.amazee.io
		</TextLabel>,
	],
	deployKey: (
		<CopyToClipboard
			type="hidden"
			text="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICLCOWp+g1m6DrIMuK820Uk+fakoYb5nHVarOhb6yCfy"
		/>
	),
};

export const Default: Story = {
	args: {
		...items,
	},
};

export default meta;
