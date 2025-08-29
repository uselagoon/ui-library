import React, { useMemo } from 'react';
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

export type SidenavProps = SidebarProps & {
	userInfo: UserInfo;
	appInfo: AppInfo;
	signOutFn: () => Promise<void>;
	currentPath?: string;
};
export type NavItems = ReturnType<typeof getSidenavItems>;

const getSidenavItems = (kcUrl: string, signOutFn: () => Promise<void>) => [
	{
		section: 'Projects',
		sectionItems: [
			{
				title: 'All Projects',
				url: '/projects',
				icon: FolderGit2,
			},
			{
				title: 'All Deployments',
				url: '/alldeployments',
				icon: ServerCog,
			},
		],
	},
	{
		section: 'Organizations',
		sectionItems: [
			{
				title: 'All Organizations',
				url: '/organizations',
				icon: BriefcaseBusiness,
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

export default function Sidenav({ userInfo, appInfo, currentPath, signOutFn, ...props }: SidenavProps) {
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
		return getSidenavItems(appInfo.kcUrl, signOutFn);
	}, [appInfo.kcUrl, signOutFn]);

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
													<sectionItem.icon />
													<span>{sectionItem.title}</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
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
