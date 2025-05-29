'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
	return (
		<TabsPrimitive.Root data-slot="tabs" className={cn('lib:flex lib:flex-col lib:gap-2', className)} {...props} />
	);
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				'lib:bg-muted lib:text-muted-foreground lib:inline-flex lib:h-9 lib:w-fit lib:items-center lib:justify-center lib:rounded-lg lib:p-[3px]',
				className,
			)}
			{...props}
		/>
	);
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(
				'data-[state=active]:lib:bg-background dark:data-[state=active]:lib:text-foreground focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 focus-visible:lib:outline-ring dark:data-[state=active]:lib:border-input dark:data-[state=active]:lib:bg-input/30 lib:text-foreground dark:lib:text-muted-foreground lib:inline-flex lib:h-[calc(100%-1px)] lib:flex-1 lib:items-center lib:justify-center lib:gap-1.5 lib:rounded-md lib:border lib:border-transparent lib:px-2 lib:py-1 lib:text-sm lib:font-medium lib:whitespace-nowrap lib:transition-[color,box-shadow] focus-visible:lib:ring-[3px] focus-visible:lib:outline-1 disabled:lib:pointer-events-none disabled:lib:opacity-50 data-[state=active]:lib:shadow-sm [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4',
				className,
			)}
			{...props}
		/>
	);
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={cn('lib:flex-1 lib:outline-none', className)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
