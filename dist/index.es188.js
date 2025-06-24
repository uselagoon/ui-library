import "./index.es92.js";
import "./index.es93.js";
import "react";
import "./index.es94.js";
import { unit as y } from "./index.es185.js";
import "./index.es98.js";
import "./index.es99.js";
import "./index.es100.js";
import "./index.es96.js";
import "./index.es95.js";
import "./index.es97.js";
import "./index.es101.js";
function L(c) {
  const {
    sizePopupArrow: h,
    borderRadiusXS: r,
    borderRadiusOuter: t
  } = c, o = h / 2, e = 0, n = o, s = t * 1 / Math.sqrt(2), a = o - t * (1 - 1 / Math.sqrt(2)), p = o - r * (1 / Math.sqrt(2)), d = t * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), u = 2 * o - p, $ = d, m = 2 * o - s, l = a, w = 2 * o - e, b = n, g = o * Math.sqrt(2) + t * (Math.sqrt(2) - 2), i = t * (Math.sqrt(2) - 1), x = `polygon(${i}px 100%, 50% ${i}px, ${2 * o - i}px 100%, ${i}px 100%)`, f = `path('M ${e} ${n} A ${t} ${t} 0 0 0 ${s} ${a} L ${p} ${d} A ${r} ${r} 0 0 1 ${u} ${$} L ${m} ${l} A ${t} ${t} 0 0 0 ${w} ${b} Z')`;
  return {
    arrowShadowWidth: g,
    arrowPath: f,
    arrowPolygon: x
  };
}
const O = (c, h, r) => {
  const {
    sizePopupArrow: t,
    arrowPolygon: o,
    arrowPath: e,
    arrowShadowWidth: n,
    borderRadiusXS: s,
    calc: a
  } = c;
  return {
    pointerEvents: "none",
    width: t,
    height: t,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: t,
      height: a(t).div(2).equal(),
      background: h,
      clipPath: {
        _multi_value_: !0,
        value: [o, e]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: n,
      height: n,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${y(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
};
export {
  O as genRoundedArrow,
  L as getArrowToken
};
