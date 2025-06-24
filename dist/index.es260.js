import { bound01 as u, pad2 as f } from "./index.es262.js";
function T(t, a, r) {
  return {
    r: u(t, 255) * 255,
    g: u(a, 255) * 255,
    b: u(r, 255) * 255
  };
}
function g(t, a, r) {
  t = u(t, 255), a = u(a, 255), r = u(r, 255);
  var i = Math.max(t, a, r), e = Math.min(t, a, r), n = 0, c = 0, o = (i + e) / 2;
  if (i === e)
    c = 0, n = 0;
  else {
    var h = i - e;
    switch (c = o > 0.5 ? h / (2 - i - e) : h / (i + e), i) {
      case t:
        n = (a - r) / h + (a < r ? 6 : 0);
        break;
      case a:
        n = (r - t) / h + 2;
        break;
      case r:
        n = (t - a) / h + 4;
        break;
    }
    n /= 6;
  }
  return { h: n, s: c, l: o };
}
function s(t, a, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (a - t) * (6 * r) : r < 1 / 2 ? a : r < 2 / 3 ? t + (a - t) * (2 / 3 - r) * 6 : t;
}
function d(t, a, r) {
  var i, e, n;
  if (t = u(t, 360), a = u(a, 100), r = u(r, 100), a === 0)
    e = r, n = r, i = r;
  else {
    var c = r < 0.5 ? r * (1 + a) : r + a - r * a, o = 2 * r - c;
    i = s(o, c, t + 1 / 3), e = s(o, c, t), n = s(o, c, t - 1 / 3);
  }
  return { r: i * 255, g: e * 255, b: n * 255 };
}
function H(t, a, r) {
  t = u(t, 255), a = u(a, 255), r = u(r, 255);
  var i = Math.max(t, a, r), e = Math.min(t, a, r), n = 0, c = i, o = i - e, h = i === 0 ? 0 : o / i;
  if (i === e)
    n = 0;
  else {
    switch (i) {
      case t:
        n = (a - r) / o + (a < r ? 6 : 0);
        break;
      case a:
        n = (r - t) / o + 2;
        break;
      case r:
        n = (t - a) / o + 4;
        break;
    }
    n /= 6;
  }
  return { h: n, s: h, v: c };
}
function S(t, a, r) {
  t = u(t, 360) * 6, a = u(a, 100), r = u(r, 100);
  var i = Math.floor(t), e = t - i, n = r * (1 - a), c = r * (1 - e * a), o = r * (1 - (1 - e) * a), h = i % 6, v = [r, c, n, n, o, r][h], m = [o, r, r, c, n, n][h], x = [n, n, o, r, r, c][h];
  return { r: v * 255, g: m * 255, b: x * 255 };
}
function W(t, a, r, i) {
  var e = [
    f(Math.round(t).toString(16)),
    f(Math.round(a).toString(16)),
    f(Math.round(r).toString(16))
  ];
  return i && e[0].startsWith(e[0].charAt(1)) && e[1].startsWith(e[1].charAt(1)) && e[2].startsWith(e[2].charAt(1)) ? e[0].charAt(0) + e[1].charAt(0) + e[2].charAt(0) : e.join("");
}
function k(t, a, r, i, e) {
  var n = [
    f(Math.round(t).toString(16)),
    f(Math.round(a).toString(16)),
    f(Math.round(r).toString(16)),
    f(A(i))
  ];
  return e && n[0].startsWith(n[0].charAt(1)) && n[1].startsWith(n[1].charAt(1)) && n[2].startsWith(n[2].charAt(1)) && n[3].startsWith(n[3].charAt(1)) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0) : n.join("");
}
function A(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function j(t) {
  return M(t) / 255;
}
function M(t) {
  return parseInt(t, 16);
}
function I(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
export {
  A as convertDecimalToHex,
  j as convertHexToDecimal,
  d as hslToRgb,
  S as hsvToRgb,
  I as numberInputToObject,
  M as parseIntFromHex,
  W as rgbToHex,
  g as rgbToHsl,
  H as rgbToHsv,
  T as rgbToRgb,
  k as rgbaToHex
};
