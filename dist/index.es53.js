import { jsxs as n, Fragment as T, jsx as e } from "react/jsx-runtime";
import { useState as _, Fragment as D } from "react";
import { Sidebar as E, SidebarContent as W, SidebarGroup as X, SidebarGroupLabel as q, SidebarGroupContent as H, SidebarMenuItem as p, SidebarMenuButton as N, SidebarMenuSub as J, SidebarFooter as K, SidebarMenu as Q } from "./index.es41.js";
import R from "./index.es97.js";
import { genAvatarBackground as $ } from "./index.es98.js";
import { Avatar as V, AvatarImage as Y } from "./index.es10.js";
import { AvatarFallback as Z } from "@radix-ui/react-avatar";
import I from "./index.es99.js";
import { useLinkComponent as ee } from "./index.es5.js";
import { Collapsible as re, CollapsibleTrigger as ae, CollapsibleContent as ne } from "./index.es19.js";
import { Menu as le, X as te, ChevronUp as ie } from "lucide-react";
import { Button as M } from "./index.es13.js";
import { cn as se } from "./index.es71.js";
import oe from "./index.es100.js";
import ce from "./index.es101.js";
const y = (o, c, t) => c.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-1", children: c.children.map((r) => {
  const u = r.children && r.children.length > 0 ? t.has(r.url) || t.has(`${r.url}:parent`) : t.has(r.url);
  return /* @__PURE__ */ n(p, { children: [
    /* @__PURE__ */ e(N, { asChild: !0, isActive: u, children: /* @__PURE__ */ e(o, { href: r.url, className: `${r.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
      r.icon && /* @__PURE__ */ e(r.icon, {}),
      /* @__PURE__ */ e("span", { children: r.title })
    ] }) }) }),
    y(o, r, t)
  ] }, r.title);
}) }) : null;
function $e({ userInfo: o, appInfo: c, currentPath: t, sidenavItems: r, signOutFn: x, documentationUrl: u, ...z }) {
  const f = ee(), { name: F, image: A, email: s } = o, B = !!A, b = F?.split(" ") ?? [], d = b[0] ?? void 0, h = b.length > 1 ? b.slice(1).join(" ") : " ", g = !!(d && h), S = g ? $(d.charAt(0), h.charAt(0)) : $(s.charAt(0), s.charAt(1)), O = g ? d.charAt(0).toUpperCase() + h.charAt(0).toUpperCase() : s.charAt(0).toUpperCase(), U = B ? /* @__PURE__ */ n(V, { children: [
    /* @__PURE__ */ e(Y, { src: A, alt: "user_avatar" }),
    /* @__PURE__ */ e(Z, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(I, { bgColor: S.bgColor, textColor: S.textColor, children: O }), j = g ? /* @__PURE__ */ e("span", { className: "user-name", children: `${d} ${h}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: s }), i = oe(r, t), [m, v] = _(!1), L = {
    ...c,
    signOutFn: x,
    avatar: U,
    userDisplayName: j,
    email: s,
    documentationUrl: u
  };
  return /* @__PURE__ */ n(T, { children: [
    !m && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(M, { variant: "ghost", size: "icon", onClick: () => v(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(le, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ n(
      E,
      {
        variant: "sidebar",
        collapsible: "none",
        ...z,
        className: se(
          "fixed top-0 left-0 z-40 h-screen bg-background transition-transform duration-300",
          "min-w-[290px] overflow-hidden",
          "flex flex-col",
          m ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        ),
        children: [
          m && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(M, { variant: "ghost", size: "icon", onClick: () => v(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(te, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e(ce, {}) }),
          /* @__PURE__ */ e(W, { className: "flex-1 overflow-y-auto min-h-0", children: r.map((C) => /* @__PURE__ */ n(X, { children: [
            /* @__PURE__ */ e(q, { children: C.section }),
            /* @__PURE__ */ e(H, { className: "list-none", children: C.sectionItems.map((a) => {
              const G = a.target === "blank", k = a?.onClick, w = Array.from(i).some((l) => l.startsWith(a.url)), P = ["Projects", "Organizations"].includes(a.title);
              return /* @__PURE__ */ e(D, { children: /* @__PURE__ */ n(re, { open: w, children: [
                /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(ae, { asChild: !0, children: /* @__PURE__ */ e(
                  N,
                  {
                    asChild: !0,
                    isActive: i.has(a.url) || i.has(`${a.url}:parent`),
                    children: /* @__PURE__ */ n(
                      f,
                      {
                        "data-cy": `nav-${a.url.slice(1)}`,
                        onClick: async () => {
                          k && await k();
                        },
                        href: a.url,
                        target: G ? "_blank" : "_self",
                        className: "flex w-full gap-2",
                        children: [
                          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                            a.icon && /* @__PURE__ */ e(a.icon, {}),
                            /* @__PURE__ */ e("span", { children: a.title })
                          ] }),
                          P ? /* @__PURE__ */ e(
                            ie,
                            {
                              className: `ml-auto h-4 w-4 transition-transform ${w ? "rotate-180" : "rotate-90"}`
                            }
                          ) : null
                        ]
                      }
                    )
                  }
                ) }) }),
                /* @__PURE__ */ e(ne, { children: /* @__PURE__ */ e(J, { children: a.children?.map((l) => /* @__PURE__ */ n(p, { children: [
                  /* @__PURE__ */ e(
                    N,
                    {
                      asChild: !0,
                      isActive: i.has(l.url) || i.has(`${l.url}:parent`),
                      children: /* @__PURE__ */ e(f, { href: l.url, className: "mt-2", children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                        l.icon && /* @__PURE__ */ e(l.icon, {}),
                        /* @__PURE__ */ e("span", { children: l.title })
                      ] }) })
                    }
                  ),
                  y(f, l, i)
                ] }, l.title)) }) })
              ] }) }, a.title);
            }) })
          ] }, C.section)) }),
          /* @__PURE__ */ e(K, { className: "flex-shrink-0", children: /* @__PURE__ */ e(Q, { children: /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(R, { ...L }) }) }) })
        ]
      }
    ),
    m && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => v(!1) })
  ] });
}
export {
  $e as default
};
