var e = Math.abs, u = String.fromCharCode;
function i(n) {
  return n.trim();
}
function o(n, r, t) {
  return n.replace(r, t);
}
function c(n, r, t) {
  return n.indexOf(r, t);
}
function f(n, r) {
  return n.charCodeAt(r) | 0;
}
function a(n, r, t) {
  return n.slice(r, t);
}
function s(n) {
  return n.length;
}
function h(n) {
  return n.length;
}
function p(n, r) {
  return r.push(n), n;
}
export {
  e as abs,
  p as append,
  f as charat,
  u as from,
  c as indexof,
  o as replace,
  h as sizeof,
  s as strlen,
  a as substr,
  i as trim
};
