import React, { forwardRef } from 'react';
import { ButtonProps } from 'antd';
import { IconAfterWrapper, IconBeforeWrapper, UIButton } from './Styles';

export type ButtonSizeType = {
	size?: 'large' | 'middle' | 'small';
	type?: 'primary' | 'secondary';
};

export type InternalButtonProps = Omit<ButtonProps, 'danger' | 'ghost' | 'type' | 'icon'> &
	ButtonSizeType & {
		iconBefore?: React.ReactNode;
		iconAfter?: React.ReactNode;
		disabled?: boolean;
		loading?: boolean;
		className?: string;
		children?: React.ReactNode;
		styles?: React.CSSProperties;
	};

const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement, InternalButtonProps> = (
	{
		size = 'large',
		type = 'primary',
		iconBefore,
		iconAfter,
		disabled,
		loading,
		className,
		children,
		styles,
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
		<UIButton
			ref={ref}
			type={type}
			size={size}
			styles={styles}
			disabled={disabled}
			loading={loading}
			className={className}
			{...props}
		>
			{renderNode}
		</UIButton>
	);
};

const Button = forwardRef<HTMLButtonElement, InternalButtonProps>(InternalButton);

Button.displayName = 'Button';

export default Button;
