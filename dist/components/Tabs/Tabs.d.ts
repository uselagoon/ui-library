import { FC } from "react";
import { TabsProps } from "antd";
type UITabsProps = {
    items: TabsProps["items"];
} & Omit<TabsProps, "items">;
declare const UITab: FC<UITabsProps>;
export type { UITabsProps };
export default UITab;
