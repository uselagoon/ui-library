import React from 'react';
import { TextProps } from 'antd/es/typography/Text';
import { Typography } from 'antd';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

const TextElement = Typography.Text;
const LinkElement = Typography.Link;

const sharedStyles = css`
	font-family: 'ArabicPro-Regular', sans-serif;
	font-size: 16px;
	line-height: 18px;
`;
const StyledTextElement = styled(TextElement)`
	&.ant-typography {
		&.ant-typography:not(.ant-typography-warning):not(.ant-typography-danger):not(.ant-typography-secondary):not(
				.ant-typography-success
			) {
			color: ${(props) => props.theme.UI.texts.primary};
		}

		${sharedStyles};
	}
`;

const StyledLinkElement = styled(LinkElement)<{ $underline?: boolean }>`
	&.ant-typography {
		${sharedStyles};
		${(props) =>
			props.$underline
				? css`
						text-decoration: underline;
					`
				: css`
						text-decoration: none;
					`}

		&:link {
			color: ${colors.blue};
		}
		&:hover {
			color: ${colors.purple};
		}
		&:visited {
			color: ${colors.lagoonBlue};
			text-decoration: none;
		}
	}
`;

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

const InternalText: React.ForwardRefRenderFunction<HTMLSpanElement, InternalTextType> = (
	{ className, children, underline = true, ...rest }: InternalTextType,
	ref,
) => {
	if ('href' in rest) {
		const destination = rest.href ?? null;
		const target = rest.target ?? '__blank';

		return (
			<StyledLinkElement $underline={underline} ref={ref} className={className} href={destination} target={target}>
				{children}
			</StyledLinkElement>
		);
	}

	return (
		<StyledTextElement ref={ref} className={className} {...rest}>
			{children}
		</StyledTextElement>
	);
};

InternalText.displayName = 'Text';

export default InternalText;
