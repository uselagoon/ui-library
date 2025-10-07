import { jsxs as l, Fragment as _, jsx as e } from "react/jsx-runtime";
import { useMemo as D, useState as P, Fragment as W } from "react";
import { useSidebar as H, Sidebar as X, SidebarHeader as q, SidebarMenu as w, SidebarMenuItem as d, SidebarContent as J, SidebarGroup as K, SidebarGroupLabel as Q, SidebarGroupContent as R, SidebarMenuButton as v, SidebarMenuSub as V, SidebarFooter as Y } from "./index.es41.js";
import Z from "./index.es94.js";
import { genAvatarBackground as M } from "./index.es95.js";
import { Avatar as I, AvatarImage as ee } from "./index.es10.js";
import { AvatarFallback as re } from "@radix-ui/react-avatar";
import ae from "./index.es96.js";
import { useLinkComponent as le } from "./index.es5.js";
import { Collapsible as ne, CollapsibleTrigger as te, CollapsibleContent as ie } from "./index.es19.js";
import { Menu as se, X as oe, ChevronUp as ce } from "lucide-react";
import { Button as z } from "./index.es13.js";
import { cn as de } from "./index.es70.js";
const $ = (h, m, i) => m.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-1", children: m.children.map((a) => /* @__PURE__ */ l(d, { children: [
  /* @__PURE__ */ e(v, { asChild: !0, isActive: i.has(a.url), children: /* @__PURE__ */ e(h, { href: a.url, className: `${a.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
    a.icon && /* @__PURE__ */ e(a.icon, {}),
    /* @__PURE__ */ e("span", { children: a.title })
  ] }) }) }),
  $(h, a, i)
] }, a.title)) }) : null;
function we({ userInfo: h, appInfo: m, currentPath: i, sidenavItems: a, signOutFn: y, ...B }) {
  const C = le(), { name: F, image: A, email: p } = h, O = !!A, N = F?.split(" ") ?? [], u = N[0] ?? void 0, f = N.length > 1 ? N.slice(1).join(" ") : " ", x = !!(u && f), k = x ? M(u.charAt(0), f.charAt(0)) : M(p.charAt(0), p.charAt(1)), U = x ? u.charAt(0).toUpperCase() + f.charAt(0).toUpperCase() : p.charAt(0).toUpperCase(), j = O ? /* @__PURE__ */ l(I, { children: [
    /* @__PURE__ */ e(ee, { src: A, alt: "user_avatar" }),
    /* @__PURE__ */ e(re, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(ae, { bgColor: k.bgColor, textColor: k.textColor, children: U }), E = x ? /* @__PURE__ */ e("span", { className: "user-name", children: `${u} ${f}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: p }), b = D(() => {
    const s = /* @__PURE__ */ new Set(), r = (n) => {
      const c = i === n.url;
      let o = !1;
      return n.children && (o = n.children.some(r)), (c || o || i.startsWith(n.url + "/")) && s.add(n.url), c || o;
    };
    return a.forEach((n) => {
      n.sectionItems.forEach(r);
    }), s;
  }, [a, i]), { state: G } = H(), [g, S] = P(!1), L = {
    ...m,
    signOutFn: y,
    isCollapsed: G === "collapsed"
  };
  return /* @__PURE__ */ l(_, { children: [
    !g && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(z, { variant: "ghost", size: "icon", onClick: () => S(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(se, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ l(
      X,
      {
        variant: "sidebar",
        collapsible: "none",
        ...B,
        className: de(
          "fixed lg:static top-0 left-0 z-40 h-full lg:h-[unset] bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden pr-4 lg:pr-0",
          "lg:translate-x-0",
          g ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          g && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(z, { variant: "ghost", size: "icon", onClick: () => S(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(oe, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(q, { children: /* @__PURE__ */ e(w, { children: /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(Z, { ...L }) }) }) }),
          /* @__PURE__ */ e(J, { children: a.map((s) => /* @__PURE__ */ l(K, { children: [
            /* @__PURE__ */ e(Q, { children: s.section }),
            /* @__PURE__ */ e(R, { className: "list-none", children: s.sectionItems.map((r) => {
              const n = r.target === "blank", c = r?.onClick, o = Array.from(b).some((t) => t.startsWith(r.url)), T = ["Projects", "Organizations"].includes(r.title);
              return /* @__PURE__ */ e(W, { children: /* @__PURE__ */ l(ne, { open: o, children: [
                /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(te, { asChild: !0, children: /* @__PURE__ */ e(v, { asChild: !0, isActive: b.has(r.url), children: /* @__PURE__ */ l(
                  C,
                  {
                    "data-cy": `nav-${r.url.slice(1)}`,
                    onClick: async () => {
                      c && await c();
                    },
                    href: r.url,
                    target: n ? "_blank" : "_self",
                    className: "flex w-full gap-2",
                    children: [
                      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                        r.icon && /* @__PURE__ */ e(r.icon, {}),
                        /* @__PURE__ */ e("span", { children: r.title })
                      ] }),
                      T ? /* @__PURE__ */ e(
                        ce,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${o ? "rotate-180" : "rotate-90"}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ e(ie, { children: /* @__PURE__ */ e(V, { children: r.children?.map((t) => /* @__PURE__ */ l(d, { children: [
                  /* @__PURE__ */ e(v, { asChild: !0, isActive: b.has(t.url), children: /* @__PURE__ */ e(C, { href: t.url, className: "mt-2", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                    t.icon && /* @__PURE__ */ e(t.icon, {}),
                    /* @__PURE__ */ e("span", { children: t.title })
                  ] }) }) }),
                  $(C, t, b)
                ] }, t.title)) }) })
              ] }) }, r.title);
            }) })
          ] }, s.section)) }),
          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(w, { children: /* @__PURE__ */ e(d, { children: /* @__PURE__ */ l(v, { size: "lg", children: [
            j,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: E }) })
          ] }) }) }) })
        ]
      }
    ),
    g && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => S(!1) })
  ] });
}
export {
  we as default
};
