import React, { ReactNode } from 'react';
import { NotificationArgsProps, notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';
import UIButton from '../Button';

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

const useUINotification = ({
	type = 'info',
	title,
	content,
	placement = 'top',
	requiresManualClose = false,
	showBtn = false,
	showIcon = true,
	btnLabel,
	...props
}: NotificationType) => {
	// basic config
	const [api, contextHolder] = notification.useNotification({
		top: 24,
		maxCount: 1,
	});

	const trigger = (args?: { title?: string; content?: string }) => {
		const notifConfig: NotificationArgsProps = {
			message: args?.title || title,
			description: args?.content || content,
			placement,
			duration: requiresManualClose ? 0 : 3,
			btn: showBtn ? (
				<UIButton type="primary" size="small" onClick={() => api.destroy()}>
					{btnLabel ?? 'Confirm'}
				</UIButton>
			) : null,
			className: `ui-notification ${!showIcon && 'no-icon'}`,
			...(showIcon ? {} : { icon: <></> }),
			...props,
		};
		api[type](notifConfig);
	};

	return { trigger, contextHolder };
};

export default useUINotification;
