import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Controls, Primary, Stories, Story, Title } from '@storybook/addon-docs/blocks';

import RootLayout from '../components/RootLayout';

const meta = {
	component: RootLayout,
	title: 'Components/RootLayout',
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>The Root Layout of the UI with nested navigation sidebar.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
} satisfies Meta<typeof RootLayout>;

type Story = StoryObj<typeof RootLayout>;

export const Default: Story = {
	args: {
		userInfo: { email: 'testuser@gmail.com' },
		appInfo: {
			kcUrl: 'keycloak',
			version: '100.02',
			name: 'Lagoon',
		},
	},
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/Dashboard?type=design&node-id=66-6597&mode=design&t=P00gx6yjJRZgHUuj-4',
		},
	},
};

export default meta;
