import React, { FC, ReactNode } from 'react';

import { ModalProps, Modal, Button } from 'antd';
import { ModalChildren } from './styles';

type UIModalProps = {
	subTitle?: ReactNode;
	confirmText?: string;
	cancelText?: string;
	minHeight?: string;
	dangerConfirm?: boolean;
	confirmDisabled?: boolean;
} & Omit<ModalProps, 'destroyonClose' | 'modalRender'>;

const UIModal: FC<UIModalProps> = ({
	children,
	subTitle,
	title,
	onCancel,
	onOk,
	confirmText,
	cancelText,
	confirmLoading,
	minHeight,
	dangerConfirm,
	confirmDisabled,
	...props
}) => {
	let modalTitle = title;

	if (subTitle) {
		modalTitle = (
			<>
				{title}
				{subTitle}
			</>
		);
	}
	return (
		<Modal
			title={modalTitle}
			destroyOnClose
			maskClosable
			onCancel={onCancel}
			{...props}
			modalRender={(node: ReactNode) => {
				return <ModalChildren $minHeight={minHeight}>{node}</ModalChildren>;
			}}
			footer={[
				<Button key="back" id="cancel-btn" onClick={onCancel}>
					{cancelText ? cancelText : 'Cancel'}
				</Button>,
				<Button
					disabled={confirmDisabled}
					danger={dangerConfirm}
					key="submit"
					type="primary"
					loading={confirmLoading}
					onClick={onOk}
				>
					{confirmText ? confirmText : 'OK'}
				</Button>,
			]}
		>
			{children}
		</Modal>
	);
};

UIModal.displayName = 'Modal';
export type { UIModalProps };
export default UIModal;
