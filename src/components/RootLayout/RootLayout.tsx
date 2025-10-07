import React, { ReactNode } from 'react';
import { SidebarProvider } from '../ui/sidebar';
import Sidenav from '../sidenav';
import ThemeProvider from '@/providers/ThemeProvider';
import { AppInfo, SidebarItem, SidebarSection, UserInfo } from '../sidenav/Sidenav';

export type EnvNavFn = (projectSlug: string, environmentSlug: string) => Promise<SidebarItem[]>;

export type OrgNavFn = (orgSlug: string) => Promise<SidebarItem[]>;

export type ProjectNavFn = (
	projectSlug: string,
	environmentSlug?: string,
	getEnvironmentNav?: EnvNavFn,
) => Promise<SidebarItem[]>;

interface RootLayoutProps {
	userInfo: UserInfo;
	appInfo: AppInfo;
	sidenavItems: SidebarSection[];
	children: ReactNode;
	signOutFn: () => Promise<void>;
	currentPath: string;
}

//**
// Root layout wrapping the whole app with the side navigation
// */

export default function RootLayout({
	userInfo,
	appInfo,
	signOutFn,
	currentPath,
	children,
	sidenavItems,
}: RootLayoutProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<SidebarProvider defaultOpen>
				<Sidenav {...{ userInfo, appInfo, signOutFn, currentPath, sidenavItems }} />

				<main className="flex-1 mx-[16px]">{children}</main>
			</SidebarProvider>
		</ThemeProvider>
	);
}
