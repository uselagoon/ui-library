import { ReactNode } from 'react';
import { AppInfo } from './Sidenav';
type DropdownProps = AppInfo & {
    signOutFn: () => Promise<void>;
    avatar: ReactNode;
    userDisplayName: ReactNode;
    email: string;
};
export default function SidenavFooterMenu({ email, kcUrl, signOutFn, avatar, userDisplayName }: DropdownProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=SidenavFooterMenu.d.ts.map