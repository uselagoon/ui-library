type Fact = {
    description: string;
    id: number;
    name: string;
    source: string;
    value: string;
};
export type FactsProps = {
    facts: Fact[];
    skeleton?: false;
};
export type FactsTableSkeleton = {
    skeleton: true;
};
export type FactsTableProps = FactsTableSkeleton | FactsProps;
declare const ProblemsTable: (props: FactsTableProps) => import("react/jsx-runtime").JSX.Element;
export default ProblemsTable;
