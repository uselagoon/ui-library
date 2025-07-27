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
import { capitalize } from 'lodash';

export interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	searchableColumns?: string[];
	/** pass in custom filters - datatime/pagination/status dropdowns etc */
	renderFilters?: (table: TableType<TData>) => ReactNode;
	/** Do not render the top filter section, nor the bottom pagination section */
	disableExtra?: boolean;
}

export default function DataTable<TData, TValue>({
	columns,
	data,
	searchableColumns,
	renderFilters,
	disableExtra,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

	const [globalFilter, setGlobalFilter] = React.useState<string>('');

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

	const table = useReactTable({
		data,
		columns,
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

	return (
		<div className="w-[92%] mx-auto">
			{/* filter/searchbar*/}

			{disableExtra ? null : (
				<div className="flex items-end justify-between py-4">
					<DebouncedInput
						label=""
						placeholder={`Search ${searchableColumns?.length ? `by ${searchableColumns.map((col) => capitalize(col)).join(',')}` : 'all columns'}...`}
						value={globalFilter ?? ''}
						onChange={(value) => setGlobalFilter(value)}
						className="max-w-sm"
					/>
					{/** render out custom filters */}
					{renderFilters && renderFilters(table)}
				</div>
			)}

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => {
							return (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										const isSorted = header.column.id === sortedColumnId;
										return (
											<TableHead
												key={header.id}
												className={cn('transition-colors', isSorted && 'bg-gray-100 dark:bg-gray-700')}
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
									<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
										{row.getVisibleCells().map((visibleCell) => {
											const isSorted = visibleCell.column.id === sortedColumnId;
											return (
												<TableCell
													key={visibleCell.id}
													className={cn('transition-colors', isSorted && 'bg-gray-100 dark:bg-gray-700')}
												>
													{renderCellWithHighlight(visibleCell)}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-28 text-center">
									Nothing here.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{disableExtra ? null : (
				<div className="flex items-center justify-end space-x-2 py-4">
					<div className="text-muted-foreground flex-1 text-sm">
						Showing {table.getRowModel().rows.length} of {data.length} entries
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

export type { ColumnDef as DataTableColumnDef };
