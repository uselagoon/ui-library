'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

function Slider({
	className,
	defaultValue,
	value,
	min = 0,
	max = 100,
	...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
	const _values = React.useMemo(
		() => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
		[value, defaultValue, min, max],
	);

	return (
		<SliderPrimitive.Root
			data-slot="slider"
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			className={cn(
				'lib:relative lib:flex lib:w-full lib:touch-none lib:items-center lib:select-none data-[disabled]:lib:opacity-50 data-[orientation=vertical]:lib:h-full data-[orientation=vertical]:lib:min-h-44 data-[orientation=vertical]:lib:w-auto data-[orientation=vertical]:lib:flex-col',
				className,
			)}
			{...props}
		>
			<SliderPrimitive.Track
				data-slot="slider-track"
				className={cn(
					'lib:bg-muted lib:relative lib:grow lib:overflow-hidden lib:rounded-full data-[orientation=horizontal]:lib:h-1.5 data-[orientation=horizontal]:lib:w-full data-[orientation=vertical]:lib:h-full data-[orientation=vertical]:lib:w-1.5',
				)}
			>
				<SliderPrimitive.Range
					data-slot="slider-range"
					className={cn(
						'lib:bg-primary lib:absolute data-[orientation=horizontal]:lib:h-full data-[orientation=vertical]:lib:w-full',
					)}
				/>
			</SliderPrimitive.Track>
			{Array.from({ length: _values.length }, (_, index) => (
				<SliderPrimitive.Thumb
					data-slot="slider-thumb"
					key={index}
					className="lib:border-primary lib:bg-background lib:ring-ring/50 lib:block lib:size-4 lib:shrink-0 lib:rounded-full lib:border lib:shadow-sm lib:transition-[color,box-shadow] hover:lib:ring-4 focus-visible:lib:ring-4 focus-visible:lib:outline-hidden disabled:lib:pointer-events-none disabled:lib:opacity-50"
				/>
			))}
		</SliderPrimitive.Root>
	);
}

export { Slider };
