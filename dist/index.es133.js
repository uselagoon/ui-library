import e from "./index.es121.js";
import { isPresetColor as i } from "./index.es143.js";
function l(a, r) {
  const t = i(r), n = e({
    [`${a}-${r}`]: r && t
  }), o = {}, s = {};
  return r && !t && (o.background = r, s["--antd-arrow-background-color"] = r), {
    className: n,
    overlayStyle: o,
    arrowStyle: s
  };
}
export {
  l as parseColor
};
