'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			className={cn(
				'lib:peer data-[state=checked]:lib:bg-primary data-[state=unchecked]:lib:bg-input focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 dark:data-[state=unchecked]:lib:bg-input/80 lib:inline-flex lib:h-[1.15rem] lib:w-8 lib:shrink-0 lib:items-center lib:rounded-full lib:border lib:border-transparent lib:shadow-xs lib:transition-all lib:outline-none focus-visible:lib:ring-[3px] disabled:lib:cursor-not-allowed disabled:lib:opacity-50',
				className,
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					'lib:bg-background dark:data-[state=unchecked]:lib:bg-foreground dark:data-[state=checked]:lib:bg-primary-foreground lib:pointer-events-none lib:block lib:size-4 lib:rounded-full lib:ring-0 lib:transition-transform data-[state=checked]:lib:translate-x-[calc(100%-2px)] data-[state=unchecked]:lib:translate-x-0',
				)}
			/>
		</SwitchPrimitive.Root>
	);
}

export { Switch };
