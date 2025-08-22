'use client';
import React from 'react';
import { ChevronsUpDown, LogOut, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { SidebarMenuButton } from '../ui/sidebar';
import LagoonIcon from '../../icons/lagoon.svg';
import { useLinkComponent } from '@/providers/NextLinkProvider';
import { AppInfo } from './Sidenav';
import { useSyncTheme } from '@/hooks/useSyncTheme';

type DropdownProps = AppInfo & { signOutFn: () => Promise<void> };

export default function SidenavDropdown({ name, version, logo, signOutFn }: DropdownProps) {
	const { setTheme, theme, systemTheme } = useTheme();

	useSyncTheme();

	const Link = useLinkComponent();

	const handleToggleTheme = (theme: 'light' | 'dark') => {
		setTheme(theme);
		window.dispatchEvent(new Event('storage'));
	};

	const darkSwitcher = (
		<DropdownMenuItem onClick={() => handleToggleTheme('light')}>
			<Sun className="mr-2 h-4 w-4" />
			Light
		</DropdownMenuItem>
	);

	const lightSwitcher = (
		<DropdownMenuItem onClick={() => handleToggleTheme('dark')}>
			<Moon className="mr-2 h-4 w-4" />
			Dark
		</DropdownMenuItem>
	);
	const renderThemeSwitcher = () => {
		if (theme === 'dark' || (theme === 'system' && systemTheme === 'dark')) return darkSwitcher;

		return lightSwitcher;
	};
	return (
		<DropdownMenu>
			<section className="flex items-center gap-1 pl-2">
				<div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
					<Link href="/projects">{logo ? logo : <img src={LagoonIcon} className="size-8" />}</Link>
				</div>
				<DropdownMenuTrigger className="w-full">
					<SidebarMenuButton
						size="lg"
						className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-semibold">{name}</span>
							<span className="truncate text-xs">{version}</span>
						</div>

						<ChevronsUpDown className="ml-auto h-4 w-4" />
					</SidebarMenuButton>
				</DropdownMenuTrigger>
			</section>
			<DropdownMenuContent className="w-56" align="start" side="right" sideOffset={4} style={{ zIndex: 9999 }}>
				{renderThemeSwitcher()}
				<DropdownMenuItem onClick={() => signOutFn()}>
					<LogOut className="mr-2 h-4 w-4" />
					Sign Out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
