import { jsxs as l, Fragment as _, jsx as e } from "react/jsx-runtime";
import { useMemo as D, useState as P, Fragment as H } from "react";
import { useSidebar as X, Sidebar as q, SidebarHeader as J, SidebarMenu as w, SidebarMenuItem as c, SidebarContent as K, SidebarGroup as Q, SidebarGroupLabel as R, SidebarGroupContent as V, SidebarMenuButton as g, SidebarMenuSub as Y, SidebarFooter as Z } from "./index.es41.js";
import I from "./index.es94.js";
import { genAvatarBackground as z } from "./index.es95.js";
import { Avatar as ee, AvatarImage as re } from "./index.es10.js";
import { AvatarFallback as ae } from "@radix-ui/react-avatar";
import le from "./index.es96.js";
import { useLinkComponent as ne } from "./index.es5.js";
import { Collapsible as ie, CollapsibleTrigger as te, CollapsibleContent as se } from "./index.es19.js";
import { Menu as oe, X as ce, ChevronUp as de } from "lucide-react";
import { Button as M } from "./index.es13.js";
import { cn as he } from "./index.es70.js";
const $ = (d, h, i) => h.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-2", children: h.children.map((a) => /* @__PURE__ */ l(c, { children: [
  /* @__PURE__ */ e(g, { asChild: !0, isActive: i.has(a.url), children: /* @__PURE__ */ e(d, { href: a.url, className: `${a.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
    a.icon && /* @__PURE__ */ e(a.icon, {}),
    /* @__PURE__ */ e("span", { children: a.title })
  ] }) }) }),
  $(d, a, i)
] }, a.title)) }) : null;
function we({ userInfo: d, appInfo: h, currentPath: i, sidenavItems: a, signOutFn: y, ...B }) {
  const v = ne(), { name: F, image: S, email: p } = d, O = !!S, C = F?.split(" ") ?? [], m = C[0] ?? void 0, u = C.length > 1 ? C.slice(1).join(" ") : " ", N = !!(m && u), k = N ? z(m.charAt(0), u.charAt(0)) : z(p.charAt(0), p.charAt(1)), U = N ? m.charAt(0).toUpperCase() + u.charAt(0).toUpperCase() : p.charAt(0).toUpperCase(), j = O ? /* @__PURE__ */ l(ee, { children: [
    /* @__PURE__ */ e(re, { src: S, alt: "user_avatar" }),
    /* @__PURE__ */ e(ae, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(le, { bgColor: k.bgColor, textColor: k.textColor, children: U }), E = N ? /* @__PURE__ */ e("span", { className: "user-name", children: `${m} ${u}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: p }), f = D(() => {
    const t = /* @__PURE__ */ new Set();
    return a.forEach((r) => {
      r.sectionItems.forEach((s) => {
        (i === s.url || i.startsWith(s.url + "/")) && t.add(s.url), s.children?.forEach((o) => {
          (i === o.url || i.startsWith(o.url + "/")) && (t.add(o.url), t.add(s.url));
        });
      });
    }), t;
  }, [a, i]), { state: G } = X(), [b, A] = P(!1), L = {
    ...h,
    signOutFn: y,
    isCollapsed: G === "collapsed"
  };
  return /* @__PURE__ */ l(_, { children: [
    !b && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(M, { variant: "ghost", size: "icon", onClick: () => A(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(oe, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ l(
      q,
      {
        variant: "sidebar",
        collapsible: "none",
        ...B,
        className: he(
          "fixed lg:static top-0 left-0 z-40 h-full lg:h-[unset] bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden pr-4 lg:pr-0",
          "lg:translate-x-0",
          b ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          b && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(M, { variant: "ghost", size: "icon", onClick: () => A(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(ce, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(J, { children: /* @__PURE__ */ e(w, { children: /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(I, { ...L }) }) }) }),
          /* @__PURE__ */ e(K, { children: a.map((t) => /* @__PURE__ */ l(Q, { children: [
            /* @__PURE__ */ e(R, { children: t.section }),
            /* @__PURE__ */ e(V, { className: "list-none", children: t.sectionItems.map((r) => {
              const s = r.target === "blank", x = r?.onClick, o = Array.from(f).some((n) => n.startsWith(r.url)), W = ["Projects", "Organizations"].includes(r.title);
              return /* @__PURE__ */ e(H, { children: /* @__PURE__ */ l(ie, { open: o, children: [
                /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(te, { asChild: !0, children: /* @__PURE__ */ e(g, { asChild: !0, isActive: f.has(r.url), children: /* @__PURE__ */ l(
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
                      W ? /* @__PURE__ */ e(
                        de,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${o ? "rotate-180" : "rotate-90"}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(Y, { children: r.children?.map((n) => /* @__PURE__ */ l(c, { children: [
                  /* @__PURE__ */ e(g, { asChild: !0, isActive: f.has(n.url), children: /* @__PURE__ */ e(v, { href: n.url, className: "mt-2", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                    n.icon && /* @__PURE__ */ e(n.icon, {}),
                    /* @__PURE__ */ e("span", { children: n.title })
                  ] }) }) }),
                  $(v, n, f)
                ] }, n.title)) }) })
              ] }) }, r.title);
            }) })
          ] }, t.section)) }),
          /* @__PURE__ */ e(Z, { children: /* @__PURE__ */ e(w, { children: /* @__PURE__ */ e(c, { children: /* @__PURE__ */ l(g, { size: "lg", children: [
            j,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: E }) })
          ] }) }) }) })
        ]
      }
    ),
    b && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => A(!1) })
  ] });
}
export {
  we as default
};
