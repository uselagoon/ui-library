import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { SidebarProvider as n, SidebarTrigger as s } from "./index.es41.js";
import d from "./index.es53.js";
import l from "./index.es4.js";
function p({ userInfo: t, appInfo: i, signOutFn: a, currentPath: o, children: m }) {
  return /* @__PURE__ */ e(l, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ r(n, { defaultOpen: !0, children: [
    /* @__PURE__ */ e(d, { userInfo: t, appInfo: i, signOutFn: a, currentPath: o }),
    /* @__PURE__ */ r("main", { className: "w-fit", children: [
      /* @__PURE__ */ e(s, {}),
      m
    ] })
  ] }) });
}
export {
  p as default
};
