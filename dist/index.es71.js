import { jsx as a, Fragment as t } from "react/jsx-runtime";
import { Tabs as s, TabsList as c, TabsTrigger as d } from "./index.es47.js";
const u = ({ items: r, pathname: i, onTabNav: n }) => {
  const l = () => {
    for (const e of r)
      if (i?.endsWith(`/${e.key}`) || i?.includes(`/${e.key}/`))
        return e.key;
    return r[0]?.key || "";
  }, o = (e) => {
    n?.(e);
  };
  return /* @__PURE__ */ a(t, { children: /* @__PURE__ */ a(s, { value: l(), onValueChange: o, children: /* @__PURE__ */ a(c, { children: r.map((e) => /* @__PURE__ */ a(d, { value: e.key, children: e.label }, e.key)) }) }) });
};
u.displayName = "TabNavigation";
export {
  u as default
};
