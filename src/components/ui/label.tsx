'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
	return (
		<LabelPrimitive.Root
			data-slot="label"
			className={cn(
				'lib:flex lib:items-center lib:gap-2 lib:text-sm lib:leading-none lib:font-medium lib:select-none group-data-[disabled=true]:lib:pointer-events-none group-data-[disabled=true]:lib:opacity-50 peer-disabled:lib:cursor-not-allowed peer-disabled:lib:opacity-50',
				className,
			)}
			{...props}
		/>
	);
}

export { Label };
