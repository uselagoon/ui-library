import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { SidebarProvider as n } from "./index.es41.js";
import d from "./index.es53.js";
import f from "./index.es4.js";
function x({
  userInfo: r,
  appInfo: l,
  signOutFn: t,
  currentPath: a,
  children: i,
  sidenavItems: o,
  documentationUrl: m
}) {
  return /* @__PURE__ */ e(f, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ e(n, { defaultOpen: !0, children: /* @__PURE__ */ s("div", { className: "flex h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ e(d, { userInfo: r, appInfo: l, signOutFn: t, currentPath: a, sidenavItems: o, documentationUrl: m }),
    /* @__PURE__ */ e("main", { className: "flex-1 overflow-y-auto ml-0 lg:ml-[290px]", children: /* @__PURE__ */ e("div", { className: "mx-[16px]", children: i }) })
  ] }) }) });
}
export {
  x as default
};
