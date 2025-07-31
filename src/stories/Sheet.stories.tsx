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
		buttonAction: (_, vals) => {
			console.warn(vals);
		},
		additionalContent: (
			<div className="text-purple-700">
				<p>Hello World</p>
			</div>
		),
		sheetFields: [
			{
				id: 'sheet-demo',
				label: 'Name',
				inputDefault: 'Placeholder',
				required: true,
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
