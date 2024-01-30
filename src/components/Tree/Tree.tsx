import React, { forwardRef } from "react";

import { Tree, TreeDataNode, TreeProps } from "antd";
import { DataNode } from "antd/es/tree";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

type UITreeProps = {
  items: TreeDataNode[];
  onClick?: TreeProps<DataNode>["onClick"];
} & Omit<
  TreeProps,
  | "defaultExpandAll"
  | "showLine"
  | "multiple"
  | "checkable"
  | "showIcon"
  | "switcherIcon"
>;

const InternalTree: React.ForwardRefRenderFunction<
  React.ElementRef<typeof Tree>,
  UITreeProps
> = ({ className, children, items, onClick, ...props }: UITreeProps, ref) => {
  return (
    <StyledTree
      ref={ref}
      showIcon
      treeData={items}
      switcherIcon={<DownOutlined style={{ fontSize: "14px" }} />}
      defaultExpandAll={true}
      showLine={false}
      multiple={false}
      checkable={false}
      className="ui-dropdowntree"
      {...props}
    />
  );
};

const StyledTree = styled(Tree)<TreeProps>`
  &.ant-tree {
    background-color: transparent;
    max-width: max-content;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-family: "ArabicPro-Regular", sans-serif;
    color: ${(props) => props.theme.UI.texts.primary};

    .ant-tree-list
      .ant-tree-list-holder
      div
      .ant-tree-list-holder-inner
      .ant-tree-treenode {
      span.ant-tree-switcher.ant-tree-switcher-noop {
        display: none;
      }
    }
  }
  &.ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected {
    background-color: ${(props) => props.theme.UI.backgrounds.selection};
  }
`;

const UITree = forwardRef<React.ElementRef<typeof Tree>, UITreeProps>(
  InternalTree
);

UITree.displayName = "UITree";

export type { UITreeProps };

export default UITree;
