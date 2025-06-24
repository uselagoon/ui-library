import s from "./index.es121.js";
import * as a from "react";
function m(e) {
  var t = e.children, l = e.prefixCls, n = e.id, c = e.overlayInnerStyle, i = e.className, r = e.style;
  return /* @__PURE__ */ a.createElement("div", {
    className: s("".concat(l, "-content"), i),
    style: r
  }, /* @__PURE__ */ a.createElement("div", {
    className: "".concat(l, "-inner"),
    id: n,
    role: "tooltip",
    style: c
  }, typeof t == "function" ? t() : t));
}
export {
  m as default
};
