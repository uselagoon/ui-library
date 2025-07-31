import { jsx as t, Fragment as d } from "react/jsx-runtime";
import { Tabs as g, TabsList as u, TabsTrigger as y } from "./index.es47.js";
const b = ({ items: a, pathname: n, onTabNav: o, basePath: s }) => {
  const i = [...a].sort((e, r) => r.key.length - e.key.length), c = () => i.find((r) => {
    const l = `${s}/${r.key}`;
    return n === l || n.startsWith(`${l}/`);
  })?.key || a[0]?.key || "", h = (e) => {
    o?.(e);
  };
  return /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(g, { value: c(), onValueChange: h, children: /* @__PURE__ */ t(u, { children: a.map((e) => /* @__PURE__ */ t(y, { value: e.key, children: e.label }, e.key)) }) }) });
};
b.displayName = "TabNavigation";
export {
  b as default
};
