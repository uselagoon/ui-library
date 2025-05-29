import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				'file:lib:text-foreground placeholder:lib:text-muted-foreground selection:lib:bg-primary selection:lib:text-primary-foreground dark:lib:bg-input/30 lib:border-input lib:flex lib:h-9 lib:w-full lib:min-w-0 lib:rounded-md lib:border lib:bg-transparent lib:px-3 lib:py-1 lib:text-base lib:shadow-xs lib:transition-[color,box-shadow] lib:outline-none file:lib:inline-flex file:lib:h-7 file:lib:border-0 file:lib:bg-transparent file:lib:text-sm file:lib:font-medium disabled:lib:pointer-events-none disabled:lib:cursor-not-allowed disabled:lib:opacity-50 md:lib:text-sm',
				'focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 focus-visible:lib:ring-[3px]',
				'aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive',
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
