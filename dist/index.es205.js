import Le from "./index.es156.js";
import i from "./index.es202.js";
import f from "./index.es171.js";
import Re from "./index.es172.js";
import "./index.es173.js";
import Y from "./index.es174.js";
import "./index.es169.js";
import "./index.es96.js";
import ye from "./index.es254.js";
import * as Z from "react";
import { useRef as T, useEffect as N } from "react";
import { STATUS_NONE as s, STATUS_APPEAR as P, STATUS_ENTER as L, STATUS_LEAVE as R, STEP_PREPARE as m, STEP_ACTIVE as y, STEP_PREPARED as ge, STEP_START as g } from "./index.es207.js";
import De from "./index.es255.js";
import Me from "./index.es256.js";
import he, { SkipStep as Ve, DoStep as Ie, isActive as _e } from "./index.es206.js";
function Fe(Q, a, b, e) {
  var H = e.motionEnter, D = H === void 0 ? !0 : H, j = e.motionAppear, M = j === void 0 ? !0 : j, k = e.motionLeave, p = k === void 0 ? !0 : k, w = e.motionDeadline, ee = e.motionLeaveImmediately, te = e.onAppearPrepare, ne = e.onEnterPrepare, re = e.onLeavePrepare, oe = e.onAppearStart, ae = e.onEnterStart, ie = e.onLeaveStart, ue = e.onAppearActive, ce = e.onEnterActive, se = e.onLeaveActive, h = e.onAppearEnd, V = e.onEnterEnd, I = e.onLeaveEnd, _ = e.onVisibleChanged, me = Y(), O = f(me, 2), u = O[0], ve = O[1], fe = ye(s), $ = f(fe, 2), q = $[0], l = $[1], pe = Y(null), z = f(pe, 2), le = z[0], B = z[1], r = q(), d = T(!1), C = T(null);
  function S() {
    return b();
  }
  var F = T(!1);
  function G() {
    l(s), B(null, !0);
  }
  var J = Re(function(n) {
    var t = q();
    if (t !== s) {
      var o = S();
      if (!(n && !n.deadline && n.target !== o)) {
        var E = F.current, A;
        t === P && E ? A = h?.(o, n) : t === L && E ? A = V?.(o, n) : t === R && E && (A = I?.(o, n)), E && A !== !1 && G();
      }
    }
  }), de = De(J), Se = f(de, 1), Ee = Se[0], K = function(t) {
    switch (t) {
      case P:
        return i(i(i({}, m, te), g, oe), y, ue);
      case L:
        return i(i(i({}, m, ne), g, ae), y, ce);
      case R:
        return i(i(i({}, m, re), g, ie), y, se);
      default:
        return {};
    }
  }, v = Z.useMemo(function() {
    return K(r);
  }, [r]), Ae = he(r, !Q, function(n) {
    if (n === m) {
      var t = v[m];
      return t ? t(S()) : Ve;
    }
    if (c in v) {
      var o;
      B(((o = v[c]) === null || o === void 0 ? void 0 : o.call(v, S(), null)) || null);
    }
    return c === y && r !== s && (Ee(S()), w > 0 && (clearTimeout(C.current), C.current = setTimeout(function() {
      J({
        deadline: !0
      });
    }, w))), c === ge && G(), Ie;
  }), W = f(Ae, 2), Te = W[0], c = W[1], Pe = _e(c);
  F.current = Pe;
  var X = T(null);
  Me(function() {
    if (!(d.current && X.current === a)) {
      ve(a);
      var n = d.current;
      d.current = !0;
      var t;
      !n && a && M && (t = P), n && a && D && (t = L), (n && !a && p || !n && ee && !a && p) && (t = R);
      var o = K(t);
      t && (Q || o[m]) ? (l(t), Te()) : l(s), X.current = a;
    }
  }, [a]), N(function() {
    // Cancel appear
    (r === P && !M || // Cancel enter
    r === L && !D || // Cancel leave
    r === R && !p) && l(s);
  }, [M, D, p]), N(function() {
    return function() {
      d.current = !1, clearTimeout(C.current);
    };
  }, []);
  var U = Z.useRef(!1);
  N(function() {
    u && (U.current = !0), u !== void 0 && r === s && ((U.current || u) && _?.(u), U.current = !0);
  }, [u, r]);
  var x = le;
  return v[m] && c === g && (x = Le({
    transition: "none"
  }, x)), [r, c, x, u ?? a];
}
export {
  Fe as default
};
