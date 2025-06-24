function o(t, r) {
  i(t) && (t = "100%");
  var e = n(t);
  return t = r === 360 ? t : Math.min(r, Math.max(0, parseFloat(t))), e && (t = parseInt(String(t * r), 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : (r === 360 ? t = (t < 0 ? t % r + r : t % r) / parseFloat(String(r)) : t = t % r / parseFloat(String(r)), t);
}
function u(t) {
  return Math.min(1, Math.max(0, t));
}
function i(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function n(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function f(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function s(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function c(t) {
  return t.length === 1 ? "0" + t : String(t);
}
export {
  o as bound01,
  f as boundAlpha,
  u as clamp01,
  s as convertToPercentage,
  i as isOnePointZero,
  n as isPercentage,
  c as pad2
};
