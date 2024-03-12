import React from "react";
import { TextProps } from "antd/es/typography/Text";
import { Typography } from "antd";
import styled, { css } from "styled-components";

const TextElement = Typography.Text;
const LinkElement = Typography.Link;

const sharedStyles = css`
  font-family: "AmericaMono-Regular", sans-serif;
  font-size: 14px;
  line-height: 18px;
`;
export const StyledTextElement = styled(TextElement)`
  &.ant-typography {
    &.ant-typography:not(.ant-typography-warning):not(
        .ant-typography-danger
      ):not(.ant-typography-secondary):not(.ant-typography-success) {
      color: ${(props) => props.theme.UI.texts.primary};
    }

    ${sharedStyles};
  }
`;

export const StyledLinkElement = styled(LinkElement)`
  &.ant-typography {
    color: ${props => props.theme.UI.texts.primary};
    ${sharedStyles};
    text-decoration: underline;
    &:link,
    &:hover,
    &:visited {
      color: ${props => props.theme.UI.texts.primary};
    }
  }
`;

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

const InternalTextLabel: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  InternalTextLabelType
> = ({ className, children, ...rest }: InternalTextLabelType, ref) => {
  if ("link" in rest && rest.link) {
    const destination = rest.href ?? null;
    const target = rest.target ?? "__blank";

    return (
      <StyledLinkElement
        ref={ref}
        className={className}
        href={destination}
        target={target}
      >
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

InternalTextLabel.displayName = "TextLabel";

export default InternalTextLabel;
