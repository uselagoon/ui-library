import * as u from "react";
function o(c) {
  var e = u.useRef();
  e.current = c;
  var f = u.useCallback(function() {
    for (var r, t = arguments.length, a = new Array(t), n = 0; n < t; n++)
      a[n] = arguments[n];
    return (r = e.current) === null || r === void 0 ? void 0 : r.call.apply(r, [e].concat(a));
  }, []);
  return f;
}
export {
  o as default
};
