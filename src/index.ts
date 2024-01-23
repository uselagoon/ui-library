// config/providers
export { default as Colors } from "./_util/colors";

export { default as GlobalStyles } from "./providers/GlobalStyles";

export { default as useTheme } from "./hooks/useTheme";

export { default as UIThemeProvider } from "./providers/__ContextWrapper";

// components
export { default as UIButton } from "./components/Button";
export type { UIButtonProps } from "./components/Button";

export type { UIHeadingProps } from "./components/Heading";

export type { UITextType } from "./components/Text";
export type { UITextLabelType } from "./components/TextLabel";

export { default as UIText } from "./components/Text";
export { default as UITextLabel } from "./components/TextLabel";

export { default as UIHead1 } from "./components/Heading/H1";

export { default as UIHead2 } from "./components/Heading/H2";

export { default as UIHead3 } from "./components/Heading/H3";

export { default as UIHead4 } from "./components/Heading/H4";

export { default as UIHead5 } from "./components/Heading/H5";

export { default as UIList } from "./components/List";
export type { UIListType } from "./components/List";

export { default as UICollapse } from "./components/Collapse";
export type { UICollapseType } from "./components/Collapse";

export { default as UIDetails } from "./components/Details";
export type { UIDetailsType } from "./components/Details";

export { default as UISwitch } from "./components/Switch";
export type { UISwitchProps } from "./components/Switch";

export { default as UICheckbox } from "./components/Checkbox";
export type { UICheckboxProps } from "./components/Checkbox";

export { default as UISelect } from "./components/Select";
export type { UISelectProps } from "./components/Select";

export { default as UItabs } from "./components/Tabs";
export type { UITabsProps } from "./components/Tabs";

export { default as UIBreadcrumb } from "./components/Breadcrumb";
export type { UIBreadcrumbProps } from "./components/Breadcrumb";

export { default as UISteps } from "./components/Steps";
export type { UIStepsProps } from "./components/Steps";

export {
  IconAim,
  IconAlert,
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconApartment,
  IconApi,
  IconAppstore,
} from "./components/Icons/index";
