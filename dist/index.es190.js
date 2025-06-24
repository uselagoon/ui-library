import { PresetColors as a } from "./index.es145.js";
function l(t, s) {
  return a.reduce((o, r) => {
    const e = t[`${r}1`], n = t[`${r}3`], i = t[`${r}6`], C = t[`${r}7`];
    return Object.assign(Object.assign({}, o), s(r, {
      lightColor: e,
      lightBorderColor: n,
      darkColor: i,
      textColor: C
    }));
  }, {});
}
export {
  l as default
};
