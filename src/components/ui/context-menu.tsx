'use client';

import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function ContextMenu({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
	return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
	return <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />;
}

function ContextMenuGroup({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
	return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />;
}

function ContextMenuPortal({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
	return <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />;
}

function ContextMenuSub({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
	return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuRadioGroup({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
	return <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />;
}

function ContextMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
	inset?: boolean;
}) {
	return (
		<ContextMenuPrimitive.SubTrigger
			data-slot="context-menu-sub-trigger"
			data-inset={inset}
			className={cn(
				'focus:lib:bg-accent focus:lib:text-accent-foreground data-[state=open]:lib:bg-accent data-[state=open]:lib:text-accent-foreground lib:flex lib:cursor-default lib:items-center lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-hidden lib:select-none data-[inset]:lib:pl-8 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4',
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="lib:ml-auto" />
		</ContextMenuPrimitive.SubTrigger>
	);
}

function ContextMenuSubContent({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
	return (
		<ContextMenuPrimitive.SubContent
			data-slot="context-menu-sub-content"
			className={cn(
				'lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:min-w-[8rem] lib:origin-(--radix-context-menu-content-transform-origin) lib:overflow-hidden lib:rounded-md lib:border lib:p-1 lib:shadow-lg',
				className,
			)}
			{...props}
		/>
	);
}

function ContextMenuContent({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
	return (
		<ContextMenuPrimitive.Portal>
			<ContextMenuPrimitive.Content
				data-slot="context-menu-content"
				className={cn(
					'lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:max-h-(--radix-context-menu-content-available-height) lib:min-w-[8rem] lib:origin-(--radix-context-menu-content-transform-origin) lib:overflow-x-hidden lib:overflow-y-auto lib:rounded-md lib:border lib:p-1 lib:shadow-md',
					className,
				)}
				{...props}
			/>
		</ContextMenuPrimitive.Portal>
	);
}

function ContextMenuItem({
	className,
	inset,
	variant = 'default',
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
	inset?: boolean;
	variant?: 'default' | 'destructive';
}) {
	return (
		<ContextMenuPrimitive.Item
			data-slot="context-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={cn(
				'focus:lib:bg-accent focus:lib:text-accent-foreground data-[variant=destructive]:lib:text-destructive data-[variant=destructive]:focus:lib:bg-destructive/10 dark:data-[variant=destructive]:focus:lib:bg-destructive/20 data-[variant=destructive]:focus:lib:text-destructive data-[variant=destructive]:*:[svg]:lib:!text-destructive [&_svg:not([class*=text-])]:lib:text-muted-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 data-[inset]:lib:pl-8 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4',
				className,
			)}
			{...props}
		/>
	);
}

function ContextMenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
	return (
		<ContextMenuPrimitive.CheckboxItem
			data-slot="context-menu-checkbox-item"
			className={cn(
				'focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4',
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<CheckIcon className="lib:size-4" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.CheckboxItem>
	);
}

function ContextMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
	return (
		<ContextMenuPrimitive.RadioItem
			data-slot="context-menu-radio-item"
			className={cn(
				'focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4',
				className,
			)}
			{...props}
		>
			<span className="lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<CircleIcon className="lib:size-2 lib:fill-current" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.RadioItem>
	);
}

function ContextMenuLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
	inset?: boolean;
}) {
	return (
		<ContextMenuPrimitive.Label
			data-slot="context-menu-label"
			data-inset={inset}
			className={cn(
				'lib:text-foreground lib:px-2 lib:py-1.5 lib:text-sm lib:font-medium data-[inset]:lib:pl-8',
				className,
			)}
			{...props}
		/>
	);
}

function ContextMenuSeparator({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
	return (
		<ContextMenuPrimitive.Separator
			data-slot="context-menu-separator"
			className={cn('lib:bg-border lib:-mx-1 lib:my-1 lib:h-px', className)}
			{...props}
		/>
	);
}

function ContextMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot="context-menu-shortcut"
			className={cn('lib:text-muted-foreground lib:ml-auto lib:text-xs lib:tracking-widest', className)}
			{...props}
		/>
	);
}

export {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuCheckboxItem,
	ContextMenuRadioItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuGroup,
	ContextMenuPortal,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuRadioGroup,
};
