function t() {
  return !1;
}
var o = !1;
function n() {
  return o;
}
const d = process.env.NODE_ENV === "production" ? t : n;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (e && typeof e.webpackHotUpdate == "function") {
    var u = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return o = !0, setTimeout(function() {
        o = !1;
      }, 0), u.apply(void 0, arguments);
    };
  }
}
export {
  d as default
};
