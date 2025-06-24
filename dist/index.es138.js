import o from "./index.es139.js";
import u from "react";
function t(a) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [];
  return u.Children.forEach(a, function(r) {
    r == null && !n.keepEmpty || (Array.isArray(r) ? e = e.concat(t(r)) : o(r) && r.props ? e = e.concat(t(r.props.children, n)) : e.push(r));
  }), e;
}
export {
  t as default
};
