import React from "react";
import { ThemeObject } from "../typings/styled";
interface Props {
    children: React.ReactNode;
    darkThemeProp?: ThemeObject;
    lightThemeProp?: ThemeObject;
}
declare const UIThemeProvider: ({ children, darkThemeProp, lightThemeProp, }: Props) => import("react/jsx-runtime").JSX.Element;
export default UIThemeProvider;
