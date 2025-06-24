import g from "./index.es171.js";
import j from "./index.es144.js";
import K from "./index.es156.js";
import A from "./index.es219.js";
import { updateCSS as L } from "./index.es163.js";
import { useContext as M } from "react";
import P, { ATTR_TOKEN as V, CSS_IN_JS_INSTANCE as b, ATTR_MARK as q } from "./index.es94.js";
import { memoResult as H, flattenToken as S, token2key as I, toStyleStr as w } from "./index.es185.js";
import { transformToken as F } from "./index.es220.js";
import G from "./index.es221.js";
var J = {}, Q = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", u = /* @__PURE__ */ new Map();
function X(t) {
  u.set(t, (u.get(t) || 0) + 1);
}
function Y(t, i) {
  if (typeof document < "u") {
    var o = document.querySelectorAll("style[".concat(V, '="').concat(t, '"]'));
    o.forEach(function(n) {
      if (n[b] === i) {
        var e;
        (e = n.parentNode) === null || e === void 0 || e.removeChild(n);
      }
    });
  }
}
var $ = 0;
function z(t, i) {
  u.set(t, (u.get(t) || 0) - 1);
  var o = Array.from(u.keys()), n = o.filter(function(e) {
    var v = u.get(e) || 0;
    return v <= 0;
  });
  o.length - n.length > $ && n.forEach(function(e) {
    Y(e, i), u.delete(e);
  });
}
var B = function(i, o, n, e) {
  var v = n.getDerivativeToken(i), c = K(K({}, v), o);
  return e && (c = e(c)), c;
}, U = "token";
function ve(t, i) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = M(P), e = n.cache.instanceId, v = n.container, c = o.salt, f = c === void 0 ? "" : c, k = o.override, l = k === void 0 ? J : k, y = o.formatToken, m = o.getComputedToken, r = o.cssVar, p = H(function() {
    return Object.assign.apply(Object, [{}].concat(j(i)));
  }, i), O = S(p), R = S(l), N = r ? S(r) : "", D = G(U, [f, t.id, O, R, N], function() {
    var s, a = m ? m(p, l, t) : B(p, l, t, y), d = K({}, a), T = "";
    if (r) {
      var _ = F(a, r.key, {
        prefix: r.prefix,
        ignore: r.ignore,
        unitless: r.unitless,
        preserve: r.preserve
      }), C = g(_, 2);
      a = C[0], T = C[1];
    }
    var h = I(a, f);
    a._tokenKey = h, d._tokenKey = I(d, f);
    var E = (s = r?.key) !== null && s !== void 0 ? s : h;
    a._themeKey = E, X(E);
    var x = "".concat(Q, "-").concat(A(h));
    return a._hashId = x, [a, x, d, T, r?.key || ""];
  }, function(s) {
    z(s[0]._themeKey, e);
  }, function(s) {
    var a = g(s, 4), d = a[0], T = a[3];
    if (r && T) {
      var _ = L(T, A("css-variables-".concat(d._themeKey)), {
        mark: q,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      _[b] = e, _.setAttribute(V, d._themeKey);
    }
  });
  return D;
}
var se = function(i, o, n) {
  var e = g(i, 5), v = e[2], c = e[3], f = e[4], k = n || {}, l = k.plain;
  if (!c)
    return null;
  var y = v._tokenKey, m = -999, r = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(m)
  }, p = w(c, f, y, r, l);
  return [m, y, p];
};
export {
  U as TOKEN_PREFIX,
  ve as default,
  se as extract,
  B as getComputedToken
};
