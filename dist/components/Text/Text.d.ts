import React from 'react';
import { TextProps } from 'antd/es/typography/Text';
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
} & (TextItemProps | LinkItemProps) & TextProps;
declare const InternalText: React.ForwardRefExoticComponent<InternalTextType & React.RefAttributes<HTMLSpanElement>>;
export default InternalText;
