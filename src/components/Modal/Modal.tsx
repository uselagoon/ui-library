import React, { FC, ReactNode } from 'react';

import { ModalProps } from 'antd';
import { ModalChildren, ModalFooterButton, StyledModal } from './styles';

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
		<StyledModal
			title={modalTitle}
			destroyOnClose
			maskClosable
			onCancel={onCancel}
			{...props}
			modalRender={(node: ReactNode) => {
				return <ModalChildren $minHeight={minHeight}>{node}</ModalChildren>;
			}}
			footer={[
				<ModalFooterButton key="back" id="cancel-btn" onClick={onCancel}>
					{cancelText ? cancelText : 'Cancel'}
				</ModalFooterButton>,
				<ModalFooterButton
					disabled={confirmDisabled}
					danger={dangerConfirm}
					key="submit"
					type="primary"
					loading={confirmLoading}
					onClick={onOk}
				>
					{confirmText ? confirmText : 'OK'}
				</ModalFooterButton>,
			]}
		>
			{children}
		</StyledModal>
	);
};

UIModal.displayName = 'Modal';
export type { UIModalProps };
export default UIModal;
