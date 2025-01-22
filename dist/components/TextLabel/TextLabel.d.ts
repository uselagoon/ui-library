import React from 'react';
import { TextProps } from 'antd/es/typography/Text';
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
} & (TextItemProps | LinkItemProps) & TextProps;
declare const InternalTextLabel: React.ForwardRefRenderFunction<HTMLSpanElement, InternalTextLabelType>;
export default InternalTextLabel;
