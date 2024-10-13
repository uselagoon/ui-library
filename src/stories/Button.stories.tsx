import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Controls, Primary, Stories, Story, Title } from '@storybook/blocks';

import { default as Button } from '../components/Button';
import { CaretDownFilled, SearchOutlined } from '@ant-design/icons';

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Components/Button',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>The main UI Button to trigger an operation.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
	argTypes: {
		size: {
			control: 'radio',
			options: ['large', 'small', 'middle'],
			type: 'string',
			description: 'Size of the button',
			defaultValue: { summary: 'large' },
		},
		type: {
			control: 'radio',
			options: ['primary', 'secondary'],
			type: 'string',
			description: 'Button type',
			defaultValue: { summary: 'primary' },
		},
		loading: {
			control: 'boolean',
			defaultValue: { summary: 'false' },
			description: 'Loading state of button',
		},
		iconBefore: {
			control: 'none',
			defaultValue: { summary: '-' },
			description: 'Icon appearing before button text',
		},
		iconAfter: {
			control: 'none',
			defaultValue: { summary: '-' },
			description: 'Icon appearing after button text',
		},
		children: {
			type: 'string',
			control: 'text',
			defaultValue: { summary: '-' },
			description: '`ReactNode`',
		},
		onClick: {
			control: 'none',
			defaultValue: { summary: '-' },
			description: 'Set the handler to handle click event `(event: MouseEvent) => void`',
		},
		classNames: {
			control: 'none',
			type: 'string',
			defaultValue: { summary: '-' },
			description:
				"	Semantic DOM class - <a target='blank' href='https://ant.design/components/button#semantic-dom'>Record<SemanticDOM, string></a>",
		},
		disabled: {
			control: 'boolean',
			type: 'boolean',
			defaultValue: { summary: false },
			description: 'Disabled state of button	`boolean`',
		},
		styles: {
			control: 'none',
			type: 'string',
			defaultValue: { summary: '-' },
			description: 'Custom css styles `React.CSSProperties`',
		},
		href: {
			control: 'none',
			type: 'string',
			defaultValue: { summary: '-' },
			description: 'Redirect url of link button `string`',
		},
		target: {
			control: 'none',
			type: 'string',
			defaultValue: { summary: 'self' },
			description: 'Same as target attribute of a, works when href is specified	`string`',
		},
		htmlType: {
			control: 'none',
			type: 'string',
			defaultValue: { summary: '-' },
			description: 'Set the original html type of button `string`',
		},
		block: {
			control: 'none',
			type: 'boolean',
			defaultValue: { summary: false },
			description: '	Option to fit button width to its parent width `boolean`',
		},
		shape: {
			control: 'radio',
			options: ['default', 'circle', 'round'],
			defaultValue: { summary: 'default' },
			type: 'string',
			description: 'Set button shape',
		},
	},
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		size: 'large',
		type: 'primary',
		children: 'Retrieve',
		onClick: () => {
			alert('clicked');
		},
	},
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/Dashboard?type=design&node-id=66-6597&mode=design&t=P00gx6yjJRZgHUuj-4',
		},
	},
};

export const WithIconBefore: Story = {
	args: {
		size: 'large',
		type: 'primary',
		iconBefore: <SearchOutlined />,
		children: 'Retrieve',
	},
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/Dashboard?type=design&node-id=66-6607&mode=design&t=P00gx6yjJRZgHUuj-4',
		},
	},
};

export const WithIconAfter: Story = {
	args: {
		size: 'middle',
		type: 'primary',
		iconAfter: <CaretDownFilled />,
		children: 'Retrieve',
	},
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/Dashboard?type=design&node-id=66-6616&mode=design&t=P00gx6yjJRZgHUuj-4',
		},
	},
};

export const Disabled: Story = {
	args: {
		size: 'large',
		type: 'primary',
		disabled: true,
		children: 'Retrieve',
	},
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/Dashboard?type=design&node-id=66-6643&mode=design&t=P00gx6yjJRZgHUuj-4',
		},
	},
};

export const ButtonLink: Story = {
	args: {
		size: 'large',
		type: 'secondary',
		target: '_blank',
		href: 'https://lagoon.sh/',
		children: 'Button link',
	},
};

export const DisabledButtonLink: Story = {
	args: {
		disabled: true,
		type: 'primary',
		target: '_blank',
		href: 'https://lagoon.sh/',
		children: 'Button link',
	},
};

export default meta;
