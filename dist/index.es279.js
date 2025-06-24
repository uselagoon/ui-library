import X from "./index.es156.js";
function Y() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? t[0] === o[0] : t[0] === o[0] && t[1] === o[1];
}
function q(t, o, r, e) {
  for (var n = r.points, d = Object.keys(t), i = 0; i < d.length; i += 1) {
    var a, l = d[i];
    if (Y((a = t[l]) === null || a === void 0 ? void 0 : a.points, n, e))
      return "".concat(o, "-placement-").concat(l);
  }
  return "";
}
function D(t, o, r, e) {
  return o || (r ? {
    motionName: "".concat(t, "-").concat(r)
  } : e ? {
    motionName: e
  } : null);
}
function T(t) {
  return t.ownerDocument.defaultView;
}
function F(t) {
  for (var o = [], r = t?.parentElement, e = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var n = T(r).getComputedStyle(r), d = n.overflowX, i = n.overflowY, a = n.overflow;
    [d, i, a].some(function(l) {
      return e.includes(l);
    }) && o.push(r), r = r.parentElement;
  }
  return o;
}
function s(t) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(t) ? o : t;
}
function h(t) {
  return s(parseFloat(t), 0);
}
function P(t, o) {
  var r = X({}, t);
  return (o || []).forEach(function(e) {
    if (!(e instanceof HTMLBodyElement || e instanceof HTMLHtmlElement)) {
      var n = T(e).getComputedStyle(e), d = n.overflow, i = n.overflowClipMargin, a = n.borderTopWidth, l = n.borderBottomWidth, y = n.borderLeftWidth, E = n.borderRightWidth, u = e.getBoundingClientRect(), m = e.offsetHeight, S = e.clientHeight, p = e.offsetWidth, x = e.clientWidth, W = h(a), b = h(l), M = h(y), w = h(E), v = s(Math.round(u.width / p * 1e3) / 1e3), f = s(Math.round(u.height / m * 1e3) / 1e3), C = (p - x - M - w) * v, A = (m - S - W - b) * f, B = W * f, V = b * f, H = M * v, O = w * v, c = 0, g = 0;
      if (d === "clip") {
        var N = h(i);
        c = N * v, g = N * f;
      }
      var L = u.x + H - c, R = u.y + B - g, j = L + u.width + 2 * c - H - O - C, I = R + u.height + 2 * g - B - V - A;
      r.left = Math.max(r.left, L), r.top = Math.max(r.top, R), r.right = Math.min(r.right, j), r.bottom = Math.min(r.bottom, I);
    }
  }), r;
}
export {
  F as collectScroller,
  q as getAlignPopupClassName,
  D as getMotion,
  P as getVisibleArea,
  T as getWin,
  s as toNum
};
