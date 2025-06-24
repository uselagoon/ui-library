import D from "./index.es156.js";
import $ from "./index.es155.js";
import h from "./index.es203.js";
import { supportRef as j, getNodeRef as B, useComposeRef as P } from "./index.es169.js";
import * as e from "react";
import { CollectionContext as V } from "./index.es149.js";
import { observe as k, unobserve as I } from "./index.es150.js";
import q from "./index.es214.js";
function A(f, M) {
  var l = f.children, v = f.disabled, t = e.useRef(null), m = e.useRef(null), d = e.useContext(V), R = typeof l == "function", o = R ? l(t) : l, i = e.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), g = !R && /* @__PURE__ */ e.isValidElement(o) && j(o), N = g ? B(o) : null, O = P(N, t), p = function() {
    var n;
    return h(t.current) || // Support `nativeElement` format
    (t.current && $(t.current) === "object" ? h((n = t.current) === null || n === void 0 ? void 0 : n.nativeElement) : null) || h(m.current);
  };
  e.useImperativeHandle(M, function() {
    return p();
  });
  var b = e.useRef(f);
  b.current = f;
  var C = e.useCallback(function(r) {
    var n = b.current, E = n.onResize, S = n.data, H = r.getBoundingClientRect(), s = H.width, c = H.height, u = r.offsetWidth, a = r.offsetHeight, W = Math.floor(s), w = Math.floor(c);
    if (i.current.width !== W || i.current.height !== w || i.current.offsetWidth !== u || i.current.offsetHeight !== a) {
      var _ = {
        width: W,
        height: w,
        offsetWidth: u,
        offsetHeight: a
      };
      i.current = _;
      var y = u === Math.round(s) ? s : u, z = a === Math.round(c) ? c : a, x = D(D({}, _), {}, {
        offsetWidth: y,
        offsetHeight: z
      });
      d?.(x, r, S), E && Promise.resolve().then(function() {
        E(x, r);
      });
    }
  }, []);
  return e.useEffect(function() {
    var r = p();
    return r && !v && k(r, C), function() {
      return I(r, C);
    };
  }, [t.current, v]), /* @__PURE__ */ e.createElement(q, {
    ref: m
  }, g ? /* @__PURE__ */ e.cloneElement(o, {
    ref: O
  }) : o);
}
var F = /* @__PURE__ */ e.forwardRef(A);
process.env.NODE_ENV !== "production" && (F.displayName = "SingleObserver");
export {
  F as default
};
