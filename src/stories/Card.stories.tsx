import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as LagoonCard } from '../components/Card';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof LagoonCard> = {
	component: LagoonCard,
	title: 'Lagoon specific/LagoonCard',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI specific environment card.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},

		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-13035&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		type: {
			control: 'none',
			description:
				"Card type `project` | `environment` | `new` <br/> 'envType' must be provided if type is set to `environment`",
		},
		title: {
			control: 'text',
			description: 'Card title `string`',
		},
		envType: {
			control: 'radio',
			options: ['development', 'active production', 'production', 'standby production', 'error'],
			description: 'Environment type `string`',
		},
		status: {
			control: 'radio',
			options: ['low', 'medium', 'high'],
			description: 'Health `low` | `medium` | `high` ',
		},
		projects: {
			control: 'none',
			description: ' project Array if type is set to `environment`',
		},
		environments: {
			control: 'none',
			description: ' project Array if type is set to `project`',
		},
		loading: {
			control: 'radio',
			options: [true, false],
			description: 'loading state `boolean` ',
		},
	},
};

type Story = StoryObj<typeof LagoonCard>;

export const DevEnvironment: Story = {
	args: {
		type: 'environment',
		title: '8.x-test6',
		envType: 'development',
		status: 'low',
		projects: [
			{
				name: 'test6-drupal-example-simple-8-x-test6',
			},
			{
				name: 'test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type',
			},
			{
				name: 'test6-lagoon',
			},
		],
	},
};
export const ActiveProd: Story = {
	args: {
		type: 'environment',
		title: '8.x-test6',
		envType: 'active production',
		status: 'low',
		projects: [
			{
				name: 'test6-drupal-example-simple-8-x-test6',
			},
			{
				name: 'test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type',
			},
			{
				name: 'test6-lagoon',
			},
		],
	},
};

export const Prod: Story = {
	args: {
		type: 'environment',
		title: '8.x-test6',
		envType: 'production',
		status: 'low',
		projects: [
			{
				name: 'test6-drupal-example-simple-8-x-test6',
			},
			{
				name: 'test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type',
			},
			{
				name: 'test6-lagoon',
			},
		],
	},
};

export const StandbyProd: Story = {
	args: {
		type: 'environment',
		title: '8.x-test6',
		envType: 'standby production',
		status: 'low',
		projects: [
			{
				name: 'test6-drupal-example-simple-8-x-test6',
			},
			{
				name: 'test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type',
			},
			{
				name: 'test6-lagoon',
			},
		],
	},
};

export const Project: Story = {
	args: {
		type: 'project',
		title: 'as-demo',
		status: 'high',
		environments: ['master (active production)', 'master-alt (standby production)', 'master-broken'],
	},
};

export const New: Story = {
	args: {
		type: 'new',
	},
};

export const Loading: Story = {
	args: {
		loading: true,
	},
};

export const Error: Story = {
	args: {
		type: 'environment',
		title: '8.x-test6',
		envType: 'error',
		status: 'low',
		projects: [
			{
				name: 'test6-drupal-example-simple-8-x-test6',
			},
			{
				name: 'test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type',
			},
			{
				name: 'test6-lagoon',
			},
		],
	},
};

export default meta;
