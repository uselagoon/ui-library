import { AppInfo } from './Sidenav';
type DropdownProps = AppInfo & {
    signOutFn: () => Promise<void>;
    isCollapsed?: boolean;
};
export default function SidenavDropdown({ name, version, signOutFn, isCollapsed }: DropdownProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=SidenavDropdown.d.ts.map