import { ReactNode } from 'react';
import { AppInfo } from './Sidenav';
type DropdownProps = AppInfo & {
    signOutFn: () => Promise<void>;
    avatar: ReactNode;
    userDisplayName: ReactNode;
};
export default function SidenavFooterMenu({ kcUrl, signOutFn, avatar, userDisplayName }: DropdownProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=SidenavFooterMenu.d.ts.map