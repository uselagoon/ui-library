import { CollapseProps } from 'antd';
import React from 'react';
export type UICollapseProps = CollapseProps['items'] & CollapseProps;
declare const UICollapse: React.ForwardRefExoticComponent<CollapseProps & React.RefAttributes<HTMLDivElement>>;
export default UICollapse;
