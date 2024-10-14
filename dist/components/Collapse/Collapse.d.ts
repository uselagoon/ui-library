import { CollapseProps } from 'antd';
import React from 'react';
export type UICollapseProps = CollapseProps & {
    type: 'highlightPanels' | 'default';
};
declare const UICollapse: React.ForwardRefExoticComponent<CollapseProps & {
    type: 'highlightPanels' | 'default';
} & React.RefAttributes<HTMLDivElement>>;
export default UICollapse;
