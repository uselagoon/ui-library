function r(e, a) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(a);
  for (var n = a; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
export {
  r as default
};
