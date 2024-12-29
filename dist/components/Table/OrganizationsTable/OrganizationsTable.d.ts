export type Organization = {
    id: number;
    name: string;
    description: string | null;
    friendlyName: string | null;
    quotaProject: number;
    quotaGroup: number;
    groups: {
        id: string;
        type?: null | 'project-default-group';
    }[];
    projects: {
        id: number;
    }[];
    deployTargets: {
        id: number;
        name: string;
    }[];
};
export type OrgsProps = {
    organizations: Organization[];
    basePath: string;
    resultsPerPage?: number;
    filterString: string;
    skeleton?: false;
};
export type OrganizationsTableSkeletonProps = {
    skeleton: true;
};
export type OrganizationsTableProps = OrganizationsTableSkeletonProps | OrgsProps;
declare const OrganizationsTable: (props: OrganizationsTableProps) => import("react/jsx-runtime").JSX.Element;
export default OrganizationsTable;
