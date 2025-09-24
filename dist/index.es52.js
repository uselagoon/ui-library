import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { SidebarProvider as n, SidebarTrigger as s } from "./index.es41.js";
import d from "./index.es53.js";
import l from "./index.es4.js";
function h({ userInfo: t, appInfo: i, signOutFn: a, currentPath: o, children: m }) {
  return /* @__PURE__ */ e(l, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ r(n, { defaultOpen: !0, children: [
    /* @__PURE__ */ e(d, { userInfo: t, appInfo: i, signOutFn: a, currentPath: o }),
    /* @__PURE__ */ r("main", { className: "flex-1 mx-[16px]", children: [
      /* @__PURE__ */ e(s, {}),
      m
    ] })
  ] }) });
}
export {
  h as default
};
