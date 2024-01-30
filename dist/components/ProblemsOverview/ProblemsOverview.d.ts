import React from "react";
type LagoonProblemsOverviewProps = {
    problems: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
};
declare const LagoonProblemsOverview: React.FC<LagoonProblemsOverviewProps>;
export default LagoonProblemsOverview;
export type { LagoonProblemsOverviewProps };
