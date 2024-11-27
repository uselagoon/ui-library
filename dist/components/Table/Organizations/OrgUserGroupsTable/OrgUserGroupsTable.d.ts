import { ReactNode } from 'react';
type UserGroup = {
    id: string;
    name: string;
    role: 'GUEST' | 'DEVELOPER' | 'REPORTER' | 'MAINTAINER' | 'OWNER';
    groupType?: 'null' | 'project-default-group';
};
export type UserGroupsProps = {
    userGroups: UserGroup[];
    editUserRoleModal: (userGroup: UserGroup) => ReactNode;
    unlinkGroupModal: (userGroup: UserGroup) => ReactNode;
    basePath: string;
    skeleton?: false;
};
export type UserGroupsSkeleton = {
    skeleton: true;
};
export type OrgUserGroupsTableProps = {
    resultsPerPage?: number;
    filterString?: string;
    showDefaults?: boolean;
    sortBy?: 'name_asc' | 'name_desc' | null;
    filterRoleType?: 'GUEST' | 'DEVELOPER' | 'REPORTER' | 'MAINTAINER' | 'OWNER';
    resultDropdown?: ReactNode;
} & (UserGroupsSkeleton | UserGroupsProps);
declare const OrgUserGroupsTable: (props: OrgUserGroupsTableProps) => import("react/jsx-runtime").JSX.Element;
export default OrgUserGroupsTable;
