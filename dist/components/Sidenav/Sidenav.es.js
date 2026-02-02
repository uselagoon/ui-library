import { jsxs as n, Fragment as q, jsx as e } from "react/jsx-runtime";
import { useState as H, Fragment as J } from "react";
import { Sidebar as K, SidebarContent as Q, SidebarGroup as M, SidebarGroupLabel as R, SidebarGroupContent as y, SidebarMenuItem as p, SidebarMenuButton as N, SidebarMenuSub as V, SidebarFooter as Y, SidebarMenu as Z } from "../ui/sidebar.es.js";
import I from "./SidenavFooterMenu.es.js";
import { genAvatarBackground as z } from "../../_util/helpers.es.js";
import { Avatar as ee, AvatarImage as re } from "../ui/avatar.es.js";
import { AvatarFallback as ae } from "@radix-ui/react-avatar";
import ne from "../AvatarBubble/AvatarBubble.es.js";
import { useLinkComponent as le } from "../../providers/NextLinkProvider.es.js";
import { Collapsible as te, CollapsibleTrigger as ie, CollapsibleContent as se } from "../ui/collapsible.es.js";
import { Menu as oe, X as ce, ChevronUp as de } from "lucide-react";
import { Button as F } from "../ui/button.es.js";
import { cn as me } from "../../lib/utils.es.js";
import he from "./useActivePaths.es.js";
import pe from "./SidenavLogo.es.js";
import ue from "../AnnouncementCard/AnnouncementCard.es.js";
import fe from "../AnnouncementCarousel/AnnouncementCarousel.es.js";
const B = (o, c, t) => c.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-1", children: c.children.map((r) => {
  const u = r.children && r.children.length > 0 ? t.has(r.url) || t.has(`${r.url}:parent`) : t.has(r.url);
  return /* @__PURE__ */ n(p, { children: [
    /* @__PURE__ */ e(N, { asChild: !0, isActive: u, children: /* @__PURE__ */ e(o, { href: r.url, className: `${r.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
      r.icon && /* @__PURE__ */ e(r.icon, {}),
      /* @__PURE__ */ e("span", { children: r.title })
    ] }) }) }),
    B(o, r, t)
  ] }, r.title);
}) }) : null;
function je({ userInfo: o, appInfo: c, currentPath: t, sidenavItems: r, signOutFn: x, documentationUrl: u, cardProps: O, carouselProps: A, disableAccountLink: U, disableChangeFeedLink: j, ...L }) {
  const f = le(), { name: G, image: S, email: s } = o, T = !!S, b = G?.split(" ") ?? [], d = b[0] ?? void 0, m = b.length > 1 ? b.slice(1).join(" ") : " ", g = !!(d && m), k = g ? z(d.charAt(0), m.charAt(0)) : z(s.charAt(0), s.charAt(1)), _ = g ? d.charAt(0).toUpperCase() + m.charAt(0).toUpperCase() : s.charAt(0).toUpperCase(), P = T ? /* @__PURE__ */ n(ee, { children: [
    /* @__PURE__ */ e(re, { src: S, alt: "user_avatar" }),
    /* @__PURE__ */ e(ae, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(ne, { bgColor: k.bgColor, textColor: k.textColor, children: _ }), D = g ? /* @__PURE__ */ e("span", { className: "user-name", children: `${d} ${m}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: s }), i = he(r, t), [h, v] = H(!1), E = {
    ...c,
    signOutFn: x,
    avatar: P,
    userDisplayName: D,
    email: s,
    documentationUrl: u,
    disableAccountLink: U,
    disableChangeFeedLink: j
  };
  return /* @__PURE__ */ n(q, { children: [
    !h && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(F, { variant: "ghost", size: "icon", onClick: () => v(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(oe, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ n(
      K,
      {
        variant: "sidebar",
        collapsible: "none",
        ...L,
        className: me(
          "fixed top-0 left-0 z-40 h-screen bg-background transition-transform duration-300",
          "min-w-[290px] overflow-hidden",
          "flex flex-col",
          h ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        ),
        children: [
          h && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(F, { variant: "ghost", size: "icon", onClick: () => v(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(ce, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e(pe, {}) }),
          /* @__PURE__ */ e(Q, { className: "flex-1 overflow-y-auto min-h-0", children: r.map((C) => /* @__PURE__ */ n(M, { children: [
            /* @__PURE__ */ e(R, { children: C.section }),
            /* @__PURE__ */ e(y, { className: "list-none", children: C.sectionItems.map((a) => {
              const W = a.target === "blank", w = a?.onClick, $ = Array.from(i).some((l) => l.startsWith(a.url)), X = ["Projects", "Organizations"].includes(a.title);
              return /* @__PURE__ */ e(J, { children: /* @__PURE__ */ n(te, { open: $, children: [
                /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(ie, { asChild: !0, children: /* @__PURE__ */ e(
                  N,
                  {
                    asChild: !0,
                    isActive: i.has(a.url) || i.has(`${a.url}:parent`),
                    children: /* @__PURE__ */ n(
                      f,
                      {
                        "data-cy": `nav-${a.url.slice(1)}`,
                        onClick: async () => {
                          w && await w();
                        },
                        href: a.url,
                        target: W ? "_blank" : "_self",
                        className: "flex w-full gap-2",
                        children: [
                          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                            a.icon && /* @__PURE__ */ e(a.icon, {}),
                            /* @__PURE__ */ e("span", { children: a.title })
                          ] }),
                          X ? /* @__PURE__ */ e(
                            de,
                            {
                              className: `ml-auto h-4 w-4 transition-transform ${$ ? "rotate-180" : "rotate-90"}`
                            }
                          ) : null
                        ]
                      }
                    )
                  }
                ) }) }),
                /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(V, { children: a.children?.map((l) => /* @__PURE__ */ n(p, { children: [
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
                  B(f, l, i)
                ] }, l.title)) }) })
              ] }) }, a.title);
            }) })
          ] }, C.section)) }),
          /* @__PURE__ */ n(Y, { className: "flex-shrink-0", children: [
            /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(y, { children: A ? /* @__PURE__ */ e(fe, { ...A }) : /* @__PURE__ */ e(ue, { ...O || {} }) }) }),
            /* @__PURE__ */ e(Z, { children: /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(I, { ...E }) }) })
          ] })
        ]
      }
    ),
    h && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => v(!1) })
  ] });
}
export {
  je as default
};
