import colors from "../_util/colors";
import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  colorScheme: "dark",
  UI: {
    backgrounds: {
      primary: "#0E1117",
      secondary: "#151922",
    },
    texts: {
      primary: colors.texts.primary.dark,
      label: "#dee2e5",
      secondary: colors.texts.secondary.dark,
    },
    borders: {},
    highlights: {
      selection: "#f6f9ff",
    },
  },
};

export const lightTheme: DefaultTheme = {
  colorScheme: "light",
  UI: {
    backgrounds: {
      primary: "#101010",
      secondary: "#fff",
    },
    texts: {
      primary: colors.texts.primary.light,
      label: "#555",
      secondary: colors.texts.secondary.dark,
    },
    borders: {},
    highlights: {
      selection: "#497ffa4d",
    },
  },
};
