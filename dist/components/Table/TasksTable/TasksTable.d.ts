import { ReactNode } from 'react';
type Task = {
    adminOnlyView: boolean;
    created: string;
    id: number;
    name: string;
    service: string;
    status: string;
    taskName: string;
    started: string | null;
    completed: string | null;
};
export type TasksProps = {
    tasks: Task[];
    basePath: string;
    skeleton?: false;
    resultDropdown?: ReactNode;
};
export type TasksTableSkeleton = {
    skeleton: true;
};
export type TasksTableProps = {
    resultsPerPage?: number;
} & (TasksTableSkeleton | TasksProps);
export declare const getTaskDuration: (task: Task) => string;
declare const TasksTable: (props: TasksTableProps) => import("react/jsx-runtime").JSX.Element;
export default TasksTable;
