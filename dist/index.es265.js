import c from "./index.es171.js";
import * as o from "react";
import { createPortal as q } from "react-dom";
import i from "./index.es162.js";
import { warningOnce as x } from "./index.es96.js";
import { supportRef as I, useComposeRef as V } from "./index.es169.js";
import z from "./index.es283.js";
import A from "./index.es284.js";
import M from "./index.es285.js";
import { inlineMock as T } from "./index.es286.js";
var D = function(e) {
  return e === !1 ? !1 : !i() || !e ? null : typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() : e;
}, U = /* @__PURE__ */ o.forwardRef(function(r, e) {
  var t = r.open, E = r.autoLock, d = r.getContainer, P = r.debug, s = r.autoDestroy, m = s === void 0 ? !0 : s, n = r.children, h = o.useState(t), v = c(h, 2), C = v[0], g = v[1], p = C || t;
  process.env.NODE_ENV !== "production" && x(i() || !t, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), o.useEffect(function() {
    (m || t) && g(t);
  }, [t, m]);
  var k = o.useState(function() {
    return D(d);
  }), R = c(k, 2), a = R[0], N = R[1];
  o.useEffect(function() {
    var l = D(d);
    N(l ?? null);
  });
  var $ = A(p && !a, P), S = c($, 2), y = S[0], w = S[1], u = a ?? y;
  M(E && t && i() && (u === y || u === document.body));
  var _ = null;
  if (n && I(n) && e) {
    var O = n;
    _ = O.ref;
  }
  var b = V(_, e);
  if (!p || !i() || a === void 0)
    return null;
  var L = u === !1 || T(), f = n;
  return e && (f = /* @__PURE__ */ o.cloneElement(n, {
    ref: b
  })), /* @__PURE__ */ o.createElement(z.Provider, {
    value: w
  }, L ? f : /* @__PURE__ */ q(f, u));
});
process.env.NODE_ENV !== "production" && (U.displayName = "Portal");
export {
  U as default
};
