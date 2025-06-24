import { rgbToRgb as A, hsvToRgb as F, hslToRgb as R, convertHexToDecimal as p, parseIntFromHex as n } from "./index.es260.js";
import { names as S } from "./index.es261.js";
import { convertToPercentage as x, boundAlpha as E } from "./index.es262.js";
function d(a) {
  var t = { r: 0, g: 0, b: 0 }, e = 1, h = null, v = null, u = null, g = !1, i = !1;
  return typeof a == "string" && (a = I(a)), typeof a == "object" && (f(a.r) && f(a.g) && f(a.b) ? (t = A(a.r, a.g, a.b), g = !0, i = String(a.r).substr(-1) === "%" ? "prgb" : "rgb") : f(a.h) && f(a.s) && f(a.v) ? (h = x(a.s), v = x(a.v), t = F(a.h, h, v), g = !0, i = "hsv") : f(a.h) && f(a.s) && f(a.l) && (h = x(a.s), u = x(a.l), t = R(a.h, h, u), g = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(a, "a") && (e = a.a)), e = E(e), {
    ok: g,
    format: a.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: e
  };
}
var T = "[-\\+]?\\d+%?", M = "[-\\+]?\\d*\\.\\d+%?", s = "(?:".concat(M, ")|(?:").concat(T, ")"), m = "[\\s|\\(]+(".concat(s, ")[,|\\s]+(").concat(s, ")[,|\\s]+(").concat(s, ")\\s*\\)?"), b = "[\\s|\\(]+(".concat(s, ")[,|\\s]+(").concat(s, ")[,|\\s]+(").concat(s, ")[,|\\s]+(").concat(s, ")\\s*\\)?"), r = {
  CSS_UNIT: new RegExp(s),
  rgb: new RegExp("rgb" + m),
  rgba: new RegExp("rgba" + b),
  hsl: new RegExp("hsl" + m),
  hsla: new RegExp("hsla" + b),
  hsv: new RegExp("hsv" + m),
  hsva: new RegExp("hsva" + b),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function I(a) {
  if (a = a.trim().toLowerCase(), a.length === 0)
    return !1;
  var t = !1;
  if (S[a])
    a = S[a], t = !0;
  else if (a === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var e = r.rgb.exec(a);
  return e ? { r: e[1], g: e[2], b: e[3] } : (e = r.rgba.exec(a), e ? { r: e[1], g: e[2], b: e[3], a: e[4] } : (e = r.hsl.exec(a), e ? { h: e[1], s: e[2], l: e[3] } : (e = r.hsla.exec(a), e ? { h: e[1], s: e[2], l: e[3], a: e[4] } : (e = r.hsv.exec(a), e ? { h: e[1], s: e[2], v: e[3] } : (e = r.hsva.exec(a), e ? { h: e[1], s: e[2], v: e[3], a: e[4] } : (e = r.hex8.exec(a), e ? {
    r: n(e[1]),
    g: n(e[2]),
    b: n(e[3]),
    a: p(e[4]),
    format: t ? "name" : "hex8"
  } : (e = r.hex6.exec(a), e ? {
    r: n(e[1]),
    g: n(e[2]),
    b: n(e[3]),
    format: t ? "name" : "hex"
  } : (e = r.hex4.exec(a), e ? {
    r: n(e[1] + e[1]),
    g: n(e[2] + e[2]),
    b: n(e[3] + e[3]),
    a: p(e[4] + e[4]),
    format: t ? "name" : "hex8"
  } : (e = r.hex3.exec(a), e ? {
    r: n(e[1] + e[1]),
    g: n(e[2] + e[2]),
    b: n(e[3] + e[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function f(a) {
  return !!r.CSS_UNIT.exec(String(a));
}
export {
  d as inputToRGB,
  f as isValidCSSUnit,
  I as stringInputToObject
};
