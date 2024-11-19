import React from 'react';
import { ButtonProps } from 'antd';
export type ButtonSizeType = {
    size?: 'large' | 'middle' | 'small';
    type?: 'primary' | 'secondary';
};
export type InternalButtonProps = Omit<ButtonProps, 'ghost' | 'type' | 'icon'> & ButtonSizeType & {
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
    danger?: boolean;
};
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "icon" | "type" | "ghost"> & ButtonSizeType & {
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
    styles?: React.CSSProperties | undefined;
    danger?: boolean | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
export default Button;
