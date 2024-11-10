import { ReactNode } from 'react';
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
export type FactsTableProps = {
    resultsPerPage?: number;
    filterString?: string;
    sortBy?: 'name_asc' | 'name_desc' | 'description_asc' | 'description_desc' | 'source_asc' | 'source_desc' | 'value_asc' | 'value_desc' | null;
    resultDropdown?: ReactNode;
} & (FactsTableSkeleton | FactsProps);
declare const ProblemsTable: (props: FactsTableProps) => import("react/jsx-runtime").JSX.Element;
export declare const PaginationWithSelector: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
export default ProblemsTable;
