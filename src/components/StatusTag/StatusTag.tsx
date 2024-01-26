import React, { forwardRef } from "react";

import { Tag, TagProps } from "antd";
import colors from "../../_util/colors";
import {
  CheckCircleOutlined,
  StopOutlined,
  SyncOutlined,
  WarningOutlined,
} from "@ant-design/icons";

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export type UITagProps = Omit<TagProps, "color" | "icon"> &
  (
    | {
        type: "running" | "complete" | "failed" | "error" | "queued";
      }
    | {
        type: "custom";
        color: string;
        icon: JSX.Element;
      }
  );

const InternalTag: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  UITagProps
> = ({ className, children, type, ...props }: UITagProps, ref) => {
  if (type === "custom") {
    return (
      <Tag ref={ref} className={className} {...props}>
        {children}
      </Tag>
    );
  }

  const tagColorMap = {
    running: {
      color: colors.blue,
      icon: <SyncOutlined spin />,
    },
    complete: {
      color: colors.green,
      icon: <CheckCircleOutlined />,
    },
    failed: {
      color: colors.orange,
      icon: <WarningOutlined />,
    },
    error: {
      color: colors.pink,
      icon: <StopOutlined />,
    },
    queued: {
      color: colors.yellow,
      icon: <SyncOutlined spin />,
    },
  };

  const currentTag = tagColorMap[type];
  return (
    <Tag ref={ref} className={className} color={currentTag.color} {...props}>
      {currentTag.icon} {capitalizeFirstLetter(type)}
    </Tag>
  );
};

const StatusTag = forwardRef<HTMLSpanElement, UITagProps>(InternalTag);

StatusTag.displayName = "UIStatusTag";

export default StatusTag;
