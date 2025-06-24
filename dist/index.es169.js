import s from "./index.es155.js";
import { isValidElement as c, version as l } from "react";
import { r as n } from "./index.es170.js";
import m from "./index.es103.js";
import v from "./index.es139.js";
var R = Number(l.split(".")[0]), y = function(r, t) {
  typeof r == "function" ? r(t) : s(r) === "object" && r && "current" in r && (r.current = t);
}, g = function() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  var f = t.filter(Boolean);
  return f.length <= 1 ? f[0] : function(u) {
    t.forEach(function(i) {
      y(i, u);
    });
  };
}, F = function() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  return m(function() {
    return g.apply(void 0, t);
  }, t, function(f, u) {
    return f.length !== u.length || f.every(function(i, a) {
      return i !== u[a];
    });
  });
}, M = function(r) {
  var t, e;
  if (!r)
    return !1;
  if (p(r) && R >= 19)
    return !0;
  var f = n.isMemo(r) ? r.type.type : r.type;
  return !(typeof f == "function" && !((t = f.prototype) !== null && t !== void 0 && t.render) && f.$$typeof !== n.ForwardRef || typeof r == "function" && !((e = r.prototype) !== null && e !== void 0 && e.render) && r.$$typeof !== n.ForwardRef);
};
function p(o) {
  return /* @__PURE__ */ c(o) && !v(o);
}
var N = function(r) {
  if (r && p(r)) {
    var t = r;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
};
export {
  g as composeRef,
  y as fillRef,
  N as getNodeRef,
  M as supportRef,
  F as useComposeRef
};
