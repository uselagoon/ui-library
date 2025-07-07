import { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/addon-docs/blocks';
import { default as Sheet } from '../components/Sheet';

const meta: Meta<typeof Sheet> = {
	component: Sheet,
	title: 'Components/Sheet',
	tags: ['autodocs'],
};

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
	args: {
		sheetFields: [
			{
				id: 'sheet-demo',
				label: 'Name',
				inputDefault: 'Placeholder',
			},
			{
				id: 'sheet-demo-username',
				label: 'Username',
				inputDefault: 'Placeholder',
			},
		],
	},
};

export const Custom: Story = {
	args: {
		sheetTitle: 'Edit',
		sheetTrigger: 'Edit Profile',
		sheetDescription: 'Test Description',
		sheetFooterButton: 'Save!!',
		sheetFields: [
			{
				id: 'sheet-demo',
				label: 'Name',
				inputDefault: 'Placeholder',
			},
			{
				id: 'sheet-demo-username',
				label: 'Username',
				inputDefault: 'Placeholder',
			},
		],
	},
};
export default meta;
