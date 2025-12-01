import { jsx as e, jsxs as m } from "react/jsx-runtime";
import { SidebarProvider as s } from "./index.es41.js";
import n from "./index.es53.js";
import d from "./index.es4.js";
function p({
  userInfo: r,
  appInfo: l,
  signOutFn: t,
  currentPath: a,
  children: i,
  sidenavItems: o
}) {
  return /* @__PURE__ */ e(d, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ e(s, { defaultOpen: !0, children: /* @__PURE__ */ m("div", { className: "flex h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ e(n, { userInfo: r, appInfo: l, signOutFn: t, currentPath: a, sidenavItems: o }),
    /* @__PURE__ */ e("main", { className: "flex-1 overflow-y-auto ml-0 lg:ml-[290px]", children: /* @__PURE__ */ e("div", { className: "mx-[16px]", children: i }) })
  ] }) }) });
}
export {
  p as default
};
