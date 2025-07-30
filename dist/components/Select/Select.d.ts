import { Select } from '../ui/select';
type Option = {
    label: string;
    value: string | number;
};
type OptionGroup = {
    label: string;
    options: Option[];
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