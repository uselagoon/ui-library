import React from "react";
import { TextProps } from "antd/es/typography/Text";
export declare const StyledTextElement: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<TextProps & React.RefAttributes<HTMLSpanElement>, never>> & Omit<React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
export declare const StyledLinkElement: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("antd/es/typography/Link").LinkProps & React.RefAttributes<HTMLElement>, never>> & Omit<React.ForwardRefExoticComponent<import("antd/es/typography/Link").LinkProps & React.RefAttributes<HTMLElement>>, keyof React.Component<any, {}, any>>;
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
