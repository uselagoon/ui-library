/// <reference types="react" />
export declare const StyledBreadcrumb: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("antd").BreadcrumbProps<import("antd/es/_util/type").AnyObject>, {
    $defaultMargins?: boolean | undefined;
}>> & Omit<{
    <T extends import("antd/es/_util/type").AnyObject = import("antd/es/_util/type").AnyObject>(props: import("antd").BreadcrumbProps<T>): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    Item: import("react").FC<import("antd").BreadcrumbItemProps> & {
        __ANT_BREADCRUMB_ITEM: boolean;
    };
    Separator: import("react").FC<{
        children?: import("react").ReactNode;
    }> & {
        __ANT_BREADCRUMB_SEPARATOR: boolean;
    };
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const WithCopy: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
