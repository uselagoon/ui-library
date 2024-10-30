import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Confirm } from '../components/Confirm';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';
import Button from '../components/Button';

const meta: Meta<typeof Confirm> = {
	component: Confirm,
	title: 'Components/Confirm',
	parameters: {
		docs: {
			page: () => {
				return (
					<>
						<Title />
						<p>Confirm component used to double check user actions before actually running mutations.</p>
						<Primary />
						<Controls />
						<h2>Usage with Form</h2>
						<Stories />
					</>
				);
			},
		},
	},
};

type Story = StoryObj<typeof Confirm>;

export const Default: Story = {
	args: {
		description: 'Desc',
		title: 'Title',
		okText: 'Run!',
		cancelText: 'Go back',
		placement: 'right',
		onConfirm: (e) => {
			return new Promise((res) => {
				res('returning a resolved/rejected promise decides to close or not');
			});
		},
		children: <Button>Click to trigger</Button>,
	},
};

export const AnyReactNodeChild: Story = {
	args: {
		children: 'Click to open confirm dialog',
	},
};
export const Disabled: Story = {
	args: {
		children: 'Will not work',
		disabled: true,
	},
};

export default meta;
