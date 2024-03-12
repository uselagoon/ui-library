import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Head1 } from '../components/Heading/H1';
import { default as Head2 } from '../components/Heading/H2';
import { default as Head3 } from '../components/Heading/H3';
import { default as Head4 } from '../components/Heading/H4';
import { default as Head5 } from '../components/Heading/H5';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Head1> = {
	component: Head1,
	title: 'Components/Headers',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Heading elements.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
	argTypes: {
		children: {
			control: 'none',
			defaultValue: { summary: '-' },
			description: '`ReactNode`',
		},
	},
};

type Story = StoryObj<typeof Head1>;

export const Default: Story = {
	render: () => (
		<>
			<Head1>H1 Lagoon Dashboard</Head1>
			<Head2>H2 Lagoon Dashboard</Head2>
			<Head3>H3 Lagoon Dashboard </Head3>
			<Head4>H4 Lagoon Dashboard </Head4>
			<Head5>H5 Lagoon Dashboard </Head5>
		</>
	),
};

export const H1: Story = {
	render: () => <Head1>H1 Lagoon Dashboard</Head1>,
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=83-7148&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
};

export const H2: Story = {
	render: () => <Head2>H2 Lagoon Dashboard</Head2>,
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=83-7149&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
};

export const H3: Story = {
	render: () => <Head3>H3 Lagoon Dashboard </Head3>,
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=83-7150&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
};

export const H4: Story = {
	render: () => <Head4>H4 Lagoon Dashboard </Head4>,
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=83-7151&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
};

export const H5: Story = {
	render: () => <Head5>H5 Lagoon Dashboard </Head5>,
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=83-7152&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
};

export default meta;
