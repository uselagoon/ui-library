type BulkDeployment = {
    id: number;
    name: string;
    status: string;
    created: string;
    buildStep: string | null;
    started: string | null;
    completed: string | null;
    bulkId: string;
    bulkName: string;
    priority: number | null;
    environment: {
        name: string;
        openshiftProjectName: string;
        project: {
            name: string;
        };
    };
};
export type BulkDeploymentsProps = {
    deployments: BulkDeployment[];
    cancelDeployment: (deployment: BulkDeployment) => JSX.Element;
    skeleton?: false;
};
export type BulkDeploymentsSkeleton = {
    skeleton: true;
};
export type BulkDeploymentsTableProps = BulkDeploymentsSkeleton | BulkDeploymentsProps;
declare const BulkDeploymentsTable: (props: BulkDeploymentsTableProps) => import("react/jsx-runtime").JSX.Element;
export default BulkDeploymentsTable;
