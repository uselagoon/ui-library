import React from "react";
import { SwitchProps } from "antd";
export interface UISwitchProps extends SwitchProps {
    showLabel?: boolean;
}
declare const UISwitch: React.ForwardRefExoticComponent<UISwitchProps & React.RefAttributes<HTMLButtonElement>>;
export default UISwitch;
