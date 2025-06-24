import * as e from "react";
var a = /* @__PURE__ */ e.createContext(null);
function R(c) {
  var s = c.children, r = c.onBatchResize, t = e.useRef(0), o = e.useRef([]), n = e.useContext(a), v = e.useCallback(function(i, u, l) {
    t.current += 1;
    var f = t.current;
    o.current.push({
      size: i,
      element: u,
      data: l
    }), Promise.resolve().then(function() {
      f === t.current && (r?.(o.current), o.current = []);
    }), n?.(i, u, l);
  }, [r, n]);
  return /* @__PURE__ */ e.createElement(a.Provider, {
    value: v
  }, s);
}
export {
  R as Collection,
  a as CollectionContext
};
