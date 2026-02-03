import { jsxs as r, Fragment as D, jsx as e } from "react/jsx-runtime";
import { useState as L, useEffect as R } from "react";
import { Sidebar as X, SidebarContent as q, SidebarGroup as M, SidebarGroupLabel as H, SidebarGroupContent as O, SidebarFooter as J, SidebarMenu as K, SidebarMenuItem as b, SidebarMenuButton as A, SidebarMenuAction as Q, SidebarMenuSub as _ } from "../ui/sidebar.es.js";
import V from "./SidenavFooterMenu.es.js";
import { genAvatarBackground as $ } from "../../_util/helpers.es.js";
import { Avatar as W, AvatarImage as Y } from "../ui/avatar.es.js";
import { AvatarFallback as Z } from "@radix-ui/react-avatar";
import P from "../AvatarBubble/AvatarBubble.es.js";
import { useLinkComponent as F } from "../../providers/NextLinkProvider.es.js";
import { Collapsible as ee, CollapsibleTrigger as ae, CollapsibleContent as re } from "../ui/collapsible.es.js";
import { Menu as ne, X as le, ChevronRight as ie } from "lucide-react";
import { Button as B } from "../ui/button.es.js";
import { cn as se } from "../../lib/utils.es.js";
import te from "./useActivePaths.es.js";
import oe from "./SidenavLogo.es.js";
import ce from "../AnnouncementCard/AnnouncementCard.es.js";
const S = ({
  item: a,
  activePaths: i,
  currentPath: s
}) => {
  const t = F(), g = a.children && a.children.length > 0, o = s === a.url, c = i.has(a.url) || i.has(`${a.url}:parent`), [C, p] = L(c);
  R(() => {
    p(c);
  }, [c]);
  const d = a.target === "blank", l = a.onClick;
  return g ? a.collapsible !== !1 ? /* @__PURE__ */ e(ee, { open: C, onOpenChange: p, className: "group/collapsible", children: /* @__PURE__ */ r(b, { children: [
    /* @__PURE__ */ e(A, { asChild: !0, isActive: o, tooltip: a.title, children: /* @__PURE__ */ r(
      t,
      {
        href: a.url,
        "data-cy": `nav-${a.url.slice(1)}`,
        onClick: async (n) => {
          l && await l();
        },
        target: d ? "_blank" : "_self",
        className: "flex w-full items-center gap-2",
        children: [
          a.icon && /* @__PURE__ */ e(a.icon, { className: "!size-6" }),
          /* @__PURE__ */ e("span", { children: a.title })
        ]
      }
    ) }),
    /* @__PURE__ */ e(ae, { asChild: !0, children: /* @__PURE__ */ r(Q, { className: "data-[state=open]:rotate-90 transition-transform duration-200", children: [
      /* @__PURE__ */ e(ie, {}),
      /* @__PURE__ */ e("span", { className: "sr-only", children: "Toggle" })
    ] }) }),
    /* @__PURE__ */ e(re, { children: /* @__PURE__ */ e(_, { children: a.children.map((n) => /* @__PURE__ */ e(
      S,
      {
        item: n,
        activePaths: i,
        currentPath: s
      },
      n.title
    )) }) })
  ] }) }) : /* @__PURE__ */ r(b, { children: [
    /* @__PURE__ */ e(A, { asChild: !0, isActive: o, tooltip: a.title, children: /* @__PURE__ */ r(
      t,
      {
        href: a.url,
        "data-cy": `nav-${a.url.slice(1)}`,
        onClick: async () => {
          l && await l();
        },
        target: d ? "_blank" : "_self",
        className: "flex w-full items-center gap-2",
        children: [
          a.icon && /* @__PURE__ */ e(a.icon, { className: "!size-6" }),
          /* @__PURE__ */ e("span", { children: a.title })
        ]
      }
    ) }),
    /* @__PURE__ */ e(_, { children: a.children.map((n) => /* @__PURE__ */ e(
      S,
      {
        item: n,
        activePaths: i,
        currentPath: s
      },
      n.title
    )) })
  ] }) : /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(A, { asChild: !0, isActive: o, tooltip: a.title, children: /* @__PURE__ */ r(
    t,
    {
      href: a.url,
      "data-cy": `nav-${a.url.slice(1)}`,
      onClick: async () => {
        l && await l();
      },
      target: d ? "_blank" : "_self",
      children: [
        a.icon && /* @__PURE__ */ e(a.icon, { className: "!size-6" }),
        /* @__PURE__ */ e("span", { children: a.title })
      ]
    }
  ) }) });
};
function ye({ userInfo: a, appInfo: i, currentPath: s, sidenavItems: t, signOutFn: g, documentationUrl: o, cardProps: c, footerItems: C, disableAccountLink: p, disableChangeFeedLink: d, ...l }) {
  F();
  const { name: w, image: n, email: h } = a, I = !!n, v = w?.split(" ") ?? [], f = v[0] ?? void 0, m = v.length > 1 ? v.slice(1).join(" ") : " ", N = !!(f && m), y = N ? $(f.charAt(0), m.charAt(0)) : $(h.charAt(0), h.charAt(1)), T = N ? f.charAt(0).toUpperCase() + m.charAt(0).toUpperCase() : h.charAt(0).toUpperCase(), U = I ? /* @__PURE__ */ r(W, { children: [
    /* @__PURE__ */ e(Y, { src: n, alt: "user_avatar" }),
    /* @__PURE__ */ e(Z, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(P, { bgColor: y.bgColor, textColor: y.textColor, children: T }), j = N ? /* @__PURE__ */ e("span", { className: "user-name", children: `${f} ${m}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: h }), G = te(t, s), [u, x] = L(!1), E = {
    ...i,
    signOutFn: g,
    avatar: U,
    userDisplayName: j,
    email: h,
    footerItems: C || [],
    documentationUrl: o,
    disableAccountLink: p,
    disableChangeFeedLink: d
  };
  return /* @__PURE__ */ r(D, { children: [
    !u && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(B, { variant: "ghost", size: "icon", onClick: () => x(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(ne, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ r(
      X,
      {
        variant: "sidebar",
        collapsible: "none",
        ...l,
        className: se(
          "fixed top-0 left-0 z-40 h-screen bg-background transition-transform duration-300",
          "min-w-[290px] overflow-hidden",
          "flex flex-col",
          u ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        ),
        children: [
          u && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(B, { variant: "ghost", size: "icon", onClick: () => x(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(le, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e(oe, {}) }),
          /* @__PURE__ */ e(q, { className: "flex-1 overflow-y-auto min-h-0", children: t.map((k) => /* @__PURE__ */ r(M, { children: [
            /* @__PURE__ */ e(H, { children: k.section }),
            /* @__PURE__ */ e(O, { className: "list-none", children: k.sectionItems.map((z) => /* @__PURE__ */ e(
              S,
              {
                item: z,
                activePaths: G,
                currentPath: s
              },
              z.title
            )) })
          ] }, k.section)) }),
          /* @__PURE__ */ r(J, { className: "flex-shrink-0", children: [
            /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(O, { children: /* @__PURE__ */ e(ce, { ...c || {} }) }) }),
            /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(V, { ...E }) }) })
          ] })
        ]
      }
    ),
    u && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => x(!1) })
  ] });
}
export {
  ye as default
};
