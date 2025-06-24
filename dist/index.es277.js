import s from "./index.es144.js";
import d from "./index.es173.js";
import { collectScroller as v, getWin as L } from "./index.es279.js";
function z(c, e, t, a, u) {
  d(function() {
    if (c && e && t) {
      let r = function() {
        a(), u();
      };
      var l = e, f = t, m = v(l), E = v(f), o = L(f), i = new Set([o].concat(s(m), s(E)));
      return i.forEach(function(n) {
        n.addEventListener("scroll", r, {
          passive: !0
        });
      }), o.addEventListener("resize", r, {
        passive: !0
      }), a(), function() {
        i.forEach(function(n) {
          n.removeEventListener("scroll", r), o.removeEventListener("resize", r);
        });
      };
    }
  }, [c, e, t]);
}
export {
  z as default
};
