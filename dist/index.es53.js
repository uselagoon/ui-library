import { jsxs as l, Fragment as W, jsx as e } from "react/jsx-runtime";
import { useMemo as _, useState as D, Fragment as H } from "react";
import { useSidebar as P, Sidebar as X, SidebarHeader as q, SidebarMenu as M, SidebarMenuItem as c, SidebarContent as J, SidebarGroup as K, SidebarGroupLabel as Q, SidebarGroupContent as R, SidebarMenuButton as g, SidebarMenuSub as V, SidebarFooter as Y } from "./index.es41.js";
import Z from "./index.es94.js";
import { genAvatarBackground as z } from "./index.es95.js";
import { Avatar as I, AvatarImage as ee } from "./index.es10.js";
import { AvatarFallback as re } from "@radix-ui/react-avatar";
import ae from "./index.es96.js";
import { useLinkComponent as le } from "./index.es5.js";
import { Collapsible as ne, CollapsibleTrigger as ie, CollapsibleContent as te } from "./index.es19.js";
import { Menu as se, X as oe, ChevronUp as ce } from "lucide-react";
import { Button as $ } from "./index.es13.js";
import { cn as de } from "./index.es70.js";
const y = (d, h, i) => h.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-2", children: h.children.map((a) => /* @__PURE__ */ l(c, { children: [
  /* @__PURE__ */ e(g, { asChild: !0, isActive: i.has(a.url), children: /* @__PURE__ */ e(d, { href: a.url, className: `${a.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
    a.icon && /* @__PURE__ */ e(a.icon, {}),
    /* @__PURE__ */ e("span", { children: a.title })
  ] }) }) }),
  y(d, a, i)
] }, a.title)) }) : null;
function ke({ userInfo: d, appInfo: h, currentPath: i, sidenavItems: a, signOutFn: B, ...F }) {
  const v = le(), { name: U, image: S, email: m } = d, E = !!S, C = U?.split(" ") ?? [], p = C[0] ?? void 0, u = C.length > 1 ? C.slice(1).join(" ") : " ", N = !!(p && u), k = N ? z(p.charAt(0), u.charAt(0)) : z(m.charAt(0), m.charAt(1)), O = N ? p.charAt(0).toUpperCase() + u.charAt(0).toUpperCase() : m.charAt(0).toUpperCase(), j = E ? /* @__PURE__ */ l(I, { children: [
    /* @__PURE__ */ e(ee, { src: S, alt: "user_avatar" }),
    /* @__PURE__ */ e(re, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(ae, { bgColor: k.bgColor, textColor: k.textColor, children: O }), G = N ? /* @__PURE__ */ e("span", { className: "user-name", children: `${p} ${u}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: m }), f = _(() => {
    const t = /* @__PURE__ */ new Set();
    return a.forEach((r) => {
      r.sectionItems.forEach((s) => {
        (i === s.url || i.startsWith(s.url + "/")) && t.add(s.url), s.children?.forEach((o) => {
          (i === o.url || i.startsWith(o.url + "/")) && (t.add(o.url), t.add(s.url));
        });
      });
    }), t;
  }, [a, i]), { state: L } = P(), [b, A] = D(!1), T = {
    ...h,
    signOutFn: B,
    isCollapsed: L === "collapsed"
  };
  return /* @__PURE__ */ l(W, { children: [
    !b && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-4 left-4 z-40", children: /* @__PURE__ */ e($, { variant: "ghost", size: "icon", onClick: () => A(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(se, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ l(
      X,
      {
        variant: "sidebar",
        collapsible: "none",
        ...F,
        className: de(
          "fixed lg:static top-0 left-0 z-40 h-full lg:h-[unset] bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden pr-4 lg:pr-0",
          "lg:translate-x-0",
          b ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          b && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e($, { variant: "ghost", size: "icon", onClick: () => A(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(oe, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(q, { children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(Z, { ...T }) }) }) }),
          /* @__PURE__ */ e(J, { children: a.map((t) => /* @__PURE__ */ l(K, { children: [
            /* @__PURE__ */ e(Q, { children: t.section }),
            /* @__PURE__ */ e(R, { className: "list-none", children: t.sectionItems.map((r) => {
              const s = r.target === "blank", x = r?.onClick, o = Array.from(f).some((n) => n.startsWith(r.url)), w = o && r.children;
              return /* @__PURE__ */ e(H, { children: /* @__PURE__ */ l(ne, { open: o, children: [
                /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(ie, { asChild: !0, children: /* @__PURE__ */ e(g, { asChild: !0, isActive: f.has(r.url), children: /* @__PURE__ */ l(
                  v,
                  {
                    "data-cy": `nav-${r.url.slice(1)}`,
                    onClick: async () => {
                      x && await x();
                    },
                    href: r.url,
                    target: s ? "_blank" : "_self",
                    className: "flex w-full gap-2",
                    children: [
                      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                        r.icon && /* @__PURE__ */ e(r.icon, {}),
                        /* @__PURE__ */ e("span", { children: r.title })
                      ] }),
                      w ? /* @__PURE__ */ e(
                        ce,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${o ? "rotate-180" : ""}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ e(te, { children: /* @__PURE__ */ e(V, { children: r.children?.map((n) => /* @__PURE__ */ l(c, { children: [
                  /* @__PURE__ */ e(g, { asChild: !0, isActive: f.has(n.url), children: /* @__PURE__ */ e(v, { href: n.url, className: "mt-2", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                    n.icon && /* @__PURE__ */ e(n.icon, {}),
                    /* @__PURE__ */ e("span", { children: n.title })
                  ] }) }) }),
                  y(v, n, f)
                ] }, n.title)) }) })
              ] }) }, r.title);
            }) })
          ] }, t.section)) }),
          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(c, { children: /* @__PURE__ */ l(g, { size: "lg", children: [
            j,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: G }) })
          ] }) }) }) })
        ]
      }
    ),
    b && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => A(!1) })
  ] });
}
export {
  ke as default
};
