import { ColumnDef } from '@tanstack/react-table';
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}
export default function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=DataTable.d.ts.map