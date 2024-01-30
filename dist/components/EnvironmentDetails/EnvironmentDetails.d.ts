import React, { FC } from "react";
export interface EnvironmentDetailsType {
    environmentType: React.ReactNode;
    deploymentType: React.ReactNode;
    created: React.ReactNode;
    source: React.ReactNode;
    standbyRoutes: React.ReactNode;
    routes: React.ReactNode[];
    deployKey: React.ReactNode;
}
declare const LagoonEnvironmentDetails: FC<EnvironmentDetailsType>;
export default LagoonEnvironmentDetails;
