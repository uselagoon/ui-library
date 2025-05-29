import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
	return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
	return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
	return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
	return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
	return (
		<SheetPrimitive.Overlay
			data-slot="sheet-overlay"
			className={cn(
				'data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 lib:fixed lib:inset-0 lib:z-50 lib:bg-black/50',
				className,
			)}
			{...props}
		/>
	);
}

function SheetContent({
	className,
	children,
	side = 'right',
	...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
	side?: 'top' | 'right' | 'bottom' | 'left';
}) {
	return (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content
				data-slot="sheet-content"
				className={cn(
					'lib:bg-background data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out lib:fixed lib:z-50 lib:flex lib:flex-col lib:gap-4 lib:shadow-lg lib:transition lib:ease-in-out data-[state=closed]:lib:duration-300 data-[state=open]:lib:duration-500',
					side === 'right' &&
						'data-[state=closed]:lib:slide-out-to-right data-[state=open]:lib:slide-in-from-right lib:inset-y-0 lib:right-0 lib:h-full lib:w-3/4 lib:border-l sm:lib:max-w-sm',
					side === 'left' &&
						'data-[state=closed]:lib:slide-out-to-left data-[state=open]:lib:slide-in-from-left lib:inset-y-0 lib:left-0 lib:h-full lib:w-3/4 lib:border-r sm:lib:max-w-sm',
					side === 'top' &&
						'data-[state=closed]:lib:slide-out-to-top data-[state=open]:lib:slide-in-from-top lib:inset-x-0 lib:top-0 lib:h-auto lib:border-b',
					side === 'bottom' &&
						'data-[state=closed]:lib:slide-out-to-bottom data-[state=open]:lib:slide-in-from-bottom lib:inset-x-0 lib:bottom-0 lib:h-auto lib:border-t',
					className,
				)}
				{...props}
			>
				{children}
				<SheetPrimitive.Close className="lib:ring-offset-background focus:lib:ring-ring data-[state=open]:lib:bg-secondary lib:absolute lib:top-4 lib:right-4 lib:rounded-xs lib:opacity-70 lib:transition-opacity hover:lib:opacity-100 focus:lib:ring-2 focus:lib:ring-offset-2 focus:lib:outline-hidden disabled:lib:pointer-events-none">
					<XIcon className="lib:size-4" />
					<span className="lib:sr-only">Close</span>
				</SheetPrimitive.Close>
			</SheetPrimitive.Content>
		</SheetPortal>
	);
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div data-slot="sheet-header" className={cn('lib:flex lib:flex-col lib:gap-1.5 lib:p-4', className)} {...props} />
	);
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="sheet-footer"
			className={cn('lib:mt-auto lib:flex lib:flex-col lib:gap-2 lib:p-4', className)}
			{...props}
		/>
	);
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
	return (
		<SheetPrimitive.Title
			data-slot="sheet-title"
			className={cn('lib:text-foreground lib:font-semibold', className)}
			{...props}
		/>
	);
}

function SheetDescription({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Description>) {
	return (
		<SheetPrimitive.Description
			data-slot="sheet-description"
			className={cn('lib:text-muted-foreground lib:text-sm', className)}
			{...props}
		/>
	);
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
