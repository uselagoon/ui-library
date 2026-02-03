import { ReactNode } from 'react';
import { AppInfo, FooterItem } from './Sidenav';
type SidenavFooterMenuProps = AppInfo & {
    footerItems: FooterItem[];
    signOutFn: () => Promise<void>;
    avatar: ReactNode;
    userDisplayName: ReactNode;
    email: string;
    documentationUrl?: string;
    disableAccountLink?: boolean;
    disableChangeFeedLink?: boolean;
};
export default function SidenavFooterMenu({ email, kcUrl, signOutFn, avatar, userDisplayName, documentationUrl, disableAccountLink, disableChangeFeedLink }: DropdownProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=SidenavFooterMenu.d.ts.map