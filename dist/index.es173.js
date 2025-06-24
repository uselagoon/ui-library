import * as f from "react";
import o from "./index.es162.js";
var r = process.env.NODE_ENV !== "test" && o() ? f.useLayoutEffect : f.useEffect, a = function(e, u) {
  var t = f.useRef(!0);
  r(function() {
    return e(t.current);
  }, u), r(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
}, s = function(e, u) {
  a(function(t) {
    if (!t)
      return e();
  }, u);
};
export {
  a as default,
  s as useLayoutUpdateEffect
};
