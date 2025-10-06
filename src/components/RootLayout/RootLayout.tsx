import React, { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import Sidenav from '../sidenav';
import ThemeProvider from '@/providers/ThemeProvider';
import { AppInfo, SidebarItem, UserInfo } from '../sidenav/Sidenav';

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
	dynamicNav?: {
		getProjectNav?: ProjectNavFn;
		getOrgNav?: OrgNavFn;
		getEnvironmentNav?: EnvNavFn;
	};
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
	dynamicNav,
}: RootLayoutProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<SidebarProvider defaultOpen>
				<Sidenav {...{ userInfo, appInfo, signOutFn, currentPath, dynamicNav }} />

				<main className="flex-1 mx-[16px]">
					<SidebarTrigger />
					{children}
				</main>
			</SidebarProvider>
		</ThemeProvider>
	);
}
