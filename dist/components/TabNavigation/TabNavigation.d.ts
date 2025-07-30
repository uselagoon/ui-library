import { default as React, FC } from 'react';
type NavItem = {
    key: string;
    label: React.ReactNode;
};
type TabNavigationProps = {
    items: NavItem[];
    pathname: string;
};
declare const TabNavigation: FC<TabNavigationProps>;
export type { TabNavigationProps };
export default TabNavigation;
//# sourceMappingURL=TabNavigation.d.ts.map