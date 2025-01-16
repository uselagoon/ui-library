/// <reference types="react" />
export declare const ModalButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<import("antd").ButtonProps, "icon" | "type" | "ghost"> & import("../../Button/Button").ButtonSizeType & {
    iconBefore?: import("react").ReactNode;
    iconAfter?: import("react").ReactNode;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    className?: string | undefined;
    children?: import("react").ReactNode;
    styles?: import("react").CSSProperties | undefined;
    danger?: boolean | undefined;
} & import("react").RefAttributes<HTMLButtonElement>, never>> & Omit<import("react").ForwardRefExoticComponent<Omit<import("antd").ButtonProps, "icon" | "type" | "ghost"> & import("../../Button/Button").ButtonSizeType & {
    iconBefore?: import("react").ReactNode;
    iconAfter?: import("react").ReactNode;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    className?: string | undefined;
    children?: import("react").ReactNode;
    styles?: import("react").CSSProperties | undefined;
    danger?: boolean | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>, keyof import("react").Component<any, {}, any>>;
export declare const ModalHeader: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<import("../../Heading").HeadingProps, "level"> & import("react").RefAttributes<HTMLHeadingElement>, never>> & Omit<import("react").ForwardRefExoticComponent<Omit<import("../../Heading").HeadingProps, "level"> & import("react").RefAttributes<HTMLHeadingElement>>, keyof import("react").Component<any, {}, any>>;
export declare const ModalText: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("../../Text").TextType, import("styled-components/dist/types").BaseObject>> & Omit<import("react").ForwardRefRenderFunction<HTMLSpanElement, import("../../Text").TextType>, keyof import("react").Component<any, {}, any>>;
export declare const ModalForm: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("antd").FormProps<unknown> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<import("antd").FormInstance<unknown>>, never>> & Omit<(<Values = any>(props: import("antd").FormProps<Values> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<import("antd").FormInstance<Values>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
    displayName?: string | undefined;
} & {
    useForm: typeof import("antd/es/form/Form").useForm;
    useFormInstance: typeof import("antd/es/form/hooks/useFormInstance").default;
    useWatch: typeof import("rc-field-form/es/useWatch").default;
    Item: (<Values_1 = any>(props: import("antd").FormItemProps<Values_1>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        useStatus: () => {
            status?: "" | "success" | "warning" | "error" | "validating" | undefined;
            errors: import("react").ReactNode[];
            warnings: import("react").ReactNode[];
        };
    };
    List: import("react").FC<import("antd/es/form").FormListProps>;
    ErrorList: import("react").FC<import("antd/es/form").ErrorListProps>;
    Provider: import("react").FC<import("antd/es/form/context").FormProviderProps>;
    create: () => void;
}, keyof import("react").Component<any, {}, any>>;
export declare const Highlighted: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>;
export declare const SShSummary: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
