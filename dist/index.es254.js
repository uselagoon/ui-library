import i from "./index.es171.js";
import * as t from "react";
import u from "./index.es172.js";
function l(n) {
  var c = t.useReducer(function(e) {
    return e + 1;
  }, 0), o = i(c, 2), a = o[1], r = t.useRef(n), f = u(function() {
    return r.current;
  }), s = u(function(e) {
    r.current = typeof e == "function" ? e(r.current) : e, a();
  });
  return [f, s];
}
export {
  l as default
};
