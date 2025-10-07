import { jsxs as a, Fragment as O, jsx as r } from "react/jsx-runtime";
import { useMemo as T, useState as W, Fragment as _ } from "react";
import { useSidebar as D, Sidebar as H, SidebarHeader as P, SidebarMenu as w, SidebarMenuItem as c, SidebarContent as X, SidebarGroup as q, SidebarGroupLabel as J, SidebarGroupContent as K, SidebarMenuButton as g, SidebarMenuSub as Q, SidebarFooter as R } from "./index.es41.js";
import V from "./index.es94.js";
import { genAvatarBackground as M } from "./index.es95.js";
import { Avatar as Y, AvatarImage as Z } from "./index.es10.js";
import { AvatarFallback as I } from "@radix-ui/react-avatar";
import rr from "./index.es96.js";
import { useLinkComponent as er } from "./index.es5.js";
import { Collapsible as ar, CollapsibleTrigger as lr, CollapsibleContent as nr } from "./index.es19.js";
import { X as tr, Menu as ir, ChevronUp as sr } from "lucide-react";
import { Button as or } from "./index.es13.js";
import { cn as cr } from "./index.es70.js";
const y = (d, h, n) => h.children?.length ? /* @__PURE__ */ r("ul", { className: "ml-4 mt-2 space-y-2", children: h.children.map((l) => /* @__PURE__ */ a(c, { children: [
  /* @__PURE__ */ r(g, { asChild: !0, isActive: n.has(l.url), children: /* @__PURE__ */ r(d, { href: l.url, children: /* @__PURE__ */ r("span", { children: l.title }) }) }),
  y(d, l, n)
] }, l.title)) }) : null;
function xr({ userInfo: d, appInfo: h, currentPath: n, sidenavItems: l, signOutFn: B, ...F }) {
  const v = er(), { name: U, image: N, email: m } = d, $ = !!N, C = U?.split(" ") ?? [], p = C[0] ?? void 0, u = C.length > 1 ? C.slice(1).join(" ") : " ", A = !!(p && u), x = A ? M(p.charAt(0), u.charAt(0)) : M(m.charAt(0), m.charAt(1)), z = A ? p.charAt(0).toUpperCase() + u.charAt(0).toUpperCase() : m.charAt(0).toUpperCase(), E = $ ? /* @__PURE__ */ a(Y, { children: [
    /* @__PURE__ */ r(Z, { src: N, alt: "user_avatar" }),
    /* @__PURE__ */ r(I, { children: "Avatar" })
  ] }) : /* @__PURE__ */ r(rr, { bgColor: x.bgColor, textColor: x.textColor, children: z }), j = A ? /* @__PURE__ */ r("span", { className: "user-name", children: `${p} ${u}` }) : /* @__PURE__ */ r("span", { className: "user-name", children: m }), f = T(() => {
    const t = /* @__PURE__ */ new Set();
    return l.forEach((e) => {
      e.sectionItems.forEach((s) => {
        (n === s.url || n.startsWith(s.url + "/")) && t.add(s.url), s.children?.forEach((o) => {
          (n === o.url || n.startsWith(o.url + "/")) && (t.add(o.url), t.add(s.url));
        });
      });
    }), t;
  }, [l, n]), { state: G } = D(), [b, k] = W(!1), L = {
    ...h,
    signOutFn: B,
    isCollapsed: G === "collapsed"
  };
  return /* @__PURE__ */ a(O, { children: [
    /* @__PURE__ */ a(
      H,
      {
        variant: "sidebar",
        collapsible: "none",
        ...F,
        className: cr(
          "relative z-40 h-full bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden",
          "lg:translate-x-0 lg:static lg:block",
          b ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          /* @__PURE__ */ r("div", { className: "lg:hidden absolute top-4 left-4", children: /* @__PURE__ */ r(or, { variant: "ghost", size: "icon", onClick: () => k(!b), children: b ? /* @__PURE__ */ r(tr, { className: "h-5 w-5" }) : /* @__PURE__ */ r(ir, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ r(P, { children: /* @__PURE__ */ r(w, { children: /* @__PURE__ */ r(c, { children: /* @__PURE__ */ r(V, { ...L }) }) }) }),
          /* @__PURE__ */ r(X, { children: l.map((t) => /* @__PURE__ */ a(q, { children: [
            /* @__PURE__ */ r(J, { children: t.section }),
            /* @__PURE__ */ r(K, { className: "list-none", children: t.sectionItems.map((e) => {
              const s = e.target === "blank", S = e?.onClick, o = Array.from(f).some((i) => i.startsWith(e.url));
              return /* @__PURE__ */ r(_, { children: /* @__PURE__ */ a(ar, { open: o, children: [
                /* @__PURE__ */ r(c, { children: /* @__PURE__ */ r(lr, { asChild: !0, children: /* @__PURE__ */ r(g, { asChild: !0, isActive: f.has(e.url), children: /* @__PURE__ */ a(
                  v,
                  {
                    "data-cy": `nav-${e.url.slice(1)}`,
                    onClick: async () => {
                      S && await S();
                    },
                    href: e.url,
                    target: s ? "_blank" : "_self",
                    className: "flex w-full gap-2",
                    children: [
                      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                        e.icon && /* @__PURE__ */ r(e.icon, {}),
                        /* @__PURE__ */ r("span", { children: e.title })
                      ] }),
                      o ? /* @__PURE__ */ r(
                        sr,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${o ? "rotate-180" : ""}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ r(nr, { children: /* @__PURE__ */ r(Q, { children: e.children?.map((i) => /* @__PURE__ */ a(c, { children: [
                  /* @__PURE__ */ r(g, { asChild: !0, isActive: f.has(i.url), children: /* @__PURE__ */ r(v, { href: i.url, children: /* @__PURE__ */ r("span", { children: i.title }) }) }),
                  y(v, i, f)
                ] }, i.title)) }) })
              ] }) }, e.title);
            }) })
          ] }, t.section)) }),
          /* @__PURE__ */ r(R, { children: /* @__PURE__ */ r(w, { children: /* @__PURE__ */ r(c, { children: /* @__PURE__ */ a(g, { size: "lg", children: [
            E,
            /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ r("span", { className: "truncate font-light", children: j }) })
          ] }) }) }) })
        ]
      }
    ),
    b && /* @__PURE__ */ r("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => k(!1) })
  ] });
}
export {
  xr as default
};
