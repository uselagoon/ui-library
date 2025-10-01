import React, { Fragment, useMemo } from 'react';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '../ui/sidebar';
import { BriefcaseBusiness, KeyRound, ServerCog, FolderGit2, UserRoundCog, ListChecks } from 'lucide-react';
import SidenavDropdown from './SidenavDropdown';
import { genAvatarBackground, getCurrentPath } from '@/_util/helpers';

import { Avatar, AvatarImage } from '../ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import AvatarBubble from '../AvatarBubble/AvatarBubble';
import { useLinkComponent } from '@/providers/NextLinkProvider';

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

export type EnvNavFn = (projectSlug: string, environmentSlug: string) => SidebarItem[];

export type ProjectNavFn = (
	projectSlug: string,
	environmentSlug?: string,
	getEnvironmentNav?: EnvNavFn,
) => SidebarItem[];

export type OrgNavFn = (orgSlug: string) => SidebarItem[];

export type SidenavProps = SidebarProps & {
	userInfo: UserInfo;
	appInfo: AppInfo;
	dynamicNav?: {
		getProjectNav?: ProjectNavFn;
		getOrgNav?: OrgNavFn;
		getEnvironmentNav?: EnvNavFn;
	};
	signOutFn: () => Promise<void>;
	currentPath: string;
};
export type NavItems = ReturnType<typeof getSidenavItems>;

export type SidebarItem = {
	title: string;
	url: string;
	icon?: React.ComponentType<any>;
	target?: string;
	onClick?: () => void;
	children?: SidebarItem[];
};

export type SidebarSection = {
	section: string;
	sectionItems: SidebarItem[];
};

export const getSidenavItems = (
	kcUrl: string,
	pathname: string,
	dynamicNav?: {
		getProjectNav?: ProjectNavFn;
		getOrgNav?: OrgNavFn;
		getEnvironmentNav?: EnvNavFn;
	},
): SidebarSection[] => {
	const projectMatch = pathname.match(/^\/projects\/([^/]+)/);
	const envMatch = pathname.match(/^\/projects\/([^/]+)\/([^/]+)/);
	const orgMatch = pathname.match(/^\/organizations\/([^/]+)/);

	const projectSlug = projectMatch?.[1];
	const environmentSlug = envMatch?.[2];
	const orgSlug = orgMatch?.[1];

	return [
		{
			section: 'Projects',
			sectionItems: [
				{
					title: 'Projects',
					url: '/projects',
					icon: FolderGit2,
					children:
						projectSlug && dynamicNav?.getProjectNav
							? dynamicNav.getProjectNav(projectSlug, environmentSlug, dynamicNav.getEnvironmentNav)
							: undefined,
				},
			],
		},
		{
			section: 'Deployments',
			sectionItems: [
				{
					title: 'Active Deployments',
					url: '/alldeployments',
					icon: ServerCog,
				},
			],
		},
		{
			section: 'Organizations',
			sectionItems: [
				{
					title: 'Organizations',
					url: '/organizations',
					icon: BriefcaseBusiness,
					children: orgSlug && dynamicNav?.getOrgNav ? dynamicNav.getOrgNav(orgSlug) : undefined,
				},
			],
		},
		{
			section: 'Settings',
			sectionItems: [
				{
					title: 'SSH Keys',
					url: '/settings',
					icon: KeyRound,
				},
				{
					title: 'Preferences',
					url: '/settings/preferences',
					icon: ListChecks,
				},
				{
					title: 'My Account',
					url: `${kcUrl}/account`,
					target: 'blank',
					onClick: () => {},
					icon: UserRoundCog,
				},
			],
		},
	];
};

export default function Sidenav({ userInfo, appInfo, currentPath, dynamicNav, signOutFn, ...props }: SidenavProps) {
	const Link = useLinkComponent();

	const { name, image, email } = userInfo;

	const userImageExists = !!image;

	const nameParts = name?.split(' ') ?? [];
	const firstName = nameParts[0] ?? undefined;
	const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ' ';

	const firstLastProvided = !!(firstName && lastName);

	const avatarBg = firstLastProvided
		? genAvatarBackground(firstName.charAt(0), lastName.charAt(0))
		: genAvatarBackground(email.charAt(0), email.charAt(1));

	const avatarInitials = firstLastProvided
		? firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
		: email.charAt(0).toUpperCase();

	// show img + firstname lastnamea
	// or avatarbg + firstname lastname
	// or genericImage + user email

	const avatarToUse = userImageExists ? (
		<Avatar>
			<AvatarImage src={image} alt="user_avatar" />
			<AvatarFallback>Avatar</AvatarFallback>
		</Avatar>
	) : (
		<AvatarBubble bgColor={avatarBg.bgColor} textColor={avatarBg.textColor}>
			{avatarInitials}
		</AvatarBubble>
	);

	const userDisplayName = firstLastProvided ? (
		<span className="user-name">{`${firstName} ${lastName}`}</span>
	) : (
		<span className="user-name">{email}</span>
	);

	const sidenavItems = useMemo(() => {
		return getSidenavItems(appInfo.kcUrl, currentPath, dynamicNav);
	}, [appInfo.kcUrl, currentPath, dynamicNav]);

	const activePath = useMemo(() => getCurrentPath(sidenavItems, currentPath || ''), [sidenavItems, currentPath]);

	const { state } = useSidebar();
	const isCollapsed = state === 'collapsed';
	const sidenavProps = { ...appInfo, signOutFn, isCollapsed };
	return (
		<Sidebar
			variant="sidebar"
			collapsible="icon"
			{...props}
			className="w-[clamp(0px,20vw,256px)] transition-all overflow-hidden"
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidenavDropdown {...sidenavProps} />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				{sidenavItems.map((navItem) => {
					return (
						<SidebarGroup key={navItem.section}>
							<SidebarGroupLabel>{navItem.section}</SidebarGroupLabel>
							<SidebarGroupContent className="list-none">
								{navItem.sectionItems.map((sectionItem) => {
									const newTab = sectionItem.target === 'blank';
									const action = sectionItem?.onClick;
									return (
										<Fragment>
											<SidebarMenuItem key={sectionItem.title}>
												<SidebarMenuButton asChild isActive={activePath === sectionItem.url}>
													<Link
														data-cy={`nav-${sectionItem.url.slice(1)}`}
														onClick={async () => {
															action && (await action());
														}}
														href={sectionItem.url}
														target={newTab ? '_blank' : '_self'}
													>
														{sectionItem.icon && <sectionItem.icon />}
														<span>{sectionItem.title}</span>
													</Link>
												</SidebarMenuButton>
											</SidebarMenuItem>
											{sectionItem.children && (
												<ul className="ml-4">
													{sectionItem.children.map((child) => (
														<SidebarMenuItem key={child.title}>
															<SidebarMenuButton asChild isActive={activePath === child.url}>
																<Link href={child.url}>
																	<span>{child.title}</span>
																</Link>
															</SidebarMenuButton>
														</SidebarMenuItem>
													))}
												</ul>
											)}
										</Fragment>
									);
								})}
							</SidebarGroupContent>
						</SidebarGroup>
					);
				})}
			</SidebarContent>

			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg">
							{avatarToUse}
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-light">{userDisplayName}</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
