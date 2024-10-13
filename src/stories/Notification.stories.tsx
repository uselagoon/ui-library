import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as useNotification, NotificationType } from '../components/Notification';
import Button from '../components/Button';
import { Space } from 'antd';

function AllNotificationsComponent() {
	const notif = useNotification({
		type: 'info',
		title: 'Info',
		content: "Yup, here's some info",
		showBtn: true,
		btnLabel: 'confirm',
	});
	const error = useNotification({
		type: 'error',
		title: 'There was an error',
		content: 'Some sort of error',
		showIcon: false,
	});

	const success = useNotification({
		type: 'success',
		title: 'Success',
		content: 'Wow success',
	});

	const warning = useNotification({
		type: 'warning',
		title: 'Warning',
		content: "You've been warned! ",
	});

	return (
		<>
			{notif.contextHolder}
			{error.contextHolder}
			{success.contextHolder}
			{warning.contextHolder}
			<Space>
				<Button onClick={() => notif.trigger()}>Info </Button>
				<Button onClick={() => error.trigger()}>Error without icon </Button>
				<Button onClick={() => success.trigger()}>Success </Button>
				<Button onClick={() => warning.trigger()}>Warning </Button>
			</Space>
		</>
	);
}

function ErrorNotification({ type, title, content, requiresManualClose }: NotificationType) {
	const error = useNotification({
		type,
		title,
		content,
		requiresManualClose,
	});

	return (
		<>
			{error.contextHolder}
			<Button onClick={() => error.trigger()}>Error </Button>
		</>
	);
}

function WarningNotification({ type, title, content, requiresManualClose }: NotificationType) {
	const warning = useNotification({
		type,
		title,
		content,
		requiresManualClose,
	});

	return (
		<>
			{warning.contextHolder}
			<Button onClick={() => warning.trigger()}>Warning </Button>
		</>
	);
}

const meta: Meta<typeof useNotification> = {
	component: AllNotificationsComponent,
	title: 'Components/useNotification',
	argTypes: {
		type: {
			description: '`info` | `error` | `warning` | `success`',
		},
		title: {
			type: 'string',
			description: 'Optional title',
		},
		content: {
			description: '`ReactNode`',
		},
		icon: {
			description: '`ReactNode`',
		},
		showBtn: {
			description: '`Boolean` - if present, it will show the confirm/close icon',
		},
		BtnLabel: {
			description: '`string` - button label',
		},
		requiresManualClose: {
			description:
				'By default notifications get unmounted in 3 seconds, if `requiresManualClose` is set to `true`, it will persist until a user closes it manually',
			defaultValue: {
				summary: 'false',
			},
		},
	},
};

type Story = StoryObj<typeof useNotification>;

export const Default: Story = {
	args: {},
};

export const Error: Story = {
	render: () => <ErrorNotification type="error" title="There was an error" content="Some sort of error" />,
};

export const ErrorRequiresManualClose: Story = {
	render: () => (
		<ErrorNotification type="error" title="There was an error" content="Some sort of error" requiresManualClose />
	),
};

export const Warning: Story = {
	render: () => <WarningNotification type="warning" title="Warning" content="You have been warned!" />,
};

export default meta;
