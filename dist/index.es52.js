import { jsx as e, jsxs as n } from "react/jsx-runtime";
import { SidebarProvider as s } from "./index.es41.js";
import d from "./index.es53.js";
import l from "./index.es4.js";
function c({
  userInfo: r,
  appInfo: t,
  signOutFn: a,
  currentPath: i,
  children: o,
  sidenavItems: m
}) {
  return /* @__PURE__ */ e(l, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ n(s, { defaultOpen: !0, children: [
    /* @__PURE__ */ e(d, { userInfo: r, appInfo: t, signOutFn: a, currentPath: i, sidenavItems: m }),
    /* @__PURE__ */ e("main", { className: "flex-1 mx-[16px]", children: o })
  ] }) });
}
export {
  c as default
};
