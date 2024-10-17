import React, { FC, ReactNode } from 'react';

import { ModalProps } from 'antd';
import { ModalChildren, ModalFooterButton, StyledModal } from './styles';

type UIModalProps = { subTitle?: ReactNode; confirmText?: string; minHeight?: string } & Omit<
	ModalProps,
	'destroyonClose' | 'modalRender'
>;

const UIModal: FC<UIModalProps> = ({
	children,
	subTitle,
	title,
	onCancel,
	onOk,
	confirmText,
	confirmLoading,
	minHeight,
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
				<ModalFooterButton key="back" onClick={onCancel}>
					Cancel
				</ModalFooterButton>,
				<ModalFooterButton key="submit" type="primary" loading={confirmLoading} onClick={onOk}>
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
