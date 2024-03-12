import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Modal } from '../components/Modal';
import Button from '../components/Button';

function ModalComponent() {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setOpen(false);
		}, 3000);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<>
			<Button onClick={showModal}>Show Modal</Button>

			<Modal title={<h2>Modal title</h2>} subTitle="subtitle" open={open} onCancel={handleCancel} onOk={handleCancel}>
				<div style={{ height: '300px' }}>Modal content</div>
			</Modal>
		</>
	);
}

const meta: Meta<typeof Modal> = {
	component: Modal,
	title: 'Components/Modal',
	argTypes: {
		title: {
			description: 'Modal title `string`',
		},
		subTitle: {
			description: 'Modal subtitle `string`',
		},
		open: {
			description: '`boolean`',
		},
		onCancel: {
			description: 'Cancel callback `() => void`',
		},
		onOk: {
			description: 'Confirm callback `() => void`',
		},
	},
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	args: {},
	render: () => <ModalComponent />,
};

export default meta;
