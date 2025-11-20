'use client';
import React, { ReactNode, useState } from 'react';
import { useTheme } from 'next-themes';
import LagoonIcon from '../../icons/sidebar/logo-dark.svg';
import { useLinkComponent } from '@/providers/NextLinkProvider';
import { useSyncTheme } from '@/hooks/useSyncTheme';


export default function SidenavLogo({ isCollapsed = false, }: { isCollapsed?: boolean; avatar?: ReactNode; userDisplayName?: ReactNode }) {
	const { theme } = useTheme();
	const [fallback, setFallback] = useState(false);

	useSyncTheme();

	const Link = useLinkComponent();

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

			return (
				<img
					src={!logoPath.includes('undefined') ? logoPath : LagoonIcon}
					alt="Logo"
				/>
			);
	};

	return (
		<>
			<section className="flex items-center gap-1 pl-1">
				<div className={`aspect-square min-w-[280px] max-h-[50px] rounded-lg text-sidebar-primary-foreground ${isCollapsed ? 'size-8' : fallback ? 'size-10' : 'size-16'}`}>
					<Link href="/projects" className="w-auto h-auto">{renderLogo()}</Link>
				</div>
			</section>
		</>
	);
}
