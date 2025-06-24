import f from "./index.es155.js";
import u from "react";
import e from "react-dom";
function i(t) {
  return t instanceof HTMLElement || t instanceof SVGElement;
}
function l(t) {
  return t && f(t) === "object" && i(t.nativeElement) ? t.nativeElement : i(t) ? t : null;
}
function c(t) {
  var n = l(t);
  if (n)
    return n;
  if (t instanceof u.Component) {
    var r;
    return (r = e.findDOMNode) === null || r === void 0 ? void 0 : r.call(e, t);
  }
  return null;
}
export {
  c as default,
  l as getDOM,
  i as isDOM
};
