import { ReactNode } from 'react';
type User = {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    groupRoles: {
        id: string;
        role: string;
    }[] | null;
};
type GroupMemberUser = {
    role: 'GUEST' | 'DEVELOPER' | 'REPORTER' | 'MAINTAINER' | 'OWNER';
    firstName: string | null;
    lastName: string | null;
    email: string;
};
export type UsersTableProps = {
    newUserModal: ReactNode;
    basePath: string;
    skeleton?: false;
} & ({
    type?: 'standalone';
    users: User[];
    deleteUserModal: (user: User) => ReactNode;
} | {
    type?: 'subTable';
    users: GroupMemberUser[];
    editUserGroupRoleModal: (user: GroupMemberUser) => ReactNode;
    unlinkUserModal: (user: GroupMemberUser) => ReactNode;
});
export type UsersTableSkeleton = {
    skeleton: true;
    type: 'subTable' | 'standalone';
};
export type UsersProps = {
    resultsPerPage?: number;
    filterString?: string;
    showDefaults?: boolean;
    sortBy?: 'firstName_asc' | 'firstName_desc' | 'lastName_asc' | 'lastName_desc' | 'email_asc' | 'email_desc' | 'groupCount_asc' | 'groupCount_desc' | null;
    resultDropdown?: ReactNode;
} & (UsersTableSkeleton | UsersTableProps);
declare const OrgUsersTable: (props: UsersProps) => import("react/jsx-runtime").JSX.Element;
export default OrgUsersTable;
