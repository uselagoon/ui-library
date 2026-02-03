import { Meta, StoryObj } from '@storybook/react';
import { Controls, Primary, Stories, Story, Title } from '@storybook/addon-docs/blocks';
import { Home, FolderOpen, Building2, Settings, HelpCircle, Layers } from 'lucide-react';

import Sidenav from '../components/Sidenav';
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

const cardProps = {
	brand: 'Lagoon',
	title: 'Welcome to Lagoon!',
	description: 'Check out the new features in this release.',
	buttonText: 'Learn More',
	buttonUrl: 'https://docs.lagoon.sh/',
	defaultLogo: true,
	className: 'hidden md:flex'
};

const mockSidenavItems = [
	{
		section: 'Main',
		sectionItems: [
			{
				title: 'Dashboard',
				url: '/dashboard',
				icon: Home,
			},
			{
				title: 'Projects',
				url: '/projects',
				icon: FolderOpen,
				children: [
					{
						title: 'Project Alpha',
						url: '/projects/alpha',
						collapsible: false,
						children: [
							{
								title: 'Environments',
								url: '/projects/alpha/envs',
								icon: Layers,
								children: [
									{
										title: 'Production',
										url: '/projects/alpha/envs/production',
									},
									{
										title: 'Staging',
										url: '/projects/alpha/envs/staging',
									},
									{
										title: 'Development',
										url: '/projects/alpha/envs/develop',
									},
								],
							},
							{
								title: 'Details',
								url: '/projects/alpha/details',
								icon: Layers,
							},
							{
								title: 'Variables',
								url: '/projects/alpha/variables',
								icon: Layers,
							},
							{
								title: 'Routes',
								url: '/projects/alpha/routes',
								icon: Layers,
							},
						],
					},
				],
			},
			{
				title: 'Organizations',
				url: '/organizations',
				icon: Building2,
				children: [
					{
						title: 'Org 1',
						url: '/organizations/org-1',
					},
					{
						title: 'Org 2',
						url: '/organizations/org-2',
					},
				],
			},
		],
	},
	{
		section: 'Settings',
		sectionItems: [
			{
				title: 'Settings',
				url: '/settings',
				icon: Settings,
			},
			{
				title: 'Help',
				url: '/help',
				icon: HelpCircle,
			},
		],
	},
];

export const mockFooterItems = [
	{
		title: 'Documentation',
		url: 'https://docs.lagoon.sh/',
		icon: HelpCircle,
		target: 'blank',
	},
	{
		title: 'Changelog',
		url: '/changelog',
		icon: Layers,
	},
	{
		title: 'My Account',
		url: 'https://keycloak.example.com/account',
		icon: Settings,
		target: 'blank',
	},
];

export const Default: Story = {
	args: {
		userInfo: {
			email: mockUserInfo.email,
			name: mockUserInfo.name,
		},
		appInfo: {
			name: 'Lagoon',
			version: 'v1.0.0',
			kcUrl: 'https://keycloak.example.com',
		},
		sidenavItems: mockSidenavItems,
		footerItems: mockFooterItems,
		signOutFn: mockSignOutFn,
		currentPath: '/projects',
		cardProps: cardProps,
	},
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/Dashboard?type=design&node-id=66-6597&mode=design&t=P00gx6yjJRZgHUuj-4',
		},
	},
};

export const DeepNesting: Story = {
	args: {
		...Default.args,
		currentPath: '/projects/alpha/envs/production',
	},
};

export default meta;