import c from "./index.es171.js";
import m from "./index.es172.js";
import { useLayoutUpdateEffect as S } from "./index.es173.js";
import V from "./index.es174.js";
function o(n) {
  return n !== void 0;
}
function P(n, g) {
  var t = g || {}, a = t.defaultValue, e = t.value, _ = t.onChange, i = t.postState, h = V(function() {
    return o(e) ? e : o(a) ? typeof a == "function" ? a() : a : n;
  }), l = c(h, 2), f = l[0], s = l[1], r = e !== void 0 ? e : f, C = i ? i(r) : r, y = m(_), E = V([r]), v = c(E, 2), d = v[0], M = v[1];
  S(function() {
    var u = d[0];
    f !== u && y(f, u);
  }, [d]), S(function() {
    o(e) || s(e);
  }, [e]);
  var x = m(function(u, p) {
    s(u, p), M([r], p);
  });
  return [C, x];
}
export {
  P as default
};
