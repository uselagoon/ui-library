import { FC, MouseEventHandler, ReactNode } from "react";
import { BreadcrumbProps } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
export interface UIBreadcrumbProps extends BreadcrumbProps {
    prependSeparator?: ReactNode;
    items: (({
        navOnClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
        key?: string | number;
    } & Omit<ItemType, "href" | "onClick">) | {
        separator: ReactNode;
        type: "separator";
    })[];
    activeKey?: string | number;
}
declare const UIBreadcrumb: FC<UIBreadcrumbProps>;
export default UIBreadcrumb;
