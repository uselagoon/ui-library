import { ReactNode } from 'react';
import { ColumnDef, Table as TableType } from '@tanstack/react-table';
export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchableColumns?: string[];
    /** pass in custom filters - datatime/pagination/status dropdowns etc */
    renderFilters?: (table: TableType<TData>) => ReactNode;
    /** Do not render the top filter section, nor the bottom pagination section */
    disableExtra?: boolean;
    onSearch?: (searchString: string) => void;
    initialSearch?: string;
}
export default function DataTable<TData, TValue>({ columns, data, searchableColumns, renderFilters, disableExtra, onSearch, initialSearch, }: DataTableProps<TData, TValue>): import("react/jsx-dev-runtime").JSX.Element;
export type { ColumnDef as DataTableColumnDef };
//# sourceMappingURL=DataTable.d.ts.map