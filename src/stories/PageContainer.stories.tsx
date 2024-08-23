import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as PageContainer } from '../components/PageContainer';

import { default as Head5 } from '../components/Heading/H5';
import { Controls, Primary, Stories, Story, Title } from '@storybook/blocks';
import { UserOutlined } from '@ant-design/icons';

const meta: Meta<typeof PageContainer> = {
	component: PageContainer,
	title: 'Lagoon specific/PageContainer',
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-15507&mode=design&t=Vm8fqTLERqbE74YW-4',
		},

		docs: {
			page: () => (
				<>
					<Title />
					<p>The component wrapping every page</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
	argTypes: {
		children: {
			description: '`ReactNode`',
			control: 'none',
		},
	},
};

type Story = StoryObj<typeof PageContainer>;

export const Default: Story = {
	args: {
		children: (
			<>
				<Head5>PageContainer wraps any valid ReactNode</Head5>
			</>
		),
		showHeader: true,
		headerProps: {
			userInfo: {
				firstName: 'Lagoon',
				lastName: 'User',
				email: 'lagoonuser@amazee.io',
			},
			navLinks: [
				'Projects',
				'Organizations',
				'Knowledge',
				<>
					<div>
						<UserOutlined /> Lagoon_User
					</div>
				</>,
			],
			toggleTheme: () => {},
		},
	},
};

export const WithoutHeader: Story = {
	args: {
		children: (
			<>
				<Head5>PageContainer wraps any valid ReactNode</Head5>
			</>
		),
		showHeader: false,
	},
};

export default meta;
