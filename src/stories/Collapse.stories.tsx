import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Collapse from '../components/Collapse/index';
import Head3 from '../components/Heading/H3';
import { UICollapseProps as CollapseProps } from '../components/Collapse/Collapse';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Collapse> = {
	component: Collapse,
	title: 'Components/Collapse',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>A content area which can be collapsed and expanded.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=381-14373&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		defaultActiveKey: {
			description: 'Array of default open collapse items `key[]`',
		},
		items: {
			description: 'key - unique id `string | number` <br/> label - header `ReactNode` <br/> children - `ReactNode`',
		},
		bordered: {
			control: 'radio',
			options: [true, false],
			defaultValue: { summary: true },
			description: 'Toggles rendering of the border around the collapse block `boolean`',
		},
		destroyInactivePanel: {
			control: 'radio',
			options: [true, false],
			defaultValue: { summary: true },
			description: 'Destroy inactive panel `boolean`',
		},
		accordion: {
			control: 'radio',
			options: [true, false],
			defaultValue: { summary: false },
			description: 'If true, one active expended item at a time `boolean` ',
		},

		size: {
			control: 'radio',
			options: ['large', 'middle', 'small'],
			description: 'Collapsible size `large` | `middle` | `small`',
			defaultValue: { summary: 'middle' },
		},
		ghost: {
			control: 'radio',
			options: [true, false],
			defaultValue: { summary: false },
			description: 'Make the collapse borderless and its background transparent `boolean`',
		},
		collapsible: {
			control: 'radio',
			options: ['icon', 'header', 'disabled'],
			defaultValue: { summary: 'header' },
			description:
				'Specify whether the panels of children be collapsible or the trigger area of collapsible `icon` | `header` | `disabled`',
		},
	},
};

type Story = StoryObj<typeof Collapse>;

const text = 'Collapse content';

const items: CollapseProps['items'] = [
	{
		key: 1,
		label: 'This is panel header 1',
		children: <Head3>{text}</Head3>,
	},
	{
		key: 2,
		label: 'This is panel header 2',
		children: <p>{text}</p>,
	},
	{
		key: 3,
		label: 'This is panel header 3',
		children: <p>{text}</p>,
	},
];

export const HighLightCollapse: Story = {
	args: {
		defaultActiveKey: [1, 2],
		items: items,
		type: 'highlightPanels',
	},
};
export const WithArrowIcons: Story = {
	args: {
		defaultActiveKey: [1, 2],
		items: items,
		useArrowIcons: true,
	},
};
export const CustomBorder: Story = {
	args: {
		defaultActiveKey: [1, 2],
		items: items,
		customBorder: 'blue',
	},
};
export const CustomBorderBorderlessChildren: Story = {
	args: {
		defaultActiveKey: [1, 2],
		items: items,
		customBorder: 'blue',
		borderless: true,
	},
};

export const Default: Story = {
	args: {
		defaultActiveKey: [1, 2],
		items: items,
	},
};
export default meta;
