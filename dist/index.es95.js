import "react/jsx-runtime";
import "react";
import "react-highlight-words";
const d = (e, n) => {
  const o = (a) => a.charCodeAt(0) - 64, r = (a) => Math.round(o(a) * 11);
  let t = r(e) % 256, l = r(n) % 256, u = Math.round((o(e) + o(n)) / 2 * 11) % 256;
  return {
    bgColor: `rgb(${t}, ${l}, ${u})`,
    textColor: c(t, l, u) > 0.5 ? "#000000" : "#FFFFFF"
  };
};
function c(e, n, o) {
  const r = [e, n, o].map((t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)));
  return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
const h = (e, n) => {
  const o = e.flatMap((t) => t.sectionItems);
  let r = o.find((t) => n === t.url);
  return r || (r = o.find((t) => n.startsWith(t.url))), r?.url || "";
};
export {
  d as genAvatarBackground,
  h as getCurrentPath
};
