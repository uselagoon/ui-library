/// <reference types="react" />
export declare const StyledTable: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("antd").TableProps<import("antd/es/_util/type").AnyObject> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<import("rc-table").Reference>, never>> & Omit<import("antd/es/table/interface").RefTable & {
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
