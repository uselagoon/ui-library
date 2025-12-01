import { ReactNode } from 'react';
import { AppInfo } from './Sidenav';
type DropdownProps = AppInfo & {
    signOutFn: () => Promise<void>;
    avatar: ReactNode;
    userDisplayName: ReactNode;
    email: string;
    documentationUrl?: string;
};
export default function SidenavFooterMenu({ email, kcUrl, signOutFn, avatar, userDisplayName, documentationUrl }: DropdownProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=SidenavFooterMenu.d.ts.map