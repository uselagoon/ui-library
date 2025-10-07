import { jsxs as l, Fragment as _, jsx as e } from "react/jsx-runtime";
import { useMemo as D, useState as W, Fragment as H } from "react";
import { useSidebar as X, Sidebar as q, SidebarHeader as J, SidebarMenu as z, SidebarMenuItem as h, SidebarContent as K, SidebarGroup as Q, SidebarGroupLabel as R, SidebarGroupContent as V, SidebarMenuButton as C, SidebarMenuSub as Y, SidebarFooter as Z } from "./index.es41.js";
import I from "./index.es94.js";
import { genAvatarBackground as $ } from "./index.es95.js";
import { Avatar as ee, AvatarImage as re } from "./index.es10.js";
import { AvatarFallback as ae } from "@radix-ui/react-avatar";
import le from "./index.es96.js";
import { useLinkComponent as ne } from "./index.es5.js";
import { Collapsible as te, CollapsibleTrigger as ie, CollapsibleContent as se } from "./index.es19.js";
import { Menu as oe, X as ce, ChevronUp as de } from "lucide-react";
import { Button as y } from "./index.es13.js";
import { cn as he } from "./index.es70.js";
const B = (m, p, s) => p.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-1", children: p.children.map((a) => /* @__PURE__ */ l(h, { children: [
  /* @__PURE__ */ e(C, { asChild: !0, isActive: s.has(a.url), children: /* @__PURE__ */ e(m, { href: a.url, className: `${a.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
    a.icon && /* @__PURE__ */ e(a.icon, {}),
    /* @__PURE__ */ e("span", { children: a.title })
  ] }) }) }),
  B(m, a, s)
] }, a.title)) }) : null;
function we({ userInfo: m, appInfo: p, currentPath: s, sidenavItems: a, signOutFn: F, ...O }) {
  const N = ne(), { name: j, image: k, email: u } = m, U = !!k, x = j?.split(" ") ?? [], f = x[0] ?? void 0, b = x.length > 1 ? x.slice(1).join(" ") : " ", S = !!(f && b), w = S ? $(f.charAt(0), b.charAt(0)) : $(u.charAt(0), u.charAt(1)), E = S ? f.charAt(0).toUpperCase() + b.charAt(0).toUpperCase() : u.charAt(0).toUpperCase(), G = U ? /* @__PURE__ */ l(ee, { children: [
    /* @__PURE__ */ e(re, { src: k, alt: "user_avatar" }),
    /* @__PURE__ */ e(ae, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(le, { bgColor: w.bgColor, textColor: w.textColor, children: E }), L = S ? /* @__PURE__ */ e("span", { className: "user-name", children: `${f} ${b}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: u }), g = D(() => {
    const o = /* @__PURE__ */ new Set(), r = (n, i) => {
      const c = s === n.url, M = i && n.url === i;
      let d = !1;
      return n.children && (d = n.children.some((t) => r(t, n.url))), (c || d || !M && s.startsWith(n.url + "/")) && o.add(n.url), c || d;
    };
    return a.forEach((n) => {
      n.sectionItems.forEach((i) => r(i));
    }), o;
  }, [a, s]), { state: P } = X(), [v, A] = W(!1), T = {
    ...p,
    signOutFn: F,
    isCollapsed: P === "collapsed"
  };
  return /* @__PURE__ */ l(_, { children: [
    !v && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(y, { variant: "ghost", size: "icon", onClick: () => A(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(oe, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ l(
      q,
      {
        variant: "sidebar",
        collapsible: "none",
        ...O,
        className: he(
          "fixed lg:static top-0 left-0 z-40 h-full lg:h-[unset] bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden pr-4 lg:pr-0",
          "lg:translate-x-0",
          v ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          v && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(y, { variant: "ghost", size: "icon", onClick: () => A(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(ce, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(J, { children: /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(I, { ...T }) }) }) }),
          /* @__PURE__ */ e(K, { children: a.map((o) => /* @__PURE__ */ l(Q, { children: [
            /* @__PURE__ */ e(R, { children: o.section }),
            /* @__PURE__ */ e(V, { className: "list-none", children: o.sectionItems.map((r) => {
              const n = r.target === "blank", i = r?.onClick, c = Array.from(g).some((t) => t.startsWith(r.url)), d = ["Projects", "Organizations"].includes(r.title);
              return /* @__PURE__ */ e(H, { children: /* @__PURE__ */ l(te, { open: c, children: [
                /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(ie, { asChild: !0, children: /* @__PURE__ */ e(C, { asChild: !0, isActive: g.has(r.url), children: /* @__PURE__ */ l(
                  N,
                  {
                    "data-cy": `nav-${r.url.slice(1)}`,
                    onClick: async () => {
                      i && await i();
                    },
                    href: r.url,
                    target: n ? "_blank" : "_self",
                    className: "flex w-full gap-2",
                    children: [
                      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                        r.icon && /* @__PURE__ */ e(r.icon, {}),
                        /* @__PURE__ */ e("span", { children: r.title })
                      ] }),
                      d ? /* @__PURE__ */ e(
                        de,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${c ? "rotate-180" : "rotate-90"}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(Y, { children: r.children?.map((t) => /* @__PURE__ */ l(h, { children: [
                  /* @__PURE__ */ e(C, { asChild: !0, isActive: g.has(t.url), children: /* @__PURE__ */ e(N, { href: t.url, className: "mt-2", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                    t.icon && /* @__PURE__ */ e(t.icon, {}),
                    /* @__PURE__ */ e("span", { children: t.title })
                  ] }) }) }),
                  B(N, t, g)
                ] }, t.title)) }) })
              ] }) }, r.title);
            }) })
          ] }, o.section)) }),
          /* @__PURE__ */ e(Z, { children: /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ l(C, { size: "lg", children: [
            G,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: L }) })
          ] }) }) }) })
        ]
      }
    ),
    v && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => A(!1) })
  ] });
}
export {
  we as default
};
