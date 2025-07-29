'use client';
import React, { ReactNode, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
	ColumnFiltersState,
	getFilteredRowModel,
	VisibilityState,
	FilterFnOption,
	Cell,
	Table as TableType,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { DebouncedInput } from '../Input';

import { highlightTextInElement } from './HighlightText';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

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

export default function DataTable<TData, TValue>({
	columns,
	data,
	searchableColumns,
	searchPlaceholder,
	onSearch,
	loading,
	renderFilters,
	disableExtra,
	initialSearch,
	initialPageSize,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

	const [globalFilter, setGlobalFilter] = React.useState<string>(initialSearch ?? '');

	const customGlobalFilter = (row: any, columnId: string, value: string) => {
		// globally search everything if searchableCols isnt provided
		if (searchableColumns?.length === 0) {
			return String(row.getValue(columnId)).toLowerCase().includes(value.toLowerCase());
		}
		return searchableColumns?.some((colId) => {
			const cellValue = row.getValue(colId);
			return String(cellValue).toLowerCase().includes(value.toLowerCase());
		});
	};

	const renderCellWithHighlight = (cell: Cell<TData, unknown>) => {
		const cellValue = cell.getValue();

		const rendered = flexRender(cell.column.columnDef.cell, cell.getContext());

		if (cellValue && globalFilter) {
			const shouldHighlight = !searchableColumns?.length || searchableColumns?.includes(cell.column.id);

			if (shouldHighlight && typeof cell.column.columnDef.cell === 'function') {
				return highlightTextInElement(
					cell?.column?.columnDef?.cell(cell.getContext()),
					globalFilter,
					cellValue as string,
				);
			}
		}

		return rendered;
	};

	// loading state skeletons
	const tableData = React.useMemo(() => (loading ? Array(10).fill({}) : data), [loading, data]);
	const tableColumns = React.useMemo(
		() =>
			loading
				? columns.map((column) => ({
						...column,
						cell: () => <Skeleton className="h-6 w-50 rounded-sm" />,
					}))
				: columns,
		[loading, columns],
	);

	const table = useReactTable({
		data: tableData,
		columns: tableColumns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		onSortingChange: setSorting,
		onColumnVisibilityChange: setColumnVisibility,
		...(searchableColumns ? { globalFilterFn: customGlobalFilter as FilterFnOption<TData> } : {}),
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			globalFilter,
		},
	});

	const sortedColumnId = sorting.length > 0 ? sorting[0].id : null;

	// show every row if controls are disabled
	useEffect(() => {
		if (disableExtra) {
			table.setPageSize(data.length);
		}
	}, [disableExtra]);

	useEffect(() => {
		if (initialPageSize) {
			table.setPageSize(initialPageSize);
		}
	}, [initialPageSize]);

	return (
		<div className="w-[100%] mx-auto">
			{/* filter/searchbar*/}

			{disableExtra ? null : (
				<div className="flex items-end justify-between py-4">
					<DebouncedInput
						label=""
						placeholder={searchPlaceholder ?? 'Start typing to search'}
						value={globalFilter ?? ''}
						onChange={(value) => {
							setGlobalFilter(value);
							onSearch && onSearch(value);
						}}
						className="max-w-sm"
					/>
					{/** render out custom filters */}
					{renderFilters && renderFilters(table)}
				</div>
			)}

			<div className="rounded-md border">
				<Table className="table-fixed">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => {
							return (
								<TableRow key={headerGroup.id} className="py-6">
									{headerGroup.headers.map((header) => {
										const isSorted = header.column.id === sortedColumnId;
										const thInitialWidth = header.column.getSize();
										const thWidth = (header.column.columnDef as LibColumnDef<TData, TValue>)?.width || thInitialWidth;

										return (
											<TableHead
												key={header.id}
												className={cn('transition-colors py-1', isSorted && 'bg-gray-100 dark:bg-gray-700')}
												style={{ width: thWidth }}
											>
												{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
											</TableHead>
										);
									})}
								</TableRow>
							);
						})}
					</TableHeader>

					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => {
								return (
									<TableRow className="py-6" key={row.id} data-state={row.getIsSelected() && 'selected'}>
										{row.getVisibleCells().map((visibleCell) => {
											const isSorted = visibleCell.column.id === sortedColumnId;
											const tdInitialWidth = visibleCell.column.getSize();
											const tdWidth =
												(visibleCell.column.columnDef as LibColumnDef<TData, TValue>)?.width || tdInitialWidth;

											return (
												<TableCell
													style={{
														width: tdWidth,
													}}
													key={visibleCell.id}
													className={cn('transition-colors py-6', isSorted && 'bg-gray-100 dark:bg-gray-700')}
												>
													<div className="overflow-hidden text-ellipsis whitespace-nowrap">
														{renderCellWithHighlight(visibleCell)}
													</div>
												</TableCell>
											);
										})}
									</TableRow>
								);
							})
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-48 text-center">
									No entries
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{disableExtra ? null : (
				<div className="flex items-center justify-end space-x-2 py-6">
					<div className="text-muted-foreground flex-1 text-sm">
						Showing {table.getRowModel().rows.length} of {table.getPrePaginationRowModel().rows.length} entries
					</div>

					<div className="flex w-[100px] items-center justify-center text-sm font-medium">
						Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
					</div>

					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
						Next
					</Button>
				</div>
			)}
		</div>
	);
}

export type { LibColumnDef as DataTableColumnDef };
