import React from "react";
import { TreeSelectProps } from "antd";
type UITreeSelectProps = {
    sectionsCheckable?: boolean;
} & Omit<TreeSelectProps, "multiple" | "treeIcon" | "treeDefaultExpandAll" | "treeLine" | "treeCheckable">;
declare const UITreeSelect: React.ForwardRefExoticComponent<{
    sectionsCheckable?: boolean | undefined;
} & Omit<TreeSelectProps<any, import("rc-tree-select/lib/TreeSelect").DefaultOptionType>, "multiple" | "treeIcon" | "treeDefaultExpandAll" | "treeLine" | "treeCheckable"> & React.RefAttributes<HTMLElement>>;
export type { UITreeSelectProps };
export default UITreeSelect;
