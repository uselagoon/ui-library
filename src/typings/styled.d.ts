import "styled-components";

export interface ThemeObject {
  [key: string]: string | ThemeObject;
}
export interface UITheme {
  colorScheme: "dark" | "light";
  UI: {
    backgrounds: {
      primary: string;
      secondary: string;
    };
    texts: {
      primary: string;
      label: string;
      secondary:string;
    };
    highlights: {
      selection: string;
    };
    borders: {};
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends UITheme {}
}
