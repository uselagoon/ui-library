import colors from "../_util/colors";
import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  colorScheme: "dark",
  UI: {
    backgrounds: {
      primary: "#0E1117",
      secondary: "#151922",
      input: colors.backgrounds.primary.dark,
      modal: colors.backgrounds.primary.dark,
      dataCard: colors.darkGray,
      selection: colors.gray,
      lagoonCard: colors.backgrounds.primary.dark,
      footer: colors.backgrounds.primary.light,
      header: "#222",
    },
    texts: {
      primary: colors.texts.primary.dark,
      label: "#dee2e5",
      secondary: colors.texts.secondary.dark,
      timeline:colors.texts.timeline.light
    },
    borders: {
      box: "#D9D9D9",
      card:"#fff",
    },
    highlights: {
      selection: "#f6f9ff",
    },
    notification: colors.backgrounds.primary.dark,
  },
};

export const lightTheme: DefaultTheme = {
  colorScheme: "light",
  UI: {
    backgrounds: {
      primary: "#101010",
      secondary: "#fff",
      input: colors.backgrounds.primary.light,
      modal: colors.backgrounds.primary.light,
      dataCard: colors.gray,
      selection: "#e6f4ff",
      lagoonCard: colors.backgrounds.primary.light,
      footer: colors.backgrounds.primary.dark,
      header: "#fff",
    },
    texts: {
      primary: colors.texts.primary.light,
      label: "#555",
      secondary: colors.texts.secondary.dark,
      timeline:colors.texts.timeline.dark
    },
    borders: {
      box: "#75715E",
      card:colors.darkGray,
    },
    highlights: {
      selection: "#497ffa4d",
    },
    notification: colors.backgrounds.primary.light,
  },
};
