import * as n from "react";
import I from "./index.es121.js";
import pe from "./index.es122.js";
import fe from "./index.es123.js";
import { useZIndex as de } from "./index.es124.js";
import { getTransitionName as ue } from "./index.es125.js";
import ve from "./index.es126.js";
import { isFragment as ye, cloneElement as Ce } from "./index.es127.js";
import { devUseWarning as ge } from "./index.es105.js";
import be from "./index.es128.js";
import "./index.es91.js";
import { NoCompactStyle as Oe } from "./index.es129.js";
import "./index.es92.js";
import "./index.es93.js";
import "./index.es94.js";
import "./index.es95.js";
import "./index.es96.js";
import "./index.es97.js";
import "./index.es98.js";
import "./index.es99.js";
import "./index.es100.js";
import "./index.es101.js";
import Pe from "./index.es130.js";
import Ne from "./index.es131.js";
import we from "./index.es132.js";
import { parseColor as he } from "./index.es133.js";
import { ConfigContext as xe } from "./index.es112.js";
var Ae = function(e, p) {
  var s = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && p.indexOf(o) < 0 && (s[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
    p.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (s[o[a]] = e[o[a]]);
  return s;
};
const Ee = /* @__PURE__ */ n.forwardRef((e, p) => {
  var s, o;
  const {
    prefixCls: a,
    openClassName: j,
    getTooltipContainer: D,
    overlayClassName: z,
    color: R,
    overlayInnerStyle: H,
    children: f,
    afterOpenChange: y,
    afterVisibleChange: W,
    destroyTooltipOnHide: C,
    arrow: l = !0,
    title: m,
    overlay: g,
    builtinPlacements: x,
    arrowPointAtCenter: b = !1,
    autoAdjustOverflow: $ = !0
  } = e, A = !!l, [, d] = Pe(), {
    getPopupContainer: k,
    getPrefixCls: E,
    direction: F
  } = n.useContext(xe), u = ge("Tooltip"), S = n.useRef(null), V = () => {
    var t;
    (t = S.current) === null || t === void 0 || t.forceAlign();
  };
  n.useImperativeHandle(p, () => ({
    forceAlign: V,
    forcePopupAlign: () => {
      u.deprecated(!1, "forcePopupAlign", "forceAlign"), V();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((t) => {
    let [r, i] = t;
    u.deprecated(!(r in e), r, i);
  }), process.env.NODE_ENV !== "production" && u(!C || typeof C == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && u(!l || typeof l == "boolean" || !("arrowPointAtCenter" in l), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [L, M] = fe(!1, {
    value: (s = e.open) !== null && s !== void 0 ? s : e.visible,
    defaultValue: (o = e.defaultOpen) !== null && o !== void 0 ? o : e.defaultVisible
  }), O = !m && !g && m !== 0, U = (t) => {
    var r, i;
    M(O ? !1 : t), O || ((r = e.onOpenChange) === null || r === void 0 || r.call(e, t), (i = e.onVisibleChange) === null || i === void 0 || i.call(e, t));
  }, X = n.useMemo(() => {
    var t, r;
    let i = b;
    return typeof l == "object" && (i = (r = (t = l.pointAtCenter) !== null && t !== void 0 ? t : l.arrowPointAtCenter) !== null && r !== void 0 ? r : b), x || ve({
      arrowPointAtCenter: i,
      autoAdjustOverflow: $,
      arrowWidth: A ? d.sizePopupArrow : 0,
      borderRadius: d.borderRadius,
      offset: d.marginXXS
    });
  }, [b, l, x, d]), P = n.useMemo(() => m === 0 ? m : g || m || "", [g, m]), Z = /* @__PURE__ */ n.createElement(Oe, null, typeof P == "function" ? P() : P), {
    getPopupContainer: B,
    placement: Y = "top",
    mouseEnterDelay: q = 0.1,
    mouseLeaveDelay: G = 0.1,
    overlayStyle: J,
    rootClassName: K
  } = e, _ = Ae(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), c = E("tooltip", a), Q = E(), ee = e["data-popover-inject"];
  let N = L;
  !("open" in e) && !("visible" in e) && O && (N = !1);
  const w = /* @__PURE__ */ n.isValidElement(f) && !ye(f) ? f : /* @__PURE__ */ n.createElement("span", null, f), v = w.props, oe = !v.className || typeof v.className == "string" ? I(v.className, j || `${c}-open`) : v.className, [te, ne, re] = we(c, !ee), h = he(c, R), ae = h.arrowStyle, le = Object.assign(Object.assign({}, H), h.overlayStyle), ie = I(z, {
    [`${c}-rtl`]: F === "rtl"
  }, h.className, K, ne, re), [se, me] = de("Tooltip", _.zIndex), ce = /* @__PURE__ */ n.createElement(pe, Object.assign({}, _, {
    zIndex: se,
    showArrow: A,
    placement: Y,
    mouseEnterDelay: q,
    mouseLeaveDelay: G,
    prefixCls: c,
    overlayClassName: ie,
    overlayStyle: Object.assign(Object.assign({}, ae), J),
    getTooltipContainer: B || D || k,
    ref: S,
    builtinPlacements: X,
    overlay: Z,
    visible: N,
    onVisibleChange: U,
    afterVisibleChange: y ?? W,
    overlayInnerStyle: le,
    arrowContent: /* @__PURE__ */ n.createElement("span", {
      className: `${c}-arrow-content`
    }),
    motion: {
      motionName: ue(Q, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!C
  }), N ? Ce(w, {
    className: oe
  }) : w);
  return te(/* @__PURE__ */ n.createElement(be.Provider, {
    value: me
  }, ce));
}), T = Ee;
process.env.NODE_ENV !== "production" && (T.displayName = "Tooltip");
T._InternalPanelDoNotUseOrYouWillBeFired = Ne;
export {
  T as default
};
