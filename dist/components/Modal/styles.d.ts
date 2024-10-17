/// <reference types="react" />
export declare const ModalFooterButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("antd").ButtonProps & import("react").RefAttributes<HTMLElement>, never>> & Omit<import("react").ForwardRefExoticComponent<import("antd").ButtonProps & import("react").RefAttributes<HTMLElement>> & {
    Group: import("react").FC<import("antd/es/button").ButtonGroupProps>;
}, keyof import("react").Component<any, {}, any>>;
export declare const ModalChildren: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {
    $minHeight?: string | undefined;
}>>;
export declare const StyledModal: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("antd").ModalProps, never>> & Omit<import("react").FC<import("antd").ModalProps> & import("antd/es/modal/confirm").ModalStaticFunctions & {
    useModal: typeof import("antd/es/modal/useModal").default;
    destroyAll: () => void;
    config: typeof import("antd/es/modal/confirm").modalGlobalConfig;
    _InternalPanelDoNotUseOrYouWillBeFired: (props: import("antd/es/modal/PurePanel").PurePanelProps) => import("react").JSX.Element;
}, keyof import("react").Component<any, {}, any>>;
