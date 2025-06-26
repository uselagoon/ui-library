import { Meta, StoryObj } from '@storybook/react';
import { Controls, Primary, Stories, Story, Title } from '@storybook/addon-docs/blocks';

import Sidenav from '../components/sidenav';

const meta: Meta<typeof Sidenav> = {
	component: Sidenav,
	title: 'Components/Sidenav',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>The main UI navigation sidebar.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
};

type Story = StoryObj<typeof Sidenav>;

export const Default: Story = {
	args: {
		children: 'Stuff',
	},
	parameters: {
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/Dashboard?type=design&node-id=66-6597&mode=design&t=P00gx6yjJRZgHUuj-4',
		},
	},
};

export default meta;
