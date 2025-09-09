'use client';
import React, { useEffect, useState } from 'react';
import { ChevronsUpDown, LogOut, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { SidebarMenuButton } from '../ui/sidebar';
import LagoonIcon from '../../icons/sidebar/lagoon.svg';
import { useLinkComponent } from '@/providers/NextLinkProvider';
import { AppInfo } from './Sidenav';
import { useSyncTheme } from '@/hooks/useSyncTheme';

type DropdownProps = AppInfo & { signOutFn: () => Promise<void>; isCollapsed?: boolean };

export default function SidenavDropdown({ name, version, signOutFn, isCollapsed = false }: DropdownProps) {
	const { setTheme, theme, systemTheme } = useTheme();
	const [fallback, setFallback] = useState(false);

	useSyncTheme();

	const Link = useLinkComponent();

	useEffect(() => {
		setFallback(false);
	}, [isCollapsed, theme]);

	const getLogos = () => {
		const iconFolder = '/sidebar-icons';

		if (isCollapsed) {
			return `${iconFolder}/logo-${theme}-collapsed.svg`;
		} else {
			return `${iconFolder}/logo-${theme}.svg`;
		}
	};

	const renderLogo = () => {
		const logoPath = getLogos();

		if (!logoPath.includes('undefined'))
			return (
				<img
					src={logoPath}
					className={`object-contain ${isCollapsed ? 'w-100' : 'h-18'}`}
					onLoad={(e) => {
						const targetLogo = e.currentTarget;
						if (!fallback && targetLogo.src !== LagoonIcon) {
							targetLogo.className = `object-contain ${isCollapsed ? 'w-100' : 'h-18'}`;
						}
					}}
					onError={(e) => {
						// Sets the lagoon logo as a fallback if no sidebar-icons defined
						setFallback(true);
						const targetLogo = e.currentTarget;
						targetLogo.src = LagoonIcon;
						targetLogo.className = 'size-10';
					}}
				/>
			);
	};

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
			<section className="flex items-center gap-1 pl-1">
				<div
					className={`flex aspect-square items-center justify-center rounded-lg text-sidebar-primary-foreground ${isCollapsed ? 'size-8' : fallback ? 'size-10' : 'size-18'}`}
				>
					<Link href="/projects">{renderLogo()}</Link>
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
