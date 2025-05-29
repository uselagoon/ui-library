'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				'lib:peer lib:border-input dark:lib:bg-input/30 data-[state=checked]:lib:bg-primary data-[state=checked]:lib:text-primary-foreground dark:data-[state=checked]:lib:bg-primary data-[state=checked]:lib:border-primary focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive lib:size-4 lib:shrink-0 lib:rounded-[4px] lib:border lib:shadow-xs lib:transition-shadow lib:outline-none focus-visible:lib:ring-[3px] disabled:lib:cursor-not-allowed disabled:lib:opacity-50',
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="lib:flex lib:items-center lib:justify-center lib:text-current lib:transition-none"
			>
				<CheckIcon className="lib:size-3.5" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
