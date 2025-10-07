import { default as React } from 'react';
import { Switch } from '../ui/switch';
type SwitchProps = React.ComponentProps<typeof Switch> & {
    label: string;
    description: string;
    id: string;
    loading?: boolean;
};
export default function SwitchWithDescription({ id, label, description, disabled, loading, ...rest }: SwitchProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Switch.d.ts.map