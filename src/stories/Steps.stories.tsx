import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Steps } from '../components/Steps';
import { CheckSquareOutlined, LoadingOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Steps> = {
	component: Steps,
	title: 'Components/Steps',

	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Steps component, shows user progress within some given steps</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=112-7863&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
	argTypes: {
		items: {
			description:
				' `Item` Array <br/> <br/> title - `ReactNode` <br/> description - `ReactNode` <br/> icon - `ReactNode`',
		},
		current: {
			description: 'Currently active item in the `items` array',
		},
	},
};

const items = [
	{
		title: 'Login',
		icon: <UserOutlined />,
	},
	{
		title: 'Verification',
		description: 'Non-required description',
		icon: <SolutionOutlined />,
	},
	{
		title: 'Processing',
		icon: <LoadingOutlined />,
	},
	{
		title: 'Done',
		icon: <CheckSquareOutlined />,
	},
];

type Story = StoryObj<typeof Steps>;

export const Default: Story = {
	args: {
		items: items,
		current: 2,
	},
};

export default meta;
