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
export type InsightsTableProps = InsightsTableSkeleton | InsightsProps;
declare const ProblemsTable: (props: InsightsTableProps) => import("react/jsx-runtime").JSX.Element;
export default ProblemsTable;
