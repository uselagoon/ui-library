import { jsxs as n, Fragment as _, jsx as e } from "react/jsx-runtime";
import { useState as D, Fragment as E } from "react";
import { useSidebar as H, Sidebar as W, SidebarHeader as X, SidebarMenu as $, SidebarMenuItem as s, SidebarContent as q, SidebarGroup as J, SidebarGroupLabel as K, SidebarGroupContent as Q, SidebarMenuButton as u, SidebarMenuSub as R, SidebarFooter as V } from "./index.es41.js";
import Y from "./index.es95.js";
import { genAvatarBackground as z } from "./index.es96.js";
import { Avatar as Z, AvatarImage as I } from "./index.es10.js";
import { AvatarFallback as ee } from "@radix-ui/react-avatar";
import re from "./index.es97.js";
import { useLinkComponent as ae } from "./index.es5.js";
import { Collapsible as ne, CollapsibleTrigger as le, CollapsibleContent as te } from "./index.es19.js";
import { Menu as ie, X as se, ChevronUp as oe } from "lucide-react";
import { Button as M } from "./index.es13.js";
import { cn as ce } from "./index.es71.js";
import de from "./index.es98.js";
const y = (o, c, t) => c.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-1", children: c.children.map((r) => {
  const f = r.children && r.children.length > 0 ? t.has(r.url) || t.has(`${r.url}:parent`) : t.has(r.url);
  return /* @__PURE__ */ n(s, { children: [
    /* @__PURE__ */ e(u, { asChild: !0, isActive: f, children: /* @__PURE__ */ e(o, { href: r.url, className: `${r.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
      r.icon && /* @__PURE__ */ e(r.icon, {}),
      /* @__PURE__ */ e("span", { children: r.title })
    ] }) }) }),
    y(o, r, t)
  ] }, r.title);
}) }) : null;
function $e({ userInfo: o, appInfo: c, currentPath: t, sidenavItems: r, signOutFn: x, ...f }) {
  const b = ae(), { name: B, image: S, email: d } = o, F = !!S, g = B?.split(" ") ?? [], h = g[0] ?? void 0, p = g.length > 1 ? g.slice(1).join(" ") : " ", C = !!(h && p), A = C ? z(h.charAt(0), p.charAt(0)) : z(d.charAt(0), d.charAt(1)), O = C ? h.charAt(0).toUpperCase() + p.charAt(0).toUpperCase() : d.charAt(0).toUpperCase(), U = F ? /* @__PURE__ */ n(Z, { children: [
    /* @__PURE__ */ e(I, { src: S, alt: "user_avatar" }),
    /* @__PURE__ */ e(ee, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(re, { bgColor: A.bgColor, textColor: A.textColor, children: O }), j = C ? /* @__PURE__ */ e("span", { className: "user-name", children: `${h} ${p}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: d }), i = de(r, t), { state: G } = H(), [m, v] = D(!1), L = {
    ...c,
    signOutFn: x,
    isCollapsed: G === "collapsed"
  };
  return /* @__PURE__ */ n(_, { children: [
    !m && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(M, { variant: "ghost", size: "icon", onClick: () => v(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(ie, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ n(
      W,
      {
        variant: "sidebar",
        collapsible: "none",
        ...f,
        className: ce(
          "fixed lg:static top-0 left-0 z-40 h-full lg:h-[unset] bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden pr-4 lg:pr-0",
          "lg:translate-x-0",
          m ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          m && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(M, { variant: "ghost", size: "icon", onClick: () => v(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(se, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(s, { children: /* @__PURE__ */ e(Y, { ...L }) }) }) }),
          /* @__PURE__ */ e(q, { children: r.map((N) => /* @__PURE__ */ n(J, { children: [
            /* @__PURE__ */ e(K, { children: N.section }),
            /* @__PURE__ */ e(Q, { className: "list-none", children: N.sectionItems.map((a) => {
              const P = a.target === "blank", k = a?.onClick, w = Array.from(i).some((l) => l.startsWith(a.url)), T = ["Projects", "Organizations"].includes(a.title);
              return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ n(ne, { open: w, children: [
                /* @__PURE__ */ e(s, { children: /* @__PURE__ */ e(le, { asChild: !0, children: /* @__PURE__ */ e(
                  u,
                  {
                    asChild: !0,
                    isActive: i.has(a.url) || i.has(`${a.url}:parent`),
                    children: /* @__PURE__ */ n(
                      b,
                      {
                        "data-cy": `nav-${a.url.slice(1)}`,
                        onClick: async () => {
                          k && await k();
                        },
                        href: a.url,
                        target: P ? "_blank" : "_self",
                        className: "flex w-full gap-2",
                        children: [
                          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                            a.icon && /* @__PURE__ */ e(a.icon, {}),
                            /* @__PURE__ */ e("span", { children: a.title })
                          ] }),
                          T ? /* @__PURE__ */ e(
                            oe,
                            {
                              className: `ml-auto h-4 w-4 transition-transform ${w ? "rotate-180" : "rotate-90"}`
                            }
                          ) : null
                        ]
                      }
                    )
                  }
                ) }) }),
                /* @__PURE__ */ e(te, { children: /* @__PURE__ */ e(R, { children: a.children?.map((l) => /* @__PURE__ */ n(s, { children: [
                  /* @__PURE__ */ e(
                    u,
                    {
                      asChild: !0,
                      isActive: i.has(l.url) || i.has(`${l.url}:parent`),
                      children: /* @__PURE__ */ e(b, { href: l.url, className: "mt-2", children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                        l.icon && /* @__PURE__ */ e(l.icon, {}),
                        /* @__PURE__ */ e("span", { children: l.title })
                      ] }) })
                    }
                  ),
                  y(b, l, i)
                ] }, l.title)) }) })
              ] }) }, a.title);
            }) })
          ] }, N.section)) }),
          /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(s, { children: /* @__PURE__ */ n(u, { size: "lg", children: [
            U,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: j }) })
          ] }) }) }) })
        ]
      }
    ),
    m && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => v(!1) })
  ] });
}
export {
  $e as default
};
