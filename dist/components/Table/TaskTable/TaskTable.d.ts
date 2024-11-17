import { ReactNode } from 'react';
export type Task = {
    id: number;
    name: string;
    taskName: string;
    status: 'running' | 'complete' | 'failed' | 'error' | 'queued' | 'new' | 'cancelled';
    created: string;
    started: string | null;
    completed: string | null;
    service: string;
    logs: string | null;
    adminOnlyView: boolean;
    files: {
        id: number;
        filename: string;
        download: string;
        created: string;
    }[];
};
export type TaskTableSkeleton = {
    skeleton: true;
};
export type TaskTableProps = {
    task: Task;
    cancelTask: (task: Task) => JSX.Element;
    skeleton?: false;
    children?: ReactNode;
} | TaskTableSkeleton;
export declare const getTaskDuration: (task: Task) => string;
declare const TaskTable: (props: TaskTableProps) => import("react/jsx-runtime").JSX.Element;
export default TaskTable;
export declare const ExpandName: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>;
