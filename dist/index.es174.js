import i from "./index.es171.js";
import * as t from "react";
function l(a) {
  var e = t.useRef(!1), u = t.useState(a), r = i(u, 2), f = r[0], n = r[1];
  t.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []);
  function s(c, o) {
    o && e.current || n(c);
  }
  return [f, s];
}
export {
  l as default
};
