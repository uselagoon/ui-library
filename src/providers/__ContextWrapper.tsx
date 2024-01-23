import { AppThemeProvider } from "../hooks/useTheme";

import React from "react";

import { ThemeObject } from "../typings/styled";

import InternalThemeProvider from "./ThemeProvider";

interface Props {
  children: React.ReactNode;
  darkThemeProp?: ThemeObject;
  lightThemeProp?: ThemeObject;
}
const UIThemeProvider = ({
  children,
  darkThemeProp,
  lightThemeProp,
}: Props) => {
  return (
    <AppThemeProvider>
      <InternalThemeProvider
        darkThemeProp={darkThemeProp || undefined}
        lightThemeProp={lightThemeProp || undefined}
      >
        {children}
      </InternalThemeProvider>
    </AppThemeProvider>
  );
};

export default UIThemeProvider;
