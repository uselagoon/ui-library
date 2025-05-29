import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Menubar({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Root>) {
	return (
		<MenubarPrimitive.Root
			data-slot="menubar"
			className={cn(
				'lib:bg-background lib:flex lib:h-9 lib:items-center lib:gap-1 lib:rounded-md lib:border lib:p-1 lib:shadow-xs',
				className,
			)}
			{...props}
		/>
	);
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
	return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
	return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
	return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
	return <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />;
}

function MenubarTrigger({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
	return (
		<MenubarPrimitive.Trigger
			data-slot="menubar-trigger"
			className={cn(
				'focus:lib:bg-accent focus:lib:text-accent-foreground data-[state=open]:lib:bg-accent data-[state=open]:lib:text-accent-foreground lib:flex lib:items-center lib:rounded-sm lib:px-2 lib:py-1 lib:text-sm lib:font-medium lib:outline-hidden lib:select-none',
				className,
			)}
			{...props}
		/>
	);
}

function MenubarContent({
	className,
	align = 'start',
	alignOffset = -4,
	sideOffset = 8,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
	return (
		<MenubarPortal>
			<MenubarPrimitive.Content
				data-slot="menubar-content"
				align={align}
				alignOffset={alignOffset}
				sideOffset={sideOffset}
				className={cn(
					'lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:min-w-[12rem] lib:origin-(--radix-menubar-content-transform-origin) lib:overflow-hidden lib:rounded-md lib:border lib:p-1 lib:shadow-md',
					className,
				)}
				{...props}
			/>
		</MenubarPortal>
	);
}

function MenubarItem({
	className,
	inset,
	variant = 'default',
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
	inset?: boolean;
	variant?: 'default' | 'destructive';
}) {
	return (
		<MenubarPrimitive.Item
			data-slot="menubar-item"
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

function MenubarCheckboxItem({
	className,
	children,
	checked,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
	return (
		<MenubarPrimitive.CheckboxItem
			data-slot="menubar-checkbox-item"
			className={cn(
				'focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-xs lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4',
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center">
				<MenubarPrimitive.ItemIndicator>
					<CheckIcon className="lib:size-4" />
				</MenubarPrimitive.ItemIndicator>
			</span>
			{children}
		</MenubarPrimitive.CheckboxItem>
	);
}

function MenubarRadioItem({ className, children, ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
	return (
		<MenubarPrimitive.RadioItem
			data-slot="menubar-radio-item"
			className={cn(
				'focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-xs lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4',
				className,
			)}
			{...props}
		>
			<span className="lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center">
				<MenubarPrimitive.ItemIndicator>
					<CircleIcon className="lib:size-2 lib:fill-current" />
				</MenubarPrimitive.ItemIndicator>
			</span>
			{children}
		</MenubarPrimitive.RadioItem>
	);
}

function MenubarLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
	inset?: boolean;
}) {
	return (
		<MenubarPrimitive.Label
			data-slot="menubar-label"
			data-inset={inset}
			className={cn('lib:px-2 lib:py-1.5 lib:text-sm lib:font-medium data-[inset]:lib:pl-8', className)}
			{...props}
		/>
	);
}

function MenubarSeparator({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
	return (
		<MenubarPrimitive.Separator
			data-slot="menubar-separator"
			className={cn('lib:bg-border lib:-mx-1 lib:my-1 lib:h-px', className)}
			{...props}
		/>
	);
}

function MenubarShortcut({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot="menubar-shortcut"
			className={cn('lib:text-muted-foreground lib:ml-auto lib:text-xs lib:tracking-widest', className)}
			{...props}
		/>
	);
}

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
	return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

function MenubarSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
	inset?: boolean;
}) {
	return (
		<MenubarPrimitive.SubTrigger
			data-slot="menubar-sub-trigger"
			data-inset={inset}
			className={cn(
				'focus:lib:bg-accent focus:lib:text-accent-foreground data-[state=open]:lib:bg-accent data-[state=open]:lib:text-accent-foreground lib:flex lib:cursor-default lib:items-center lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-none lib:select-none data-[inset]:lib:pl-8',
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="lib:ml-auto lib:h-4 lib:w-4" />
		</MenubarPrimitive.SubTrigger>
	);
}

function MenubarSubContent({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
	return (
		<MenubarPrimitive.SubContent
			data-slot="menubar-sub-content"
			className={cn(
				'lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:min-w-[8rem] lib:origin-(--radix-menubar-content-transform-origin) lib:overflow-hidden lib:rounded-md lib:border lib:p-1 lib:shadow-lg',
				className,
			)}
			{...props}
		/>
	);
}

export {
	Menubar,
	MenubarPortal,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarGroup,
	MenubarSeparator,
	MenubarLabel,
	MenubarItem,
	MenubarShortcut,
	MenubarCheckboxItem,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSub,
	MenubarSubTrigger,
	MenubarSubContent,
};
