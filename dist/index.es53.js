import { jsxs as a, Fragment as _, jsx as e } from "react/jsx-runtime";
import { useState as D, Fragment as E } from "react";
import { useSidebar as H, Sidebar as W, SidebarHeader as X, SidebarMenu as k, SidebarMenuItem as t, SidebarContent as q, SidebarGroup as J, SidebarGroupLabel as K, SidebarGroupContent as Q, SidebarMenuButton as u, SidebarMenuSub as R, SidebarFooter as V } from "./index.es41.js";
import Y from "./index.es94.js";
import { genAvatarBackground as w } from "./index.es95.js";
import { Avatar as Z, AvatarImage as I } from "./index.es10.js";
import { AvatarFallback as ee } from "@radix-ui/react-avatar";
import re from "./index.es96.js";
import { useLinkComponent as ae } from "./index.es5.js";
import { Collapsible as le, CollapsibleTrigger as ne, CollapsibleContent as te } from "./index.es19.js";
import { Menu as ie, X as se, ChevronUp as oe } from "lucide-react";
import { Button as z } from "./index.es13.js";
import { cn as ce } from "./index.es70.js";
import de from "./index.es97.js";
const M = (i, s, o) => s.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-1", children: s.children.map((l) => /* @__PURE__ */ a(t, { children: [
  /* @__PURE__ */ e(u, { asChild: !0, isActive: o.has(l.url), children: /* @__PURE__ */ e(i, { href: l.url, className: `${l.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
    l.icon && /* @__PURE__ */ e(l.icon, {}),
    /* @__PURE__ */ e("span", { children: l.title })
  ] }) }) }),
  M(i, l, o)
] }, l.title)) }) : null;
function ze({ userInfo: i, appInfo: s, currentPath: o, sidenavItems: l, signOutFn: $, ...y }) {
  const f = ae(), { name: B, image: N, email: c } = i, F = !!N, b = B?.split(" ") ?? [], d = b[0] ?? void 0, h = b.length > 1 ? b.slice(1).join(" ") : " ", g = !!(d && h), x = g ? w(d.charAt(0), h.charAt(0)) : w(c.charAt(0), c.charAt(1)), O = g ? d.charAt(0).toUpperCase() + h.charAt(0).toUpperCase() : c.charAt(0).toUpperCase(), P = F ? /* @__PURE__ */ a(Z, { children: [
    /* @__PURE__ */ e(I, { src: N, alt: "user_avatar" }),
    /* @__PURE__ */ e(ee, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(re, { bgColor: x.bgColor, textColor: x.textColor, children: O }), U = g ? /* @__PURE__ */ e("span", { className: "user-name", children: `${d} ${h}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: c }), m = de(l, o), { state: j } = H(), [p, v] = D(!1), G = {
    ...s,
    signOutFn: $,
    isCollapsed: j === "collapsed"
  };
  return /* @__PURE__ */ a(_, { children: [
    !p && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(z, { variant: "ghost", size: "icon", onClick: () => v(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(ie, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ a(
      W,
      {
        variant: "sidebar",
        collapsible: "none",
        ...y,
        className: ce(
          "fixed lg:static top-0 left-0 z-40 h-full lg:h-[unset] bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden pr-4 lg:pr-0",
          "lg:translate-x-0",
          p ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          p && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(z, { variant: "ghost", size: "icon", onClick: () => v(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(se, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e(k, { children: /* @__PURE__ */ e(t, { children: /* @__PURE__ */ e(Y, { ...G }) }) }) }),
          /* @__PURE__ */ e(q, { children: l.map((C) => /* @__PURE__ */ a(J, { children: [
            /* @__PURE__ */ e(K, { children: C.section }),
            /* @__PURE__ */ e(Q, { className: "list-none", children: C.sectionItems.map((r) => {
              const L = r.target === "blank", S = r?.onClick, A = Array.from(m).some((n) => n.startsWith(r.url)), T = ["Projects", "Organizations"].includes(r.title);
              return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ a(le, { open: A, children: [
                /* @__PURE__ */ e(t, { children: /* @__PURE__ */ e(ne, { asChild: !0, children: /* @__PURE__ */ e(u, { asChild: !0, isActive: m.has(r.url), children: /* @__PURE__ */ a(
                  f,
                  {
                    "data-cy": `nav-${r.url.slice(1)}`,
                    onClick: async () => {
                      S && await S();
                    },
                    href: r.url,
                    target: L ? "_blank" : "_self",
                    className: "flex w-full gap-2",
                    children: [
                      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                        r.icon && /* @__PURE__ */ e(r.icon, {}),
                        /* @__PURE__ */ e("span", { children: r.title })
                      ] }),
                      T ? /* @__PURE__ */ e(
                        oe,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${A ? "rotate-180" : "rotate-90"}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ e(te, { children: /* @__PURE__ */ e(R, { children: r.children?.map((n) => /* @__PURE__ */ a(t, { children: [
                  /* @__PURE__ */ e(u, { asChild: !0, isActive: m.has(n.url), children: /* @__PURE__ */ e(f, { href: n.url, className: "mt-2", children: /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                    n.icon && /* @__PURE__ */ e(n.icon, {}),
                    /* @__PURE__ */ e("span", { children: n.title })
                  ] }) }) }),
                  M(f, n, m)
                ] }, n.title)) }) })
              ] }) }, r.title);
            }) })
          ] }, C.section)) }),
          /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(k, { children: /* @__PURE__ */ e(t, { children: /* @__PURE__ */ a(u, { size: "lg", children: [
            P,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: U }) })
          ] }) }) }) })
        ]
      }
    ),
    p && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => v(!1) })
  ] });
}
export {
  ze as default
};
