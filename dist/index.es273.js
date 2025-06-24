import { supportRef as p, fillRef as c, useComposeRef as l, getNodeRef as s } from "./index.es169.js";
import * as a from "react";
var d = /* @__PURE__ */ a.forwardRef(function(f, t) {
  var e = f.children, r = f.getTriggerDOMNode, i = p(e), g = a.useCallback(function(o) {
    c(t, r ? r(o) : o);
  }, [r]), n = l(g, s(e));
  return i ? /* @__PURE__ */ a.cloneElement(e, {
    ref: n
  }) : e;
});
process.env.NODE_ENV !== "production" && (d.displayName = "TriggerWrapper");
export {
  d as default
};
