import l from "./index.es147.js";
import c from "./index.es121.js";
import f from "./index.es141.js";
import "./index.es142.js";
import * as t from "react";
function k(e) {
  var a = e.prefixCls, m = e.open, n = e.zIndex, r = e.mask, o = e.motion;
  return r ? /* @__PURE__ */ t.createElement(f, l({}, o, {
    motionAppear: !0,
    visible: m,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ t.createElement("div", {
      style: {
        zIndex: n
      },
      className: c("".concat(a, "-mask"), s)
    });
  }) : null;
}
export {
  k as default
};
