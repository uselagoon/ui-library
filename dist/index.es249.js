import { TinyColor as r } from "./index.es165.js";
function o(n) {
  return n >= 0 && n <= 255;
}
function d(n, f) {
  const {
    r: e,
    g: a,
    b,
    a: s
  } = new r(n).toRgb();
  if (s < 1)
    return n;
  const {
    r: c,
    g: h,
    b: l
  } = new r(f).toRgb();
  for (let t = 0.01; t <= 1; t += 0.01) {
    const g = Math.round((e - c * (1 - t)) / t), i = Math.round((a - h * (1 - t)) / t), u = Math.round((b - l * (1 - t)) / t);
    if (o(g) && o(i) && o(u))
      return new r({
        r: g,
        g: i,
        b: u,
        a: Math.round(t * 100) / 100
      }).toRgbString();
  }
  return new r({
    r: e,
    g: a,
    b,
    a: 1
  }).toRgbString();
}
export {
  d as default
};
