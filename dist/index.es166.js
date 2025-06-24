import g from "./index.es155.js";
import { warningOnce as h } from "./index.es96.js";
function y(c, o) {
  var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, u = /* @__PURE__ */ new Set();
  function t(e, r) {
    var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a = u.has(e);
    if (h(!a, "Warning: There may be circular references"), a)
      return !1;
    if (e === r)
      return !0;
    if (m && f > 1)
      return !1;
    u.add(e);
    var l = f + 1;
    if (Array.isArray(e)) {
      if (!Array.isArray(r) || e.length !== r.length)
        return !1;
      for (var n = 0; n < e.length; n++)
        if (!t(e[n], r[n], l))
          return !1;
      return !0;
    }
    if (e && r && g(e) === "object" && g(r) === "object") {
      var s = Object.keys(e);
      return s.length !== Object.keys(r).length ? !1 : s.every(function(i) {
        return t(e[i], r[i], l);
      });
    }
    return !1;
  }
  return t(c, o);
}
export {
  y as default
};
