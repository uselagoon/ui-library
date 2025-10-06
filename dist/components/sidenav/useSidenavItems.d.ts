import { SidebarSection } from './Sidenav';
export declare function useSidenavItems(appInfo: {
    kcUrl: string;
}, currentPath: string, dynamicNav?: {
    getProjectNav?: (projectSlug: string, environmentSlug?: string, getEnvironmentNav?: any) => Promise<any[]>;
    getEnvironmentNav?: (projectSlug: string, envSlug: string) => Promise<any[]>;
    getOrgNav?: (orgSlug: string) => Promise<any[]>;
}): SidebarSection[];
//# sourceMappingURL=useSidenavItems.d.ts.map