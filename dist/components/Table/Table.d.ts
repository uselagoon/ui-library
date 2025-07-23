import { default as React, ReactNode } from 'react';
type RenderFn = (renderItem: string) => ReactNode;
type DataType = {
    key: string;
    [prop: string]: any;
    rowRender?: RenderFn;
    rowClassName?: string;
};
export interface TableProps extends React.ComponentProps<'table'> {
    columns: {
        key: string;
        dataIndex: string;
        title: string;
        columnRender?: RenderFn;
        columnClassName?: string;
    }[];
    data: DataType[];
    caption?: string;
    footer?: {
        description: string;
        value: ReactNode;
        span?: number;
        footerClassName?: string;
    };
}
declare const BasicTable: React.FC<TableProps>;
export default BasicTable;
//# sourceMappingURL=Table.d.ts.map