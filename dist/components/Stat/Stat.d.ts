import React, { ReactNode } from 'react';
import { StatisticProps } from 'antd';
type StatProps = Omit<StatisticProps, 'value'> & {
    fullWidth?: boolean;
    lowercaseValue?: boolean;
    capitalizeValue?: boolean;
    value: ReactNode;
};
declare const UIStat: React.FC<StatProps>;
export default UIStat;
export type { StatProps as UIStatProps };
