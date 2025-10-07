import { jsxs as n, Fragment as L, jsx as r } from "react/jsx-runtime";
import { useMemo as T, useState as _, Fragment as D } from "react";
import { useSidebar as O, Sidebar as W, SidebarHeader as H, SidebarMenu as k, SidebarMenuItem as o, SidebarContent as P, SidebarGroup as X, SidebarGroupLabel as q, SidebarGroupContent as J, SidebarMenuButton as f, SidebarMenuSub as K, SidebarFooter as Q } from "./index.es41.js";
import R from "./index.es94.js";
import { genAvatarBackground as w } from "./index.es95.js";
import { Avatar as V, AvatarImage as Y } from "./index.es10.js";
import { AvatarFallback as Z } from "@radix-ui/react-avatar";
import I from "./index.es96.js";
import { useLinkComponent as rr } from "./index.es5.js";
import { Collapsible as er, CollapsibleTrigger as ar, CollapsibleContent as lr } from "./index.es19.js";
import { X as nr, Menu as ir } from "lucide-react";
import { Button as tr } from "./index.es13.js";
import { cn as sr } from "./index.es70.js";
const M = (c, d, i) => d.children?.length ? /* @__PURE__ */ r("ul", { className: "ml-4 mt-2 space-y-2", children: d.children.map((a) => /* @__PURE__ */ n(o, { children: [
  /* @__PURE__ */ r(f, { asChild: !0, isActive: i.has(a.url), children: /* @__PURE__ */ r(c, { href: a.url, children: /* @__PURE__ */ r("span", { children: a.title }) }) }),
  M(c, a, i)
] }, a.title)) }) : null;
function xr({ userInfo: c, appInfo: d, currentPath: i, sidenavItems: a, signOutFn: z, ...B }) {
  const b = rr(), { name: F, image: S, email: h } = c, y = !!S, g = F?.split(" ") ?? [], u = g[0] ?? void 0, p = g.length > 1 ? g.slice(1).join(" ") : " ", v = !!(u && p), x = v ? w(u.charAt(0), p.charAt(0)) : w(h.charAt(0), h.charAt(1)), E = v ? u.charAt(0).toUpperCase() + p.charAt(0).toUpperCase() : h.charAt(0).toUpperCase(), U = y ? /* @__PURE__ */ n(V, { children: [
    /* @__PURE__ */ r(Y, { src: S, alt: "user_avatar" }),
    /* @__PURE__ */ r(Z, { children: "Avatar" })
  ] }) : /* @__PURE__ */ r(I, { bgColor: x.bgColor, textColor: x.textColor, children: E }), $ = v ? /* @__PURE__ */ r("span", { className: "user-name", children: `${u} ${p}` }) : /* @__PURE__ */ r("span", { className: "user-name", children: h }), C = T(() => {
    const t = /* @__PURE__ */ new Set();
    return a.forEach((e) => {
      e.sectionItems.forEach((s) => {
        (i === s.url || i.startsWith(s.url + "/")) && t.add(s.url), s.children?.forEach((l) => {
          (i === l.url || i.startsWith(l.url + "/")) && (t.add(l.url), t.add(s.url));
        });
      });
    }), t;
  }, [a, i]), { state: j } = O(), [m, N] = _(!1), G = {
    ...d,
    signOutFn: z,
    isCollapsed: j === "collapsed"
  };
  return /* @__PURE__ */ n(L, { children: [
    /* @__PURE__ */ r(
      tr,
      {
        variant: "ghost",
        size: "icon",
        className: "fixed top-4 left-4 z-50 lg:hidden",
        onClick: () => N(!m),
        children: m ? /* @__PURE__ */ r(nr, { className: "h-5 w-5" }) : /* @__PURE__ */ r(ir, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ n(
      W,
      {
        variant: "sidebar",
        collapsible: "none",
        ...B,
        className: sr(
          "fixed z-40 h-full bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden",
          "lg:translate-x-0 lg:static lg:block",
          m ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          /* @__PURE__ */ r(H, { children: /* @__PURE__ */ r(k, { children: /* @__PURE__ */ r(o, { children: /* @__PURE__ */ r(R, { ...G }) }) }) }),
          /* @__PURE__ */ r(P, { children: a.map((t) => /* @__PURE__ */ n(X, { children: [
            /* @__PURE__ */ r(q, { children: t.section }),
            /* @__PURE__ */ r(J, { className: "list-none", children: t.sectionItems.map((e) => {
              const s = e.target === "blank", A = e?.onClick;
              return /* @__PURE__ */ r(D, { children: /* @__PURE__ */ n(er, { children: [
                /* @__PURE__ */ r(o, { children: /* @__PURE__ */ r(ar, { asChild: !0, children: /* @__PURE__ */ r(f, { asChild: !0, isActive: C.has(e.url), children: /* @__PURE__ */ n(
                  b,
                  {
                    "data-cy": `nav-${e.url.slice(1)}`,
                    onClick: async () => {
                      A && await A();
                    },
                    href: e.url,
                    target: s ? "_blank" : "_self",
                    children: [
                      e.icon && /* @__PURE__ */ r(e.icon, {}),
                      /* @__PURE__ */ r("span", { children: e.title })
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ r(lr, { children: /* @__PURE__ */ r(K, { children: e.children?.map((l) => /* @__PURE__ */ n(o, { children: [
                  /* @__PURE__ */ r(f, { asChild: !0, isActive: C.has(l.url), children: /* @__PURE__ */ r(b, { href: l.url, children: /* @__PURE__ */ r("span", { children: l.title }) }) }),
                  M(b, l, C)
                ] }, l.title)) }) })
              ] }) }, e.title);
            }) })
          ] }, t.section)) }),
          /* @__PURE__ */ r(Q, { children: /* @__PURE__ */ r(k, { children: /* @__PURE__ */ r(o, { children: /* @__PURE__ */ n(f, { size: "lg", children: [
            U,
            /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ r("span", { className: "truncate font-light", children: $ }) })
          ] }) }) }) })
        ]
      }
    ),
    m && /* @__PURE__ */ r("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => N(!1) })
  ] });
}
export {
  xr as default
};
