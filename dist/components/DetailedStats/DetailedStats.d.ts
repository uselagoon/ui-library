import React, { ReactNode } from 'react';
type StatItem = {
    key: string;
    label: string;
    children?: ReactNode;
    loading?: boolean;
    capitalizeValue?: boolean;
    lowercaseValue?: boolean;
};
type DetailedStatsProps = {
    items: StatItem[];
};
declare const UIDetailedStats: React.ForwardRefExoticComponent<DetailedStatsProps & React.RefAttributes<HTMLDivElement>>;
export default UIDetailedStats;
export type { DetailedStatsProps };
