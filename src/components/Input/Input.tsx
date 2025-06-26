import { Label } from '@/components/ui/label';
import { Input as ShadInput } from '@/components/ui/input';
import React, { ComponentProps, ReactNode } from 'react';
import { cva } from 'class-variance-authority';

type InputProps = ComponentProps<typeof ShadInput> & {
	label: string;
	placeholder?: string;
	description?: string;
	icon?: ReactNode;
};
const inputVariants = cva('w-full rounded-lg bg-background', {
	variants: {
		hasIcon: {
			true: 'pl-8',
			false: '',
		},
	},
});

export default function Input({ label, placeholder = '', icon, description, ...rest }: InputProps) {
	return (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor={`${label}-input`}>{label}</Label>
			<div className="relative">
				{icon && <div className="absolute left-2.5 top-1.5 h-2.5 w-2.5 text-muted-foreground">{icon}</div>}
				<ShadInput
					className={inputVariants({ hasIcon: !!icon })}
					id={`${label}-input`}
					placeholder={placeholder}
					{...rest}
				/>
				{description && (
					<p className="font-sans font-normal text-sm leading-[1.5] tracking-[0%] text-muted-foreground">
						{description}
					</p>
				)}
			</div>
		</div>
	);
}
