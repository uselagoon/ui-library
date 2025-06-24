import k, { useContext as U } from "react";
import "./index.es92.js";
import "./index.es93.js";
import Z from "./index.es217.js";
import $ from "./index.es218.js";
import { warningOnce as H } from "./index.es96.js";
import "./index.es94.js";
import "./index.es95.js";
import "./index.es97.js";
import "./index.es101.js";
import { token2CSSVar as K } from "./index.es220.js";
import "./index.es173.js";
import "./index.es169.js";
import { ConfigContext as M } from "./index.es112.js";
import { genLinkStyle as B, genCommonStyle as F } from "./index.es186.js";
import y, { unitless as L, ignore as N } from "./index.es130.js";
import q from "./index.es243.js";
import G from "./index.es246.js";
import J, { merge as b } from "./index.es191.js";
import Q from "./index.es120.js";
const E = (n, i, o) => {
  var t;
  return typeof o == "function" ? o(b(i, (t = i[n]) !== null && t !== void 0 ? t : {})) : o ?? {};
}, x = (n, i, o, t) => {
  const e = Object.assign({}, i[n]);
  if (t?.deprecatedTokens) {
    const {
      deprecatedTokens: l
    } = t;
    l.forEach((a) => {
      let [d, r] = a;
      var s;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && H(!e?.[d], `Component Token \`${String(d)}\` of ${n} is deprecated. Please use \`${String(r)}\` instead.`), (e?.[d] || e?.[r]) && ((s = e[r]) !== null && s !== void 0 || (e[r] = e?.[d]));
    });
  }
  const c = Object.assign(Object.assign({}, o), e);
  return Object.keys(c).forEach((l) => {
    c[l] === i[l] && delete c[l];
  }), c;
}, W = (n, i) => `${[i, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function X(n, i, o) {
  let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const e = Array.isArray(n) ? n : [n, n], [c] = e, l = e.join("-");
  return function(a) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a;
    const [r, s, u, g, f] = y(), {
      getPrefixCls: p,
      iconPrefixCls: m,
      csp: S
    } = U(M), C = p(), h = f ? "css" : "js", R = q(h), {
      max: A,
      min: P
    } = G(h), O = {
      theme: r,
      token: g,
      hashId: u,
      nonce: () => S?.nonce,
      clientOnly: t.clientOnly,
      // antd is always at top of styles
      order: t.order || -999
    };
    return $(Object.assign(Object.assign({}, O), {
      clientOnly: !1,
      path: ["Shared", C]
    }), () => [{
      // Link
      "&": B(g)
    }]), Q(m, S), [$(Object.assign(Object.assign({}, O), {
      path: [l, a, m]
    }), () => {
      if (t.injectStyle === !1)
        return [];
      const {
        token: _,
        flush: w
      } = J(g), v = E(c, s, o), I = `.${a}`, T = x(c, s, v, {
        deprecatedTokens: t.deprecatedTokens
      });
      f && Object.keys(v).forEach((V) => {
        v[V] = `var(${K(V, W(c, f.prefix))})`;
      });
      const j = b(_, {
        componentCls: I,
        prefixCls: a,
        iconCls: `.${m}`,
        antCls: `.${C}`,
        calc: R,
        // @ts-ignore
        max: A,
        // @ts-ignore
        min: P
      }, f ? v : T), z = i(j, {
        hashId: u,
        prefixCls: a,
        rootPrefixCls: C,
        iconPrefixCls: m
      });
      return w(c, T), [t.resetStyle === !1 ? null : F(j, a, d), z];
    }), u];
  };
}
const Y = (n, i, o) => {
  function t(r) {
    return `${n}${r.slice(0, 1).toUpperCase()}${r.slice(1)}`;
  }
  const {
    unitless: e = {},
    injectStyle: c = !0
  } = o ?? {}, l = {
    [t("zIndexPopup")]: !0
  };
  Object.keys(e).forEach((r) => {
    l[t(r)] = e[r];
  });
  const a = (r) => {
    let {
      rootCls: s,
      cssVar: u
    } = r;
    const [, g] = y();
    return Z({
      path: [n],
      prefix: u.prefix,
      key: u?.key,
      unitless: Object.assign(Object.assign({}, L), l),
      ignore: N,
      token: g,
      scope: s
    }, () => {
      const f = E(n, g, i), p = x(n, g, f, {
        deprecatedTokens: o?.deprecatedTokens
      });
      return Object.keys(f).forEach((m) => {
        p[t(m)] = p[m], delete p[m];
      }), p;
    }), null;
  };
  return (r) => {
    const [, , , , s] = y();
    return [(u) => c && s ? /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(a, {
      rootCls: r,
      cssVar: s,
      component: n
    }), u) : u, s?.key];
  };
}, ye = (n, i, o, t) => {
  const e = X(n, i, o, t), c = Y(Array.isArray(n) ? n[0] : n, o, t);
  return function(l) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : l;
    const [, d] = e(l, a), [r, s] = c(a);
    return [r, d, s];
  };
};
export {
  X as default,
  ye as genStyleHooks
};
