import React from 'react';
import { RefSelectProps, SelectProps } from 'antd';
type SelectedState = any;
declare const UISelect: React.ForwardRefExoticComponent<SelectProps<any, import("rc-select/lib/Select").DefaultOptionType> & {
    selectedState?: SelectedState;
    setSelectedState?: React.Dispatch<any> | undefined;
} & React.RefAttributes<RefSelectProps>>;
export type { SelectProps as UISelectProps };
export default UISelect;
