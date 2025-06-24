import m from "./index.es171.js";
var S = function(r) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(a ? "".concat(a, "-") : "").concat(r).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, k = function(r, a, e) {
  return Object.keys(r).length ? ".".concat(a).concat(e != null && e.scope ? ".".concat(e.scope) : "", "{").concat(Object.entries(r).map(function(u) {
    var t = m(u, 2), v = t[0], l = t[1];
    return "".concat(v, ":").concat(l, ";");
  }).join(""), "}") : "";
}, f = function(r, a, e) {
  var u = {}, t = {};
  return Object.entries(r).forEach(function(v) {
    var l, c, d = m(v, 2), n = d[0], o = d[1];
    if (e != null && (l = e.preserve) !== null && l !== void 0 && l[n])
      t[n] = o;
    else if ((typeof o == "string" || typeof o == "number") && !(e != null && (c = e.ignore) !== null && c !== void 0 && c[n])) {
      var i, s = S(n, e?.prefix);
      u[s] = typeof o == "number" && !(e != null && (i = e.unitless) !== null && i !== void 0 && i[n]) ? "".concat(o, "px") : String(o), t[n] = "var(".concat(s, ")");
    }
  }), [t, k(u, a, {
    scope: e?.scope
  })];
};
export {
  k as serializeCSSVar,
  S as token2CSSVar,
  f as transformToken
};
