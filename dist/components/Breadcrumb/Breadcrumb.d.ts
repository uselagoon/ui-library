import React, { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';
import { BreadcrumbProps } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
type Component<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = ReactElement<T>;
type LinkComponent = Component<'a'>;
export interface UIBreadcrumbProps extends Omit<BreadcrumbProps, 'itemRender' | 'params'> {
    type?: 'default' | 'orgs';
    items: (({
        navOnClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
        key?: string | number;
    } & Pick<ItemType, 'title'>) | {
        key?: string | number;
        title: LinkComponent;
    } | {
        separator: ReactNode;
        type: 'separator';
    })[];
    activeKey?: string | number;
}
declare const UIBreadcrumb: FC<UIBreadcrumbProps>;
export default UIBreadcrumb;
