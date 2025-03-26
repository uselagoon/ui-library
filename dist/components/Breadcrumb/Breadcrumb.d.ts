import React, { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';
import { BreadcrumbProps } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
type Component<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = ReactElement<T>;
type LinkComponent = Component<'a'>;
export interface BasicProps extends Omit<BreadcrumbProps, 'itemRender' | 'params'> {
    items: (({
        navOnClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
        key?: string | number;
        copyText?: string;
    } & Pick<ItemType, 'title'>) | {
        title: LinkComponent;
        key?: string | number;
        copyText?: string;
    } | {
        separator: ReactNode;
        type: 'separator';
    })[];
    activeKey?: string | number;
}
export type UIBreadcrumbProps = BasicProps & ({
    type: 'default';
    currentSlug?: never;
} | {
    type: 'orgs';
    currentSlug: 'project' | 'user' | 'group';
});
declare const UIBreadcrumb: FC<UIBreadcrumbProps>;
export default UIBreadcrumb;
