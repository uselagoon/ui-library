import { ListProps } from 'antd';
import React, { ReactNode, RefAttributes } from 'react';
declare const AntdListItem: import("antd/es/list/Item").ListItemTypeProps;
export interface UIListProps<T> extends ListProps<T>, RefAttributes<HTMLElement> {
    children?: ReactNode;
}
interface UIListType extends React.ForwardRefExoticComponent<UIListProps<any> & React.RefAttributes<HTMLElement>> {
    Item: typeof AntdListItem;
}
declare const UIList: UIListType;
export default UIList;
