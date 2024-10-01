import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as LagoonHeader } from '../components/Header';

const meta: Meta<typeof LagoonHeader> = {
	component: LagoonHeader,
	title: 'Lagoon specific/Header',
};

type Story = StoryObj<typeof LagoonHeader>;

const fakeNavLinks = [<a href="/projects">Projects</a>, <a>Organizations</a>, <a>Knowledge</a>];
const menuItems = [
	{
		label: <a>Settings</a>,
		key: 'settings',
	},
	{
		label: <a>Account</a>,
		key: 'account',
	},
	{
		type: 'divider',
		key: 'divider',
	},
	{
		label: <span>Sign Out</span>,
		key: 'sign_out',
	},
];

export const Default: Story = {
	args: {
		userInfo: {
			firstName: 'Lagoon',
			lastName: 'User',
			email: 'testuser@amazee.io',
		},
		navLinks: fakeNavLinks,
		userDropdownMenu: menuItems,
	},
};

export const OnlyEmail: Story = {
	args: {
		userInfo: {
			email: 'platformowner@amazee.io',
		},
		navLinks: fakeNavLinks,
		userDropdownMenu: menuItems,
		currentPath: "/projects",
	},
};

export const WithImage: Story = {
	args: {
		userInfo: {
			firstName: 'Koala',
			lastName: 'Bear',
			email: 'testuser@amazee.io',
			image:
				'https://images.unsplash.com/photo-1579649554660-463ed1d72831?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29hbGElMjBiZWFyfGVufDB8fDB8fHww',
		},
		navLinks: fakeNavLinks,
	},
};

export default meta;
