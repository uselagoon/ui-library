import i from "./index.es156.js";
import { warning as o } from "./index.es96.js";
import * as u from "react";
var s = i({}, u), c = s.useInsertionEffect, l = function(e) {
  var n = [], r = !1;
  function a(t) {
    if (r) {
      process.env.NODE_ENV !== "production" && o(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(t);
  }
  return u.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(t) {
        return t();
      });
    };
  }, e), a;
}, p = function() {
  return function(e) {
    e();
  };
}, m = typeof c < "u" ? l : p;
export {
  m as default
};
