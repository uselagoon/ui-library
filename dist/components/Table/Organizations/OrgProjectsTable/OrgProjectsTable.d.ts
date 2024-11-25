import { ReactNode } from 'react';
type Project = {
    id: number;
    name: string;
    groupCount: number;
};
export type ProjectsProps = {
    projects: Project[];
    newProjectModal: ReactNode;
    deleteProjectModal: (group: Project) => ReactNode;
    basePath: string;
    skeleton?: false;
};
export type ProjectsTableSkeleton = {
    skeleton: true;
};
export type OrgProjectsProps = {
    resultsPerPage?: number;
    filterString?: string;
    sortBy?: 'name_asc' | 'name_desc' | 'groupCount_asc' | 'groupCount_desc' | null;
    resultDropdown?: ReactNode;
} & (ProjectsTableSkeleton | ProjectsProps);
declare const OrgProjectsTable: (props: OrgProjectsProps) => import("react/jsx-runtime").JSX.Element;
export default OrgProjectsTable;
