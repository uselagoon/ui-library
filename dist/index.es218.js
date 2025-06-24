import er from "./index.es147.js";
import Q from "./index.es202.js";
import M from "./index.es156.js";
import O from "./index.es171.js";
import W from "./index.es144.js";
import F from "./index.es155.js";
import ar from "./index.es219.js";
import { removeCSS as nr, updateCSS as Y } from "./index.es163.js";
import * as w from "react";
import or from "./index.es222.js";
import ir from "./index.es223.js";
import cr from "./index.es224.js";
import "./index.es96.js";
import lr, { ATTR_TOKEN as X, ATTR_MARK as J, CSS_IN_JS_INSTANCE as sr, ATTR_CACHE_PATH as fr } from "./index.es94.js";
import { isClientSide as Z, toStyleStr as B } from "./index.es185.js";
import { existPath as ur, getStyleAndHash as mr, CSS_FILE_STYLE as pr } from "./index.es225.js";
import hr from "./index.es221.js";
import { serialize as vr, stringify as dr } from "./index.es226.js";
import { compile as yr } from "./index.es227.js";
var K = "_skip_check_", rr = "_multi_value_";
function G(t) {
  var m = vr(yr(t), dr);
  return m.replace(/\{%%%\:[^;];}/g, ";");
}
function _r(t) {
  return F(t) === "object" && t && (K in t || rr in t);
}
function V(t, m, s) {
  if (!m)
    return t;
  var E = ".".concat(m), f = s === "low" ? ":where(".concat(E, ")") : E, k = t.split(",").map(function(y) {
    var a, c = y.trim().split(/\s+/), _ = c[0] || "", e = ((a = _.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return _ = "".concat(e).concat(f).concat(_.slice(e.length)), [_].concat(W(c.slice(1))).join(" ");
  });
  return k.join(",");
}
var Sr = function t(m) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, f = E.root, k = E.injectHash, y = E.parentSelectors, a = s.hashId, c = s.layer, _ = s.path, e = s.hashPriority, H = s.transformers, x = H === void 0 ? [] : H, I = s.linters, $ = I === void 0 ? [] : I, n = "", N = {};
  function L(p) {
    var o = p.getName(a);
    if (!N[o]) {
      var i = t(p.style, s, {
        root: !1,
        parentSelectors: y
      }), u = O(i, 1), r = u[0];
      N[o] = "@keyframes ".concat(p.getName(a)).concat(r);
    }
  }
  function z(p) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return p.forEach(function(i) {
      Array.isArray(i) ? z(i, o) : i && o.push(i);
    }), o;
  }
  var q = z(Array.isArray(m) ? m : [m]);
  return q.forEach(function(p) {
    var o = typeof p == "string" && !f ? {} : p;
    if (typeof o == "string")
      n += "".concat(o, `
`);
    else if (o._keyframe)
      L(o);
    else {
      var i = x.reduce(function(u, r) {
        var b;
        return (r == null || (b = r.visit) === null || b === void 0 ? void 0 : b.call(r, u)) || u;
      }, o);
      Object.keys(i).forEach(function(u) {
        var r = i[u];
        if (F(r) === "object" && r && (u !== "animationName" || !r._keyframe) && !_r(r)) {
          var b = !1, A = u.trim(), D = !1;
          (f || k) && a ? A.startsWith("@") ? b = !0 : A === "&" ? A = V("", a, e) : A = V(u, a, e) : f && !a && (A === "&" || A === "") && (A = "", D = !0);
          var U = t(r, s, {
            root: D,
            injectHash: b,
            parentSelectors: [].concat(W(y), [A])
          }), j = O(U, 2), h = j[0], v = j[1];
          N = M(M({}, N), v), n += "".concat(A).concat(h);
        } else {
          let g = function(C, d) {
            process.env.NODE_ENV !== "production" && (F(r) !== "object" || !(r != null && r[K])) && [ir, cr].concat(W($)).forEach(function(l) {
              return l(C, d, {
                path: _,
                hashId: a,
                parentSelectors: y
              });
            });
            var R = C.replace(/[A-Z]/g, function(l) {
              return "-".concat(l.toLowerCase());
            }), S = d;
            !or[C] && typeof S == "number" && S !== 0 && (S = "".concat(S, "px")), C === "animationName" && d !== null && d !== void 0 && d._keyframe && (L(d), S = d.getName(a)), n += "".concat(R, ":").concat(S, ";");
          };
          var P, T = (P = r?.value) !== null && P !== void 0 ? P : r;
          F(r) === "object" && r !== null && r !== void 0 && r[rr] && Array.isArray(T) ? T.forEach(function(C) {
            g(u, C);
          }) : g(u, T);
        }
      });
    }
  }), f ? c && (n && (n = "@layer ".concat(c.name, " {").concat(n, "}")), c.dependencies && (N["@layer ".concat(c.name)] = c.dependencies.map(function(p) {
    return "@layer ".concat(p, ", ").concat(c.name, ";");
  }).join(`
`))) : n = "{".concat(n, "}"), [n, N];
};
function Er(t, m) {
  return ar("".concat(t.join("%")).concat(m));
}
function Ar() {
  return null;
}
var jr = "style";
function Gr(t, m) {
  var s = t.token, E = t.path, f = t.hashId, k = t.layer, y = t.nonce, a = t.clientOnly, c = t.order, _ = c === void 0 ? 0 : c, e = w.useContext(lr), H = e.autoClear, x = e.mock, I = e.defaultCache, $ = e.hashPriority, n = e.container, N = e.ssrInline, L = e.transformers, z = e.linters, q = e.cache, p = e.layer, o = s._tokenKey, i = [o];
  p && i.push("layer"), i.push.apply(i, W(E));
  var u = Z;
  process.env.NODE_ENV !== "production" && x !== void 0 && (u = x === "client");
  var r = hr(
    jr,
    i,
    // Create cache if needed
    function() {
      var j = i.join("|");
      if (ur(j)) {
        var h = mr(j), v = O(h, 2), P = v[0], T = v[1];
        if (P)
          return [P, o, T, {}, a, _];
      }
      var g = m(), C = Sr(g, {
        hashId: f,
        hashPriority: $,
        layer: p ? k : void 0,
        path: E.join("-"),
        transformers: L,
        linters: z
      }), d = O(C, 2), R = d[0], S = d[1], l = G(R), tr = Er(i, l);
      return [l, o, tr, S, a, _];
    },
    // Remove cache if no need
    function(j, h) {
      var v = O(j, 3), P = v[2];
      (h || H) && Z && nr(P, {
        mark: J
      });
    },
    // Effect: Inject style here
    function(j) {
      var h = O(j, 4), v = h[0];
      h[1];
      var P = h[2], T = h[3];
      if (u && v !== pr) {
        var g = {
          mark: J,
          prepend: p ? !1 : "queue",
          attachTo: n,
          priority: _
        }, C = typeof y == "function" ? y() : y;
        C && (g.csp = {
          nonce: C
        });
        var d = [], R = [];
        Object.keys(T).forEach(function(l) {
          l.startsWith("@layer") ? d.push(l) : R.push(l);
        }), d.forEach(function(l) {
          Y(G(T[l]), "_layer-".concat(l), M(M({}, g), {}, {
            prepend: !0
          }));
        });
        var S = Y(v, P, g);
        S[sr] = q.instanceId, S.setAttribute(X, o), process.env.NODE_ENV !== "production" && S.setAttribute(fr, i.join("|")), R.forEach(function(l) {
          Y(G(T[l]), "_effect-".concat(l), g);
        });
      }
    }
  ), b = O(r, 3), A = b[0], D = b[1], U = b[2];
  return function(j) {
    var h;
    if (!N || u || !I)
      h = /* @__PURE__ */ w.createElement(Ar, null);
    else {
      var v;
      h = /* @__PURE__ */ w.createElement("style", er({}, (v = {}, Q(v, X, D), Q(v, J, U), v), {
        dangerouslySetInnerHTML: {
          __html: A
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, h, j);
  };
}
var Mr = function(m, s, E) {
  var f = O(m, 6), k = f[0], y = f[1], a = f[2], c = f[3], _ = f[4], e = f[5], H = E || {}, x = H.plain;
  if (_)
    return null;
  var I = k, $ = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(e)
  };
  return I = B(k, y, a, $, x), c && Object.keys(c).forEach(function(n) {
    if (!s[n]) {
      s[n] = !0;
      var N = G(c[n]), L = B(N, y, "_effect-".concat(n), $, x);
      n.startsWith("@layer") ? I = L + I : I += L;
    }
  }), [e, a, I];
};
export {
  jr as STYLE_PREFIX,
  Gr as default,
  Mr as extract,
  G as normalizeStyle,
  Sr as parseStyle,
  Er as uniqueHash
};
