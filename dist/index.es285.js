import f from "./index.es171.js";
import * as m from "react";
import { updateCSS as d, removeCSS as r } from "./index.es163.js";
import l from "./index.es173.js";
import { getTargetScrollBarSize as s } from "./index.es287.js";
import { isBodyOverflowing as S } from "./index.es291.js";
var p = "rc-util-locker-".concat(Date.now()), e = 0;
function h(c) {
  var o = !!c, a = m.useState(function() {
    return e += 1, "".concat(p, "_").concat(e);
  }), n = f(a, 1), t = n[0];
  l(function() {
    if (o) {
      var i = s(document.body).width, u = S();
      d(`
html body {
  overflow-y: hidden;
  `.concat(u ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), t);
    } else
      r(t);
    return function() {
      r(t);
    };
  }, [o, t]);
}
export {
  h as default
};
