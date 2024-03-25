import React from 'react';
import { ThemeObject } from '../typings/styled';
interface Props {
    children: React.ReactNode;
    darkThemeProp?: ThemeObject;
    lightThemeProp?: ThemeObject;
    defaultScheme?: 'dark' | 'light';
}
declare const UIThemeProvider: ({ children, darkThemeProp, lightThemeProp, defaultScheme }: Props) => import("react/jsx-runtime").JSX.Element;
export default UIThemeProvider;
