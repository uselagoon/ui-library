import React, { forwardRef } from "react";
import { Switch, SwitchProps } from "antd";

export interface UISwitchProps extends SwitchProps {
  showLabel?: boolean;
}

const UISwitch = forwardRef<HTMLButtonElement, UISwitchProps>((props, ref) => {
  const { showLabel = true, className, style, ...rest } = props;

  const labels = {
    checkedChildren: "ON",
    unCheckedChildren: "OFF",
  };
  const labelProps = showLabel ? labels : {};
  return <Switch ref={ref} style={style} {...labelProps} {...rest} />;
});

export default UISwitch;
