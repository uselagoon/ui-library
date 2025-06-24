import d from "./index.es171.js";
import f from "./index.es156.js";
import * as n from "react";
function I() {
  var t = f({}, n);
  return t.useId;
}
var s = 0, a = I();
const _ = a ? (
  // Use React `useId`
  function(e) {
    var r = a();
    return e || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(e) {
    var r = n.useState("ssr-id"), u = d(r, 2), o = u[0], i = u[1];
    return n.useEffect(function() {
      var c = s;
      s += 1, i("rc_unique_".concat(c));
    }, []), e || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
export {
  _ as default
};
