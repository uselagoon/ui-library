import "./index.es161.js";
import m from "./index.es162.js";
import { updateCSS as f } from "./index.es163.js";
import g from "./index.es105.js";
import p from "./index.es164.js";
import { TinyColor as s } from "./index.es165.js";
const C = `-ant-${Date.now()}-${Math.random()}`;
function y(a, t) {
  const r = {}, n = (e, i) => {
    let l = e.clone();
    return l = i?.(l) || l, l.toRgbString();
  }, c = (e, i) => {
    const l = new s(e), o = p(l.toRgbString());
    r[`${i}-color`] = n(l), r[`${i}-color-disabled`] = o[1], r[`${i}-color-hover`] = o[4], r[`${i}-color-active`] = o[6], r[`${i}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${i}-color-deprecated-bg`] = o[0], r[`${i}-color-deprecated-border`] = o[2];
  };
  if (t.primaryColor) {
    c(t.primaryColor, "primary");
    const e = new s(t.primaryColor), i = p(e.toRgbString());
    i.forEach((o, d) => {
      r[`primary-${d + 1}`] = o;
    }), r["primary-color-deprecated-l-35"] = n(e, (o) => o.lighten(35)), r["primary-color-deprecated-l-20"] = n(e, (o) => o.lighten(20)), r["primary-color-deprecated-t-20"] = n(e, (o) => o.tint(20)), r["primary-color-deprecated-t-50"] = n(e, (o) => o.tint(50)), r["primary-color-deprecated-f-12"] = n(e, (o) => o.setAlpha(o.getAlpha() * 0.12));
    const l = new s(i[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (o) => o.setAlpha(o.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (o) => o.darken(2));
  }
  return t.successColor && c(t.successColor, "success"), t.warningColor && c(t.warningColor, "warning"), t.errorColor && c(t.errorColor, "error"), t.infoColor && c(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((e) => `--${a}-${e}: ${r[e]};`).join(`
`)}
  }
  `.trim();
}
function R(a, t) {
  const r = y(a, t);
  m() ? f(r, `${C}-dynamic-theme`) : process.env.NODE_ENV !== "production" && g(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
export {
  y as getStyle,
  R as registerTheme
};
