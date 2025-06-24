import { Input as ShadInput } from '../ui/input';
import { ComponentProps, ReactNode } from 'react';
type InputProps = ComponentProps<typeof ShadInput> & {
    label: string;
    placeholder?: string;
    description?: string;
    icon?: ReactNode;
};
export default function Input({ label, placeholder, icon, description, ...rest }: InputProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Input.d.ts.map