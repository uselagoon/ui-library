import _ from "./index.es121.js";
import * as c from "react";
function C(e) {
  var m = e.prefixCls, a = e.align, w = e.arrow, o = e.arrowPos, s = w || {}, d = s.className, x = s.content, i = o.x, u = i === void 0 ? 0 : i, f = o.y, y = f === void 0 ? 0 : f, N = c.useRef();
  if (!a || !a.points)
    return null;
  var r = {
    position: "absolute"
  };
  if (a.autoArrow !== !1) {
    var n = a.points[0], v = a.points[1], t = n[0], l = n[1], b = v[0], g = v[1];
    t === b || !["t", "b"].includes(t) ? r.top = y : t === "t" ? r.top = 0 : r.bottom = 0, l === g || !["l", "r"].includes(l) ? r.left = u : l === "l" ? r.left = 0 : r.right = 0;
  }
  return /* @__PURE__ */ c.createElement("div", {
    ref: N,
    className: _("".concat(m, "-arrow"), d),
    style: r
  }, x);
}
export {
  C as default
};
