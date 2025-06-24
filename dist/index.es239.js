import { __exports as r } from "./index.es266.js";
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b;
function x() {
  if (b) return r;
  b = 1;
  var p = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), s = Symbol.for("react.context"), $ = Symbol.for("react.server_context"), i = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function t(e) {
    if (typeof e == "object" && e !== null) {
      var d = e.$$typeof;
      switch (d) {
        case p:
          switch (e = e.type, e) {
            case o:
            case c:
            case n:
            case u:
            case l:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case $:
                case s:
                case i:
                case y:
                case m:
                case f:
                  return e;
                default:
                  return d;
              }
          }
        case a:
          return d;
      }
    }
  }
  return r.ContextConsumer = s, r.ContextProvider = f, r.Element = p, r.ForwardRef = i, r.Fragment = o, r.Lazy = y, r.Memo = m, r.Portal = a, r.Profiler = c, r.StrictMode = n, r.Suspense = u, r.SuspenseList = l, r.isAsyncMode = function() {
    return !1;
  }, r.isConcurrentMode = function() {
    return !1;
  }, r.isContextConsumer = function(e) {
    return t(e) === s;
  }, r.isContextProvider = function(e) {
    return t(e) === f;
  }, r.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === p;
  }, r.isForwardRef = function(e) {
    return t(e) === i;
  }, r.isFragment = function(e) {
    return t(e) === o;
  }, r.isLazy = function(e) {
    return t(e) === y;
  }, r.isMemo = function(e) {
    return t(e) === m;
  }, r.isPortal = function(e) {
    return t(e) === a;
  }, r.isProfiler = function(e) {
    return t(e) === c;
  }, r.isStrictMode = function(e) {
    return t(e) === n;
  }, r.isSuspense = function(e) {
    return t(e) === u;
  }, r.isSuspenseList = function(e) {
    return t(e) === l;
  }, r.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === o || e === c || e === n || e === u || e === l || e === _ || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === m || e.$$typeof === f || e.$$typeof === s || e.$$typeof === i || e.$$typeof === S || e.getModuleId !== void 0);
  }, r.typeOf = t, r;
}
export {
  x as __require
};
