import { CollapseProps } from 'antd';
import React from 'react';
export type UICollapseProps = CollapseProps['items'] & CollapseProps & {
    type: 'highlightPanels' | 'default';
};
declare const UICollapse: React.ForwardRefExoticComponent<import("rc-collapse/es/interface").ItemType[] & CollapseProps & {
    type: 'highlightPanels' | 'default';
} & React.RefAttributes<HTMLDivElement>>;
export default UICollapse;
