import { jsxs as l, Fragment as D, jsx as r } from "react/jsx-runtime";
import { useMemo as G, useState as L, Fragment as T } from "react";
import { useSidebar as _, Sidebar as O, SidebarHeader as H, SidebarMenu as k, SidebarMenuItem as c, SidebarContent as P, SidebarGroup as X, SidebarGroupLabel as q, SidebarGroupContent as J, SidebarMenuButton as b, SidebarMenuSub as K, SidebarFooter as Q } from "./index.es41.js";
import R from "./index.es94.js";
import { genAvatarBackground as w } from "./index.es95.js";
import { Avatar as V, AvatarImage as Y } from "./index.es10.js";
import { AvatarFallback as Z } from "@radix-ui/react-avatar";
import I from "./index.es96.js";
import { useLinkComponent as rr } from "./index.es5.js";
import { Collapsible as er, CollapsibleTrigger as ar, CollapsibleContent as lr } from "./index.es19.js";
import { X as tr, Menu as nr, ChevronDown as ir } from "lucide-react";
import { Button as sr } from "./index.es13.js";
import { cn as or } from "./index.es70.js";
const M = (d, h, n) => h.children?.length ? /* @__PURE__ */ r("ul", { className: "ml-4 mt-2 space-y-2", children: h.children.map((t) => /* @__PURE__ */ l(c, { children: [
  /* @__PURE__ */ r(b, { asChild: !0, isActive: n.has(t.url), children: /* @__PURE__ */ r(d, { href: t.url, children: /* @__PURE__ */ r("span", { children: t.title }) }) }),
  M(d, t, n)
] }, t.title)) }) : null;
function xr({ userInfo: d, appInfo: h, currentPath: n, sidenavItems: t, signOutFn: y, ...z }) {
  const g = rr(), { name: B, image: S, email: m } = d, F = !!S, v = B?.split(" ") ?? [], u = v[0] ?? void 0, p = v.length > 1 ? v.slice(1).join(" ") : " ", C = !!(u && p), N = C ? w(u.charAt(0), p.charAt(0)) : w(m.charAt(0), m.charAt(1)), $ = C ? u.charAt(0).toUpperCase() + p.charAt(0).toUpperCase() : m.charAt(0).toUpperCase(), E = F ? /* @__PURE__ */ l(V, { children: [
    /* @__PURE__ */ r(Y, { src: S, alt: "user_avatar" }),
    /* @__PURE__ */ r(Z, { children: "Avatar" })
  ] }) : /* @__PURE__ */ r(I, { bgColor: N.bgColor, textColor: N.textColor, children: $ }), U = C ? /* @__PURE__ */ r("span", { className: "user-name", children: `${u} ${p}` }) : /* @__PURE__ */ r("span", { className: "user-name", children: m }), o = G(() => {
    const i = /* @__PURE__ */ new Set();
    return t.forEach((e) => {
      e.sectionItems.forEach((s) => {
        (n === s.url || n.startsWith(s.url + "/")) && i.add(s.url), s.children?.forEach((a) => {
          (n === a.url || n.startsWith(a.url + "/")) && (i.add(a.url), i.add(s.url));
        });
      });
    }), i;
  }, [t, n]), { state: W } = _(), [f, x] = L(!1), j = {
    ...h,
    signOutFn: y,
    isCollapsed: W === "collapsed"
  };
  return /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ l(
      O,
      {
        variant: "sidebar",
        collapsible: "none",
        ...z,
        className: or(
          "relative z-40 h-full bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden",
          "lg:translate-x-0 lg:static lg:block",
          f ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          /* @__PURE__ */ r("div", { className: "lg:hidden absolute top-4 right-4", children: /* @__PURE__ */ r(
            sr,
            {
              variant: "ghost",
              size: "icon",
              className: "fixed top-4 left-4 z-50 lg:hidden",
              onClick: () => x(!f),
              children: f ? /* @__PURE__ */ r(tr, { className: "h-5 w-5" }) : /* @__PURE__ */ r(nr, { className: "h-5 w-5" })
            }
          ) }),
          /* @__PURE__ */ r(H, { children: /* @__PURE__ */ r(k, { children: /* @__PURE__ */ r(c, { children: /* @__PURE__ */ r(R, { ...j }) }) }) }),
          /* @__PURE__ */ r(P, { children: t.map((i) => /* @__PURE__ */ l(X, { children: [
            /* @__PURE__ */ r(q, { children: i.section }),
            /* @__PURE__ */ r(J, { className: "list-none", children: i.sectionItems.map((e) => {
              const s = e.target === "blank", A = e?.onClick;
              return /* @__PURE__ */ r(T, { children: /* @__PURE__ */ l(er, { open: Array.from(o).some((a) => a.startsWith(e.url)), children: [
                /* @__PURE__ */ r(c, { children: /* @__PURE__ */ r(ar, { asChild: !0, children: /* @__PURE__ */ r(b, { asChild: !0, isActive: o.has(e.url), children: /* @__PURE__ */ l(
                  g,
                  {
                    "data-cy": `nav-${e.url.slice(1)}`,
                    onClick: async () => {
                      A && await A();
                    },
                    href: e.url,
                    target: s ? "_blank" : "_self",
                    children: [
                      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                        e.icon && /* @__PURE__ */ r(e.icon, {}),
                        /* @__PURE__ */ r("span", { children: e.title })
                      ] }),
                      /* @__PURE__ */ r(
                        ir,
                        {
                          className: `h-4 w-4 transition-transform ${Array.from(o).some((a) => a.startsWith(e.url)) ? "rotate-180" : ""}`
                        }
                      )
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ r(lr, { children: /* @__PURE__ */ r(K, { children: e.children?.map((a) => /* @__PURE__ */ l(c, { children: [
                  /* @__PURE__ */ r(b, { asChild: !0, isActive: o.has(a.url), children: /* @__PURE__ */ r(g, { href: a.url, children: /* @__PURE__ */ r("span", { children: a.title }) }) }),
                  M(g, a, o)
                ] }, a.title)) }) })
              ] }) }, e.title);
            }) })
          ] }, i.section)) }),
          /* @__PURE__ */ r(Q, { children: /* @__PURE__ */ r(k, { children: /* @__PURE__ */ r(c, { children: /* @__PURE__ */ l(b, { size: "lg", children: [
            E,
            /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ r("span", { className: "truncate font-light", children: U }) })
          ] }) }) }) })
        ]
      }
    ),
    f && /* @__PURE__ */ r("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => x(!1) })
  ] });
}
export {
  xr as default
};
