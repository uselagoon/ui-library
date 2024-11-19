import { ReactNode } from 'react';
export type Deployment = {
    id: number;
    name: string;
    status: 'running' | 'complete' | 'failed' | 'error' | 'queued' | 'new' | 'cancelled';
    created: string;
    started: string | null;
    completed: string | null;
    buildLog?: string;
    bulkId?: string | null;
    priority: number | null;
    sourceType: 'API' | 'WEBHOOK';
    buildStep?: string | null;
};
export type DeploymentTableSkeleton = {
    skeleton: true;
};
export type DeploymenTableProps = {
    deployment: Deployment;
    cancelDeployment: (deployment: Deployment) => JSX.Element;
    skeleton?: false;
    children?: ReactNode;
} | DeploymentTableSkeleton;
export declare const getDeploymentDuration: (deployment: Deployment) => string;
declare const DeploymentTable: (props: DeploymenTableProps) => import("react/jsx-runtime").JSX.Element;
export default DeploymentTable;
export declare const ExpandName: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>;
export declare const ExpandedRow: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
