var t = {}, i = [], f = function(n) {
  i.push(n);
};
function d(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = i.reduce(function(o, c) {
      return c(o ?? "", "warning");
    }, n);
    r && console.error("Warning: ".concat(r));
  }
}
function l(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = i.reduce(function(o, c) {
      return c(o ?? "", "note");
    }, n);
    r && console.warn("Note: ".concat(r));
  }
}
function p() {
  t = {};
}
function a(e, n, r) {
  !n && !t[r] && (e(!1, r), t[r] = !0);
}
function u(e, n) {
  a(d, e, n);
}
function v(e, n) {
  a(l, e, n);
}
u.preMessage = f;
u.resetWarned = p;
u.noteOnce = v;
export {
  a as call,
  u as default,
  l as note,
  v as noteOnce,
  f as preMessage,
  p as resetWarned,
  d as warning,
  u as warningOnce
};
