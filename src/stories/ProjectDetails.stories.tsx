import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as LagoonProjectDetails } from '../components/ProjectDetails';
import CopyToClipboard from '../components/CopyToClipboard';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof LagoonProjectDetails> = {
	component: LagoonProjectDetails,
	title: 'Lagoon specific/Project Details',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI specific project details component.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-15520&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		created: {
			description: 'Creation time',
		},
		origin: {
			control: 'none',
			description: 'Origin with `CopyToClipboard` component',
		},
		gitUrl: {
			control: 'none',
			description: 'Git url with `CopyToClipboard` component ',
		},
		devEnvsInUse: {
			description: 'Development environments in use',
		},
		branchesEnabled: {
			control: 'radio',
			options: [true, false],
			description: 'Are branches enabled? ',
		},
		prsEnabled: {
			control: 'radio',
			options: [true, false],
			description: 'Are PRs enabled? ',
		},
		deployKey: {
			control: 'none',
			description: 'Hidden deploykey with `CopyToClipboard` component ',
		},
	},
};

type Story = StoryObj<typeof LagoonProjectDetails>;

const items = {
	created: '22 Jul 2021, 12:55:07 (+09:30)',
	origin: <CopyToClipboard text="github.com/amazeeio-demos/as-demo" />,
	gitUrl: <CopyToClipboard text="git@github.com:amazeeio-demos/as-demo.git" />,
	devEnvsInUse: '5 of 5',
	branchesEnabled: true,
	prsEnabled: true,
	deployKey: (
		<CopyToClipboard
			width={500}
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
