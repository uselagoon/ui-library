import { ReactNode } from 'react';
type Insight = {
    created: string;
    downloadUrl: string;
    file: string;
    fileId: number | null;
    id: number;
    service: string;
    size: string;
    type: string;
};
export type InsightsProps = {
    insights: Insight[];
    skeleton?: false;
};
export type InsightsTableSkeleton = {
    skeleton: true;
};
export type InsightsTableProps = {
    resultsPerPage?: number;
    filterString?: string;
    filterDateRange?: string[] | null;
    sortBy?: 'name_asc' | 'name_desc' | 'service_asc' | 'service_desc' | 'type_asc' | 'type_desc' | 'created_asc' | 'created_desc' | 'size_asc' | 'size_desc' | null;
    resultDropdown?: ReactNode;
} & (InsightsTableSkeleton | InsightsProps);
declare const ProblemsTable: (props: InsightsTableProps) => import("react/jsx-runtime").JSX.Element;
export default ProblemsTable;
