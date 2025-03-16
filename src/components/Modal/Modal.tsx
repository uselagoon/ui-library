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

	const handleVisibility = (opened: boolean): void => {
		const htmlElement = document.documentElement;
		if (opened) {
			htmlElement.style.overflow = 'hidden';
		} else {
			htmlElement.style.overflow = 'initial';
		}
	};

	return (
		<Modal
			title={modalTitle}
			destroyOnClose
			maskClosable
			onCancel={onCancel}
			afterOpenChange={handleVisibility}
			{...props}
			modalRender={(node: ReactNode) => {
				return <ModalChildren $minHeight={minHeight}>{node}</ModalChildren>;
			}}
			footer={[
				<Button data-cy="modal-cancel" key="back" id="cancel-btn" onClick={onCancel}>
					{cancelText ? cancelText : 'Cancel'}
				</Button>,
				<Button
					data-cy="modal-confirm"
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
