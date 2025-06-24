import a from "./index.es215.js";
var r = /* @__PURE__ */ new Map();
function s(e) {
  e.forEach(function(n) {
    var o, t = n.target;
    (o = r.get(t)) === null || o === void 0 || o.forEach(function(u) {
      return u(t);
    });
  });
}
var i = new a(s);
process.env.NODE_ENV;
process.env.NODE_ENV;
function c(e, n) {
  r.has(e) || (r.set(e, /* @__PURE__ */ new Set()), i.observe(e)), r.get(e).add(n);
}
function f(e, n) {
  r.has(e) && (r.get(e).delete(n), r.get(e).size || (i.unobserve(e), r.delete(e)));
}
export {
  c as observe,
  f as unobserve
};
