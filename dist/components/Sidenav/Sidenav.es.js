import { jsxs as r, Fragment as j, jsx as e } from "react/jsx-runtime";
import { useState as B, useEffect as G } from "react";
import { Sidebar as E, SidebarContent as D, SidebarGroup as z, SidebarGroupLabel as R, SidebarGroupContent as M, SidebarFooter as X, SidebarMenu as q, SidebarMenuItem as b, SidebarMenuButton as A, SidebarMenuAction as H, SidebarMenuSub as O } from "../ui/sidebar.es.js";
import J from "./SidenavFooterMenu.es.js";
import { genAvatarBackground as _ } from "../../_util/helpers.es.js";
import { Avatar as K, AvatarImage as Q } from "../ui/avatar.es.js";
import { AvatarFallback as V } from "@radix-ui/react-avatar";
import W from "../AvatarBubble/AvatarBubble.es.js";
import { useLinkComponent as Y } from "../../providers/NextLinkProvider.es.js";
import { Collapsible as Z, CollapsibleTrigger as P, CollapsibleContent as ee } from "../ui/collapsible.es.js";
import { Menu as ae, X as re, ChevronRight as ne } from "lucide-react";
import { Button as $ } from "../ui/button.es.js";
import { cn as le } from "../../lib/utils.es.js";
import ie from "./useActivePaths.es.js";
import te from "./SidenavLogo.es.js";
import se from "../AnnouncementCard/AnnouncementCard.es.js";
const S = ({
  item: a,
  activePaths: i,
  currentPath: t
}) => {
  const s = Y(), g = a.children && a.children.length > 0, h = t === a.url, c = i.has(a.url) || i.has(`${a.url}:parent`), [C, p] = B(c);
  G(() => {
    p(c);
  }, [c]);
  const d = a.target === "blank", n = a.onClick;
  return g ? a.collapsible !== !1 ? /* @__PURE__ */ e(Z, { open: C, onOpenChange: p, className: "group/collapsible", children: /* @__PURE__ */ r(b, { children: [
    /* @__PURE__ */ e(A, { asChild: !0, isActive: h, tooltip: a.title, children: /* @__PURE__ */ r(
      s,
      {
        href: a.url,
        "data-cy": `nav-${a.url.slice(1)}`,
        onClick: async (l) => {
          n && await n();
        },
        target: d ? "_blank" : "_self",
        className: "flex w-full items-center gap-2",
        children: [
          a.icon && /* @__PURE__ */ e(a.icon, { className: "!size-6" }),
          /* @__PURE__ */ e("span", { children: a.title })
        ]
      }
    ) }),
    /* @__PURE__ */ e(P, { asChild: !0, children: /* @__PURE__ */ r(H, { className: "data-[state=open]:rotate-90 transition-transform duration-200", children: [
      /* @__PURE__ */ e(ne, {}),
      /* @__PURE__ */ e("span", { className: "sr-only", children: "Toggle" })
    ] }) }),
    /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ e(O, { children: a.children.map((l) => /* @__PURE__ */ e(
      S,
      {
        item: l,
        activePaths: i,
        currentPath: t
      },
      l.title
    )) }) })
  ] }) }) : /* @__PURE__ */ r(b, { children: [
    /* @__PURE__ */ e(A, { asChild: !0, isActive: h, tooltip: a.title, children: /* @__PURE__ */ r(
      s,
      {
        href: a.url,
        "data-cy": `nav-${a.url.slice(1)}`,
        onClick: async () => {
          n && await n();
        },
        target: d ? "_blank" : "_self",
        className: "flex w-full items-center gap-2",
        children: [
          a.icon && /* @__PURE__ */ e(a.icon, { className: "!size-6" }),
          /* @__PURE__ */ e("span", { children: a.title })
        ]
      }
    ) }),
    /* @__PURE__ */ e(O, { children: a.children.map((l) => /* @__PURE__ */ e(
      S,
      {
        item: l,
        activePaths: i,
        currentPath: t
      },
      l.title
    )) })
  ] }) : /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(A, { asChild: !0, isActive: h, tooltip: a.title, children: /* @__PURE__ */ r(
    s,
    {
      href: a.url,
      "data-cy": `nav-${a.url.slice(1)}`,
      onClick: async () => {
        n && await n();
      },
      target: d ? "_blank" : "_self",
      children: [
        a.icon && /* @__PURE__ */ e(a.icon, { className: "!size-6" }),
        /* @__PURE__ */ e("span", { children: a.title })
      ]
    }
  ) }) });
};
function Se({ userInfo: a, appInfo: i, currentPath: t, sidenavItems: s, signOutFn: g, documentationUrl: h, cardProps: c, footerItems: C, ...p }) {
  const { name: d, image: n, email: o } = a, l = !!n, v = d?.split(" ") ?? [], f = v[0] ?? void 0, m = v.length > 1 ? v.slice(1).join(" ") : " ", N = !!(f && m), w = N ? _(f.charAt(0), m.charAt(0)) : _(o.charAt(0), o.charAt(1)), L = N ? f.charAt(0).toUpperCase() + m.charAt(0).toUpperCase() : o.charAt(0).toUpperCase(), U = l ? /* @__PURE__ */ r(K, { children: [
    /* @__PURE__ */ e(Q, { src: n, alt: "user_avatar" }),
    /* @__PURE__ */ e(V, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(W, { bgColor: w.bgColor, textColor: w.textColor, children: L }), F = N ? /* @__PURE__ */ e("span", { className: "user-name", children: `${f} ${m}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: o }), I = ie(s, t), [u, x] = B(!1), T = {
    ...i,
    signOutFn: g,
    avatar: U,
    userDisplayName: F,
    email: o,
    footerItems: C || []
  };
  return /* @__PURE__ */ r(j, { children: [
    !u && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e($, { variant: "ghost", size: "icon", onClick: () => x(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(ae, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ r(
      E,
      {
        variant: "sidebar",
        collapsible: "none",
        ...p,
        className: le(
          "fixed top-0 left-0 z-40 h-screen bg-background transition-transform duration-300",
          "min-w-[290px] overflow-hidden",
          "flex flex-col",
          u ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        ),
        children: [
          u && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e($, { variant: "ghost", size: "icon", onClick: () => x(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(re, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e(te, {}) }),
          /* @__PURE__ */ e(D, { className: "flex-1 overflow-y-auto min-h-0", children: s.map((k) => /* @__PURE__ */ r(z, { children: [
            /* @__PURE__ */ e(R, { children: k.section }),
            /* @__PURE__ */ e(M, { className: "list-none", children: k.sectionItems.map((y) => /* @__PURE__ */ e(
              S,
              {
                item: y,
                activePaths: I,
                currentPath: t
              },
              y.title
            )) })
          ] }, k.section)) }),
          /* @__PURE__ */ r(X, { className: "flex-shrink-0", children: [
            /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(se, { ...c || {} }) }) }),
            /* @__PURE__ */ e(q, { children: /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(J, { ...T }) }) })
          ] })
        ]
      }
    ),
    u && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => x(!1) })
  ] });
}
export {
  Se as default
};
