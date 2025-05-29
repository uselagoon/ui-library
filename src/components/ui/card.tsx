import * as React from 'react';

import { cn } from '@/lib/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card"
			className={cn(
				'lib:bg-card lib:text-card-foreground lib:flex lib:flex-col lib:gap-6 lib:rounded-xl lib:border lib:py-6 lib:shadow-sm',
				className,
			)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				'lib:@container/card-header lib:grid lib:auto-rows-min lib:grid-rows-[auto_auto] lib:items-start lib:gap-1.5 lib:px-6 has-data-[slot=card-action]:lib:grid-cols-[1fr_auto] [.border-b]:lib:pb-6',
				className,
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="card-title" className={cn('lib:leading-none lib:font-semibold', className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div data-slot="card-description" className={cn('lib:text-muted-foreground lib:text-sm', className)} {...props} />
	);
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-action"
			className={cn('lib:col-start-2 lib:row-span-2 lib:row-start-1 lib:self-start lib:justify-self-end', className)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="card-content" className={cn('lib:px-6', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-footer"
			className={cn('lib:flex lib:items-center lib:px-6 [.border-t]:lib:pt-6', className)}
			{...props}
		/>
	);
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
