import { ReactNode } from 'react';
type ProjectBase = {
    id: number;
    name: string;
};
type StandaloneProject = ProjectBase & {
    groupCount: number;
};
export type ProjectsProps = {
    newProjectModal: ReactNode;
    basePath: string;
    skeleton?: false;
} & ({
    type?: 'standalone';
    projects: StandaloneProject[];
    deleteProjectModal: (group: StandaloneProject) => ReactNode;
} | {
    type?: 'subTable';
    projects: ProjectBase[];
    unlinkProjectModal: (group: ProjectBase) => ReactNode;
});
export type ProjectsTableSkeleton = {
    skeleton: true;
    type: 'standalone' | 'subTable';
};
export type OrgProjectsProps = {
    resultsPerPage?: number;
    filterString?: string;
    sortBy?: 'name_asc' | 'name_desc' | 'groupCount_asc' | 'groupCount_desc' | null;
    resultDropdown?: ReactNode;
} & (ProjectsTableSkeleton | ProjectsProps);
declare const OrgProjectsTable: (props: OrgProjectsProps) => import("react/jsx-runtime").JSX.Element;
export default OrgProjectsTable;
