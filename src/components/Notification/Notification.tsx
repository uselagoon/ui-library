import React, { ReactNode, useCallback } from "react";
import { NotificationArgsProps, notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import UIButton from "../Button";

export type NotificationType = {
  type?: "error" | "warning" | "info" | "success";
  requiresManualClose?: boolean;
  title: string;
  content: ReactNode;
  placement?: NotificationPlacement;
} & Omit<
  NotificationArgsProps,
  "placement" | "message" | "description" | "btn"
> & {
    showBtn?: boolean;
    btnLabel?: string;
  };

const useUINotification = ({
  type = "info",
  title,
  content,
  placement = "top",
  requiresManualClose = false,
  showBtn = false,
  btnLabel,
  ...props
}: NotificationType) => {
  // basic config
  const [api, contextHolder] = notification.useNotification({
    top: 24,
    maxCount: 1,
  });

  const NotificationMemo = useCallback(() => {
    const notifConfig: NotificationArgsProps = {
      message: title,
      description: content,
      placement,
      duration: requiresManualClose ? 0 : 3,
      btn: showBtn ? (
        <UIButton type="primary" size="small" onClick={() => api.destroy()}>
          {btnLabel ?? "Confirm"}
        </UIButton>
      ) : null,
      style: {
        fontFamily: "Roboto",
      },
      className: "ui-notification",
      ...props,
    };

    return api[type](notifConfig);
  }, []);

  const trigger = NotificationMemo;

  return { trigger, contextHolder };
};

export default useUINotification;
