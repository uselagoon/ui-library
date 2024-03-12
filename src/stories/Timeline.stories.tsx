import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as LagoonTimeline } from '../components/Timeline';
import { Controls, Primary, Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof LagoonTimeline> = {
	component: LagoonTimeline,
	title: 'Lagoon specific/Timeline',
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>Lagoon UI specific Timeline component for deployments and tasks.</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
		design: {
			type: 'figspec',
			url: 'https://www.figma.com/file/iRRQQSnRmqdcoiysogtjO7/UI-v2---Master?type=design&node-id=0-13135&mode=design&t=Vm8fqTLERqbE74YW-4',
		},
	},
};

type Story = StoryObj<typeof LagoonTimeline>;

export const Deployment: Story = {
	args: {
		type: 'deployment',
		items: [
			{
				environment: 'test6 (PROD)',
				deployName: 'lagoon-build-tfek1i',
				status: 'complete',
				date: '29/06/23, 13:47',
			},
			{
				environment: 'test6 (PROD)',
				deployName: 'lagoon-build-tfek1i',
				status: 'queued',
				date: '29/06/23, 13:47',
			},
			{
				environment: 'test6 (PROD)',
				deployName: 'lagoon-build-tfek1i',
				status: 'running',
				date: '29/06/23, 13:47',
			},
			{
				environment: 'test6 (PROD)',
				deployName: 'lagoon-build-tfek1i',
				status: 'failed',
				date: '29/06/23, 13:47',
			},
			{
				environment: 'test6 (PROD)',
				deployName: 'lagoon-build-tfek1i',
				status: 'error',
				date: '29/06/23, 13:47',
			},
		],
	},
};

export const Default: Story = {
	args: {
		type: 'task',
		items: [
			{
				environment: 'as-demo (master)',
				taskName: 'drush clear-cache',
				status: 'complete',
				navigationFunction: () => {},
			},
			{
				environment: 'as-demo (master)',
				taskName: 'Active/Standby Switch',
				status: 'error',
				navigationFunction: () => {},
			},
			{
				environment: 'as-demo (master)',
				taskName: 'drush sql-dump',
				status: 'running',
				navigationFunction: () => {},
			},
			{
				environment: 'as-demo (master)',
				taskName: 'drush clear-cache',
				status: 'complete',
				navigationFunction: () => {},
			},
			{
				environment: 'as-demo (master)',
				taskName: 'drush clear-cache',
				status: 'queued',
				navigationFunction: () => {},
			},
		],
	},
};

export default meta;
