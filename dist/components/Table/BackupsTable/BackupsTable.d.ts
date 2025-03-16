type Backup = {
    id: number;
    source: string;
    backupId: string;
    created: string;
    restore: {
        id: number;
        status: 'pending' | 'failed' | 'successful';
        restoreLocation?: string | null;
        restoreSize?: number | null;
    } | null;
};
export type BackupsProps = {
    backups: Backup[];
    retrieveBackup: (backup: Backup, type: 'failed' | 'retrievable') => JSX.Element;
    skeleton?: false;
};
export type BackupsTableSkeleton = {
    skeleton: true;
};
export type BackupsTableProps = {
    resultsPerPage?: number;
    filterStatus?: 'pending' | 'failed' | 'successful' | 'retrievable';
    filterDateRange?: string[] | null;
} & (BackupsTableSkeleton | BackupsProps);
declare const BackupsTable: (props: BackupsTableProps) => import("react/jsx-runtime").JSX.Element;
export default BackupsTable;
