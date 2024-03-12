import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as DataCard } from '../components/DataCard';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof DataCard> = {
	component: DataCard,
	title: 'Components/DataCard',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Data card used for showing problem severity and count</p>
					<p>Severity levels start from low &rarr; medium &rarr; high &rarr; critical </p>
					<p>
						If severity level is not present as a prop, default styles are applied (used as total number of problems)
					</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=317-35463&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		text: {
			description: 'Text to display on the card',
		},
		count: {
			description: 'Number to display on the card',
		},
		critical: {
			control: 'radio',
			options: [true, false],
			description: 'if set to true, critical styles are applied to the card',
			defaultValue: {
				summary: 'false',
			},
		},
		high: {
			control: 'radio',
			options: [true, false],
			description: 'if set to true, high styles are applied to the card',
			defaultValue: {
				summary: 'false',
			},
		},
		medium: {
			control: 'radio',
			options: [true, false],
			description: 'if set to true, medium styles are applied to the card',
			defaultValue: {
				summary: 'false',
			},
		},
		low: {
			control: 'radio',
			options: [true, false],
			description: 'if set to true, low styles are applied to the card',
			defaultValue: {
				summary: 'false',
			},
		},
	},
};

type Story = StoryObj<typeof DataCard>;

export const Default: Story = {
	args: {
		text: 'Critical',
		count: '99',
		critical: true,
	},
	render: (args) => <DataCard {...args} />,
};

export const High: Story = {
	args: {
		text: 'HIgh',
		count: '60',
		high: true,
	},
	render: (args) => <DataCard {...args} />,
};

export const Medium: Story = {
	args: {
		text: 'Medium',
		count: '39',
		medium: true,
	},
	render: (args) => <DataCard {...args} />,
};

export const Low: Story = {
	args: {
		text: 'Low',
		count: '39',
		low: true,
	},
	render: (args) => <DataCard {...args} />,
};

export const Total: Story = {
	args: {
		text: 'Problems',
		count: '100',
	},
	render: (args) => <DataCard {...args} />,
};

export default meta;
