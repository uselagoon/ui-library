import { FC, ReactNode } from 'react';
import { ModalProps } from 'antd';
type UIModalProps = {
    subTitle?: ReactNode;
    confirmText?: string;
    cancelText?: string;
    minHeight?: string;
    dangerConfirm?: boolean;
    confirmDisabled?: boolean;
} & Omit<ModalProps, 'destroyonClose' | 'modalRender'>;
declare const UIModal: FC<UIModalProps>;
export type { UIModalProps };
export default UIModal;
