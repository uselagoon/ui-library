import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
	'lib:relative lib:w-full lib:rounded-lg lib:border lib:px-4 lib:py-3 lib:text-sm lib:grid has-[>svg]:lib:grid-cols-[calc(var(--spacing)*4)_1fr] lib:grid-cols-[0_1fr] has-[>svg]:lib:gap-x-3 lib:gap-y-0.5 lib:items-start [&>svg]:lib:size-4 [&>svg]:lib:translate-y-0.5 [&>svg]:lib:text-current',
	{
		variants: {
			variant: {
				default: 'lib:bg-card lib:text-card-foreground',
				destructive:
					'lib:text-destructive lib:bg-card [&>svg]:lib:text-current *:data-[slot=alert-description]:lib:text-destructive/90',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

function Alert({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
	return <div data-slot="alert" role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="alert-title"
			className={cn('lib:col-start-2 lib:line-clamp-1 lib:min-h-4 lib:font-medium lib:tracking-tight', className)}
			{...props}
		/>
	);
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="alert-description"
			className={cn(
				'lib:text-muted-foreground lib:col-start-2 lib:grid lib:justify-items-start lib:gap-1 lib:text-sm [&_p]:lib:leading-relaxed',
				className,
			)}
			{...props}
		/>
	);
}

export { Alert, AlertTitle, AlertDescription };
