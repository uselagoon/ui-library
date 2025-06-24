import u from "./index.es202.js";
import m from "./index.es156.js";
import h from "./index.es155.js";
import l from "./index.es219.js";
import T from "./index.es162.js";
import { ATTR_TOKEN as _, ATTR_MARK as y } from "./index.es94.js";
import "./index.es95.js";
import S from "./index.es230.js";
import "./index.es97.js";
var b = /* @__PURE__ */ new WeakMap(), i = {};
function O(r, t) {
  for (var n = b, e = 0; e < t.length; e += 1) {
    var a = t[e];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(i) || n.set(i, r()), n.get(i);
}
var s = /* @__PURE__ */ new WeakMap();
function p(r) {
  var t = s.get(r) || "";
  return t || (Object.keys(r).forEach(function(n) {
    var e = r[n];
    t += n, e instanceof S ? t += e.id : e && h(e) === "object" ? t += p(e) : t += e;
  }), t = l(t), s.set(r, t)), t;
}
function U(r, t) {
  return l("".concat(t, "_").concat(p(r)));
}
var W = T();
function x(r) {
  return typeof r == "number" ? "".concat(r, "px") : r;
}
function K(r, t, n) {
  var e, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, v = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (v)
    return r;
  var c = m(m({}, a), {}, (e = {}, u(e, _, t), u(e, y, n), e)), g = Object.keys(c).map(function(o) {
    var f = c[o];
    return f ? "".concat(o, '="').concat(f, '"') : null;
  }).filter(function(o) {
    return o;
  }).join(" ");
  return "<style ".concat(g, ">").concat(r, "</style>");
}
export {
  p as flattenToken,
  W as isClientSide,
  O as memoResult,
  K as toStyleStr,
  U as token2key,
  x as unit
};
