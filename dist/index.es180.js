import "./index.es161.js";
import { getSolidColor as t, getAlphaColor as e } from "./index.es251.js";
import a from "./index.es164.js";
const s = (c) => {
  const o = a(c);
  return {
    1: o[0],
    2: o[1],
    3: o[2],
    4: o[3],
    5: o[4],
    6: o[5],
    7: o[6],
    8: o[4],
    9: o[5],
    10: o[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, B = (c, o) => {
  const l = c || "#fff", r = o || "#000";
  return {
    colorBgBase: l,
    colorTextBase: r,
    colorText: e(r, 0.88),
    colorTextSecondary: e(r, 0.65),
    colorTextTertiary: e(r, 0.45),
    colorTextQuaternary: e(r, 0.25),
    colorFill: e(r, 0.15),
    colorFillSecondary: e(r, 0.06),
    colorFillTertiary: e(r, 0.04),
    colorFillQuaternary: e(r, 0.02),
    colorBgLayout: t(l, 4),
    colorBgContainer: t(l, 0),
    colorBgElevated: t(l, 0),
    colorBgSpotlight: e(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: t(l, 15),
    colorBorderSecondary: t(l, 6)
  };
};
export {
  s as generateColorPalettes,
  B as generateNeutralColorPalettes
};
