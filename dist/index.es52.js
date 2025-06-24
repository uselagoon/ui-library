import { j as e } from "./index.es64.js";
import { SidebarProvider as a, SidebarTrigger as o } from "./index.es41.js";
import m from "./index.es53.js";
import n from "./index.es4.js";
function x({ userInfo: r, appInfo: t, signOutFn: i, children: s }) {
  return /* @__PURE__ */ e.jsx(n, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ e.jsxs(a, { defaultOpen: !0, children: [
    /* @__PURE__ */ e.jsx(m, { userInfo: r, appInfo: t, signOutFn: i }),
    /* @__PURE__ */ e.jsxs("main", { className: "w-fit", children: [
      /* @__PURE__ */ e.jsx(o, {}),
      s
    ] })
  ] }) });
}
export {
  x as default
};
