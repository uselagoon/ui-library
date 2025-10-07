import { jsxs as l, Fragment as D, jsx as e } from "react/jsx-runtime";
import { useMemo as P, useState as W, Fragment as H } from "react";
import { useSidebar as X, Sidebar as q, SidebarHeader as J, SidebarMenu as y, SidebarMenuItem as d, SidebarContent as K, SidebarGroup as Q, SidebarGroupLabel as R, SidebarGroupContent as V, SidebarMenuButton as v, SidebarMenuSub as Y, SidebarFooter as Z } from "./index.es41.js";
import I from "./index.es94.js";
import { genAvatarBackground as z } from "./index.es95.js";
import { Avatar as ee, AvatarImage as re } from "./index.es10.js";
import { AvatarFallback as ae } from "@radix-ui/react-avatar";
import le from "./index.es96.js";
import { useLinkComponent as ne } from "./index.es5.js";
import { Collapsible as te, CollapsibleTrigger as ie, CollapsibleContent as se } from "./index.es19.js";
import { Menu as oe, X as ce, ChevronUp as de } from "lucide-react";
import { Button as B } from "./index.es13.js";
import { cn as he } from "./index.es70.js";
const $ = (h, p, i) => p.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-1", children: p.children.map((a) => /* @__PURE__ */ l(d, { children: [
  /* @__PURE__ */ e(v, { asChild: !0, isActive: i.has(a.url), children: /* @__PURE__ */ e(h, { href: a.url, className: `${a.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
    a.icon && /* @__PURE__ */ e(a.icon, {}),
    /* @__PURE__ */ e("span", { children: a.title })
  ] }) }) }),
  $(h, a, i)
] }, a.title)) }) : null;
function we({ userInfo: h, appInfo: p, currentPath: i, sidenavItems: a, signOutFn: F, ...O }) {
  const C = ne(), { name: U, image: k, email: m } = h, j = !!k, A = U?.split(" ") ?? [], u = A[0] ?? void 0, f = A.length > 1 ? A.slice(1).join(" ") : " ", N = !!(u && f), w = N ? z(u.charAt(0), f.charAt(0)) : z(m.charAt(0), m.charAt(1)), E = N ? u.charAt(0).toUpperCase() + f.charAt(0).toUpperCase() : m.charAt(0).toUpperCase(), G = j ? /* @__PURE__ */ l(ee, { children: [
    /* @__PURE__ */ e(re, { src: k, alt: "user_avatar" }),
    /* @__PURE__ */ e(ae, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(le, { bgColor: w.bgColor, textColor: w.textColor, children: E }), L = N ? /* @__PURE__ */ e("span", { className: "user-name", children: `${u} ${f}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: m }), b = P(() => {
    const s = /* @__PURE__ */ new Set(), r = (n) => {
      const o = Array.isArray(n.children) && n.children.length > 0, c = i === n.url, S = o ? n.children.some(r) : !1;
      return (c || S || o && i.startsWith(n.url + "/")) && s.add(n.url), c || S;
    };
    return a.forEach((n) => {
      n.sectionItems.forEach(r);
    }), s;
  }, [a, i]), { state: T } = X(), [g, x] = W(!1), _ = {
    ...p,
    signOutFn: F,
    isCollapsed: T === "collapsed"
  };
  return /* @__PURE__ */ l(D, { children: [
    !g && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(B, { variant: "ghost", size: "icon", onClick: () => x(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(oe, { className: "h-5 w-5" }) }) }),
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
          g ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          g && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(B, { variant: "ghost", size: "icon", onClick: () => x(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(ce, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(J, { children: /* @__PURE__ */ e(y, { children: /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(I, { ..._ }) }) }) }),
          /* @__PURE__ */ e(K, { children: a.map((s) => /* @__PURE__ */ l(Q, { children: [
            /* @__PURE__ */ e(R, { children: s.section }),
            /* @__PURE__ */ e(V, { className: "list-none", children: s.sectionItems.map((r) => {
              const n = r.target === "blank", o = r?.onClick, c = Array.from(b).some((t) => t.startsWith(r.url)), M = ["Projects", "Organizations"].includes(r.title);
              return /* @__PURE__ */ e(H, { children: /* @__PURE__ */ l(te, { open: c, children: [
                /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(ie, { asChild: !0, children: /* @__PURE__ */ e(v, { asChild: !0, isActive: b.has(r.url), children: /* @__PURE__ */ l(
                  C,
                  {
                    "data-cy": `nav-${r.url.slice(1)}`,
                    onClick: async () => {
                      o && await o();
                    },
                    href: r.url,
                    target: n ? "_blank" : "_self",
                    className: "flex w-full gap-2",
                    children: [
                      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                        r.icon && /* @__PURE__ */ e(r.icon, {}),
                        /* @__PURE__ */ e("span", { children: r.title })
                      ] }),
                      M ? /* @__PURE__ */ e(
                        de,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${c ? "rotate-180" : "rotate-90"}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(Y, { children: r.children?.map((t) => /* @__PURE__ */ l(d, { children: [
                  /* @__PURE__ */ e(v, { asChild: !0, isActive: b.has(t.url), children: /* @__PURE__ */ e(C, { href: t.url, className: "mt-2", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                    t.icon && /* @__PURE__ */ e(t.icon, {}),
                    /* @__PURE__ */ e("span", { children: t.title })
                  ] }) }) }),
                  $(C, t, b)
                ] }, t.title)) }) })
              ] }) }, r.title);
            }) })
          ] }, s.section)) }),
          /* @__PURE__ */ e(Z, { children: /* @__PURE__ */ e(y, { children: /* @__PURE__ */ e(d, { children: /* @__PURE__ */ l(v, { size: "lg", children: [
            G,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: L }) })
          ] }) }) }) })
        ]
      }
    ),
    g && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => x(!1) })
  ] });
}
export {
  we as default
};
