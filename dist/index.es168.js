import i from "./index.es209.js";
import * as r from "react";
var a = ["children"], n = /* @__PURE__ */ r.createContext({});
function d(e) {
  var t = e.children, o = i(e, a);
  return /* @__PURE__ */ r.createElement(n.Provider, {
    value: o
  }, t);
}
export {
  n as Context,
  d as default
};
