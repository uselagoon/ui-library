import React, { forwardRef } from 'react';
import { TextProps } from 'antd/es/typography/Text';
import { Typography } from 'antd';

const TextElement = Typography.Text;
const LinkElement = Typography.Link;

type TextItemProps = {
	text?: boolean;
};
type LinkItemProps = {
	href: string;
	target?: string;
};

export type InternalTextType = {
	className?: string;
	children?: React.ReactNode;
	underline?: boolean;
} & (TextItemProps | LinkItemProps) &
	TextProps;

const InternalText = forwardRef<HTMLSpanElement, InternalTextType>(
	({ className, children, underline = true, ...rest }, ref) => {
		if ('href' in rest) {
			const destination = rest.href ?? null;
			const target = rest.target ?? '__blank';

			return (
				<LinkElement ref={ref} className={className} href={destination} target={target}>
					{children}
				</LinkElement>
			);
		}

		return (
			<TextElement ref={ref} className={className} {...rest}>
				{children}
			</TextElement>
		);
	},
);

InternalText.displayName = 'Text';

export default InternalText;
