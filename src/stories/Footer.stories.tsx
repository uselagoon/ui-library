import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as LagoonFooter } from '../components/Footer';
import { IconMeh } from '../components/Icons';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof LagoonFooter> = {
	component: LagoonFooter,
	title: 'Lagoon specific/Footer',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI specific footer with the ability to toggle theme .</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},

		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-13367&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		icon: {
			description: 'Svg element, if not provided, lagoon default will be used',
		},
		toggleTheme: {
			description: 'Toggler function returned from `const { theme, toggleTheme } = useTheme()` expression',
		},
	},
};

type Story = StoryObj<typeof LagoonFooter>;

export const Default: Story = {
	args: {},
};
export const CustomLogo: Story = {
	args: {
		icon: <IconMeh />,
	},
};

export default meta;
