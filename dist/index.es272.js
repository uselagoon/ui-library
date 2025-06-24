import ae from "./index.es147.js";
import h from "./index.es156.js";
import le from "./index.es171.js";
import fe from "./index.es121.js";
import me from "./index.es141.js";
import "./index.es142.js";
import * as o from "react";
import se from "./index.es146.js";
import ce from "./index.es173.js";
import { composeRef as ue } from "./index.es169.js";
import de from "./index.es288.js";
import ve from "./index.es289.js";
import he from "./index.es290.js";
var ge = /* @__PURE__ */ o.forwardRef(function(e, z) {
  var g = e.popup, A = e.className, s = e.prefixCls, V = e.style, C = e.target, L = e.onVisibleChanged, n = e.open, _ = e.keepDom, I = e.fresh, H = e.onClick, O = e.mask, x = e.arrow, P = e.arrowPos, c = e.align, l = e.motion, W = e.maskMotion, N = e.forceRender, i = e.getPopupContainer, $ = e.autoDestroy, B = e.portal, R = e.zIndex, T = e.onMouseEnter, X = e.onMouseLeave, Y = e.onPointerEnter, j = e.onPointerDownCapture, U = e.ready, q = e.offsetX, F = e.offsetY, G = e.offsetR, J = e.offsetB, K = e.onAlign, k = e.onPrepare, f = e.stretch, u = e.targetWidth, d = e.targetHeight, Q = typeof g == "function" ? g() : g, Z = n || _, y = i?.length > 0, p = o.useState(!i || !y), S = le(p, 2), E = S[0], ee = S[1];
  if (ce(function() {
    !E && y && C && ee(!0);
  }, [E, y, C]), !E)
    return null;
  var r = "auto", t = {
    left: "-1000vw",
    top: "-1000vh",
    right: r,
    bottom: r
  };
  if (U || !n) {
    var w, M = c.points, D = c.dynamicInset || ((w = c._experimental) === null || w === void 0 ? void 0 : w.dynamicInset), te = D && M[0][1] === "r", oe = D && M[0][0] === "b";
    te ? (t.right = G, t.left = r) : (t.left = q, t.right = r), oe ? (t.bottom = J, t.top = r) : (t.top = F, t.bottom = r);
  }
  var a = {};
  return f && (f.includes("height") && d ? a.height = d : f.includes("minHeight") && d && (a.minHeight = d), f.includes("width") && u ? a.width = u : f.includes("minWidth") && u && (a.minWidth = u)), n || (a.pointerEvents = "none"), /* @__PURE__ */ o.createElement(B, {
    open: N || Z,
    getContainer: i && function() {
      return i(C);
    },
    autoDestroy: $
  }, /* @__PURE__ */ o.createElement(ve, {
    prefixCls: s,
    open: n,
    zIndex: R,
    mask: O,
    motion: W
  }), /* @__PURE__ */ o.createElement(se, {
    onResize: K,
    disabled: !n
  }, function(ne) {
    return /* @__PURE__ */ o.createElement(me, ae({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: N,
      leavedClassName: "".concat(s, "-hidden")
    }, l, {
      onAppearPrepare: k,
      onEnterPrepare: k,
      visible: n,
      onVisibleChanged: function(v) {
        var m;
        l == null || (m = l.onVisibleChanged) === null || m === void 0 || m.call(l, v), L(v);
      }
    }), function(b, v) {
      var m = b.className, ie = b.style, re = fe(s, m, A);
      return /* @__PURE__ */ o.createElement("div", {
        ref: ue(ne, z, v),
        className: re,
        style: h(h(h(h({
          "--arrow-x": "".concat(P.x || 0, "px"),
          "--arrow-y": "".concat(P.y || 0, "px")
        }, t), a), ie), {}, {
          boxSizing: "border-box",
          zIndex: R
        }, V),
        onMouseEnter: T,
        onMouseLeave: X,
        onPointerEnter: Y,
        onClick: H,
        onPointerDownCapture: j
      }, x && /* @__PURE__ */ o.createElement(de, {
        prefixCls: s,
        arrow: x,
        arrowPos: P,
        align: c
      }), /* @__PURE__ */ o.createElement(he, {
        cache: !n && !I
      }, Q));
    });
  }));
});
process.env.NODE_ENV !== "production" && (ge.displayName = "Popup");
export {
  ge as default
};
