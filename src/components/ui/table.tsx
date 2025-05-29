import * as React from 'react';

import { cn } from '@/lib/utils';

function Table({ className, ...props }: React.ComponentProps<'table'>) {
	return (
		<div data-slot="table-container" className="lib:relative lib:w-full lib:overflow-x-auto">
			<table data-slot="table" className={cn('lib:w-full lib:caption-bottom lib:text-sm', className)} {...props} />
		</div>
	);
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
	return <thead data-slot="table-header" className={cn('[&_tr]:lib:border-b', className)} {...props} />;
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
	return <tbody data-slot="table-body" className={cn('[&_tr:last-child]:lib:border-0', className)} {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
	return (
		<tfoot
			data-slot="table-footer"
			className={cn('lib:bg-muted/50 lib:border-t lib:font-medium [&>tr]:last:lib:border-b-0', className)}
			{...props}
		/>
	);
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
	return (
		<tr
			data-slot="table-row"
			className={cn(
				'hover:lib:bg-muted/50 data-[state=selected]:lib:bg-muted lib:border-b lib:transition-colors',
				className,
			)}
			{...props}
		/>
	);
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
	return (
		<th
			data-slot="table-head"
			className={cn(
				'lib:text-foreground lib:h-10 lib:px-2 lib:text-left lib:align-middle lib:font-medium lib:whitespace-nowrap [&:has([role=checkbox])]:lib:pr-0 [&>[role=checkbox]]:lib:translate-y-[2px]',
				className,
			)}
			{...props}
		/>
	);
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
	return (
		<td
			data-slot="table-cell"
			className={cn(
				'lib:p-2 lib:align-middle lib:whitespace-nowrap [&:has([role=checkbox])]:lib:pr-0 [&>[role=checkbox]]:lib:translate-y-[2px]',
				className,
			)}
			{...props}
		/>
	);
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
	return (
		<caption
			data-slot="table-caption"
			className={cn('lib:text-muted-foreground lib:mt-4 lib:text-sm', className)}
			{...props}
		/>
	);
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
