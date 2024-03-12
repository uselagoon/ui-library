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
	},
};

type Story = StoryObj<typeof Tabs>;

const items: TabsProps['items'] = [
	{
		key: '1',
		label: 'Tab 1',
		children: 'Tab 1 content',
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
export const Default: Story = {
	args: {
		items,
	},
};

export default meta;
