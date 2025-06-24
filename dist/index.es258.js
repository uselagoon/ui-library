import { warningOnce as a } from "./index.es96.js";
function o(r, n) {
  var t = n.path, c = n.parentSelectors;
  a(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(r).concat(c.length ? " Selector: ".concat(c.join(" | ")) : ""));
}
export {
  o as lintWarning
};
