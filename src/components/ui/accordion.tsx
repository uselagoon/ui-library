import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
	return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn('lib:border-b last:lib:border-b-0', className)}
			{...props}
		/>
	);
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className="lib:flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cn(
					'focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 lib:flex lib:flex-1 lib:items-start lib:justify-between lib:gap-4 lib:rounded-md lib:py-4 lib:text-left lib:text-sm lib:font-medium lib:transition-all lib:outline-none hover:lib:underline focus-visible:lib:ring-[3px] disabled:lib:pointer-events-none disabled:lib:opacity-50 [&[data-state=open]>svg]:lib:rotate-180',
					className,
				)}
				{...props}
			>
				{children}
				<ChevronDownIcon className="lib:text-muted-foreground lib:pointer-events-none lib:size-4 lib:shrink-0 lib:translate-y-0.5 lib:transition-transform lib:duration-200" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
	return (
		<AccordionPrimitive.Content
			data-slot="accordion-content"
			className="data-[state=closed]:lib:animate-accordion-up data-[state=open]:lib:animate-accordion-down lib:overflow-hidden lib:text-sm"
			{...props}
		>
			<div className={cn('lib:pt-0 lib:pb-4', className)}>{children}</div>
		</AccordionPrimitive.Content>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
