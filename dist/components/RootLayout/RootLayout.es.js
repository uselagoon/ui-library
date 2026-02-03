import { jsx as e, jsxs as u } from "react/jsx-runtime";
import { SidebarProvider as c } from "../ui/sidebar.es.js";
import h from "../Sidenav/Sidenav.es.js";
import p from "../../providers/ThemeProvider.es.js";
function w({
  userInfo: r,
  appInfo: l,
  signOutFn: t,
  currentPath: a,
  children: i,
  sidenavItems: o,
  documentationUrl: m,
  footerItems: s,
  cardProps: n,
  disableAccountLink: d,
  disableChangeFeedLink: f
}) {
  return /* @__PURE__ */ e(p, { attribute: "class", defaultTheme: "system", enableSystem: !0, disableTransitionOnChange: !0, children: /* @__PURE__ */ e(c, { defaultOpen: !0, children: /* @__PURE__ */ u("div", { className: "flex h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ e(h, { userInfo: r, appInfo: l, signOutFn: t, currentPath: a, sidenavItems: o, footerItems: s, documentationUrl: m, cardProps: n, disableAccountLink: d, disableChangeFeedLink: f }),
    /* @__PURE__ */ e("main", { className: "flex-1 overflow-y-auto ml-0 lg:ml-[290px]", children: /* @__PURE__ */ e("div", { className: "mx-[16px]", children: i }) })
  ] }) }) });
}
export {
  w as default
};
