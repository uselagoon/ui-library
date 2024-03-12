import { FC, MouseEventHandler, ReactNode } from 'react';
import { BreadcrumbProps } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
export interface UIBreadcrumbProps extends Omit<BreadcrumbProps, 'itemRender' | 'params'> {
    prependSeparator?: ReactNode;
    items: (({
        navOnClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
        key?: string | number;
    } & Pick<ItemType, 'title'>) | {
        separator: ReactNode;
        type: 'separator';
    })[];
    activeKey?: string | number;
}
declare const UIBreadcrumb: FC<UIBreadcrumbProps>;
export default UIBreadcrumb;
