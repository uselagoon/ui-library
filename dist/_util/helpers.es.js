import "react/jsx-runtime";
import "react";
import "react-highlight-words";
const F = (n, e) => {
  const r = (a) => a.charCodeAt(0) - 64, t = (a) => Math.round(r(a) * 11);
  let o = t(n) % 256, u = t(e) % 256, l = Math.round((r(n) + r(e)) / 2 * 11) % 256;
  return {
    bgColor: `rgb(${o}, ${u}, ${l})`,
    textColor: c(o, u, l) > 0.5 ? "#000000" : "#FFFFFF"
  };
};
function c(n, e, r) {
  const t = [n, e, r].map((o) => (o /= 255, o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)));
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
}
export {
  F as genAvatarBackground
};
