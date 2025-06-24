import { strlen as x, charat as h, trim as j, from as p, substr as q } from "./index.es281.js";
var s = 1, t = 1, m = 0, n = 0, r = 0, i = "";
function B(e, c, b, k, v, w, d, g) {
  return { value: e, root: c, parent: b, type: k, props: v, children: w, line: s, column: t, length: d, return: "", siblings: g };
}
function C() {
  return r;
}
function D() {
  return r = n > 0 ? h(i, --n) : 0, t--, r === 10 && (t = 1, s--), r;
}
function a() {
  return r = n < m ? h(i, n++) : 0, t++, r === 10 && (t = 1, s++), r;
}
function u() {
  return h(i, n);
}
function z() {
  return n;
}
function o(e, c) {
  return q(i, e, c);
}
function f(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function E(e) {
  return s = t = 1, m = x(i = e), n = 0, [];
}
function F(e) {
  return i = "", e;
}
function G(e) {
  return j(o(n - 1, l(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function H(e) {
  for (; (r = u()) && r < 33; )
    a();
  return f(e) > 2 || f(r) > 3 ? "" : " ";
}
function I(e, c) {
  for (; --c && a() && !(r < 48 || r > 102 || r > 57 && r < 65 || r > 70 && r < 97); )
    ;
  return o(e, z() + (c < 6 && u() == 32 && a() == 32));
}
function l(e) {
  for (; a(); )
    switch (r) {
      // ] ) " '
      case e:
        return n;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && l(r);
        break;
      // (
      case 40:
        e === 41 && l(e);
        break;
      // \
      case 92:
        a();
        break;
    }
  return n;
}
function J(e, c) {
  for (; a() && e + r !== 57; )
    if (e + r === 84 && u() === 47)
      break;
  return "/*" + o(c, n - 1) + "*" + p(e === 47 ? e : a());
}
function K(e) {
  for (; !f(u()); )
    a();
  return o(e, n);
}
export {
  E as alloc,
  z as caret,
  C as char,
  r as character,
  i as characters,
  t as column,
  J as commenter,
  F as dealloc,
  G as delimit,
  l as delimiter,
  I as escaping,
  K as identifier,
  m as length,
  s as line,
  a as next,
  B as node,
  u as peek,
  n as position,
  D as prev,
  o as slice,
  f as token,
  H as whitespace
};
