import { ReactNode } from 'react';
import { AppInfo, SidebarItem, SidebarSection, UserInfo } from '../Sidenav/Sidenav';
import { AnnouncementCardProps } from '../AnnouncementCard/AnnouncementCard';
export type EnvNavFn = (projectSlug: string, environmentSlug: string) => Promise<SidebarItem[]>;
export type OrgNavFn = (orgSlug: string) => Promise<SidebarItem[]>;
export type ProjectNavFn = (projectSlug: string, environmentSlug?: string, getEnvironmentNav?: EnvNavFn) => Promise<SidebarItem[]>;
interface RootLayoutProps {
    userInfo: UserInfo;
    appInfo: AppInfo;
    sidenavItems: SidebarSection[];
    children: ReactNode;
    signOutFn: () => Promise<void>;
    currentPath: string;
    documentationUrl?: string;
    cardProps?: AnnouncementCardProps;
    disableAccountLink?: boolean;
    disableChangeFeedLink?: boolean;
}
export default function RootLayout({ userInfo, appInfo, signOutFn, currentPath, children, sidenavItems, documentationUrl, cardProps, disableAccountLink, disableChangeFeedLink, }: RootLayoutProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=RootLayout.d.ts.map