export type Deployment = {
    id: number;
    name: string;
    status: 'running' | 'complete' | 'failed' | 'error' | 'queued' | 'new' | 'cancelled';
    created: string;
    started: string | null;
    completed: string | null;
    environment?: {
        name: string;
        openshiftProjectName: string;
        openshift: {
            id: number;
            name: string;
        };
        project: {
            id: number;
            name: string;
        };
    };
    bulkId?: string | null;
    priority: number | null;
    sourceType: 'API' | 'WEBHOOK';
    buildStep?: string | null;
};
export type DeploymentProps = {
    deployments: Deployment[];
    cancelDeployment: (deployment: Deployment) => JSX.Element;
    /**
     * The base path for the deployments.
     * This is used to construct URLs for specific deployments.
     */
    basePath: string;
    skeleton?: false;
};
export type DeploymentsTableSkeleton = {
    skeleton: true;
};
export type DeploymentsTableProps = {
    resultsPerPage?: number;
    filterStatus?: Deployment['status'];
    filterDateRange?: string[] | null;
} & (DeploymentsTableSkeleton | DeploymentProps);
export declare const getDeploymentDuration: (deployment: Deployment) => string;
declare const DeploymentsTable: (props: DeploymentsTableProps) => import("react/jsx-runtime").JSX.Element;
export default DeploymentsTable;
