function t(u, r) {
  for (var e = u, n = 0; n < r.length; n += 1) {
    if (e == null)
      return;
    e = e[r[n]];
  }
  return e;
}
export {
  t as default
};
