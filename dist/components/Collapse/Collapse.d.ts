import { CollapseProps } from 'antd';
import React, { ReactNode } from 'react';
export type UICollapseProps = Omit<CollapseProps, 'expandIconPosition' | 'expandIcon'> & {
    type: 'highlightPanels' | 'default';
    customBorder?: string;
    borderless?: boolean;
    useArrowIcons?: boolean;
    icon?: ReactNode;
};
declare const UICollapse: React.ForwardRefExoticComponent<Omit<CollapseProps, "expandIconPosition" | "expandIcon"> & {
    type: 'highlightPanels' | 'default';
    customBorder?: string | undefined;
    borderless?: boolean | undefined;
    useArrowIcons?: boolean | undefined;
    icon?: ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default UICollapse;
