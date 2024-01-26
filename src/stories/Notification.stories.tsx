import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import {
  default as useUINotification,
  NotificationType,
} from "../components/Notification";
import UIButton from "../components/Button";
import { Space } from "antd";

function AllNotificationsComponent() {
  const notif = useUINotification({
    type: "info",
    title: "Info",
    content: "Yup, here's some info",
    showBtn: true,
    btnLabel: "Close me!",
  });
  const error = useUINotification({
    type: "error",
    title: "There was an error",
    content: "Some sort of error",
  });

  const success = useUINotification({
    type: "success",
    title: "Success",
    content: "Wow success",
  });

  const warning = useUINotification({
    type: "warning",
    title: "Warning",
    content: "You've been warned! ",
  });

  return (
    <>
      {notif.contextHolder}
      {error.contextHolder}
      {success.contextHolder}
      {warning.contextHolder}
      <Space>
        <UIButton onClick={() => notif.trigger()}>Info </UIButton>
        <UIButton onClick={() => error.trigger()}>Error </UIButton>
        <UIButton onClick={() => success.trigger()}>Success </UIButton>
        <UIButton onClick={() => warning.trigger()}>Warning </UIButton>
      </Space>
    </>
  );
}

function ErrorNotification({
  type,
  title,
  content,
  requiresManualClose,
}: NotificationType) {
  const error = useUINotification({
    type,
    title,
    content,
    requiresManualClose,
  });

  return (
    <>
      {error.contextHolder}
      <UIButton onClick={() => error.trigger()}>Error </UIButton>
    </>
  );
}

function WarningNotification({
  type,
  title,
  content,
  requiresManualClose,
}: NotificationType) {
  const warning = useUINotification({
    type,
    title,
    content,
    requiresManualClose,
  });

  return (
    <>
      {warning.contextHolder}
      <UIButton onClick={() => warning.trigger()}>Warning </UIButton>
    </>
  );
}

const meta: Meta<typeof useUINotification> = {
  component: AllNotificationsComponent,
  title: "Components/useUINotification",
  argTypes: {
    type: {
      description: "`info` | `error` | `warning` | `success`",
    },
    title: {
      type: "string",
      description: "Optional title",
    },
    content: {
      description: "`ReactNode`",
    },
    icon: {
      description: "`ReactNode`",
    },
    showBtn: {
      description:
        "`Boolean` - if present, it will show the confirm/close icon",
    },
    BtnLabel: {
      description: "`string` - button label",
    },
    requiresManualClose: {
      description:
        "By default notifications get unmounted in 3 seconds, if `requiresManualClose` is set to `true`, it will persist until a user closes it manually",
      defaultValue: {
        summary: "false",
      },
    },
  },
};

type Story = StoryObj<typeof useUINotification>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  render: () => (
    <ErrorNotification
      type="error"
      title="There was an error"
      content="Some sort of error"
    />
  ),
};

export const ErrorRequiresManualClose: Story = {
  render: () => (
    <ErrorNotification
      type="error"
      title="There was an error"
      content="Some sort of error"
      requiresManualClose
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <WarningNotification
      type="warning"
      title="Warning"
      content="You have been warned!"
    />
  ),
};

export default meta;
