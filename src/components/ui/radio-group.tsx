'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
	return (
		<RadioGroupPrimitive.Root data-slot="radio-group" className={cn('lib:grid lib:gap-3', className)} {...props} />
	);
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
	return (
		<RadioGroupPrimitive.Item
			data-slot="radio-group-item"
			className={cn(
				'lib:border-input lib:text-primary focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive dark:lib:bg-input/30 lib:aspect-square lib:size-4 lib:shrink-0 lib:rounded-full lib:border lib:shadow-xs lib:transition-[color,box-shadow] lib:outline-none focus-visible:lib:ring-[3px] disabled:lib:cursor-not-allowed disabled:lib:opacity-50',
				className,
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator
				data-slot="radio-group-indicator"
				className="lib:relative lib:flex lib:items-center lib:justify-center"
			>
				<CircleIcon className="lib:fill-primary lib:absolute lib:top-1/2 lib:left-1/2 lib:size-2 lib:-translate-x-1/2 lib:-translate-y-1/2" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
}

export { RadioGroup, RadioGroupItem };
