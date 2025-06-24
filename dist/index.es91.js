import * as o from "react";
import "./index.es92.js";
import "./index.es93.js";
import "./index.es94.js";
import I from "./index.es95.js";
import "./index.es96.js";
import "./index.es97.js";
import "./index.es98.js";
import "./index.es99.js";
import "./index.es100.js";
import "./index.es101.js";
import Xe from "./index.es102.js";
import Ye from "./index.es103.js";
import { merge as Ze } from "./index.es104.js";
import j, { WarningContext as et } from "./index.es105.js";
import tt from "./index.es106.js";
import ot, { ANT_MARK as rt } from "./index.es107.js";
import nt from "./index.es108.js";
import it from "./index.es109.js";
import { defaultTheme as st, DesignTokenContext as at } from "./index.es110.js";
import ct from "./index.es111.js";
import { ConfigContext as S, defaultIconPrefixCls as lt } from "./index.es112.js";
import { ConfigConsumer as oo } from "./index.es112.js";
import { registerTheme as mt } from "./index.es113.js";
import { DisabledContextProvider as dt } from "./index.es114.js";
import ft from "./index.es115.js";
import pt from "./index.es116.js";
import ut from "./index.es117.js";
import gt from "./index.es118.js";
import W, { SizeContextProvider as vt } from "./index.es119.js";
import Ct from "./index.es120.js";
var ht = function(e, s) {
  var d = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && s.indexOf(i) < 0 && (d[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, i = Object.getOwnPropertySymbols(e); l < i.length; l++)
    s.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[l]) && (d[i[l]] = e[i[l]]);
  return d;
};
let _ = !1;
process.env.NODE_ENV;
const xt = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], Pt = "ant";
let z;
function bt() {
  return z || Pt;
}
function Ot(e) {
  return Object.keys(e).some((s) => s.endsWith("Color"));
}
const yt = (e) => {
  const {
    prefixCls: s,
    iconPrefixCls: d,
    theme: i,
    holderRender: l
  } = e;
  s !== void 0 && (z = s), i && Ot(i) && (process.env.NODE_ENV !== "production" && j(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), mt(bt(), i));
}, Et = (e) => {
  const {
    children: s,
    csp: d,
    autoInsertSpaceInButton: i,
    alert: l,
    anchor: L,
    form: f,
    locale: b,
    componentSize: k,
    direction: R,
    space: K,
    virtual: F,
    dropdownMatchSelectWidth: w,
    popupMatchSelectWidth: O,
    popupOverflow: G,
    legacyLocale: B,
    parentContext: p,
    iconPrefixCls: $,
    theme: M,
    componentDisabled: T,
    segmented: H,
    statistic: q,
    spin: J,
    calendar: Q,
    carousel: U,
    cascader: X,
    collapse: Y,
    typography: Z,
    checkbox: ee,
    descriptions: te,
    divider: oe,
    drawer: re,
    skeleton: ne,
    steps: ie,
    image: se,
    layout: ae,
    list: ce,
    mentions: le,
    modal: me,
    progress: de,
    result: fe,
    slider: pe,
    breadcrumb: ue,
    menu: ge,
    pagination: ve,
    input: Ce,
    textArea: he,
    empty: xe,
    badge: Pe,
    radio: be,
    rate: Oe,
    switch: ye,
    transfer: Ee,
    avatar: _e,
    message: je,
    tag: Se,
    table: ke,
    card: we,
    tabs: Me,
    timeline: Te,
    timePicker: Ne,
    upload: Ve,
    notification: Ae,
    tree: De,
    colorPicker: Ie,
    datePicker: We,
    rangePicker: ze,
    flex: Le,
    wave: Re,
    dropdown: Ke,
    warning: Fe,
    tour: Ge,
    floatButtonGroup: Be
  } = e, N = o.useCallback((t, n) => {
    const {
      prefixCls: a
    } = e;
    if (n)
      return n;
    const c = a || p.getPrefixCls("");
    return t ? `${c}-${t}` : c;
  }, [p.getPrefixCls, e.prefixCls]), v = $ || p.iconPrefixCls || lt, C = d || p.csp;
  Ct(v, C);
  const h = pt(M, p.theme, {
    prefixCls: N("")
  });
  process.env.NODE_ENV !== "production" && (_ = _ || !!h);
  const y = {
    csp: C,
    autoInsertSpaceInButton: i,
    alert: l,
    anchor: L,
    locale: b || B,
    direction: R,
    space: K,
    virtual: F,
    popupMatchSelectWidth: O ?? w,
    popupOverflow: G,
    getPrefixCls: N,
    iconPrefixCls: v,
    theme: h,
    segmented: H,
    statistic: q,
    spin: J,
    calendar: Q,
    carousel: U,
    cascader: X,
    collapse: Y,
    typography: Z,
    checkbox: ee,
    descriptions: te,
    divider: oe,
    drawer: re,
    skeleton: ne,
    steps: ie,
    image: se,
    input: Ce,
    textArea: he,
    layout: ae,
    list: ce,
    mentions: le,
    modal: me,
    progress: de,
    result: fe,
    slider: pe,
    breadcrumb: ue,
    menu: ge,
    pagination: ve,
    empty: xe,
    badge: Pe,
    radio: be,
    rate: Oe,
    switch: ye,
    transfer: Ee,
    avatar: _e,
    message: je,
    tag: Se,
    table: ke,
    card: we,
    tabs: Me,
    timeline: Te,
    timePicker: Ne,
    upload: Ve,
    notification: Ae,
    tree: De,
    colorPicker: Ie,
    datePicker: We,
    rangePicker: ze,
    flex: Le,
    wave: Re,
    dropdown: Ke,
    warning: Fe,
    tour: Ge,
    floatButtonGroup: Be
  }, x = Object.assign({}, p);
  Object.keys(y).forEach((t) => {
    y[t] !== void 0 && (x[t] = y[t]);
  }), xt.forEach((t) => {
    const n = e[t];
    n && (x[t] = n);
  });
  const u = Ye(() => x, x, (t, n) => {
    const a = Object.keys(t), c = Object.keys(n);
    return a.length !== c.length || a.some((P) => t[P] !== n[P]);
  }), $e = o.useMemo(() => ({
    prefixCls: v,
    csp: C
  }), [v, C]);
  let r = /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(gt, {
    dropdownMatchSelectWidth: w
  }), s);
  const V = o.useMemo(() => {
    var t, n, a, c;
    return Ze(((t = it.Form) === null || t === void 0 ? void 0 : t.defaultValidateMessages) || {}, ((a = (n = u.locale) === null || n === void 0 ? void 0 : n.Form) === null || a === void 0 ? void 0 : a.defaultValidateMessages) || {}, ((c = u.form) === null || c === void 0 ? void 0 : c.validateMessages) || {}, f?.validateMessages || {});
  }, [u, f?.validateMessages]);
  Object.keys(V).length > 0 && (r = /* @__PURE__ */ o.createElement(tt.Provider, {
    value: V
  }, r)), b && (r = /* @__PURE__ */ o.createElement(ot, {
    locale: b,
    _ANT_MARK__: rt
  }, r)), r = /* @__PURE__ */ o.createElement(Xe.Provider, {
    value: $e
  }, r), k && (r = /* @__PURE__ */ o.createElement(vt, {
    size: k
  }, r)), r = /* @__PURE__ */ o.createElement(ut, null, r);
  const He = o.useMemo(() => {
    const t = h || {}, {
      algorithm: n,
      token: a,
      components: c,
      cssVar: P
    } = t, qe = ht(t, ["algorithm", "token", "components", "cssVar"]), A = n && (!Array.isArray(n) || n.length > 0) ? I(n) : st, E = {};
    Object.entries(c || {}).forEach((Je) => {
      let [Qe, Ue] = Je;
      const m = Object.assign({}, Ue);
      "algorithm" in m && (m.algorithm === !0 ? m.theme = A : (Array.isArray(m.algorithm) || typeof m.algorithm == "function") && (m.theme = I(m.algorithm)), delete m.algorithm), E[Qe] = m;
    });
    const D = Object.assign(Object.assign({}, ct), a);
    return Object.assign(Object.assign({}, qe), {
      theme: A,
      token: D,
      components: E,
      override: Object.assign({
        override: D
      }, E),
      cssVar: P
    });
  }, [h]);
  return M && (r = /* @__PURE__ */ o.createElement(at.Provider, {
    value: He
  }, r)), u.warning && (r = /* @__PURE__ */ o.createElement(et.Provider, {
    value: u.warning
  }, r)), T !== void 0 && (r = /* @__PURE__ */ o.createElement(dt, {
    disabled: T
  }, r)), /* @__PURE__ */ o.createElement(S.Provider, {
    value: u
  }, r);
}, g = (e) => {
  const s = o.useContext(S), d = o.useContext(nt);
  return /* @__PURE__ */ o.createElement(Et, Object.assign({
    parentContext: s,
    legacyLocale: d
  }, e));
};
g.ConfigContext = S;
g.SizeContext = W;
g.config = yt;
g.useConfig = ft;
Object.defineProperty(g, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && j(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), W)
});
process.env.NODE_ENV !== "production" && (g.displayName = "ConfigProvider");
export {
  oo as ConfigConsumer,
  S as ConfigContext,
  g as default,
  lt as defaultIconPrefixCls,
  Pt as defaultPrefixCls
};
