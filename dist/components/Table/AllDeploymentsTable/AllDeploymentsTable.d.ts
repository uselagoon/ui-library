import { Deployment } from '../DeploymentsTable/DeploymentsTable';
type SingleDeployment = Omit<Deployment, 'sourceType' | 'bulkId'>;
export type AllDeploymentsProps = {
    deployments: SingleDeployment[];
    cancelDeployment: (deployment: SingleDeployment) => JSX.Element;
    skeleton?: false;
};
export type AllDeploymentsSkeleton = {
    skeleton: true;
};
export type AllDeploymentsTableProps = {
    resultsPerPage?: number;
    filterString?: string;
} & (AllDeploymentsSkeleton | AllDeploymentsProps);
declare const AllDeploymentsTable: (props: AllDeploymentsTableProps) => import("react/jsx-runtime").JSX.Element;
export default AllDeploymentsTable;
