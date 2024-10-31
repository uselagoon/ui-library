type Task = {
    adminOnlyView: boolean;
    created: string;
    id: number;
    name: string;
    service: string;
    status: string;
    taskName: string;
};
export type TasksProps = {
    tasks: Task[];
    basePath: string;
    skeleton?: false;
};
export type TasksTableSkeleton = {
    skeleton: true;
};
export type TasksTableProps = {
    resultsPerPage?: number;
} & (TasksTableSkeleton | TasksProps);
declare const TasksTable: (props: TasksTableProps) => import("react/jsx-runtime").JSX.Element;
export default TasksTable;
