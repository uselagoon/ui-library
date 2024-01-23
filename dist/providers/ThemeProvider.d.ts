import React from "react";
import { ThemeObject } from "../typings/styled";
interface Props {
    children: React.ReactNode;
    darkThemeProp: ThemeObject | undefined;
    lightThemeProp: ThemeObject | undefined;
}
declare const InternalThemeProvider: ({ children, darkThemeProp, lightThemeProp, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default InternalThemeProvider;
