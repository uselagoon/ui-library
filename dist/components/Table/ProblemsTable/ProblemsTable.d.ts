declare enum ProblemSeverityRating {
    NONE = 0,
    UNKNOWN = 1,
    NEGLIGIBLE = 2,
    LOW = 3,
    MEDIUM = 4,
    HIGH = 5,
    CRITICAL = 6
}
type Problem = {
    id: number;
    identifier: string;
    environment: {
        id: number | null;
        name: string | null;
    };
    data: {};
    severity: keyof typeof ProblemSeverityRating;
    source: string;
    service: string;
    created: string;
    deleted: string;
    severityScore: number;
    associatedPackage: string;
    description: string;
    version: string;
    fixedVersion: string;
    links: string;
};
export type ProblemProps = {
    problems: Problem[];
    skeleton?: false;
};
export type ProblemsTableSkeleton = {
    skeleton: true;
};
export type ProblemsTableProps = ProblemsTableSkeleton | ProblemProps;
declare const ProblemsTable: (props: ProblemsTableProps) => import("react/jsx-runtime").JSX.Element;
export default ProblemsTable;
