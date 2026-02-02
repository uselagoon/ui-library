import { default as React } from 'react';
import { Sidebar } from '../ui/sidebar';
import { AnnouncementCardProps } from '../AnnouncementCard/AnnouncementCard';
import { AnnouncementCarouselProps } from '../AnnouncementCarousel';
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
};
export type SidenavProps = SidebarProps & {
    userInfo: UserInfo;
    appInfo: AppInfo;
    sidenavItems: SidebarSection[];
    signOutFn: () => Promise<void>;
    currentPath: string;
    documentationUrl?: string;
    cardProps?: AnnouncementCardProps;
    carouselProps?: AnnouncementCarouselProps;
    disableAccountLink?: boolean;
    disableChangeFeedLink?: boolean;
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
export default function Sidenav({ userInfo, appInfo, currentPath, sidenavItems, signOutFn, documentationUrl, cardProps, carouselProps, disableAccountLink, disableChangeFeedLink, ...props }: SidenavProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sidenav.d.ts.map