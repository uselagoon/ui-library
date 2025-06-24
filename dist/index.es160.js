import "./index.es161.js";
import { defaultPresetColors as a } from "./index.es111.js";
import i from "./index.es175.js";
import m from "./index.es176.js";
import g from "./index.es177.js";
import c from "./index.es178.js";
import f from "./index.es179.js";
import { generateColorPalettes as l, generateNeutralColorPalettes as p } from "./index.es180.js";
import b from "./index.es164.js";
function S(e) {
  const s = Object.keys(a).map((t) => {
    const r = b(e[t]);
    return new Array(10).fill(1).reduce((n, j, o) => (n[`${t}-${o + 1}`] = r[o], n[`${t}${o + 1}`] = r[o], n), {});
  }).reduce((t, r) => (t = Object.assign(Object.assign({}, t), r), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), s), i(e, {
    generateColorPalettes: l,
    generateNeutralColorPalettes: p
  })), c(e.fontSize)), f(e)), g(e)), m(e));
}
export {
  S as default
};
