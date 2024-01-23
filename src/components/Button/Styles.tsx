import styled, { css } from "styled-components";
import { Button as AntButton } from "antd";
import { ButtonSizeType } from "./Button";
import colors from "../../_util/colors";

const primaryBtnStyles = css`
  background-color: ${colors.lagoonBlue};

  &:not(:disabled):not(.ant-btn-disabled) {
    &:hover {
      background-color: ${colors.buttons.primary.hover};
    }
    &:active {
      background-color: ${colors.buttons.primary.active};
    }
  }
`;
const secondaryBtnStyles = css`
  background-color: ${colors.buttons.secondary.default};

  &:not(:disabled):not(.ant-btn-disabled) {
    &:hover {
      background-color: ${colors.buttons.secondary.hover};
    }
    &:active {
      background-color: ${colors.buttons.secondary.active};
    }
  }
`;

const sizeMap = {
  large: {
    padding: "8px 22px",
  },
  middle: {
    padding: "4px 16px",
  },
  small: {
    padding: "0 8px",
  },
};

export const IconBeforeWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;
export const IconAfterWrapper = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
`;

export const UIButton = styled(AntButton)<ButtonSizeType>`
  &.ant-btn {
    color: #fff;
    &:disabled {
      background-color: #00000073;
    }
    padding: ${(props) =>
      props.size ? sizeMap[props.size].padding : "initial"};

    ${(props) =>
      props.type === "primary" ? primaryBtnStyles : secondaryBtnStyles}
  }
`;
