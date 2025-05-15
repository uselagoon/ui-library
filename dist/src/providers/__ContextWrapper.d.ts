import React from 'react';
interface Props {
    children: React.ReactNode;
    defaultScheme?: 'dark' | 'light';
}
declare const UIThemeProvider: ({ children, defaultScheme }: Props) => import("react/jsx-runtime").JSX.Element;
export default UIThemeProvider;
