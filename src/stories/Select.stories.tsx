import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Select } from '../components/Select';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Select> = {
	component: Select,
	title: 'Components/Select',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Select from given options</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=85-7312&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		placeholder: {
			defaultValue: { summary: '-' },
			control: 'text',
			type: 'string',
			description: 'Placeholder text',
		},
		options: {
			description: 'Select options `{ label, value }[]`',
		},
		allowClear: {
			description: 'Customize clear icon	`boolean | { clearIcon?: ReactNode }`',
			defaultValue: { summary: false },
		},
		autoClearSearchValue: {
			description:
				'Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags `boolean`',
			defaultValue: { summary: true },
		},
		autoFocus: {
			description: 'Get focus by default	`boolean`',
			defaultValue: { summary: false },
		},
		defaultActiveFirstOption: {
			description: 'Whether active first option by default		`boolean`',
			defaultValue: { summary: true },
		},
		defaultOpen: {
			description: 'Initial open state of dropdown	`boolean`',
			defaultValue: { summary: '-' },
		},
	},
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	args: {
		placeholder: 'Select an option',
		options: [
			{ value: '1', label: 'Select option #1' },
			{ value: '2', label: 'Select option #2' },
			{ value: '3', label: 'Select option #3' },
		],
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Cannot select anything',
	},
};

export default meta;
