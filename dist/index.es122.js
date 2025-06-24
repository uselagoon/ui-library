import R from "./index.es147.js";
import O from "./index.es156.js";
import j from "./index.es209.js";
import k from "./index.es184.js";
import * as v from "react";
import { forwardRef as M, useRef as W, useImperativeHandle as q } from "react";
import { placements as z } from "./index.es252.js";
import B from "./index.es183.js";
var F = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], G = function(e, y) {
  var d = e.overlayClassName, o = e.trigger, f = o === void 0 ? ["hover"] : o, i = e.mouseEnterDelay, g = i === void 0 ? 0 : i, t = e.mouseLeaveDelay, c = t === void 0 ? 0.1 : t, C = e.overlayStyle, r = e.prefixCls, a = r === void 0 ? "rc-tooltip" : r, b = e.children, h = e.onVisibleChange, V = e.afterVisibleChange, w = e.transitionName, P = e.animation, T = e.motion, n = e.placement, _ = n === void 0 ? "right" : n, l = e.align, D = l === void 0 ? {} : l, m = e.destroyTooltipOnHide, x = m === void 0 ? !1 : m, E = e.defaultVisible, S = e.getTooltipContainer, $ = e.overlayInnerStyle;
  e.arrowContent;
  var N = e.overlay, A = e.id, s = e.showArrow, I = s === void 0 ? !0 : s, L = j(e, F), u = W(null);
  q(y, function() {
    return u.current;
  });
  var p = O({}, L);
  "visible" in e && (p.popupVisible = e.visible);
  var H = function() {
    return /* @__PURE__ */ v.createElement(B, {
      key: "content",
      prefixCls: a,
      id: A,
      overlayInnerStyle: $
    }, N);
  };
  return /* @__PURE__ */ v.createElement(k, R({
    popupClassName: d,
    prefixCls: a,
    popup: H,
    action: f,
    builtinPlacements: z,
    popupPlacement: _,
    ref: u,
    popupAlign: D,
    getPopupContainer: S,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: V,
    popupTransitionName: w,
    popupAnimation: P,
    popupMotion: T,
    defaultPopupVisible: E,
    autoDestroy: x,
    mouseLeaveDelay: c,
    popupStyle: C,
    mouseEnterDelay: g,
    arrow: I
  }, p), b);
};
const ie = /* @__PURE__ */ M(G);
export {
  ie as default
};
