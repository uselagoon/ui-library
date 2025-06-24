var f = function(n) {
  return +setTimeout(n, 16);
}, o = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (f = function(n) {
  return window.requestAnimationFrame(n);
}, o = function(n) {
  return window.cancelAnimationFrame(n);
});
var u = 0, r = /* @__PURE__ */ new Map();
function c(e) {
  r.delete(e);
}
var d = function(n) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  u += 1;
  var a = u;
  function t(i) {
    if (i === 0)
      c(a), n();
    else {
      var m = f(function() {
        t(i - 1);
      });
      r.set(a, m);
    }
  }
  return t(s), a;
};
d.cancel = function(e) {
  var n = r.get(e);
  return c(e), o(n);
};
process.env.NODE_ENV !== "production" && (d.ids = function() {
  return r;
});
export {
  d as default
};
