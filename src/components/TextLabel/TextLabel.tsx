import React from 'react';
import { TextProps } from 'antd/es/typography/Text';
import { Typography } from 'antd';

const TextElement = Typography.Text;
const LinkElement = Typography.Link;

type TextItemProps = {
	text?: boolean;
};
type LinkItemProps = {
	link?: boolean;
	href: string;
	target?: string;
};

export type InternalTextLabelType = {
	className?: string;
	children?: React.ReactNode;
} & (TextItemProps | LinkItemProps) &
	TextProps;

const InternalTextLabel: React.ForwardRefRenderFunction<HTMLSpanElement, InternalTextLabelType> = (
	{ className, children, ...rest }: InternalTextLabelType,
	ref,
) => {
	if ('link' in rest && rest.link) {
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
};

InternalTextLabel.displayName = 'TextLabel';

export default InternalTextLabel;
