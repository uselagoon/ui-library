'use client';

import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';

function ScrollArea({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
	return (
		<ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn('lib:relative', className)} {...props}>
			<ScrollAreaPrimitive.Viewport
				data-slot="scroll-area-viewport"
				className="focus-visible:lib:ring-ring/50 lib:size-full lib:rounded-[inherit] lib:transition-[color,box-shadow] lib:outline-none focus-visible:lib:ring-[3px] focus-visible:lib:outline-1"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	);
}

function ScrollBar({
	className,
	orientation = 'vertical',
	...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
	return (
		<ScrollAreaPrimitive.ScrollAreaScrollbar
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			className={cn(
				'lib:flex lib:touch-none lib:p-px lib:transition-colors lib:select-none',
				orientation === 'vertical' && 'lib:h-full lib:w-2.5 lib:border-l lib:border-l-transparent',
				orientation === 'horizontal' && 'lib:h-2.5 lib:flex-col lib:border-t lib:border-t-transparent',
				className,
			)}
			{...props}
		>
			<ScrollAreaPrimitive.ScrollAreaThumb
				data-slot="scroll-area-thumb"
				className="lib:bg-border lib:relative lib:flex-1 lib:rounded-full"
			/>
		</ScrollAreaPrimitive.ScrollAreaScrollbar>
	);
}

export { ScrollArea, ScrollBar };
