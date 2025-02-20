import React, { forwardRef } from 'react';
import { ButtonProps } from 'antd';
import { IconAfterWrapper, IconBeforeWrapper } from './Styles';

import { Button as AntButton } from 'antd';

export type ButtonSizeType = {
	size?: 'large' | 'middle' | 'small';
};

export type InternalButtonProps = Omit<ButtonProps, 'icon'> &
	ButtonSizeType & {
		iconBefore?: React.ReactNode;
		iconAfter?: React.ReactNode;
		disabled?: boolean;
		loading?: boolean;
		className?: string;
		children?: React.ReactNode;
		styles?: React.CSSProperties;
		danger?: boolean;
		testId?: string;
	};

const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement, InternalButtonProps> = (
	{
		size = 'large',
		type = 'primary',
		danger = false,
		iconBefore,
		iconAfter,
		disabled,
		loading,
		className,
		children,
		styles,
		testId,
		...props
	}: InternalButtonProps,
	ref,
) => {
	let renderNode = children;

	if (iconBefore) {
		renderNode = (
			<>
				<IconBeforeWrapper>{iconBefore}</IconBeforeWrapper>
				{renderNode}
			</>
		);
	}
	if (iconAfter) {
		renderNode = (
			<>
				{renderNode} <IconAfterWrapper>{iconAfter}</IconAfterWrapper>
			</>
		);
	}
	return (
		<AntButton
			{...(testId && { 'data-cy': testId })}
			ref={ref}
			size={size}
			styles={styles}
			disabled={disabled}
			type={type}
			loading={loading}
			className={className}
			danger={danger}
			{...props}
		>
			{renderNode}
		</AntButton>
	);
};

const Button = forwardRef<HTMLButtonElement, InternalButtonProps>(InternalButton);

Button.displayName = 'Button';

export default Button;
