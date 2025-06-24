import T from "./index.es156.js";
import c from "./index.es171.js";
import st from "./index.es209.js";
import Oe from "./index.es265.js";
import K from "./index.es121.js";
import lt from "./index.es146.js";
import { isDOM as Ee } from "./index.es203.js";
import { getShadowRoot as _e } from "./index.es270.js";
import R from "./index.es172.js";
import ct from "./index.es271.js";
import M from "./index.es173.js";
import ft from "./index.es269.js";
import * as n from "react";
import pt from "./index.es272.js";
import mt from "./index.es273.js";
import ke from "./index.es274.js";
import gt from "./index.es275.js";
import vt from "./index.es276.js";
import dt from "./index.es277.js";
import ht from "./index.es278.js";
import { getAlignPopupClassName as Pt, getMotion as xe } from "./index.es279.js";
var Ct = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function Rt() {
  var Ve = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Oe, Q = /* @__PURE__ */ n.forwardRef(function(t, Le) {
    var U = t.prefixCls, S = U === void 0 ? "rc-trigger-popup" : U, ze = t.children, Z = t.action, He = Z === void 0 ? "hover" : Z, Ie = t.showAction, Be = t.hideAction, v = t.popupVisible, Fe = t.defaultPopupVisible, V = t.onPopupVisibleChange, L = t.afterPopupVisibleChange, z = t.mouseEnterDelay, ee = t.mouseLeaveDelay, H = ee === void 0 ? 0.1 : ee, We = t.focusDelay, Xe = t.blurDelay, oe = t.mask, te = t.maskClosable, Ye = te === void 0 ? !0 : te, je = t.getPopupContainer, Je = t.forceRender, qe = t.autoDestroy, Ge = t.destroyPopupOnHide, Ke = t.popup, Qe = t.popupClassName, Ue = t.popupStyle, I = t.popupPlacement, ne = t.builtinPlacements, d = ne === void 0 ? {} : ne, re = t.popupAlign, Ze = t.zIndex, ae = t.stretch, D = t.getPopupClassNameFromAlign, eo = t.fresh, A = t.alignPoint, oo = t.onPopupClick, to = t.onPopupAlign, B = t.arrow, no = t.popupMotion, ro = t.maskMotion, ao = t.popupTransitionName, io = t.popupAnimation, uo = t.maskTransitionName, so = t.maskAnimation, ie = t.className, lo = t.getTriggerDOMNode, F = st(t, Ct), co = qe || Ge || !1, fo = n.useState(!1), ue = c(fo, 2), po = ue[0], mo = ue[1];
    M(function() {
      mo(ft());
    }, []);
    var se = n.useRef({}), g = n.useContext(ke), go = n.useMemo(function() {
      return {
        registerSubPopup: function(o, r) {
          se.current[o] = r, g?.registerSubPopup(o, r);
        }
      };
    }, [g]), vo = ct(), ho = n.useState(null), le = c(ho, 2), u = le[0], Po = le[1], ce = n.useRef(null), Co = R(function(e) {
      ce.current = e, Ee(e) && u !== e && Po(e), g?.registerSubPopup(vo, e);
    }), Ro = n.useState(null), fe = c(Ro, 2), m = fe[0], Mo = fe[1], pe = n.useRef(null), So = R(function(e) {
      Ee(e) && m !== e && (Mo(e), pe.current = e);
    }), w = n.Children.only(ze), f = w?.props || {}, h = {}, Ao = R(function(e) {
      var o, r, i = m;
      return i?.contains(e) || ((o = _e(i)) === null || o === void 0 ? void 0 : o.host) === e || e === i || u?.contains(e) || ((r = _e(u)) === null || r === void 0 ? void 0 : r.host) === e || e === u || Object.values(se.current).some(function(a) {
        return a?.contains(e) || e === a;
      });
    }), yo = xe(S, no, io, ao), bo = xe(S, ro, so, uo), To = n.useState(Fe || !1), me = c(To, 2), Do = me[0], ge = me[1], s = v ?? Do, wo = R(function(e) {
      v === void 0 && ge(e);
    });
    M(function() {
      ge(v || !1);
    }, [v]);
    var y = n.useRef(s);
    y.current = s;
    var $ = n.useRef([]);
    $.current = [];
    var ve = R(function(e) {
      var o;
      wo(e), ((o = $.current[$.current.length - 1]) !== null && o !== void 0 ? o : s) !== e && ($.current.push(e), V?.(e));
    }), de = n.useRef(), he = function() {
      clearTimeout(de.current);
    }, p = function(o) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      he(), r === 0 ? ve(o) : de.current = setTimeout(function() {
        ve(o);
      }, r * 1e3);
    };
    n.useEffect(function() {
      return he;
    }, []);
    var $o = n.useState(!1), Pe = c($o, 2), W = Pe[0], Ce = Pe[1];
    M(function(e) {
      (!e || s) && Ce(!0);
    }, [s]);
    var No = n.useState(null), Re = c(No, 2), X = Re[0], Me = Re[1], Eo = n.useState(null), Se = c(Eo, 2), Y = Se[0], _o = Se[1], N = function(o) {
      _o([o.clientX, o.clientY]);
    }, ko = vt(s, u, A && Y !== null ? Y : m, I, d, re, to), l = c(ko, 11), xo = l[0], Oo = l[1], Vo = l[2], Lo = l[3], zo = l[4], Ho = l[5], Io = l[6], Bo = l[7], Fo = l[8], E = l[9], j = l[10], Wo = gt(po, He, Ie, Be), Ae = c(Wo, 2), _ = Ae[0], b = Ae[1], ye = _.has("click"), k = b.has("click") || b.has("contextMenu"), P = R(function() {
      W || j();
    }), Xo = function() {
      y.current && A && k && p(!1);
    };
    dt(s, m, u, P, Xo), M(function() {
      P();
    }, [Y, I]), M(function() {
      s && !(d != null && d[I]) && P();
    }, [JSON.stringify(re)]);
    var Yo = n.useMemo(function() {
      var e = Pt(d, S, E, A);
      return K(e, D?.(E));
    }, [E, D, d, S, A]);
    n.useImperativeHandle(Le, function() {
      return {
        nativeElement: pe.current,
        popupElement: ce.current,
        forceAlign: P
      };
    });
    var jo = n.useState(0), be = c(jo, 2), Jo = be[0], qo = be[1], Go = n.useState(0), Te = c(Go, 2), Ko = Te[0], Qo = Te[1], De = function() {
      if (ae && m) {
        var o = m.getBoundingClientRect();
        qo(o.width), Qo(o.height);
      }
    }, Uo = function() {
      De(), P();
    }, Zo = function(o) {
      Ce(!1), j(), L?.(o);
    }, et = function() {
      return new Promise(function(o) {
        De(), Me(function() {
          return o;
        });
      });
    };
    M(function() {
      X && (j(), X(), Me(null));
    }, [X]);
    function C(e, o, r, i) {
      h[e] = function(a) {
        var x;
        i?.(a), p(o, r);
        for (var G = arguments.length, Ne = new Array(G > 1 ? G - 1 : 0), O = 1; O < G; O++)
          Ne[O - 1] = arguments[O];
        (x = f[e]) === null || x === void 0 || x.call.apply(x, [f, a].concat(Ne));
      };
    }
    (ye || k) && (h.onClick = function(e) {
      var o;
      y.current && k ? p(!1) : !y.current && ye && (N(e), p(!0));
      for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        i[a - 1] = arguments[a];
      (o = f.onClick) === null || o === void 0 || o.call.apply(o, [f, e].concat(i));
    });
    var ot = ht(s, k, m, u, oe, Ye, Ao, p), tt = _.has("hover"), nt = b.has("hover"), J, we;
    tt && (C("onMouseEnter", !0, z, function(e) {
      N(e);
    }), C("onPointerEnter", !0, z, function(e) {
      N(e);
    }), J = function(o) {
      (s || W) && u !== null && u !== void 0 && u.contains(o.target) && p(!0, z);
    }, A && (h.onMouseMove = function(e) {
      var o;
      (o = f.onMouseMove) === null || o === void 0 || o.call(f, e);
    })), nt && (C("onMouseLeave", !1, H), C("onPointerLeave", !1, H), we = function() {
      p(!1, H);
    }), _.has("focus") && C("onFocus", !0, We), b.has("focus") && C("onBlur", !1, Xe), _.has("contextMenu") && (h.onContextMenu = function(e) {
      var o;
      y.current && b.has("contextMenu") ? p(!1) : (N(e), p(!0)), e.preventDefault();
      for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        i[a - 1] = arguments[a];
      (o = f.onContextMenu) === null || o === void 0 || o.call.apply(o, [f, e].concat(i));
    }), ie && (h.className = K(f.className, ie));
    var q = T(T({}, f), h), $e = {}, rt = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    rt.forEach(function(e) {
      F[e] && ($e[e] = function() {
        for (var o, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
          i[a] = arguments[a];
        (o = q[e]) === null || o === void 0 || o.call.apply(o, [q].concat(i)), F[e].apply(F, i);
      });
    });
    var at = /* @__PURE__ */ n.cloneElement(w, T(T({}, q), $e)), it = {
      x: Ho,
      y: Io
    }, ut = B ? T({}, B !== !0 ? B : {}) : null;
    return /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(lt, {
      disabled: !s,
      ref: So,
      onResize: Uo
    }, /* @__PURE__ */ n.createElement(mt, {
      getTriggerDOMNode: lo
    }, at)), /* @__PURE__ */ n.createElement(ke.Provider, {
      value: go
    }, /* @__PURE__ */ n.createElement(pt, {
      portal: Ve,
      ref: Co,
      prefixCls: S,
      popup: Ke,
      className: K(Qe, Yo),
      style: Ue,
      target: m,
      onMouseEnter: J,
      onMouseLeave: we,
      onPointerEnter: J,
      zIndex: Ze,
      open: s,
      keepDom: W,
      fresh: eo,
      onClick: oo,
      onPointerDownCapture: ot,
      mask: oe,
      motion: yo,
      maskMotion: bo,
      onVisibleChanged: Zo,
      onPrepare: et,
      forceRender: Je,
      autoDestroy: co,
      getPopupContainer: je,
      align: E,
      arrow: ut,
      arrowPos: it,
      ready: xo,
      offsetX: Oo,
      offsetY: Vo,
      offsetR: Lo,
      offsetB: zo,
      onAlign: P,
      stretch: ae,
      targetWidth: Jo / Bo,
      targetHeight: Ko / Fo
    })));
  });
  return process.env.NODE_ENV !== "production" && (Q.displayName = "Trigger"), Q;
}
const Bt = Rt(Oe);
export {
  Bt as default,
  Rt as generateTrigger
};
