import React from 'react';
type LagoonProblemsOverviewProps = {
    problems: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
    skeleton?: false;
};
type Props = LagoonProblemsOverviewProps | {
    skeleton: true;
};
declare const LagoonProblemsOverview: React.FC<Props>;
export default LagoonProblemsOverview;
export type { LagoonProblemsOverviewProps };
