import n from "react";
function u(t) {
  return t && /* @__PURE__ */ n.isValidElement(t) && t.type === n.Fragment;
}
const o = (t, e, r) => /* @__PURE__ */ n.isValidElement(t) ? /* @__PURE__ */ n.cloneElement(t, typeof r == "function" ? r(t.props || {}) : r) : e;
function a(t, e) {
  return o(t, t, e);
}
export {
  a as cloneElement,
  u as isFragment,
  o as replaceElement
};
