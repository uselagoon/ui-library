import React from 'react';
type LagoonCardLabelProps = {
    type: 'development' | 'project' | 'production' | 'active production' | 'standby production' | 'uat' | 'error';
};
declare const UICardLabel: React.ForwardRefExoticComponent<LagoonCardLabelProps & React.RefAttributes<HTMLDivElement>>;
export default UICardLabel;
export type { LagoonCardLabelProps };
