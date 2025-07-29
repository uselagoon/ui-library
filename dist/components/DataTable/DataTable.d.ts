import { ReactNode } from 'react';
import { ColumnDef, Table as TableType } from '@tanstack/react-table';
type LibColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
    width?: string;
};
export interface DataTableProps<TData, TValue> {
    columns: LibColumnDef<TData, TValue>[];
    data: TData[];
    /** Either accessorKeys, or ids from the column definition */
    searchableColumns?: string[];
    searchPlaceholder?: string;
    loading?: boolean;
    /** Pass in custom filters - datatime/pagination/status dropdowns etc */
    renderFilters?: (table: TableType<TData>) => ReactNode;
    /** Do not render the top filter section, nor the bottom pagination section */
    disableExtra?: boolean;
    onSearch?: (searchString: string) => void;
    initialSearch?: string;
    initialPageSize?: number;
}
export default function DataTable<TData, TValue>({ columns, data, searchableColumns, searchPlaceholder, onSearch, loading, renderFilters, disableExtra, initialSearch, initialPageSize, }: DataTableProps<TData, TValue>): import("react/jsx-dev-runtime").JSX.Element;
export type { ColumnDef as DataTableColumnDef };
//# sourceMappingURL=DataTable.d.ts.map