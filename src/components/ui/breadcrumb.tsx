import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';

function Breadcrumb({ ...props }: React.ComponentProps<'nav'>) {
	return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={cn(
				'lib:text-muted-foreground lib:flex lib:flex-wrap lib:items-center lib:gap-1.5 lib:text-sm lib:break-words sm:lib:gap-2.5',
				className,
			)}
			{...props}
		/>
	);
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
	return (
		<li
			data-slot="breadcrumb-item"
			className={cn('lib:inline-flex lib:items-center lib:gap-1.5', className)}
			{...props}
		/>
	);
}

function BreadcrumbLink({
	asChild,
	className,
	...props
}: React.ComponentProps<'a'> & {
	asChild?: boolean;
}) {
	const Comp = asChild ? Slot : 'a';

	return (
		<Comp
			data-slot="breadcrumb-link"
			className={cn('hover:lib:text-foreground lib:transition-colors', className)}
			{...props}
		/>
	);
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot="breadcrumb-page"
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={cn('lib:text-foreground lib:font-normal', className)}
			{...props}
		/>
	);
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<'li'>) {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			className={cn('[&>svg]:lib:size-3.5', className)}
			{...props}
		>
			{children ?? <ChevronRight />}
		</li>
	);
}

function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			className={cn('lib:flex lib:size-9 lib:items-center lib:justify-center', className)}
			{...props}
		>
			<MoreHorizontal className="lib:size-4" />
			<span className="lib:sr-only">More</span>
		</span>
	);
}

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
};
