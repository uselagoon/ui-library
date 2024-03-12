import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as List } from '../components/List';
import Head3 from '../components/Heading/H3';

const { Item } = List;

const meta: Meta<typeof List> = {
	component: List,
	title: 'Components/List',
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-15507&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		header: {
			description: '`ReactNode`',
			control: 'none',
		},
		footer: {
			description: '`ReactNode`',
			control: 'none',
		},
		dataSource: {
			description: 'Array of `ReactNode` elements',
		},
		renderItem: {
			type: 'function',
			description: 'Render callback: `(item) => <List.Item>{item}</List.Item>`',
		},
	},
};

const data = [
	'Action: Dump MariaDB to home directory',
	'Action: Dump MariaDB to home directory.',
	'Action: Dump MariaDB to home directory',
	'Action: Dump MariaDB to home directory.',
];

type Story = StoryObj<typeof List>;

export const Default: Story = {
	args: {
		header: <div>List Header</div>,
		footer: <div>List Footer</div>,
		bordered: true,
		dataSource: data,
		renderItem: (item) => <Item>{item}</Item>,
	},
};

export const NoHeaderFooter: Story = {
	render: () => <List bordered dataSource={data} renderItem={(item) => <Item>{item}</Item>} />,
};

export const WithHeadings: Story = {
	render: () => (
		<List
			header={<div>List Header</div>}
			footer={<div>List Footer</div>}
			bordered
			dataSource={data}
			renderItem={(item) => (
				<Item>
					<Head3>{item}</Head3>
				</Item>
			)}
		/>
	),
};

export default meta;
