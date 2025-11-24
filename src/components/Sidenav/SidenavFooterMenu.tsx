'use client';
import React, { ReactNode } from 'react';
import { ChevronsUpDown, LifeBuoy, LogOut, UserRoundCog } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { SidebarMenuButton } from '../ui/sidebar';
import { useLinkComponent } from '@/providers/NextLinkProvider';
import { AppInfo } from './Sidenav';
import * as process from 'node:process';

type DropdownProps = AppInfo & { signOutFn: () => Promise<void>; avatar: ReactNode, userDisplayName: ReactNode };

export default function SidenavFooterMenu({ kcUrl, signOutFn, avatar, userDisplayName }: DropdownProps) {

	const Link = useLinkComponent();
	let documentationUrl = 'https://docs.lagoon.sh/';

	if (process?.env?.SPARTEZ_SUPPORT_KEY) {
		documentationUrl = 'https://docs.amazee.io/';
	}

	const renderAvatar = () => {

		if (avatar) {
			return (
				<>
					{avatar}
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-medium">{userDisplayName}</span>
						<span className="truncate font-light text-xs">email@example.com</span>
					</div>
				</>
			)
		}
	};

	return (
		<DropdownMenu modal={false}>
			<section className="flex items-center gap-1 pl-1">
				<DropdownMenuTrigger className="w-full">
					<SidebarMenuButton size="lg" className="w-full">
							{renderAvatar()}
						<ChevronsUpDown className="ml-auto h-4 w-4" />
					</SidebarMenuButton>
				</DropdownMenuTrigger>
			</section>
			<DropdownMenuContent className="w-56" align="start" side="top" sideOffset={4}>
				<DropdownMenuItem asChild>
					<Link href={documentationUrl} target="_blank">
						<LifeBuoy className="mr-2 h-4 w-4" />
						Documentation
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={`${kcUrl}/account`} target="_blank">
					<UserRoundCog className="mr-2 h-4 w-4" />
					My Account
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild onClick={() => signOutFn()}>
					<div onClick={() => signOutFn()} className="flex items-center w-full cursor-pointer">
						<LogOut className="mr-2 h-4 w-4" />
						Sign Out
					</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
