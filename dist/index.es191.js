const u = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let a = !0;
function l() {
  for (var o = arguments.length, e = new Array(o), t = 0; t < o; t++)
    e[t] = arguments[t];
  if (!u)
    return Object.assign.apply(Object, [{}].concat(e));
  a = !1;
  const s = {};
  return e.forEach((n) => {
    Object.keys(n).forEach((r) => {
      Object.defineProperty(s, r, {
        configurable: !0,
        enumerable: !0,
        get: () => n[r]
      });
    });
  }), a = !0, s;
}
const i = {};
function f() {
}
const d = (o) => {
  let e, t = o, s = f;
  return u && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), t = new Proxy(o, {
    get(n, c) {
      return a && e.add(c), n[c];
    }
  }), s = (n, c) => {
    var r;
    i[n] = {
      global: Array.from(e),
      component: Object.assign(Object.assign({}, (r = i[n]) === null || r === void 0 ? void 0 : r.component), c)
    };
  }), {
    token: t,
    keys: e,
    flush: s
  };
};
export {
  d as default,
  l as merge,
  i as statistic
};
