import { ReactNode } from 'react';
type Group = {
    id: string;
    memberCount?: number;
    name: string;
    type: 'null' | 'project-default-group';
};
export type GroupsProps = {
    groups: Group[];
    newGroupModal: ReactNode;
    deleteUserModal?: (group: Group) => ReactNode;
    addUserModal?: (group: Group) => ReactNode;
    basePath: string;
    skeleton?: false;
};
export type GroupsTableSkeleton = {
    skeleton: true;
};
export type GroupsTableProps = {
    resultsPerPage?: number;
    filterString?: string;
    showDefaults?: boolean;
    sortBy?: 'name_asc' | 'name_desc' | 'memberCount_asc' | 'memberCount_desc' | null;
    resultDropdown?: ReactNode;
    onVisibleDataChange?: (data: Group[]) => void;
} & (GroupsTableSkeleton | GroupsProps);
declare const OrgGroupsTable: (props: GroupsTableProps) => import("react/jsx-runtime").JSX.Element;
export default OrgGroupsTable;
