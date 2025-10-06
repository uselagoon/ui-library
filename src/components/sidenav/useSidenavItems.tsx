import { useEffect, useState } from 'react';
import { SidebarSection } from './Sidenav';
import { BriefcaseBusiness, FolderGit2, KeyRound, ListChecks, ServerCog, UserRoundCog } from 'lucide-react';

const getBaseSidenavItems = (kcUrl: string): SidebarSection[] => [
	{
		section: 'Projects',
		sectionItems: [{ title: 'Projects', url: '/projects', icon: FolderGit2 }],
	},
	{
		section: 'Deployments',
		sectionItems: [{ title: 'Active Deployments', url: '/alldeployments', icon: ServerCog }],
	},
	{
		section: 'Organizations',
		sectionItems: [{ title: 'Organizations', url: '/organizations', icon: BriefcaseBusiness }],
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

export function useSidenavItems(
	appInfo: { kcUrl: string },
	currentPath: string,
	dynamicNav?: {
		getProjectNav?: (projectSlug: string, environmentSlug?: string, getEnvironmentNav?: any) => Promise<any[]>;
		getEnvironmentNav?: (projectSlug: string, envSlug: string) => Promise<any[]>;
		getOrgNav?: (orgSlug: string) => Promise<any[]>;
	},
) {
	const [sidenavItems, setSidenavItems] = useState(() => getBaseSidenavItems(appInfo.kcUrl));

	useEffect(() => {
		const projectMatch = currentPath.match(/^\/projects\/([^/]+)/);
		const envMatch = currentPath.match(/^\/projects\/([^/]+)\/([^/]+)/);
		const orgMatch = currentPath.match(/^\/organizations\/([^/]+)/);

		const projectSlug = projectMatch?.[1];
		const environmentSlug = envMatch?.[2];
		const orgSlug = orgMatch?.[1];

		(async () => {
			const items = getBaseSidenavItems(appInfo.kcUrl);

			if (projectSlug && dynamicNav?.getProjectNav) {
				const projectChildren = await dynamicNav.getProjectNav(
					projectSlug,
					environmentSlug,
					dynamicNav.getEnvironmentNav,
				);
				items[0].sectionItems[0].children = projectChildren;
			}

			if (orgSlug && dynamicNav?.getOrgNav) {
				const orgChildren = await dynamicNav.getOrgNav(orgSlug);
				items[2].sectionItems[0].children = orgChildren;
			}

			setSidenavItems(items);
		})();
	}, [appInfo.kcUrl, currentPath, dynamicNav]);

	return sidenavItems;
}
