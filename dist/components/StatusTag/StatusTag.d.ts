import React from "react";
import { TagProps } from "antd";
export type UITagProps = Omit<TagProps, "color" | "icon"> & ({
    type: "running" | "complete" | "failed" | "error" | "queued";
} | {
    type: "custom";
    color: string;
    icon: JSX.Element;
});
declare const StatusTag: React.ForwardRefExoticComponent<UITagProps & React.RefAttributes<HTMLSpanElement>>;
export default StatusTag;
