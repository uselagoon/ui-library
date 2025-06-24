function c(e, u) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var a, i, f, l, n = [], r = !0, o = !1;
    try {
      if (f = (t = t.call(e)).next, u === 0) {
        if (Object(t) !== t) return;
        r = !1;
      } else for (; !(r = (a = f.call(t)).done) && (n.push(a.value), n.length !== u); r = !0) ;
    } catch (y) {
      o = !0, i = y;
    } finally {
      try {
        if (!r && t.return != null && (l = t.return(), Object(l) !== l)) return;
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}
export {
  c as default
};
