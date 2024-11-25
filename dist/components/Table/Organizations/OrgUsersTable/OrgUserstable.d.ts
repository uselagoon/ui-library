import { ReactNode } from 'react';
type User = {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    groupRoles: {
        id: string;
        role: string;
    }[];
};
export type UsersTableProps = {
    users: User[];
    newUserModal: ReactNode;
    deleteUserModal: (group: User) => ReactNode;
    basePath: string;
    skeleton?: false;
};
export type UsersTableSkeleton = {
    skeleton: true;
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
