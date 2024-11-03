import React, { ReactNode } from 'react';
type TreeData = {
    sectionTitle: ReactNode;
    sectionChildren: ReactNode[];
};
type TreeListProps = {
    children: ReactNode;
    data: TreeData[];
};
declare const TreeList: React.ForwardRefExoticComponent<TreeListProps & React.RefAttributes<HTMLElement>>;
export type { TreeListProps };
export default TreeList;
