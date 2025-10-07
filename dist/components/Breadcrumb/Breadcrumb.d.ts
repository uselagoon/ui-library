import { default as React, FC, MouseEventHandler, ReactElement, ReactNode } from 'react';
type Component<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = ReactElement<T>;
type LinkComponent = Component<'a'>;
export interface BasicProps {
    items: ({
        title: string | ReactNode;
        navOnClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
        key?: string | number;
        copyText?: string;
    } | {
        title: LinkComponent;
        key?: string | number;
        copyText?: string;
    })[];
    activeKey?: string | number;
}
export type UIBreadcrumbProps = BasicProps & ({
    type: 'default';
    currentSlug?: never;
} | {
    type: 'orgs';
    currentSlug?: 'project' | 'user' | 'group';
});
declare const UIBreadcrumb: FC<UIBreadcrumbProps>;
export default UIBreadcrumb;
//# sourceMappingURL=Breadcrumb.d.ts.map