import React, { FC, ReactNode } from 'react';
type BaseItem = {
    key: string;
    label: React.ReactNode;
};
type DefaultItemType = BaseItem & {
    children?: ReactNode;
};
type NavItemType = BaseItem;
type DefaultTabType = {
    items: DefaultItemType[];
    type?: 'default';
};
type NavTabType = {
    items: NavItemType[];
    type: 'navigation';
    pathname: string;
};
type UITabsProps = {
    children?: ReactNode;
} & (DefaultTabType | NavTabType);
/**
 * @param {"navigation" | "default"} type -
 * - `"navigation"`: Creates dynamic routing using Next.js Links. The `children` prop
 *   will be ignored in the `"items"` array.
 * - `"default"`: Does not navigate and renders the `children` of each tab.
 */
declare const UITab: FC<UITabsProps>;
export type { UITabsProps };
export default UITab;
