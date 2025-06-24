import { __exports as r } from "./index.es267.js";
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P;
function te() {
  return P ? r : (P = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Symbol.for("react.element"), m = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), b = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), M = !1, p = !1, y = !1, F = !1, L = !1, T;
    T = Symbol.for("react.module.reference");
    function Y(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === t || e === a || L || e === o || e === f || e === u || F || e === A || M || p || y || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === l || e.$$typeof === s || e.$$typeof === i || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === T || e.getModuleId !== void 0));
    }
    function n(e) {
      if (typeof e == "object" && e !== null) {
        var _ = e.$$typeof;
        switch (_) {
          case v:
            var d = e.type;
            switch (d) {
              case t:
              case a:
              case o:
              case f:
              case u:
                return d;
              default:
                var C = d && d.$$typeof;
                switch (C) {
                  case b:
                  case i:
                  case c:
                  case E:
                  case l:
                  case s:
                    return C;
                  default:
                    return _;
                }
            }
          case m:
            return _;
        }
      }
    }
    var I = i, O = s, w = v, x = c, $ = t, g = E, h = l, N = m, D = a, z = o, V = f, q = u, R = !1, S = !1;
    function U(e) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(e) {
      return S || (S = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(e) {
      return n(e) === i;
    }
    function G(e) {
      return n(e) === s;
    }
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function Z(e) {
      return n(e) === c;
    }
    function j(e) {
      return n(e) === t;
    }
    function k(e) {
      return n(e) === E;
    }
    function B(e) {
      return n(e) === l;
    }
    function J(e) {
      return n(e) === m;
    }
    function K(e) {
      return n(e) === a;
    }
    function Q(e) {
      return n(e) === o;
    }
    function ee(e) {
      return n(e) === f;
    }
    function re(e) {
      return n(e) === u;
    }
    r.ContextConsumer = I, r.ContextProvider = O, r.Element = w, r.ForwardRef = x, r.Fragment = $, r.Lazy = g, r.Memo = h, r.Portal = N, r.Profiler = D, r.StrictMode = z, r.Suspense = V, r.SuspenseList = q, r.isAsyncMode = U, r.isConcurrentMode = W, r.isContextConsumer = X, r.isContextProvider = G, r.isElement = H, r.isForwardRef = Z, r.isFragment = j, r.isLazy = k, r.isMemo = B, r.isPortal = J, r.isProfiler = K, r.isStrictMode = Q, r.isSuspense = ee, r.isSuspenseList = re, r.isValidElementType = Y, r.typeOf = n;
  }(), r);
}
export {
  te as __require
};
