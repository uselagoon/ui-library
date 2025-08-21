import { Meta, StoryObj } from '@storybook/react';
import { Controls, Primary, Stories, Story, Title } from '@storybook/addon-docs/blocks';

import Sidenav from '../components/sidenav';
import { SidebarProvider } from '../components/ui/sidebar';

const meta: Meta<typeof Sidenav> = {
	component: Sidenav,
	title: 'Components/Sidenav',
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>The main UI navigation sidebar.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<SidebarProvider>
				<div style={{ height: '100vh', display: 'flex' }}>
					<Story />
					<div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
						<h2>Main Content Area</h2>
						<p>This is where your main application content would appear.</p>
					</div>
				</div>
			</SidebarProvider>
		),
	],
};

type Story = StoryObj<typeof Sidenav>;

const mockUserInfo = {
	email: 'john.doe@example.com',
	name: 'John Doe',
};

const mockSignOutFn = async () => {
	console.log('Sign out clicked');
};

export const Default: Story = {
	args: {
		userInfo: mockUserInfo,
		appInfo: {
			name: 'Lagoon',
			version: 'v1.0.0',
			kcUrl: 'https://keycloak.example.com',
		},
		signOutFn: mockSignOutFn,
		currentPath: '/projects',
	},
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/Dashboard?type=design&node-id=66-6597&mode=design&t=P00gx6yjJRZgHUuj-4',
		},
	},
};

export default meta;
