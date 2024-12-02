/// <reference types="react" />
export declare const TableSummary: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const StyledBaseTable: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("antd").TableProps<import("antd/es/_util/type").AnyObject> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<import("rc-table").Reference>, {
    $variant: 'default' | 'alternate';
    $lastRowBordered: boolean;
    $withBg?: boolean | undefined;
    $hasSummary?: boolean | undefined;
}>> & Omit<import("antd/es/table/interface").RefTable & {
    displayName?: string | undefined;
    SELECTION_COLUMN: {};
    EXPAND_COLUMN: {};
    SELECTION_ALL: "SELECT_ALL";
    SELECTION_INVERT: "SELECT_INVERT";
    SELECTION_NONE: "SELECT_NONE";
    Column: typeof import("antd/es/table/Column").default;
    ColumnGroup: typeof import("antd/es/table/ColumnGroup").default;
    Summary: typeof import("rc-table/lib/Footer/Summary").default;
}, keyof import("react").Component<any, {}, any>>;
export declare const ActionWrap: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
export declare const EmptyAction: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>;
export declare const StyledEmptyTableDescription: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("antd").EmptyProps, never>> & Omit<import("react").FC<import("antd").EmptyProps> & {
    PRESENTED_IMAGE_DEFAULT: import("react").ReactNode;
    PRESENTED_IMAGE_SIMPLE: import("react").ReactNode;
}, keyof import("react").Component<any, {}, any>>;
