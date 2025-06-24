import c from "./index.es147.js";
import * as s from "react";
import m from "./index.es138.js";
import { warning as t } from "./index.es96.js";
import v from "./index.es148.js";
import { Collection as d } from "./index.es149.js";
import "./index.es150.js";
var p = "rc-observer-key";
function R(i, a) {
  var r = i.children, o = typeof r == "function" ? [r] : m(r);
  return process.env.NODE_ENV !== "production" && (o.length > 1 ? t(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : o.length === 0 && t(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), o.map(function(e, n) {
    var l = e?.key || "".concat(p, "-").concat(n);
    return /* @__PURE__ */ s.createElement(v, c({}, i, {
      key: l,
      ref: n === 0 ? a : void 0
    }), e);
  });
}
var f = /* @__PURE__ */ s.forwardRef(R);
process.env.NODE_ENV !== "production" && (f.displayName = "ResizeObserver");
f.Collection = d;
export {
  f as default
};
