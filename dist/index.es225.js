import d from "./index.es171.js";
import i from "./index.es162.js";
import { ATTR_MARK as h } from "./index.es94.js";
var s = "data-ant-cssinjs-cache-path", p = "_FILE_STYLE__", r, l = !0;
function v() {
  if (!r && (r = {}, i())) {
    var e = document.createElement("div");
    e.className = s, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var o = getComputedStyle(e).content || "";
    o = o.replace(/^"/, "").replace(/"$/, ""), o.split(";").forEach(function(m) {
      var n = m.split(":"), c = d(n, 2), f = c[0], u = c[1];
      r[f] = u;
    });
    var t = document.querySelector("style[".concat(s, "]"));
    if (t) {
      var a;
      l = !1, (a = t.parentNode) === null || a === void 0 || a.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function T(e) {
  return v(), !!r[e];
}
function A(e) {
  var o = r[e], t = null;
  if (o && i())
    if (l)
      t = p;
    else {
      var a = document.querySelector("style[".concat(h, '="').concat(r[e], '"]'));
      a ? t = a.innerHTML : delete r[e];
    }
  return [t, o];
}
export {
  s as ATTR_CACHE_MAP,
  p as CSS_FILE_STYLE,
  T as existPath,
  A as getStyleAndHash,
  v as prepare
};
