import React from "react";
import { Form, FormItemProps } from "antd";
import styled from "styled-components";
import colors from "../../_util/colors";

const { Item } = Form;

const UIFormItem: React.FC<FormItemProps> = (props) => {
  return <StyledItem {...props} />;
};

const StyledItem = styled(Item)`
  &.ant-form-item {
    label {
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${(props) =>
        props.theme.colorScheme === "dark" ? colors.white : "#00000099"};
    }
  }
  &.ant-form-item
    .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
    &::before {
      display: none;
    }
    &::after {
      content: "* :";
      margin-inline-start: 1px;
      @supports (-webkit-background-clip: text) {
        color: transparent;
        background: ${(props) =>
          props.theme.colorScheme === "dark"
            ? `linear-gradient(
          to right,
          #e30000 0%,
          #e30000 50%,
          ${colors.white} 50%,
          ${colors.white} 100%
        );`
            : `linear-gradient(
          to right,
          #e30000 0%,
          #e30000 50%,
          black 50%,
          black 100%
        )`};
        -webkit-background-clip: text;
      }
    }
  }
`;

UIFormItem.displayName = "UIInput";

export default UIFormItem;

export type { FormItemProps as UIFormItemProps };
