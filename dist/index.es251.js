import { TinyColor as n } from "./index.es165.js";
const i = (o, t) => new n(o).setAlpha(t).toRgbString(), l = (o, t) => new n(o).darken(t).toHexString();
export {
  i as getAlphaColor,
  l as getSolidColor
};
