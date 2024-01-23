const colors = {
  lagoonBlue: "#4578E6",
  buttons: {
    primary: {
      default: "#4578E6",
      hover: "#4578e6bf",
      active: "#184CBC",
    },
    secondary: {
      default: "#1B8784",
      hover: "#1b8784bf",
      active: "#093C3B",
    },
  },
  texts: {
    primary: {
      light: "#222222",
      dark: "#fff",
    },
    secondary:{
      light:"#00000073",
      dark:"#75715E"
    }
  },
  darkGray: "#272822",
  cellGray: "#868686",
  lighterGray:"#282828",
  orange: "#FD971F",
  lightOrange: "#E69F66",
  blue: "#66D9EF",
  white: "#F8F8F2",
  purple: "#AE81FF",
  gray: "#75715E",
  yellow: "#E6DB74",
  pink: "#F92672",
  green: "#A6E22E",
} as const;

Object.freeze(colors);

export default colors;
