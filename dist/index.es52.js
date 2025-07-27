import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { SidebarProvider as m, SidebarTrigger as n } from "./index.es41.js";
import s from "./index.es53.js";
import d from "./index.es4.js";
function h({ userInfo: t, appInfo: i, signOutFn: a, children: o }) {
  return /* @__PURE__ */ e(d, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ r(m, { defaultOpen: !0, children: [
    /* @__PURE__ */ e(s, { userInfo: t, appInfo: i, signOutFn: a }),
    /* @__PURE__ */ r("main", { className: "w-fit", children: [
      /* @__PURE__ */ e(n, {}),
      o
    ] })
  ] }) });
}
export {
  h as default
};
