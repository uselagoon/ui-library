import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div data-slot="skeleton" className={cn('lib:bg-accent lib:animate-pulse lib:rounded-md', className)} {...props} />
	);
}

export { Skeleton };
