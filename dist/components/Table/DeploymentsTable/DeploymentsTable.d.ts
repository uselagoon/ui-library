type Deployment = {
    id: number;
    name: string;
    status: 'running' | 'complete' | 'failed' | 'error' | 'queued' | 'new';
    created: string;
    started: string;
    completed: string;
    sourceType: 'API' | 'WEBHOOK';
    environment?: string;
    remoteId?: string;
    buildLog?: string;
    buildStep?: string;
    bulkId: number | null;
    priority: string | null;
};
export type DeploymentProps = {
    deployments: Deployment[];
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
    filterDateRange?: [string, string];
} & (DeploymentsTableSkeleton | DeploymentProps);
export declare const getDeploymentDuration: (deployment: Deployment) => string;
declare const DeploymentsaTable: (props: DeploymentsTableProps) => import("react/jsx-runtime").JSX.Element;
export default DeploymentsaTable;
