import p from "./index.es156.js";
import S from "./index.es162.js";
import E from "./index.es236.js";
var h = "data-rc-order", y = "data-rc-priority", P = "rc-util-key", l = /* @__PURE__ */ new Map();
function C() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = r.mark;
  return e ? e.startsWith("data-") ? e : "data-".concat(e) : P;
}
function c(r) {
  if (r.attachTo)
    return r.attachTo;
  var e = document.querySelector("head");
  return e || document.body;
}
function R(r) {
  return r === "queue" ? "prependQueue" : r ? "prepend" : "append";
}
function m(r) {
  return Array.from((l.get(r) || r).children).filter(function(e) {
    return e.tagName === "STYLE";
  });
}
function b(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!S())
    return null;
  var n = e.csp, i = e.prepend, d = e.priority, a = d === void 0 ? 0 : d, u = R(i), f = u === "prependQueue", t = document.createElement("style");
  t.setAttribute(h, u), f && a && t.setAttribute(y, "".concat(a)), n != null && n.nonce && (t.nonce = n?.nonce), t.innerHTML = r;
  var o = c(e), v = o.firstChild;
  if (i) {
    if (f) {
      var s = (e.styles || m(o)).filter(function(g) {
        if (!["prepend", "prependQueue"].includes(g.getAttribute(h)))
          return !1;
        var N = Number(g.getAttribute(y) || 0);
        return a >= N;
      });
      if (s.length)
        return o.insertBefore(t, s[s.length - 1].nextSibling), t;
    }
    o.insertBefore(t, v);
  } else
    o.appendChild(t);
  return t;
}
function A(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = c(e);
  return (e.styles || m(n)).find(function(i) {
    return i.getAttribute(C(e)) === r;
  });
}
function L(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = A(r, e);
  if (n) {
    var i = c(e);
    i.removeChild(n);
  }
}
function T(r, e) {
  var n = l.get(r);
  if (!n || !E(document, n)) {
    var i = b("", e), d = i.parentNode;
    l.set(r, d), r.removeChild(i);
  }
}
function Q(r, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = c(n), d = m(i), a = p(p({}, n), {}, {
    styles: d
  });
  T(i, a);
  var u = A(e, a);
  if (u) {
    var f, t;
    if ((f = a.csp) !== null && f !== void 0 && f.nonce && u.nonce !== ((t = a.csp) === null || t === void 0 ? void 0 : t.nonce)) {
      var o;
      u.nonce = (o = a.csp) === null || o === void 0 ? void 0 : o.nonce;
    }
    return u.innerHTML !== r && (u.innerHTML = r), u;
  }
  var v = b(r, a);
  return v.setAttribute(C(a), e), v;
}
export {
  b as injectCSS,
  L as removeCSS,
  Q as updateCSS
};
