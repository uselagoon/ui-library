import React, { forwardRef } from "react";

import { TreeSelect, TreeSelectProps } from "antd";
import styled, { css } from "styled-components";
import colors from "../../_util/colors";

type UITreeSelectProps = { sectionsCheckable?: boolean } & Omit<
  TreeSelectProps,
  | "multiple"
  | "treeIcon"
  | "treeDefaultExpandAll"
  | "treeLine"
  | "treeCheckable"
>;

const InternalTreeSelector: React.ForwardRefRenderFunction<
  any,
  UITreeSelectProps
> = ({ treeData, placeholder, sectionsCheckable = false }, ref) => {
  return (
    <StyledTree
      ref={ref}
      placeholder={placeholder || "Select an action"}
      treeDefaultExpandAll={true}
      treeData={treeData}
      treeLine={false}
      multiple={false}
      treeIcon={true}
      treeCheckable={sectionsCheckable}
      popupClassName="ui-tree"
      dropdownRender={(menu) => <StyledDropdown>{menu}</StyledDropdown>}
    />
  );
};

const StyledTree = styled(TreeSelect)`
  &.ant-select {
    min-width: 530px;
  }
`;
const StyledDropdown = styled.section`
  .ant-select-tree {
    background-color: ${(props) =>
      props.theme.colorScheme === "dark" ? "blue" : "initial"};

    ${(props) =>
      props.theme.colorScheme === "dark" &&
      css`
        box-shadow:
          2px 2px 3px 0px #3333331a,
          -2px -2px 3px 0px #3333331a;
        background-color: ${colors.cellGray};
        & > * {
          color: ${colors.white};
        }

        .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
          background-color: ${colors.lighterGray};
        }
      `};
    span[aria-hidden="true"] {
      display: none;
    }
  }
`;

const UITreeSelect = forwardRef<HTMLElement, UITreeSelectProps>(
  InternalTreeSelector
);

UITreeSelect.displayName = "UITreeSelect";

export type { UITreeSelectProps };
export default UITreeSelect;
