import React, { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import Sidenav from '../sidenav';
import ThemeProvider from '@/providers/ThemeProvider';
import { AppInfo, UserInfo } from '../sidenav/Sidenav';

interface RootLayoutProps {
	userInfo: UserInfo;
	appInfo: AppInfo;
	children: ReactNode;
	signOutFn: () => Promise<void>;
}

//**
// Root layout wrapping the whole app with the side navigation
// */

export default function RootLayout({ userInfo, appInfo, signOutFn, children }: RootLayoutProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<SidebarProvider defaultOpen>
				<Sidenav {...{ userInfo, appInfo, signOutFn }} />

				<main className="w-fit">
					<SidebarTrigger />
					{children}
				</main>
			</SidebarProvider>
		</ThemeProvider>
	);
}
