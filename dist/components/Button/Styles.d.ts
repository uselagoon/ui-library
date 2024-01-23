/// <reference types="react" />
import { ButtonSizeType } from "./Button";
export declare const IconBeforeWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const IconAfterWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const UIButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("antd").ButtonProps & import("react").RefAttributes<HTMLElement>, ButtonSizeType>> & Omit<import("react").ForwardRefExoticComponent<import("antd").ButtonProps & import("react").RefAttributes<HTMLElement>> & {
    Group: import("react").FC<import("antd/es/button").ButtonGroupProps>;
}, keyof import("react").Component<any, {}, any>>;
