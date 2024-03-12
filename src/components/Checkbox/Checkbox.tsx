import React, { forwardRef } from "react";
import { Checkbox, CheckboxProps, CheckboxRef } from "antd";
import styled from "styled-components";

const UICheckbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { className, style, ...rest } = props;

  return <StyledCheckbox ref={ref} style={style} {...rest} />;
});

const StyledCheckbox = styled(Checkbox)`
  &.ant-checkbox-wrapper {
    .ant-checkbox + span {
      color: ${(props) => props.theme.UI.texts.primary};
    }
  }
`;
export type { CheckboxProps as UICheckboxProps };

UICheckbox.displayName = "Checkbox";
export default UICheckbox;
