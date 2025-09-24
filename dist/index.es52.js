import { jsx as e, jsxs as m } from "react/jsx-runtime";
import { SidebarProvider as n } from "./index.es41.js";
import s from "./index.es53.js";
import d from "./index.es4.js";
function x({ userInfo: r, appInfo: t, signOutFn: a, currentPath: i, children: o }) {
  return /* @__PURE__ */ e(d, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ m(n, { defaultOpen: !0, children: [
    /* @__PURE__ */ e(s, { userInfo: r, appInfo: t, signOutFn: a, currentPath: i }),
    /* @__PURE__ */ e("main", { className: "flex-1 mx-[16px]", children: o })
  ] }) });
}
export {
  x as default
};
