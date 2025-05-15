import React from 'react';
type Theme = 'dark' | 'light';
declare const useTheme: () => any;
export declare const AppThemeProvider: ({ defaultScheme, children }: {
    defaultScheme?: Theme;
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default useTheme;
