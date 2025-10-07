import { jsxs as n, Fragment as W, jsx as e } from "react/jsx-runtime";
import { useMemo as H, useState as X, Fragment as q } from "react";
import { useSidebar as J, Sidebar as K, SidebarHeader as Q, SidebarMenu as z, SidebarMenuItem as h, SidebarContent as R, SidebarGroup as V, SidebarGroupLabel as Y, SidebarGroupContent as Z, SidebarMenuButton as C, SidebarMenuSub as I, SidebarFooter as ee } from "./index.es41.js";
import re from "./index.es94.js";
import { genAvatarBackground as B } from "./index.es95.js";
import { Avatar as ae, AvatarImage as le } from "./index.es10.js";
import { AvatarFallback as ne } from "@radix-ui/react-avatar";
import te from "./index.es96.js";
import { useLinkComponent as ie } from "./index.es5.js";
import { Collapsible as se, CollapsibleTrigger as oe, CollapsibleContent as ce } from "./index.es19.js";
import { Menu as de, X as he, ChevronUp as pe } from "lucide-react";
import { Button as O } from "./index.es13.js";
import { cn as me } from "./index.es70.js";
const $ = (p, m, i) => m.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-1", children: m.children.map((a) => /* @__PURE__ */ n(h, { children: [
  /* @__PURE__ */ e(C, { asChild: !0, isActive: i.has(a.url), children: /* @__PURE__ */ e(p, { href: a.url, className: `${a.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
    a.icon && /* @__PURE__ */ e(a.icon, {}),
    /* @__PURE__ */ e("span", { children: a.title })
  ] }) }) }),
  $(p, a, i)
] }, a.title)) }) : null;
function ye({ userInfo: p, appInfo: m, currentPath: i, sidenavItems: a, signOutFn: F, ...U }) {
  const A = ie(), { name: j, image: w, email: u } = p, E = !!w, N = j?.split(" ") ?? [], f = N[0] ?? void 0, b = N.length > 1 ? N.slice(1).join(" ") : " ", x = !!(f && b), M = x ? B(f.charAt(0), b.charAt(0)) : B(u.charAt(0), u.charAt(1)), G = x ? f.charAt(0).toUpperCase() + b.charAt(0).toUpperCase() : u.charAt(0).toUpperCase(), L = E ? /* @__PURE__ */ n(ae, { children: [
    /* @__PURE__ */ e(le, { src: w, alt: "user_avatar" }),
    /* @__PURE__ */ e(ne, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(te, { bgColor: M.bgColor, textColor: M.textColor, children: G }), T = x ? /* @__PURE__ */ e("span", { className: "user-name", children: `${f} ${b}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: u }), g = H(() => {
    const s = /* @__PURE__ */ new Set(), r = (t, o = !1) => {
      const c = Array.isArray(t.children) && t.children.length > 0, k = i === t.url;
      let d = !1;
      c && (d = t.children.some((y) => {
        const P = y.url === t.url;
        return r(y, P);
      }));
      let l = k || d;
      return !o && c && i.startsWith(t.url + "/") && (l = !0), l && s.add(t.url), k || d;
    };
    return a.forEach((t) => {
      t.sectionItems.forEach((o) => r(o));
    }), s;
  }, [a, i]), { state: _ } = J(), [v, S] = X(!1), D = {
    ...m,
    signOutFn: F,
    isCollapsed: _ === "collapsed"
  };
  return /* @__PURE__ */ n(W, { children: [
    !v && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(O, { variant: "ghost", size: "icon", onClick: () => S(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(de, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ n(
      K,
      {
        variant: "sidebar",
        collapsible: "none",
        ...U,
        className: me(
          "fixed lg:static top-0 left-0 z-40 h-full lg:h-[unset] bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden pr-4 lg:pr-0",
          "lg:translate-x-0",
          v ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          v && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(O, { variant: "ghost", size: "icon", onClick: () => S(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(he, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(Q, { children: /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(re, { ...D }) }) }) }),
          /* @__PURE__ */ e(R, { children: a.map((s) => /* @__PURE__ */ n(V, { children: [
            /* @__PURE__ */ e(Y, { children: s.section }),
            /* @__PURE__ */ e(Z, { className: "list-none", children: s.sectionItems.map((r) => {
              const t = r.target === "blank", o = r?.onClick, c = Array.from(g).some((l) => l.startsWith(r.url)), d = ["Projects", "Organizations"].includes(r.title);
              return /* @__PURE__ */ e(q, { children: /* @__PURE__ */ n(se, { open: c, children: [
                /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(oe, { asChild: !0, children: /* @__PURE__ */ e(C, { asChild: !0, isActive: g.has(r.url), children: /* @__PURE__ */ n(
                  A,
                  {
                    "data-cy": `nav-${r.url.slice(1)}`,
                    onClick: async () => {
                      o && await o();
                    },
                    href: r.url,
                    target: t ? "_blank" : "_self",
                    className: "flex w-full gap-2",
                    children: [
                      /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                        r.icon && /* @__PURE__ */ e(r.icon, {}),
                        /* @__PURE__ */ e("span", { children: r.title })
                      ] }),
                      d ? /* @__PURE__ */ e(
                        pe,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${c ? "rotate-180" : "rotate-90"}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ e(I, { children: r.children?.map((l) => /* @__PURE__ */ n(h, { children: [
                  /* @__PURE__ */ e(C, { asChild: !0, isActive: g.has(l.url), children: /* @__PURE__ */ e(A, { href: l.url, className: "mt-2", children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                    l.icon && /* @__PURE__ */ e(l.icon, {}),
                    /* @__PURE__ */ e("span", { children: l.title })
                  ] }) }) }),
                  $(A, l, g)
                ] }, l.title)) }) })
              ] }) }, r.title);
            }) })
          ] }, s.section)) }),
          /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ n(C, { size: "lg", children: [
            L,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: T }) })
          ] }) }) }) })
        ]
      }
    ),
    v && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => S(!1) })
  ] });
}
export {
  ye as default
};
