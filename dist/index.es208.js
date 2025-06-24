import v from "./index.es155.js";
import f from "./index.es162.js";
function c(n, i) {
  var r = {};
  return r[n.toLowerCase()] = i.toLowerCase(), r["Webkit".concat(n)] = "webkit".concat(i), r["Moz".concat(n)] = "moz".concat(i), r["ms".concat(n)] = "MS".concat(i), r["O".concat(n)] = "o".concat(i.toLowerCase()), r;
}
function p(n, i) {
  var r = {
    animationend: c("Animation", "AnimationEnd"),
    transitionend: c("Transition", "TransitionEnd")
  };
  return n && ("AnimationEvent" in i || delete r.animationend.animation, "TransitionEvent" in i || delete r.transitionend.transition), r;
}
var E = p(f(), typeof window < "u" ? window : {}), d = {};
if (f()) {
  var w = document.createElement("div");
  d = w.style;
}
var t = {};
function u(n) {
  if (t[n])
    return t[n];
  var i = E[n];
  if (i)
    for (var r = Object.keys(i), a = r.length, o = 0; o < a; o += 1) {
      var e = r[o];
      if (Object.prototype.hasOwnProperty.call(i, e) && e in d)
        return t[n] = i[e], t[n];
    }
  return "";
}
var m = u("animationend"), s = u("transitionend"), b = !!(m && s), g = m || "animationend", T = s || "transitionend";
function k(n, i) {
  if (!n) return null;
  if (v(n) === "object") {
    var r = i.replace(/-\w/g, function(a) {
      return a[1].toUpperCase();
    });
    return n[r];
  }
  return "".concat(n, "-").concat(i);
}
export {
  g as animationEndName,
  k as getTransitionName,
  u as getVendorPrefixedEventName,
  p as getVendorPrefixes,
  b as supportTransition,
  T as transitionEndName
};
