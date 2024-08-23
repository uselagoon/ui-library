import React, { ReactNode } from 'react';
import { NotificationArgsProps } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';
export type NotificationType = {
    type?: 'error' | 'warning' | 'info' | 'success';
    requiresManualClose?: boolean;
    title: string;
    content: ReactNode;
    placement?: NotificationPlacement;
} & Omit<NotificationArgsProps, 'placement' | 'message' | 'description' | 'btn'> & {
    showBtn?: boolean;
    btnLabel?: string;
    showIcon?: boolean;
};
declare const useUINotification: ({ type, title, content, placement, requiresManualClose, showBtn, showIcon, btnLabel, ...props }: NotificationType) => {
    trigger: () => void;
    contextHolder: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export default useUINotification;
