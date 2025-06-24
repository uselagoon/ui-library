import E from "./index.es156.js";
import o from "./index.es171.js";
import { isDOM as va } from "./index.es203.js";
import aa from "./index.es248.js";
import ya from "./index.es172.js";
import Or from "./index.es173.js";
import * as rr from "react";
import { collectScroller as ha, getWin as da, getVisibleArea as nr, toNum as tr } from "./index.es279.js";
function er(v) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, w = "".concat(l), C = w.match(/^(.*)\%$/);
  return C ? v * (parseFloat(C[1]) / 100) : parseFloat(w);
}
function pr(v, l) {
  var w = l || [], C = o(w, 2), D = C[0], Q = C[1];
  return [er(v.width, D), er(v.height, Q)];
}
function rv() {
  var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [v[0], v[1]];
}
function V(v, l) {
  var w = l[0], C = l[1], D, Q;
  return w === "t" ? Q = v.y : w === "b" ? Q = v.y + v.height : Q = v.y + v.height / 2, C === "l" ? D = v.x : C === "r" ? D = v.x + v.width : D = v.x + v.width / 2, {
    x: D,
    y: Q
  };
}
function j(v, l) {
  var w = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return v.map(function(C, D) {
    return D === l ? w[C] || "c" : C;
  }).join("");
}
function qa(v, l, w, C, D, Q, vr) {
  var vv = rr.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: D[C] || {}
  }), Ur = o(vv, 2), q = Ur[0], qr = Ur[1], ar = rr.useRef(0), zr = rr.useMemo(function() {
    return l ? ha(l) : [];
  }, [l]), F = rr.useRef({}), av = function() {
    F.current = {};
  };
  v || av();
  var yv = ya(function() {
    if (l && w && v) {
      let G = function(Er, A) {
        var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Br, or = y.x + Er, Rr = y.y + A, Ov = or + S, nv = Rr + H, tv = Math.max(or, p.left), ev = Math.max(Rr, p.top), pv = Math.min(Ov, p.right), ra = Math.min(nv, p.bottom);
        return Math.max(0, (pv - tv) * (ra - ev));
      }, Ar = function() {
        u = y.y + M, t = u + H, m = y.x + d, e = m + S;
      };
      var L, B, yr, hr, r = l, Jr = r.ownerDocument, dv = da(r), dr = dv.getComputedStyle(r), Mv = dr.width, wv = dr.height, lv = dr.position, Cv = r.style.left, Fv = r.style.top, Dv = r.style.right, Uv = r.style.bottom, qv = r.style.overflow, T = E(E({}, D[C]), Q), k = Jr.createElement("div");
      (L = r.parentElement) === null || L === void 0 || L.appendChild(k), k.style.left = "".concat(r.offsetLeft, "px"), k.style.top = "".concat(r.offsetTop, "px"), k.style.position = lv, k.style.height = "".concat(r.offsetHeight, "px"), k.style.width = "".concat(r.offsetWidth, "px"), r.style.left = "0", r.style.top = "0", r.style.right = "auto", r.style.bottom = "auto", r.style.overflow = "hidden";
      var h;
      if (Array.isArray(w))
        h = {
          x: w[0],
          y: w[1],
          width: 0,
          height: 0
        };
      else {
        var Mr, wr, z = w.getBoundingClientRect();
        z.x = (Mr = z.x) !== null && Mr !== void 0 ? Mr : z.left, z.y = (wr = z.y) !== null && wr !== void 0 ? wr : z.top, h = {
          x: z.x,
          y: z.y,
          width: z.width,
          height: z.height
        };
      }
      var y = r.getBoundingClientRect();
      y.x = (B = y.x) !== null && B !== void 0 ? B : y.left, y.y = (yr = y.y) !== null && yr !== void 0 ? yr : y.top;
      var W = Jr.documentElement, zv = W.clientWidth, Gv = W.clientHeight, Jv = W.scrollWidth, Kv = W.scrollHeight, Kr = W.scrollTop, Qr = W.scrollLeft, H = y.height, S = y.width, I = h.height, i = h.width, Qv = {
        left: 0,
        top: 0,
        right: zv,
        bottom: Gv
      }, Zv = {
        left: -Qr,
        top: -Kr,
        right: Jv - Qr,
        bottom: Kv - Kr
      }, s = T.htmlRegion, Zr = "visible", jr = "visibleFirst";
      s !== "scroll" && s !== jr && (s = Zr);
      var P = s === jr, jv = nr(Zv, zr), a = nr(Qv, zr), Br = s === Zr ? a : jv, R = P ? a : Br;
      r.style.left = "auto", r.style.top = "auto", r.style.right = "0", r.style.bottom = "0";
      var kr = r.getBoundingClientRect();
      r.style.left = Cv, r.style.top = Fv, r.style.right = Dv, r.style.bottom = Uv, r.style.overflow = qv, (hr = r.parentElement) === null || hr === void 0 || hr.removeChild(k);
      var N = tr(Math.round(S / parseFloat(Mv) * 1e3) / 1e3), f = tr(Math.round(H / parseFloat(wv) * 1e3) / 1e3);
      if (N === 0 || f === 0 || va(w) && !aa(w))
        return;
      var Bv = T.offset, kv = T.targetOffset, bv = pr(y, Bv), br = o(bv, 2), J = br[0], K = br[1], Lv = pr(h, kv), Lr = o(Lv, 2), Tv = Lr[0], Wv = Lr[1];
      h.x -= Tv, h.y -= Wv;
      var Hv = T.points || [], Tr = o(Hv, 2), Sv = Tr[0], Nv = Tr[1], b = rv(Nv), U = rv(Sv), Wr = V(h, b), Hr = V(y, U), $ = E({}, T), d = Wr.x - Hr.x + J, M = Wr.y - Hr.y + K, Z = G(d, M), O = G(d, M, a), Sr = V(h, ["t", "l"]), Nr = V(y, ["t", "l"]), fr = V(h, ["b", "r"]), $r = V(y, ["b", "r"]), n = T.overflow || {}, fv = n.adjustX, $v = n.adjustY, Vr = n.shiftX, Ir = n.shiftY, ir = function(A) {
        return typeof A == "boolean" ? A : A >= 0;
      }, u, t, m, e;
      Ar();
      var sr = ir($v), Pr = U[0] === b[0];
      if (sr && U[0] === "t" && (t > R.bottom || F.current.bt)) {
        var x = M;
        Pr ? x -= H - I : x = Sr.y - $r.y - K;
        var ur = G(d, x), Vv = G(d, x, a);
        // Of course use larger one
        ur > Z || ur === Z && (!P || // Choose recommend one
        Vv >= O) ? (F.current.bt = !0, M = x, K = -K, $.points = [j(U, 0), j(b, 0)]) : F.current.bt = !1;
      }
      if (sr && U[0] === "b" && (u < R.top || F.current.tb)) {
        var _ = M;
        Pr ? _ += H - I : _ = fr.y - Nr.y - K;
        var mr = G(d, _), Iv = G(d, _, a);
        // Of course use larger one
        mr > Z || mr === Z && (!P || // Choose recommend one
        Iv >= O) ? (F.current.tb = !0, M = _, K = -K, $.points = [j(U, 0), j(b, 0)]) : F.current.tb = !1;
      }
      var xr = ir(fv), _r = U[1] === b[1];
      if (xr && U[1] === "l" && (e > R.right || F.current.rl)) {
        var X = d;
        _r ? X -= S - i : X = Sr.x - $r.x - J;
        var Xr = G(X, M), iv = G(X, M, a);
        // Of course use larger one
        Xr > Z || Xr === Z && (!P || // Choose recommend one
        iv >= O) ? (F.current.rl = !0, d = X, J = -J, $.points = [j(U, 1), j(b, 1)]) : F.current.rl = !1;
      }
      if (xr && U[1] === "r" && (m < R.left || F.current.lr)) {
        var Y = d;
        _r ? Y += S - i : Y = fr.x - Nr.x - J;
        var Yr = G(Y, M), sv = G(Y, M, a);
        // Of course use larger one
        Yr > Z || Yr === Z && (!P || // Choose recommend one
        sv >= O) ? (F.current.lr = !0, d = Y, J = -J, $.points = [j(U, 1), j(b, 1)]) : F.current.lr = !1;
      }
      Ar();
      var c = Vr === !0 ? 0 : Vr;
      typeof c == "number" && (m < a.left && (d -= m - a.left - J, h.x + i < a.left + c && (d += h.x - a.left + i - c)), e > a.right && (d -= e - a.right - J, h.x > a.right - c && (d += h.x - a.right + c)));
      var g = Ir === !0 ? 0 : Ir;
      typeof g == "number" && (u < a.top && (M -= u - a.top - K, h.y + I < a.top + g && (M += h.y - a.top + I - g)), t > a.bottom && (M -= t - a.bottom - K, h.y > a.bottom - g && (M += h.y - a.bottom + g)));
      var lr = y.x + d, Pv = lr + S, Cr = y.y + M, uv = Cr + H, cr = h.x, mv = cr + i, gr = h.y, xv = gr + I, _v = Math.max(lr, cr), Xv = Math.min(Pv, mv), Yv = (_v + Xv) / 2, cv = Yv - lr, gv = Math.max(Cr, gr), Av = Math.min(uv, xv), Ev = (gv + Av) / 2, ov = Ev - Cr;
      vr?.(l, $);
      var Fr = kr.right - y.x - (d + y.width), Dr = kr.bottom - y.y - (M + y.height);
      N === 1 && (d = Math.round(d), Fr = Math.round(Fr)), f === 1 && (M = Math.round(M), Dr = Math.round(Dr));
      var Rv = {
        ready: !0,
        offsetX: d / N,
        offsetY: M / f,
        offsetR: Fr / N,
        offsetB: Dr / f,
        arrowX: cv / N,
        arrowY: ov / f,
        scaleX: N,
        scaleY: f,
        align: $
      };
      qr(Rv);
    }
  }), hv = function() {
    ar.current += 1;
    var B = ar.current;
    Promise.resolve().then(function() {
      ar.current === B && yv();
    });
  }, Gr = function() {
    qr(function(B) {
      return E(E({}, B), {}, {
        ready: !1
      });
    });
  };
  return Or(Gr, [C]), Or(function() {
    v || Gr();
  }, [v]), [q.ready, q.offsetX, q.offsetY, q.offsetR, q.offsetB, q.arrowX, q.arrowY, q.scaleX, q.scaleY, q.align, hv];
}
export {
  qa as default
};
