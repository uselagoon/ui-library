import { default as React } from 'react';
import { Sidebar } from '../ui/sidebar';
type SidebarProps = React.ComponentProps<typeof Sidebar>;
export type UserInfo = {
    email: string;
    image?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
    name?: string;
};
export type AppInfo = {
    name: string;
    version: string;
    kcUrl: string;
    logo?: React.ReactNode;
};
export type EnvNavFn = (projectSlug: string, environmentSlug: string) => SidebarItem[];
export type ProjectNavFn = (projectSlug: string, environmentSlug?: string, getEnvironmentNav?: EnvNavFn) => SidebarItem[];
export type OrgNavFn = (orgSlug: string) => SidebarItem[];
export type SidenavProps = SidebarProps & {
    userInfo: UserInfo;
    appInfo: AppInfo;
    dynamicNav?: {
        getProjectNav?: ProjectNavFn;
        getOrgNav?: OrgNavFn;
        getEnvironmentNav?: EnvNavFn;
    };
    signOutFn: () => Promise<void>;
    currentPath: string;
};
export type NavItems = ReturnType<typeof getSidenavItems>;
export type SidebarItem = {
    title: string;
    url: string;
    icon?: React.ComponentType<any>;
    target?: string;
    onClick?: () => void;
    children?: SidebarItem[];
};
export type SidebarSection = {
    section: string;
    sectionItems: SidebarItem[];
};
export declare const getSidenavItems: (kcUrl: string, pathname: string, dynamicNav?: {
    getProjectNav?: ProjectNavFn;
    getOrgNav?: OrgNavFn;
    getEnvironmentNav?: EnvNavFn;
}) => SidebarSection[];
export default function Sidenav({ userInfo, appInfo, currentPath, dynamicNav, signOutFn, ...props }: SidenavProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sidenav.d.ts.map