import { AppInfo } from './Sidenav';
type DropdownProps = AppInfo & {
    signOutFn: () => Promise<void>;
};
export default function SidenavDropdown({ name, version, logo, signOutFn }: DropdownProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=SidenavDropdown.d.ts.map