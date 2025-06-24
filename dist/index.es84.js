import "./index.es64.js";
import "react";
import "react-highlight-words";
const i = (r, n) => {
  const a = (e) => e.charCodeAt(0) - 64, o = (e) => Math.round(a(e) * 11);
  let t = o(r) % 256, l = o(n) % 256, c = Math.round((a(r) + a(n)) / 2 * 11) % 256;
  return {
    bgColor: `rgb(${t}, ${l}, ${c})`,
    textColor: u(t, l, c) > 0.5 ? "#000000" : "#FFFFFF"
  };
};
function u(r, n, a) {
  const o = [r, n, a].map((t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)));
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2];
}
const g = (r, n) => r.flatMap((t) => t.sectionItems).find((t) => n.startsWith(t.url))?.url || "";
export {
  i as genAvatarBackground,
  g as getCurrentPath
};
