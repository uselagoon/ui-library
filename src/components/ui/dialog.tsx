import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
	return (
		<DialogPrimitive.Overlay
			data-slot="dialog-overlay"
			className={cn(
				'data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 lib:fixed lib:inset-0 lib:z-50 lib:bg-black/50',
				className,
			)}
			{...props}
		/>
	);
}

function DialogContent({ className, children, ...props }: React.ComponentProps<typeof DialogPrimitive.Content>) {
	return (
		<DialogPortal data-slot="dialog-portal">
			<DialogOverlay />
			<DialogPrimitive.Content
				data-slot="dialog-content"
				className={cn(
					'lib:bg-background data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 lib:fixed lib:top-[50%] lib:left-[50%] lib:z-50 lib:grid lib:w-full lib:max-w-[calc(100%-2rem)] lib:translate-x-[-50%] lib:translate-y-[-50%] lib:gap-4 lib:rounded-lg lib:border lib:p-6 lib:shadow-lg lib:duration-200 sm:lib:max-w-lg',
					className,
				)}
				{...props}
			>
				{children}
				<DialogPrimitive.Close className="lib:ring-offset-background focus:lib:ring-ring data-[state=open]:lib:bg-accent data-[state=open]:lib:text-muted-foreground lib:absolute lib:top-4 lib:right-4 lib:rounded-xs lib:opacity-70 lib:transition-opacity hover:lib:opacity-100 focus:lib:ring-2 focus:lib:ring-offset-2 focus:lib:outline-hidden disabled:lib:pointer-events-none [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4">
					<XIcon />
					<span className="lib:sr-only">Close</span>
				</DialogPrimitive.Close>
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="dialog-header"
			className={cn('lib:flex lib:flex-col lib:gap-2 lib:text-center sm:lib:text-left', className)}
			{...props}
		/>
	);
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="dialog-footer"
			className={cn('lib:flex lib:flex-col-reverse lib:gap-2 sm:lib:flex-row sm:lib:justify-end', className)}
			{...props}
		/>
	);
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cn('lib:text-lg lib:leading-none lib:font-semibold', className)}
			{...props}
		/>
	);
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cn('lib:text-muted-foreground lib:text-sm', className)}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
