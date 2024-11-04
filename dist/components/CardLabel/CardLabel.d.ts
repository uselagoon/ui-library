import React from 'react';
export declare const colorMap: {
    readonly development: string;
    readonly project: "#000";
    readonly production: "#A6E22E";
    readonly active: string;
    readonly standby: string;
    readonly "active production": "#A6E22E";
    readonly "standby production": string;
    readonly uat: string;
    readonly error: string;
};
type LagoonCardLabelProps = {
    type: 'active' | 'standby' | 'development' | 'project' | 'production' | 'active production' | 'standby production' | 'uat' | 'error';
    variant?: 'vertical' | 'horizontal';
};
declare const UICardLabel: React.ForwardRefExoticComponent<LagoonCardLabelProps & React.RefAttributes<HTMLDivElement>>;
export default UICardLabel;
export type { LagoonCardLabelProps };
