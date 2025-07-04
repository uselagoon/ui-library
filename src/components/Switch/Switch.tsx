import React from "react";
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

type SwitchProps = React.ComponentProps<typeof Switch> & {
    label: string;
    description: string;
    id: string;
};

export default function SwitchWithDescription({ id, label, description, ...rest }: SwitchProps ) {
    return (
        <div className="flex space-x-2">
            <Switch id={id} {...rest} />
            <div className="space-y-2">
                <Label className="pt-[3px]" htmlFor={id}>{label}</Label>
                <span className="text-[#737373]">{description}</span>
            </div>
        </div>
    );
};