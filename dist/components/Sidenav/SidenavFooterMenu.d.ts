import { ReactNode } from 'react';
import { AppInfo } from './Sidenav';
type DropdownProps = AppInfo & {
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