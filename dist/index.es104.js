import y from "./index.es155.js";
import b from "./index.es156.js";
import A from "./index.es144.js";
import j from "./index.es157.js";
import s from "./index.es158.js";
function p(e, n, t, r) {
  if (!n.length)
    return t;
  var c = j(n), a = c[0], f = c.slice(1), o;
  return !e && typeof a == "number" ? o = [] : Array.isArray(e) ? o = A(e) : o = b({}, e), r && t === void 0 && f.length === 1 ? delete o[a][f[0]] : o[a] = p(o[a], f, t, r), o;
}
function l(e, n, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && t === void 0 && !s(e, n.slice(0, -1)) ? e : p(e, n, t, r);
}
function O(e) {
  return y(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function g(e) {
  return Array.isArray(e) ? [] : {};
}
var S = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function x() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = g(n[0]);
  return n.forEach(function(c) {
    function a(f, o) {
      var u = new Set(o), i = s(c, f), m = Array.isArray(i);
      if (m || O(i)) {
        if (!u.has(i)) {
          u.add(i);
          var d = s(r, f);
          m ? r = l(r, f, []) : (!d || y(d) !== "object") && (r = l(r, f, g(i))), S(i).forEach(function(v) {
            a([].concat(A(f), [v]), u);
          });
        }
      } else
        r = l(r, f, i);
    }
    a([]);
  }), r;
}
export {
  l as default,
  x as merge
};
