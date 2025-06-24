function l(t) {
  return (t + 8) / t;
}
function c(t) {
  const e = new Array(10).fill(null).map((n, o) => {
    const r = o - 1, i = t * Math.pow(2.71828, r / 5), a = o > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return e[1] = t, e.map((n) => ({
    size: n,
    lineHeight: l(n)
  }));
}
export {
  c as default,
  l as getLineHeight
};
