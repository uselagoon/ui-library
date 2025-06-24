import g from "./index.es202.js";
import t from "./index.es156.js";
import U from "./index.es171.js";
import W from "./index.es155.js";
import q from "./index.es121.js";
import z from "./index.es203.js";
import { fillRef as B, supportRef as F, getNodeRef as G } from "./index.es169.js";
import * as o from "react";
import { useRef as A } from "react";
import { Context as I } from "./index.es168.js";
import J from "./index.es204.js";
import K from "./index.es205.js";
import { isActive as Q } from "./index.es206.js";
import { STATUS_NONE as X, STEP_PREPARE as Y, STEP_START as Z } from "./index.es207.js";
import { getTransitionName as O, supportTransition as ee } from "./index.es208.js";
function re(c) {
  var N = c;
  W(c) === "object" && (N = c.transitionSupport);
  function h(r, m) {
    return !!(r.motionName && N && m !== !1);
  }
  var _ = /* @__PURE__ */ o.forwardRef(function(r, m) {
    var T = r.visible, y = T === void 0 ? !0 : T, C = r.removeOnLeave, E = C === void 0 ? !0 : C, L = r.forceRender, i = r.children, s = r.motionName, u = r.leavedClassName, D = r.eventProps, $ = o.useContext(I), j = $.motion, w = h(r, j), v = A(), b = A();
    function V() {
      try {
        return v.current instanceof HTMLElement ? v.current : z(b.current);
      } catch {
        return null;
      }
    }
    var k = K(w, y, V, r), l = U(k, 4), p = l[0], d = l[1], x = l[2], S = l[3], M = o.useRef(S);
    S && (M.current = !0);
    var n = o.useCallback(function(R) {
      v.current = R, B(m, R);
    }, [m]), e, f = t(t({}, D), {}, {
      visible: y
    });
    if (!i)
      e = null;
    else if (p === X)
      S ? e = i(t({}, f), n) : !E && M.current && u ? e = i(t(t({}, f), {}, {
        className: u
      }), n) : L || !E && !u ? e = i(t(t({}, f), {}, {
        style: {
          display: "none"
        }
      }), n) : e = null;
    else {
      var a;
      d === Y ? a = "prepare" : Q(d) ? a = "active" : d === Z && (a = "start");
      var P = O(s, "".concat(p, "-").concat(a));
      e = i(t(t({}, f), {}, {
        className: q(O(s, p), g(g({}, P, P && a), s, typeof s == "string")),
        style: x
      }), n);
    }
    if (/* @__PURE__ */ o.isValidElement(e) && F(e)) {
      var H = G(e);
      H || (e = /* @__PURE__ */ o.cloneElement(e, {
        ref: n
      }));
    }
    return /* @__PURE__ */ o.createElement(J, {
      ref: b
    }, e);
  });
  return _.displayName = "CSSMotion", _;
}
const Se = re(ee);
export {
  Se as default,
  re as genCSSMotion
};
