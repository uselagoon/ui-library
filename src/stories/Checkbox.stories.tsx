import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Checkbox } from '../components/Checkbox';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: 'Components/Checkbox',
	parameters: {
		docs: {
			page: () => {
				const checkboxString = `<Checkbox />`;
				const formItemString = `<FormItem />`;

				const wrappedComponentsString = `wrap the ${checkboxString} component within the ${formItemString} component`;

				return (
					<>
						<Title />
						<p>Checkbox component, can be used standalone or in the FormItem component.</p>
						<Primary />
						<Controls />
						<h2>Usage with Form</h2>
						<code>{wrappedComponentsString}</code>
						<Stories />
					</>
				);
			},
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=85-7295&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		checked: {
			control: 'radio',
			options: [true, false],
			type: 'string',
			description: 'Checked `Boolean`',
			defaultValue: { summary: true },
		},
		onChange: {
			control: 'none',
			defaultValue: { summary: '-' },
			description: 'Callback function `(e: CheckboxChangeEvent) => void	`',
		},
		autoFocus: {
			control: 'none',
			description: 'Should checkbox be focused when component mounteds `Boolean`',
			defaultValue: { summary: 'false' },
		},

		children: {
			type: 'string',
			control: 'text',
			description: 'Any valid `ReactNode`',
		},

		defaultChecked: {
			control: 'radio',
			options: [true, false],
			description: 'Specifies the initial state: whether or not the checkbox is selected `Boolean`',
			defaultValue: { summary: false },
		},
		indeterminate: {
			control: 'radio',
			options: [true, false],
			description: 'The indeterminate checked state of checkbox `Boolean`',
			defaultValue: { summary: false },
		},

		disabled: {
			control: 'radio',
			options: [true, false],
			description: 'Disable checkbox `Boolean`',
			defaultValue: { summary: false },
		},
	},
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		children: 'Checkbox',
	},
};
export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export default meta;
