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
export type DeploymentsTableProps = {
    deployments: Deployment[];
    /**
     * The base path for the deployments.
     * This is used to construct URLs for specific deployments.
     */
    basePath: string;
    resultsPerPage?: number;
    filterStatus?: Deployment['status'];
    filterDateRange?: [string, string];
};
export declare const getDeploymentDuration: (deployment: Deployment) => string;
declare const DeploymentsaTable: ({ deployments, basePath, resultsPerPage, filterStatus, filterDateRange, }: DeploymentsTableProps) => import("react/jsx-runtime").JSX.Element;
export default DeploymentsaTable;
