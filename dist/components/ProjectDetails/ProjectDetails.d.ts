import React, { FC } from 'react';
export interface ProjectDetailsType {
    created: React.ReactNode;
    origin: React.ReactNode;
    gitUrl: React.ReactNode;
    devEnvsInUse: React.ReactNode;
    branchesEnabled: React.ReactNode;
    prsEnabled: React.ReactNode;
    deployKey: React.ReactNode;
}
declare const LagoonProjectDetails: FC<ProjectDetailsType>;
export default LagoonProjectDetails;
