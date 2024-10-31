import { CollapseProps } from 'antd';
import React from 'react';
export type UICollapseProps = Omit<CollapseProps, 'expandIconPosition' | 'expandIcon'> & {
    type: 'highlightPanels' | 'default';
    customBorder?: string;
    borderless?: boolean;
    useArrowIcons?: boolean;
};
declare const UICollapse: React.ForwardRefExoticComponent<Omit<CollapseProps, "expandIconPosition" | "expandIcon"> & {
    type: 'highlightPanels' | 'default';
    customBorder?: string | undefined;
    borderless?: boolean | undefined;
    useArrowIcons?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default UICollapse;
