const s = function(i) {
  if (!i)
    return !1;
  if (i instanceof Element) {
    if (i.offsetParent)
      return !0;
    if (i.getBBox) {
      var t = i.getBBox(), f = t.width, u = t.height;
      if (f || u)
        return !0;
    }
    if (i.getBoundingClientRect) {
      var r = i.getBoundingClientRect(), n = r.width, a = r.height;
      if (n || a)
        return !0;
    }
  }
  return !1;
};
export {
  s as default
};
