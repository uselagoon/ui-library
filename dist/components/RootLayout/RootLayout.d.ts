import { ReactNode } from 'react';
import { AppInfo, SidebarItem, UserInfo } from '../sidenav/Sidenav';
export type EnvNavFn = (projectSlug: string, environmentSlug: string) => Promise<SidebarItem[]>;
export type OrgNavFn = (orgSlug: string) => Promise<SidebarItem[]>;
export type ProjectNavFn = (projectSlug: string, environmentSlug?: string, getEnvironmentNav?: EnvNavFn) => Promise<SidebarItem[]>;
interface RootLayoutProps {
    userInfo: UserInfo;
    appInfo: AppInfo;
    dynamicNav?: {
        getProjectNav?: ProjectNavFn;
        getOrgNav?: OrgNavFn;
        getEnvironmentNav?: EnvNavFn;
    };
    children: ReactNode;
    signOutFn: () => Promise<void>;
    currentPath: string;
}
export default function RootLayout({ userInfo, appInfo, signOutFn, currentPath, children, dynamicNav, }: RootLayoutProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=RootLayout.d.ts.map