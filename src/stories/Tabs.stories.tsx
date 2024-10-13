import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Tabs, TabsProps } from '../components/Tabs';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Tabs> = {
	component: Tabs,
	title: 'Components/Tabs',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Tabs used for navigating to different sections of a page</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=117-12457&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		items: {
			description: '<b>unique</b> key - `string` | `number` <br/> label - `string` <br/> children - `ReactNode`',
		},
		type: {
			description:
				'`"navigation"`: Creates dynamic routing using Next.js Links. The `children` prop will be ignored in the `"items"` array. <br/> `"default"`: Does not navigate and renders the `children` of each tab.',
			control: { type: 'radio' },
			options: ['navigation', 'default'],
			table: {
				type: { summary: '"navigation" | "default"' },
				defaultValue: { summary: 'default' },
			},
		},
		pathname: {
			description: 'when `type===navigation`, matches the current active route and highlights the selected tab',
		},
	},
};

type Story = StoryObj<typeof Tabs>;

const items: TabsProps['items'] = [
	{
		key: '1',
		label: 'Tab 1',
	},
	{
		key: '2',
		label: 'Tab 2',
		children: 'Tab 2 content',
	},
	{
		key: '3',
		label: 'Tab 3',
		children: 'Tab 3 content',
	},
];
const navItems = [
	{
		key: 'nav-1',
		label: <a>Nav link 1</a>,
	},
	{
		key: 'nav-2',
		label: <a>Nav link 1</a>,
	},
];
export const Default: Story = {
	args: {
		items,
	},
};

export const Navigation: Story = {
	args: {
		items: navItems,
		type: 'navigation',
		pathname: 'nav-1',
	},
};

export const NavigationRenderedRoutes: Story = {
	args: {
		items: navItems,
		type: 'navigation',
		children: <div>Rendered page.tsx content in Next.js</div>,
		pathname: 'nav-2',
	},
};

export default meta;
