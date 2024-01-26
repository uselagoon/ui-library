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
      input:string;
      modal: string;
      dataCard;
    };
    texts: {
      primary: string;
      label: string;
      secondary:string;
    };
    highlights: {
      selection: string;
    };
    borders: {
      box: string;
    };
    notification:string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends UITheme {}
}
