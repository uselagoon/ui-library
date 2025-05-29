import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
	return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
	return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
	return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
	className,
	size = 'default',
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
	size?: 'sm' | 'default';
}) {
	return (
		<SelectPrimitive.Trigger
			data-slot="select-trigger"
			data-size={size}
			className={cn(
				'lib:border-input data-[placeholder]:lib:text-muted-foreground [&_svg:not([class*=text-])]:lib:text-muted-foreground focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive dark:lib:bg-input/30 dark:hover:lib:bg-input/50 lib:flex lib:w-fit lib:items-center lib:justify-between lib:gap-2 lib:rounded-md lib:border lib:bg-transparent lib:px-3 lib:py-2 lib:text-sm lib:whitespace-nowrap lib:shadow-xs lib:transition-[color,box-shadow] lib:outline-none focus-visible:lib:ring-[3px] disabled:lib:cursor-not-allowed disabled:lib:opacity-50 data-[size=default]:lib:h-9 data-[size=sm]:lib:h-8 *:data-[slot=select-value]:lib:line-clamp-1 *:data-[slot=select-value]:lib:flex *:data-[slot=select-value]:lib:items-center *:data-[slot=select-value]:lib:gap-2 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4',
				className,
			)}
			{...props}
		>
			{children}
			<SelectPrimitive.Icon asChild>
				<ChevronDownIcon className="lib:size-4 lib:opacity-50" />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	);
}

function SelectContent({
	className,
	children,
	position = 'popper',
	...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				data-slot="select-content"
				className={cn(
					'lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:relative lib:z-50 lib:max-h-(--radix-select-content-available-height) lib:min-w-[8rem] lib:origin-(--radix-select-content-transform-origin) lib:overflow-x-hidden lib:overflow-y-auto lib:rounded-md lib:border lib:shadow-md',
					position === 'popper' &&
						'data-[side=bottom]:lib:translate-y-1 data-[side=left]:lib:-translate-x-1 data-[side=right]:lib:translate-x-1 data-[side=top]:lib:-translate-y-1',
					className,
				)}
				position={position}
				{...props}
			>
				<SelectScrollUpButton />
				<SelectPrimitive.Viewport
					className={cn(
						'lib:p-1',
						position === 'popper' &&
							'lib:h-[var(--radix-select-trigger-height)] lib:w-full lib:min-w-[var(--radix-select-trigger-width)] lib:scroll-my-1',
					)}
				>
					{children}
				</SelectPrimitive.Viewport>
				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
	return (
		<SelectPrimitive.Label
			data-slot="select-label"
			className={cn('lib:text-muted-foreground lib:px-2 lib:py-1.5 lib:text-xs', className)}
			{...props}
		/>
	);
}

function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
	return (
		<SelectPrimitive.Item
			data-slot="select-item"
			className={cn(
				'focus:lib:bg-accent focus:lib:text-accent-foreground [&_svg:not([class*=text-])]:lib:text-muted-foreground lib:relative lib:flex lib:w-full lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:py-1.5 lib:pr-8 lib:pl-2 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4 *:[span]:last:lib:flex *:[span]:last:lib:items-center *:[span]:last:lib:gap-2',
				className,
			)}
			{...props}
		>
			<span className="lib:absolute lib:right-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center">
				<SelectPrimitive.ItemIndicator>
					<CheckIcon className="lib:size-4" />
				</SelectPrimitive.ItemIndicator>
			</span>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
}

function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
	return (
		<SelectPrimitive.Separator
			data-slot="select-separator"
			className={cn('lib:bg-border lib:pointer-events-none lib:-mx-1 lib:my-1 lib:h-px', className)}
			{...props}
		/>
	);
}

function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
	return (
		<SelectPrimitive.ScrollUpButton
			data-slot="select-scroll-up-button"
			className={cn('lib:flex lib:cursor-default lib:items-center lib:justify-center lib:py-1', className)}
			{...props}
		>
			<ChevronUpIcon className="lib:size-4" />
		</SelectPrimitive.ScrollUpButton>
	);
}

function SelectScrollDownButton({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
	return (
		<SelectPrimitive.ScrollDownButton
			data-slot="select-scroll-down-button"
			className={cn('lib:flex lib:cursor-default lib:items-center lib:justify-center lib:py-1', className)}
			{...props}
		>
			<ChevronDownIcon className="lib:size-4" />
		</SelectPrimitive.ScrollDownButton>
	);
}

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
};
