/// <reference types="react" />
export declare const StyledTabs: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("antd").TabsProps, {
    $type: 'navigation' | 'default';
}>> & Omit<import("react").FC<import("antd").TabsProps> & {
    TabPane: import("react").FC<import("antd").TabPaneProps>;
}, keyof import("react").Component<any, {}, any>>;
export declare const StyledTabChildren: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
