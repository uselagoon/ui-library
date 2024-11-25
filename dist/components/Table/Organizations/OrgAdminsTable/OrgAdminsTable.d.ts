import { ReactNode } from 'react';
type Owner = {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    admin: true | null;
    owner: true | null;
    groupRoles: {
        id: string;
        role: string;
    }[];
};
export type OwnersProps = {
    owners: Owner[];
    addNewOwnerModal: ReactNode;
    deleteOwnerModal: (owner: Owner) => ReactNode;
    editOwnerModal: (owner: Owner) => ReactNode;
    skeleton?: false;
};
export type OwnersTableSkeleton = {
    skeleton: true;
};
export type OwnersTableProps = {
    resultsPerPage?: number;
    filterString?: string;
    filterOwnerType?: 'admin' | 'owner' | 'viewer';
    resultDropdown?: ReactNode;
} & (OwnersTableSkeleton | OwnersProps);
declare const OrgAdminsTable: (props: OwnersTableProps) => import("react/jsx-runtime").JSX.Element;
export default OrgAdminsTable;
