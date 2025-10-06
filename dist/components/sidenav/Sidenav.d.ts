import { default as React } from 'react';
import { Sidebar } from '../ui/sidebar';
import { EnvNavFn, OrgNavFn, ProjectNavFn } from '../RootLayout/RootLayout';
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
export default function Sidenav({ userInfo, appInfo, currentPath, dynamicNav, signOutFn, ...props }: SidenavProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sidenav.d.ts.map