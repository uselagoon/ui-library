'use client';

import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function InputOTP({
	className,
	containerClassName,
	...props
}: React.ComponentProps<typeof OTPInput> & {
	containerClassName?: string;
}) {
	return (
		<OTPInput
			data-slot="input-otp"
			containerClassName={cn('flex items-center gap-2 has-disabled:opacity-50', containerClassName)}
			className={cn('disabled:lib:cursor-not-allowed', className)}
			{...props}
		/>
	);
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="input-otp-group" className={cn('lib:flex lib:items-center', className)} {...props} />;
}

function InputOTPSlot({
	index,
	className,
	...props
}: React.ComponentProps<'div'> & {
	index: number;
}) {
	const inputOTPContext = React.useContext(OTPInputContext);
	const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

	return (
		<div
			data-slot="input-otp-slot"
			data-active={isActive}
			className={cn(
				'data-[active=true]:lib:border-ring data-[active=true]:lib:ring-ring/50 data-[active=true]:aria-invalid:lib:ring-destructive/20 dark:data-[active=true]:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive data-[active=true]:aria-invalid:lib:border-destructive dark:lib:bg-input/30 lib:border-input lib:relative lib:flex lib:h-9 lib:w-9 lib:items-center lib:justify-center lib:border-y lib:border-r lib:text-sm lib:shadow-xs lib:transition-all lib:outline-none first:lib:rounded-l-md first:lib:border-l last:lib:rounded-r-md data-[active=true]:lib:z-10 data-[active=true]:lib:ring-[3px]',
				className,
			)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className="lib:pointer-events-none lib:absolute lib:inset-0 lib:flex lib:items-center lib:justify-center">
					<div className="lib:animate-caret-blink lib:bg-foreground lib:h-4 lib:w-px lib:duration-1000" />
				</div>
			)}
		</div>
	);
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
	return (
		<div data-slot="input-otp-separator" role="separator" {...props}>
			<MinusIcon />
		</div>
	);
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
