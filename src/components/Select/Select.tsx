import React, { forwardRef, useState } from "react";
import { RefSelectProps, Select, SelectProps } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";
import colors from "../../_util/colors";

const UISelect = forwardRef<RefSelectProps, SelectProps>((props, ref) => {
  const { className, style, ...rest } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledSelect
      ref={ref}
      defaultOpen={props.defaultOpen || true}
      style={style}
      dropdownRender={(menu) => {
        return <StyledDropDown>{menu}</StyledDropDown>;
      }}
      onDropdownVisibleChange={(open) => setIsOpen(open)}
      {...rest}
      suffixIcon={isOpen ? <UpOutlined /> : <DownOutlined />}
    />
  );
});

const StyledSelect = styled(Select)<SelectProps>`
  &.ant-select {
    min-width: 120px;

    & .ant-select-selector {
      span {
        color: #333;
      }
    }

    ${(props) =>
      props.theme.colorScheme === "dark" &&
      css`
        & .ant-select-selector {
          background-color: ${colors.darkGray};
          span {
            color: #fff;
          }
        }
        & .ant-select-arrow {
          color: #fff;
        }
      `}
  }
`;

const StyledDropDown = styled.section`
  background-color: initial;
  ${(props) =>
    props.theme.colorScheme === "dark" &&
    css`
      background-color: ${colors.cellGray};

      .ant-select-item.ant-select-item-option {
        color: #fff;
      }
      .ant-select-item.ant-select-item-option.ant-select-item-option-active {
        background-color: ${colors.gray};
      }
      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${colors.gray};
      }
    `}
`;

UISelect.displayName = "UISelect";

export type { SelectProps as UISelectProps };

export default UISelect;
