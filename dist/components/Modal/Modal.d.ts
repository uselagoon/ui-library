import { FC, ReactNode } from 'react';
import { ModalProps } from 'antd';
type UIModalProps = {
    subTitle?: ReactNode;
    confirmText?: string;
    minHeight?: string;
} & Omit<ModalProps, 'destroyonClose' | 'modalRender'>;
declare const UIModal: FC<UIModalProps>;
export type { UIModalProps };
export default UIModal;
