import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/lib/utils';

function Drawer({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) {
	return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
	return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
	return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) {
	return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
	return (
		<DrawerPrimitive.Overlay
			data-slot="drawer-overlay"
			className={cn(
				'data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 lib:fixed lib:inset-0 lib:z-50 lib:bg-black/50',
				className,
			)}
			{...props}
		/>
	);
}

function DrawerContent({ className, children, ...props }: React.ComponentProps<typeof DrawerPrimitive.Content>) {
	return (
		<DrawerPortal data-slot="drawer-portal">
			<DrawerOverlay />
			<DrawerPrimitive.Content
				data-slot="drawer-content"
				className={cn(
					'lib:group/drawer-content lib:bg-background lib:fixed lib:z-50 lib:flex lib:h-auto lib:flex-col',
					'data-[vaul-drawer-direction=top]:lib:inset-x-0 data-[vaul-drawer-direction=top]:lib:top-0 data-[vaul-drawer-direction=top]:lib:mb-24 data-[vaul-drawer-direction=top]:lib:max-h-[80vh] data-[vaul-drawer-direction=top]:lib:rounded-b-lg data-[vaul-drawer-direction=top]:lib:border-b',
					'data-[vaul-drawer-direction=bottom]:lib:inset-x-0 data-[vaul-drawer-direction=bottom]:lib:bottom-0 data-[vaul-drawer-direction=bottom]:lib:mt-24 data-[vaul-drawer-direction=bottom]:lib:max-h-[80vh] data-[vaul-drawer-direction=bottom]:lib:rounded-t-lg data-[vaul-drawer-direction=bottom]:lib:border-t',
					'data-[vaul-drawer-direction=right]:lib:inset-y-0 data-[vaul-drawer-direction=right]:lib:right-0 data-[vaul-drawer-direction=right]:lib:w-3/4 data-[vaul-drawer-direction=right]:lib:border-l data-[vaul-drawer-direction=right]:sm:lib:max-w-sm',
					'data-[vaul-drawer-direction=left]:lib:inset-y-0 data-[vaul-drawer-direction=left]:lib:left-0 data-[vaul-drawer-direction=left]:lib:w-3/4 data-[vaul-drawer-direction=left]:lib:border-r data-[vaul-drawer-direction=left]:sm:lib:max-w-sm',
					className,
				)}
				{...props}
			>
				<div className="lib:bg-muted lib:mx-auto lib:mt-4 lib:hidden lib:h-2 lib:w-[100px] lib:shrink-0 lib:rounded-full lib:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
				{children}
			</DrawerPrimitive.Content>
		</DrawerPortal>
	);
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div data-slot="drawer-header" className={cn('lib:flex lib:flex-col lib:gap-1.5 lib:p-4', className)} {...props} />
	);
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="drawer-footer"
			className={cn('lib:mt-auto lib:flex lib:flex-col lib:gap-2 lib:p-4', className)}
			{...props}
		/>
	);
}

function DrawerTitle({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) {
	return (
		<DrawerPrimitive.Title
			data-slot="drawer-title"
			className={cn('lib:text-foreground lib:font-semibold', className)}
			{...props}
		/>
	);
}

function DrawerDescription({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Description>) {
	return (
		<DrawerPrimitive.Description
			data-slot="drawer-description"
			className={cn('lib:text-muted-foreground lib:text-sm', className)}
			{...props}
		/>
	);
}

export {
	Drawer,
	DrawerPortal,
	DrawerOverlay,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
};
