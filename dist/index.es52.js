import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { SidebarProvider as s, SidebarTrigger as d } from "./index.es41.js";
import l from "./index.es53.js";
import u from "./index.es4.js";
function x({
  userInfo: t,
  appInfo: i,
  signOutFn: a,
  currentPath: o,
  children: m,
  sidenavItems: n
}) {
  return /* @__PURE__ */ e(u, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ r(s, { defaultOpen: !0, children: [
    /* @__PURE__ */ e(l, { userInfo: t, appInfo: i, signOutFn: a, currentPath: o, sidenavItems: n }),
    /* @__PURE__ */ r("main", { className: "flex-1 mx-[16px]", children: [
      /* @__PURE__ */ e(d, {}),
      m
    ] })
  ] }) });
}
export {
  x as default
};
