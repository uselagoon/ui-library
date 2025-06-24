import { updateCSS as f, removeCSS as p } from "./index.es163.js";
function g(t) {
  var o = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = o;
  var e = r.style;
  e.position = "absolute", e.left = "0", e.top = "0", e.width = "100px", e.height = "100px", e.overflow = "scroll";
  var a, i;
  if (t) {
    var c = getComputedStyle(t);
    e.scrollbarColor = c.scrollbarColor, e.scrollbarWidth = c.scrollbarWidth;
    var n = getComputedStyle(t, "::-webkit-scrollbar"), l = parseInt(n.width, 10), d = parseInt(n.height, 10);
    try {
      var h = l ? "width: ".concat(n.width, ";") : "", s = d ? "height: ".concat(n.height, ";") : "";
      f(`
#`.concat(o, `::-webkit-scrollbar {
`).concat(h, `
`).concat(s, `
}`), o);
    } catch (v) {
      console.error(v), a = l, i = d;
    }
  }
  document.body.appendChild(r);
  var u = t && a && !isNaN(a) ? a : r.offsetWidth - r.clientWidth, m = t && i && !isNaN(i) ? i : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), p(o), {
    width: u,
    height: m
  };
}
function C(t) {
  return typeof document > "u" || !t || !(t instanceof Element) ? {
    width: 0,
    height: 0
  } : g(t);
}
export {
  C as getTargetScrollBarSize
};
