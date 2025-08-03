import { Input as ShadInput } from '../ui/input';
import { default as React, ComponentProps, ReactNode } from 'react';
type InputProps = ComponentProps<typeof ShadInput> & {
    label?: string;
    placeholder?: string;
    description?: string;
    icon?: ReactNode;
};
export default function Input({ label, placeholder, icon, description, ...rest }: InputProps): import("react/jsx-dev-runtime").JSX.Element;
export declare const DebouncedInput: React.ForwardRefExoticComponent<{
    value: string;
    onChange: (value: string) => void;
    debounce?: number;
    label: string;
    placeholder?: string;
    description?: string;
    icon?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map