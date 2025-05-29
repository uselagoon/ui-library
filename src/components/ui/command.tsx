'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
	return (
		<CommandPrimitive
			data-slot="command"
			className={cn(
				'lib:bg-popover lib:text-popover-foreground lib:flex lib:h-full lib:w-full lib:flex-col lib:overflow-hidden lib:rounded-md',
				className,
			)}
			{...props}
		/>
	);
}

function CommandDialog({
	title = 'Command Palette',
	description = 'Search for a command to run...',
	children,
	...props
}: React.ComponentProps<typeof Dialog> & {
	title?: string;
	description?: string;
}) {
	return (
		<Dialog {...props}>
			<DialogHeader className="lib:sr-only">
				<DialogTitle>{title}</DialogTitle>
				<DialogDescription>{description}</DialogDescription>
			</DialogHeader>
			<DialogContent className="lib:overflow-hidden lib:p-0">
				<Command className="[&_[cmdk-group-heading]]:lib:text-muted-foreground **:data-[slot=command-input-wrapper]:lib:h-12 [&_[cmdk-group-heading]]:lib:px-2 [&_[cmdk-group-heading]]:lib:font-medium [&_[cmdk-group]]:lib:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:lib:pt-0 [&_[cmdk-input-wrapper]_svg]:lib:h-5 [&_[cmdk-input-wrapper]_svg]:lib:w-5 [&_[cmdk-input]]:lib:h-12 [&_[cmdk-item]]:lib:px-2 [&_[cmdk-item]]:lib:py-3 [&_[cmdk-item]_svg]:lib:h-5 [&_[cmdk-item]_svg]:lib:w-5">
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	);
}

function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
	return (
		<div
			data-slot="command-input-wrapper"
			className="lib:flex lib:h-9 lib:items-center lib:gap-2 lib:border-b lib:px-3"
		>
			<SearchIcon className="lib:size-4 lib:shrink-0 lib:opacity-50" />
			<CommandPrimitive.Input
				data-slot="command-input"
				className={cn(
					'placeholder:lib:text-muted-foreground lib:flex lib:h-10 lib:w-full lib:rounded-md lib:bg-transparent lib:py-3 lib:text-sm lib:outline-hidden disabled:lib:cursor-not-allowed disabled:lib:opacity-50',
					className,
				)}
				{...props}
			/>
		</div>
	);
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
	return (
		<CommandPrimitive.List
			data-slot="command-list"
			className={cn('lib:max-h-[300px] lib:scroll-py-1 lib:overflow-x-hidden lib:overflow-y-auto', className)}
			{...props}
		/>
	);
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
	return (
		<CommandPrimitive.Empty data-slot="command-empty" className="lib:py-6 lib:text-center lib:text-sm" {...props} />
	);
}

function CommandGroup({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) {
	return (
		<CommandPrimitive.Group
			data-slot="command-group"
			className={cn(
				'lib:text-foreground [&_[cmdk-group-heading]]:lib:text-muted-foreground lib:overflow-hidden lib:p-1 [&_[cmdk-group-heading]]:lib:px-2 [&_[cmdk-group-heading]]:lib:py-1.5 [&_[cmdk-group-heading]]:lib:text-xs [&_[cmdk-group-heading]]:lib:font-medium',
				className,
			)}
			{...props}
		/>
	);
}

function CommandSeparator({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) {
	return (
		<CommandPrimitive.Separator
			data-slot="command-separator"
			className={cn('lib:bg-border lib:-mx-1 lib:h-px', className)}
			{...props}
		/>
	);
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
	return (
		<CommandPrimitive.Item
			data-slot="command-item"
			className={cn(
				'data-[selected=true]:lib:bg-accent data-[selected=true]:lib:text-accent-foreground [&_svg:not([class*=text-])]:lib:text-muted-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-hidden lib:select-none data-[disabled=true]:lib:pointer-events-none data-[disabled=true]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4',
				className,
			)}
			{...props}
		/>
	);
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot="command-shortcut"
			className={cn('lib:text-muted-foreground lib:ml-auto lib:text-xs lib:tracking-widest', className)}
			{...props}
		/>
	);
}

export {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
};
