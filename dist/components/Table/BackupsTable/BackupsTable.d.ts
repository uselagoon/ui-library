type Backup = {
    id: number;
    source: string;
    backupId: string;
    created: string;
    restore: {
        id: number;
        status: 'pending' | 'failed' | 'complete';
        restoreLocation?: string | null;
        restoreSize?: string | null;
    } | null;
};
export type BackupsProps = {
    backups: Backup[];
    skeleton?: false;
};
export type BackupsTableSkeleton = {
    skeleton: true;
};
export type BackupsTableProps = {
    resultsPerPage?: number;
    filterStatus?: 'pending' | 'failed' | 'complete';
    filterDateRange?: [string, string];
} & (BackupsTableSkeleton | BackupsProps);
declare const BackupsTable: (props: BackupsTableProps) => import("react/jsx-runtime").JSX.Element;
export default BackupsTable;
