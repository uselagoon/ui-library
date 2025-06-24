import { getShadowRoot as V } from "./index.es270.js";
import { warning as h } from "./index.es96.js";
import * as m from "react";
import { getWin as j } from "./index.es279.js";
function A(c, s, e, v, a, L, D, l) {
  var x = m.useRef(c);
  x.current = c;
  var i = m.useRef(!1);
  m.useEffect(function() {
    if (s && v && (!a || L)) {
      var P = function() {
        i.current = !1;
      }, n = function(d) {
        var u;
        x.current && !D(((u = d.composedPath) === null || u === void 0 || (u = u.call(d)) === null || u === void 0 ? void 0 : u[0]) || d.target) && !i.current && l(!1);
      }, r = j(v);
      r.addEventListener("pointerdown", P, !0), r.addEventListener("mousedown", n, !0), r.addEventListener("contextmenu", n, !0);
      var t = V(e);
      if (t && (t.addEventListener("mousedown", n, !0), t.addEventListener("contextmenu", n, !0)), process.env.NODE_ENV !== "production") {
        var f, o, p = e == null || (f = e.getRootNode) === null || f === void 0 ? void 0 : f.call(e), w = (o = v.getRootNode) === null || o === void 0 ? void 0 : o.call(v);
        h(p === w, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        r.removeEventListener("pointerdown", P, !0), r.removeEventListener("mousedown", n, !0), r.removeEventListener("contextmenu", n, !0), t && (t.removeEventListener("mousedown", n, !0), t.removeEventListener("contextmenu", n, !0));
      };
    }
  }, [s, e, v, a, L]);
  function W() {
    i.current = !0;
  }
  return W;
}
export {
  A as default
};
