import u from "./index.es156.js";
import i from "./index.es173.js";
import * as n from "react";
var s = u({}, n), o = s.useInsertionEffect, c = function(e, t, f) {
  n.useMemo(e, f), i(function() {
    return t(!0);
  }, f);
}, m = o ? function(r, e, t) {
  return o(function() {
    return r(), e();
  }, t);
} : c;
export {
  m as default
};
