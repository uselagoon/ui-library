/// <reference types="react" />
export declare const PopoverContainer: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const StyledTree: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("antd").TreeProps<import("rc-tree").BasicDataNode | import("antd").TreeDataNode> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<import("rc-tree/lib/Tree").default<import("antd").TreeDataNode>>, never>> & Omit<(<T extends import("rc-tree").BasicDataNode | import("antd").TreeDataNode = import("antd").TreeDataNode>(props: import("antd").TreeProps<T> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<import("rc-tree/lib/Tree").default<import("antd").TreeDataNode>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
    TreeNode: import("react").FC<import("rc-tree").TreeNodeProps<import("antd").TreeDataNode>>;
    DirectoryTree: (<T_1 extends import("rc-tree").BasicDataNode | import("antd").TreeDataNode = import("antd").TreeDataNode>(props: import("antd/es/tree").DirectoryTreeProps<T_1> & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<import("rc-tree/lib/Tree").default<import("antd").TreeDataNode>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        displayName?: string | undefined;
    };
}, keyof import("react").Component<any, {}, any>>;
