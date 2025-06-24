import * as t from "react";
import x from "./index.es121.js";
import v from "./index.es183.js";
import "./index.es184.js";
import "./index.es91.js";
import N from "./index.es132.js";
import { parseColor as d } from "./index.es133.js";
import { ConfigContext as g } from "./index.es112.js";
const E = (o) => {
  const {
    prefixCls: a,
    className: l,
    placement: n = "top",
    title: c,
    color: m,
    overlayInnerStyle: i
  } = o, {
    getPrefixCls: p
  } = t.useContext(g), e = p("tooltip", a), [f, s, y] = N(e), r = d(e, m), C = r.arrowStyle, S = Object.assign(Object.assign({}, i), r.overlayStyle), u = x(s, y, e, `${e}-pure`, `${e}-placement-${n}`, l, r.className);
  return f(/* @__PURE__ */ t.createElement("div", {
    className: u,
    style: C
  }, /* @__PURE__ */ t.createElement("div", {
    className: `${e}-arrow`
  }), /* @__PURE__ */ t.createElement(v, Object.assign({}, o, {
    className: s,
    prefixCls: e,
    overlayInnerStyle: S
  }), c)));
};
export {
  E as default
};
