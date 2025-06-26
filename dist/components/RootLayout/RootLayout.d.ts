import { ReactNode } from 'react';
import { AppInfo, UserInfo } from '../sidenav/Sidenav';
interface RootLayoutProps {
    userInfo: UserInfo;
    appInfo: AppInfo;
    children: ReactNode;
    signOutFn: () => Promise<void>;
}
export default function RootLayout({ userInfo, appInfo, signOutFn, children }: RootLayoutProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=RootLayout.d.ts.map