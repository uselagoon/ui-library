import { default as React } from 'react';
import { Checkbox } from '../ui/checkbox';
type CheckboxProps = React.ComponentProps<typeof Checkbox> & {
    label: string;
    id: string;
};
declare function CheckboxWithLabel({ label, id, ...rest }: CheckboxProps): import("react/jsx-dev-runtime").JSX.Element;
declare namespace CheckboxWithLabel {
    var displayName: string;
}
export default CheckboxWithLabel;
//# sourceMappingURL=Checkbox.d.ts.map