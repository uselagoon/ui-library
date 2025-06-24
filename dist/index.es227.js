import { DECLARATION as G, COMMENT as H, RULESET as J } from "./index.es280.js";
import { strlen as u, append as M, charat as x, replace as O, substr as C, indexof as K, abs as B, sizeof as P, trim as Q, from as F } from "./index.es281.js";
import { dealloc as V, alloc as W, next as y, peek as N, delimit as z, identifier as X, commenter as Y, token as S, escaping as Z, whitespace as _, node as I, char as $, prev as j, caret as D } from "./index.es282.js";
function fa(e) {
  return V(R("", null, null, null, [""], e = W(e), 0, [0], e));
}
function R(e, m, n, c, s, g, L, t, h) {
  for (var d = 0, v = 0, f = L, T = 0, p = 0, k = 0, i = 1, A = 1, o = 1, r = 0, w = "", l = s, E = g, b = c, a = w; A; )
    switch (k = r, r = y()) {
      // (
      case 40:
        if (k != 108 && x(a, f - 1) == 58) {
          K(a += O(z(r), "&", "&\f"), "&\f", B(d ? t[d - 1] : 0)) != -1 && (o = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        a += z(r);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        a += _(k);
        break;
      // \
      case 92:
        a += Z(D() - 1, 7);
        continue;
      // /
      case 47:
        switch (N()) {
          case 42:
          case 47:
            M(aa(Y(y(), D()), m, n, h), h), (S(k || 1) == 5 || S(N() || 1) == 5) && u(a) && C(a, -1, void 0) !== " " && (a += " ");
            break;
          default:
            a += "/";
        }
        break;
      // {
      case 123 * i:
        t[d++] = u(a) * o;
      // } ; \0
      case 125 * i:
      case 59:
      case 0:
        switch (r) {
          // \0 }
          case 0:
          case 125:
            A = 0;
          // ;
          case 59 + v:
            o == -1 && (a = O(a, /\f/g, "")), p > 0 && (u(a) - f || i === 0 && k === 47) && M(p > 32 ? q(a + ";", c, n, f - 1, h) : q(O(a, " ", "") + ";", c, n, f - 2, h), h);
            break;
          // @ ;
          case 59:
            a += ";";
          // { rule/at-rule
          default:
            if (M(b = U(a, m, n, d, v, s, t, w, l = [], E = [], f, g), g), r === 123)
              if (v === 0)
                R(a, m, b, b, l, g, f, t, E);
              else {
                switch (T) {
                  // c(ontainer)
                  case 99:
                    if (x(a, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (x(a, 2) === 97) break;
                  default:
                    v = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                v ? R(e, b, b, c && M(U(e, b, b, 0, 0, s, t, w, s, l = [], f, E), E), s, E, f, t, c ? l : E) : R(a, b, b, b, [""], E, 0, t, E);
              }
        }
        d = v = p = 0, i = o = 1, w = a = "", f = L;
        break;
      // :
      case 58:
        f = 1 + u(a), p = k;
      default:
        if (i < 1) {
          if (r == 123)
            --i;
          else if (r == 125 && i++ == 0 && j() == 125)
            continue;
        }
        switch (a += F(r), r * i) {
          // &
          case 38:
            o = v > 0 ? 1 : (a += "\f", -1);
            break;
          // ,
          case 44:
            t[d++] = (u(a) - 1) * o, o = 1;
            break;
          // @
          case 64:
            N() === 45 && (a += z(y())), T = N(), v = f = u(w = a += X(D())), r++;
            break;
          // -
          case 45:
            k === 45 && u(a) == 2 && (i = 0);
        }
    }
  return g;
}
function U(e, m, n, c, s, g, L, t, h, d, v, f) {
  for (var T = s - 1, p = s === 0 ? g : [""], k = P(p), i = 0, A = 0, o = 0; i < c; ++i)
    for (var r = 0, w = C(e, T + 1, T = B(A = L[i])), l = e; r < k; ++r)
      (l = Q(A > 0 ? p[r] + " " + w : O(w, /&\f/g, p[r]))) && (h[o++] = l);
  return I(e, m, n, s === 0 ? J : t, h, d, v, f);
}
function aa(e, m, n, c) {
  return I(e, m, n, H, F($()), C(e, 2, -2), 0, c);
}
function q(e, m, n, c, s) {
  return I(e, m, n, G, C(e, 0, c), C(e, c + 1, -1), c, s);
}
export {
  aa as comment,
  fa as compile,
  q as declaration,
  R as parse,
  U as ruleset
};
