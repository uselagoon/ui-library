import f from "./index.es171.js";
import A from "./index.es144.js";
import { removeCSS as I, updateCSS as R } from "./index.es163.js";
import { useContext as V } from "react";
import K, { ATTR_MARK as T, CSS_IN_JS_INSTANCE as N, ATTR_TOKEN as b } from "./index.es94.js";
import { isClientSide as E, toStyleStr as g } from "./index.es185.js";
import { transformToken as q } from "./index.es220.js";
import P from "./index.es221.js";
import { uniqueHash as F } from "./index.es218.js";
var G = "cssVar", z = function(r, d) {
  var t = r.key, o = r.prefix, c = r.unitless, u = r.ignore, l = r.token, p = r.scope, m = p === void 0 ? "" : p, n = V(K), S = n.cache.instanceId, v = n.container, C = l._tokenKey, _ = [].concat(A(r.path), [t, m, C]), x = P(G, _, function() {
    var s = d(), a = q(s, t, {
      prefix: o,
      unitless: c,
      ignore: u,
      scope: m
    }), e = f(a, 2), y = e[0], i = e[1], h = F(_, i);
    return [y, i, h, t];
  }, function(s) {
    var a = f(s, 3), e = a[2];
    E && I(e, {
      mark: T
    });
  }, function(s) {
    var a = f(s, 3), e = a[1], y = a[2];
    if (e) {
      var i = R(e, y, {
        mark: T,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      i[N] = S, i.setAttribute(b, t);
    }
  });
  return x;
}, B = function(r, d, t) {
  var o = f(r, 4), c = o[1], u = o[2], l = o[3], p = t || {}, m = p.plain;
  if (!c)
    return null;
  var n = -999, S = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(n)
  }, v = g(c, l, u, S, m);
  return [n, u, v];
};
export {
  G as CSS_VAR_PREFIX,
  z as default,
  B as extract
};
