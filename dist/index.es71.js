import { jsx as a, Fragment as c } from "react/jsx-runtime";
import { Tabs as h, TabsList as d, TabsTrigger as g } from "./index.es47.js";
const y = ({ items: r, pathname: n, onTabNav: s }) => {
  const o = () => [...r].sort((t, i) => i.key.length - t.key.length).find((t) => n === t.key || n.startsWith(`${t.key}/`))?.key || r[0]?.key || "", l = (e) => {
    s?.(e);
  };
  return /* @__PURE__ */ a(c, { children: /* @__PURE__ */ a(h, { value: o(), onValueChange: l, children: /* @__PURE__ */ a(d, { children: r.map((e) => /* @__PURE__ */ a(g, { value: e.key, children: e.label }, e.key)) }) }) });
};
y.displayName = "TabNavigation";
export {
  y as default
};
