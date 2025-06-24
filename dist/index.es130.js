import h from "react";
import "./index.es92.js";
import M from "./index.es93.js";
import "./index.es94.js";
import "./index.es95.js";
import "./index.es96.js";
import "./index.es97.js";
import "./index.es98.js";
import "./index.es99.js";
import "./index.es100.js";
import "./index.es101.js";
import k from "./index.es135.js";
import { DesignTokenContext as v, defaultTheme as X } from "./index.es110.js";
import S from "./index.es111.js";
import d from "./index.es201.js";
var f = function(r, n) {
  var i = {};
  for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && n.indexOf(e) < 0 && (i[e] = r[e]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var t = 0, e = Object.getOwnPropertySymbols(r); t < e.length; t++)
    n.indexOf(e[t]) < 0 && Object.prototype.propertyIsEnumerable.call(r, e[t]) && (i[e[t]] = r[e[t]]);
  return i;
};
const T = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0
}, x = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, O = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, l = (r, n, i) => {
  const e = i.getDerivativeToken(r), {
    override: t
  } = n, s = f(n, ["override"]);
  let o = Object.assign(Object.assign({}, e), {
    override: t
  });
  return o = d(o), s && Object.entries(s).forEach((c) => {
    let [a, u] = c;
    const {
      theme: p
    } = u, m = f(u, ["theme"]);
    let g = m;
    p && (g = l(Object.assign(Object.assign({}, o), m), {
      override: m
    }, p)), o[a] = g;
  }), o;
};
function U() {
  const {
    token: r,
    hashed: n,
    theme: i,
    override: e,
    cssVar: t
  } = h.useContext(v), s = `${k}-${n || ""}`, o = i || X, [c, a, u] = M(o, [S, r], {
    salt: s,
    override: e,
    getComputedToken: l,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: d,
    cssVar: t && {
      prefix: t.prefix,
      key: t.key,
      unitless: T,
      ignore: x,
      preserve: O
    }
  });
  return [o, u, n ? a : "", c, t];
}
export {
  U as default,
  l as getComputedToken,
  x as ignore,
  T as unitless
};
