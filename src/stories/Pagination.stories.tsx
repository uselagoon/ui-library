import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Pagination } from '../components/Pagination';

const meta: Meta<typeof Pagination> = {
	component: Pagination,
	title: 'Components/Pagination',
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-9087&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		current: {
			description: 'Current page number `number`',
			defaultValue: { summary: '-' },
		},
		defaultPageSize: {
			description: 'Default number of data items per page	 `number`',
			defaultValue: { summary: 10 },
		},
		disabled: {
			description: 'disable pagination `boolean`',
			defaultValue: { summary: false },
		},
		hideOnSinglePage: {
			description: 'Hide pagination if just one page `boolean`',
			defaultValue: { summary: false },
		},
		itemRender: {
			description:
				"Custom page item render `(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode`",
			defaultValue: { summary: false },
		},
		showQuickJumper: {
			description: 'Determine whether you can jump to pages directly	 `boolean`',
			defaultValue: { summary: false },
		},
		showTotal: {
			description: 'To display the total number and range		 `function(total, range)`',
			defaultValue: { summary: '-' },
		},
		onChange: {
			description: 'Callback when pages change `function(page, pageSize)`',
			defaultValue: { summary: '-' },
		},
		onShowSizeChange: {
			description: 'Callback when pageSize changes `function(page, pageSize)`',
			defaultValue: { summary: '-' },
		},
	},
};

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
	args: {
		total: 100,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const ShowSizeChanger: Story = {
	args: {
		showSizeChanger: true,
	},
};

export default meta;
