import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as LagoonCardLabel } from '../components/CardLabel';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof LagoonCardLabel> = {
	component: LagoonCardLabel,
	title: 'Lagoon specific/Cardlabel',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI specific card label.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-13007&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['development', 'active production', 'production', 'standby production', 'project', 'uat', 'error'],
			description:
				'Type of the card label <br/> `development` | `production` | `active production` | `standby production` | `project` | `uat` | `error`',
		},
		variant: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description: 'Card label direction',
		},
	},
};

type Story = StoryObj<typeof LagoonCardLabel>;

export const Development: Story = {
	args: {
		type: 'development',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};

export const DevelopmentHorizontal: Story = {
	args: {
		type: 'development',
		variant: 'horizontal',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};
export const Prod: Story = {
	args: {
		type: 'production',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};

export const ProdHorizontal: Story = {
	args: {
		type: 'production',
		variant: 'horizontal',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};

export const ActiveProd: Story = {
	args: {
		type: 'active production',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};
export const ActiveProdHorizontal: Story = {
	args: {
		type: 'active production',
		variant: 'horizontal',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};

export const StandByProd: Story = {
	args: {
		type: 'standby production',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};
export const StandByProdHorizontal: Story = {
	args: {
		type: 'standby production',
		variant: 'horizontal',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};

export const Project: Story = {
	args: {
		type: 'project',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};

export const ProjectHorizontal: Story = {
	args: {
		type: 'project',
		variant: 'horizontal',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};
export const UAT: Story = {
	args: {
		type: 'uat',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};
export const UATHorizontal: Story = {
	args: {
		type: 'uat',
		variant: 'horizontal',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};

export const Error: Story = {
	args: {
		type: 'error',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};
export const ErrorHorizontal: Story = {
	args: {
		type: 'error',
		variant: 'horizontal',
	},
	render: (args) => <LagoonCardLabel {...args} />,
};

export default meta;
