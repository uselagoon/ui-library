import { Select } from '../ui/select';
import { ReactNode } from 'react';
type Option = {
    label: string;
    value: string | number;
    icon?: ReactNode;
};
type OptionGroup = {
    label: string;
    options: Option[];
    icon?: ReactNode;
};
export type SelectProps = Omit<React.ComponentProps<typeof Select>, 'disabled'> & {
    placeholder: string;
    options?: Option[] | OptionGroup[];
    disabled?: boolean;
    width?: number;
};
export default function SelectWithOptions({ placeholder, options, disabled, width, ...rest }: SelectProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Select.d.ts.map