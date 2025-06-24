import * as h from "react";
import "./index.es96.js";
import u from "./index.es229.js";
var s = "data-token-hash", o = "data-css-hash", A = "data-cache-path", t = "__cssinjs_instance__";
function f() {
  var r = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var i = document.body.querySelectorAll("style[".concat(o, "]")) || [], d = document.head.firstChild;
    Array.from(i).forEach(function(a) {
      a[t] = a[t] || r, a[t] === r && document.head.insertBefore(a, d);
    });
    var c = {};
    Array.from(document.querySelectorAll("style[".concat(o, "]"))).forEach(function(a) {
      var n = a.getAttribute(o);
      if (c[n]) {
        if (a[t] === r) {
          var e;
          (e = a.parentNode) === null || e === void 0 || e.removeChild(a);
        }
      } else
        c[n] = !0;
    });
  }
  return new u(r);
}
var C = /* @__PURE__ */ h.createContext({
  hashPriority: "low",
  cache: f(),
  defaultCache: !0
});
export {
  A as ATTR_CACHE_PATH,
  o as ATTR_MARK,
  s as ATTR_TOKEN,
  t as CSS_IN_JS_INSTANCE,
  f as createCache,
  C as default
};
