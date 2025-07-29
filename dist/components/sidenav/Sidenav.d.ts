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
export type SidenavProps = SidebarProps & {
    userInfo: UserInfo;
    appInfo: AppInfo;
    signOutFn: () => Promise<void>;
    currentPath?: string;
};
export type NavItems = ReturnType<typeof getSidenavItems>;
declare const getSidenavItems: (kcUrl: string, signOutFn: () => Promise<void>) => {
    section: string;
    sectionItems: ({
        title: string;
        url: string;
        icon: React.ForwardRefExoticComponent<Omit<import('lucide-react').LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
        target?: undefined;
        onClick?: undefined;
    } | {
        title: string;
        url: string;
        target: string;
        onClick: () => void;
        icon: React.ForwardRefExoticComponent<Omit<import('lucide-react').LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    })[];
}[];
export default function Sidenav({ userInfo, appInfo, currentPath, signOutFn, ...props }: SidenavProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sidenav.d.ts.map