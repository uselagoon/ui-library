import { Textarea as ShadTextarea } from '../ui/textarea';
import { default as React, ComponentProps, ReactNode } from 'react';
type TextareaProps = ComponentProps<typeof ShadTextarea> & {
    label?: string;
    placeholder?: string;
    description?: string;
    icon?: ReactNode;
};
export default function Textarea({ label, placeholder, icon, description, ...rest }: TextareaProps): import("react/jsx-dev-runtime").JSX.Element;
export declare const DebouncedTextarea: React.ForwardRefExoticComponent<{
    value: string;
    onChange: (value: string) => void;
    debounce?: number;
    label: string;
    placeholder?: string;
    description?: string;
    icon?: React.ReactNode;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> & React.RefAttributes<HTMLTextAreaElement>>;
export {};
//# sourceMappingURL=TextArea.d.ts.map