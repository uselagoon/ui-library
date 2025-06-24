import { inputToRGB as u } from "./index.es259.js";
import { rgbToHsv as k, rgbToHex as H } from "./index.es260.js";
var i = 2, v = 0.16, T = 0.05, F = 0.05, N = 0.15, m = 5, y = 4, B = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function s(t) {
  var a = t.r, e = t.g, r = t.b, n = k(a, e, r);
  return {
    h: n.h * 360,
    s: n.s,
    v: n.v
  };
}
function p(t) {
  var a = t.r, e = t.g, r = t.b;
  return "#".concat(H(a, e, r, !1));
}
function G(t, a, e) {
  var r = e / 100, n = {
    r: (a.r - t.r) * r + t.r,
    g: (a.g - t.g) * r + t.g,
    b: (a.b - t.b) * r + t.b
  };
  return n;
}
function x(t, a, e) {
  var r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = e ? Math.round(t.h) - i * a : Math.round(t.h) + i * a : r = e ? Math.round(t.h) + i * a : Math.round(t.h) - i * a, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function g(t, a, e) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var r;
  return e ? r = t.s - v * a : a === y ? r = t.s + v : r = t.s + T * a, r > 1 && (r = 1), e && a === m && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function l(t, a, e) {
  var r;
  return e ? r = t.v + F * a : r = t.v - N * a, r > 1 && (r = 1), Number(r.toFixed(2));
}
function j(t) {
  for (var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = u(t), n = m; n > 0; n -= 1) {
    var d = s(r), h = p(u({
      h: x(d, n, !0),
      s: g(d, n, !0),
      v: l(d, n, !0)
    }));
    e.push(h);
  }
  e.push(p(r));
  for (var o = 1; o <= y; o += 1) {
    var c = s(r), b = p(u({
      h: x(c, o),
      s: g(c, o),
      v: l(c, o)
    }));
    e.push(b);
  }
  return a.theme === "dark" ? B.map(function(f) {
    var C = f.index, M = f.opacity, S = p(G(u(a.backgroundColor || "#141414"), u(e[C]), M * 100));
    return S;
  }) : e;
}
export {
  j as default
};
