import React from "react";
import { TreeDataNode, TreeProps } from "antd";
import { DataNode } from "antd/es/tree";
type UITreeProps = {
    items: TreeDataNode[];
    onClick?: TreeProps<DataNode>["onClick"];
} & Omit<TreeProps, "defaultExpandAll" | "showLine" | "multiple" | "checkable" | "showIcon" | "switcherIcon">;
declare const UITree: React.ForwardRefExoticComponent<{
    items: TreeDataNode[];
    onClick?: TreeProps<DataNode>["onClick"];
} & Omit<TreeProps<TreeDataNode>, "multiple" | "showIcon" | "switcherIcon" | "showLine" | "checkable" | "defaultExpandAll"> & React.RefAttributes<import("rc-tree/lib/Tree").default<TreeDataNode>>>;
export type { UITreeProps };
export default UITree;
