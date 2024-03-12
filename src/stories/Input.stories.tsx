import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as FormItem } from '../components/FormItem';

import { default as Input } from '../components/Input';

import { Form } from 'antd';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Input> = {
	component: Input,
	title: 'Components/FormItem + Input',
	argTypes: {
		name: { control: 'text' },
		placeholder: { control: 'text' },
	},
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>When Input is used with FormItem wrapper we get powerful validation</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		type: 'figspec',
		url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-15333&mode=design&t=Vm8fqTLERqbE74YW-4',
	},
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		size: 'large',
		placeholder: 'Some placeholder',
		name: 'test',
	},
};

export const WithFormItemWrapper = ({ label, inputPlaceholder }) => (
	<FormItem label={label}>
		<Input placeholder={inputPlaceholder} />
	</FormItem>
);

WithFormItemWrapper.args = {
	label: 'Enter your value',
	inputPlaceholder: "Wrapped in 'UIFormItem' parent",
};

export const CustomizedLabelAndPlaceholder = () => (
	<WithFormItemWrapper label="Custom Label" inputPlaceholder="Custom Placeholder" />
);

export const WithRequiredLabel: Story = {
	render: () => (
		<Form style={{ maxWidth: '500px' }}>
			<FormItem required label="Enter your value">
				<Input placeholder="Wrapped in 'FormItem' with required rule" />
			</FormItem>
		</Form>
	),
};

export const WithValidation: Story = {
	render: () => (
		<Form style={{ maxWidth: '500px' }}>
			<FormItem label="Enter something" name="value" rules={[{ required: true, message: 'Please input something' }]}>
				<Input placeholder="Wrapped in 'FormItem' with required rule" />
			</FormItem>
		</Form>
	),
};

export default meta;
