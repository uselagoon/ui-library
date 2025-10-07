import { jsxs as a, Fragment as T, jsx as e } from "react/jsx-runtime";
import { useMemo as W, useState as _, Fragment as D } from "react";
import { useSidebar as H, Sidebar as P, SidebarHeader as X, SidebarMenu as w, SidebarMenuItem as c, SidebarContent as q, SidebarGroup as J, SidebarGroupLabel as K, SidebarGroupContent as Q, SidebarMenuButton as g, SidebarMenuSub as R, SidebarFooter as V } from "./index.es41.js";
import Y from "./index.es94.js";
import { genAvatarBackground as M } from "./index.es95.js";
import { Avatar as Z, AvatarImage as I } from "./index.es10.js";
import { AvatarFallback as ee } from "@radix-ui/react-avatar";
import re from "./index.es96.js";
import { useLinkComponent as ae } from "./index.es5.js";
import { Collapsible as le, CollapsibleTrigger as ie, CollapsibleContent as ne } from "./index.es19.js";
import { Menu as te, X as se, ChevronUp as oe } from "lucide-react";
import { Button as z } from "./index.es13.js";
import { cn as ce } from "./index.es70.js";
const y = (d, h, i) => h.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-2", children: h.children.map((l) => /* @__PURE__ */ a(c, { children: [
  /* @__PURE__ */ e(g, { asChild: !0, isActive: i.has(l.url), children: /* @__PURE__ */ e(d, { href: l.url, children: /* @__PURE__ */ e("span", { children: l.title }) }) }),
  y(d, l, i)
] }, l.title)) }) : null;
function Se({ userInfo: d, appInfo: h, currentPath: i, sidenavItems: l, signOutFn: B, ...F }) {
  const v = ae(), { name: U, image: S, email: p } = d, $ = !!S, C = U?.split(" ") ?? [], m = C[0] ?? void 0, u = C.length > 1 ? C.slice(1).join(" ") : " ", A = !!(m && u), k = A ? M(m.charAt(0), u.charAt(0)) : M(p.charAt(0), p.charAt(1)), E = A ? m.charAt(0).toUpperCase() + u.charAt(0).toUpperCase() : p.charAt(0).toUpperCase(), O = $ ? /* @__PURE__ */ a(Z, { children: [
    /* @__PURE__ */ e(I, { src: S, alt: "user_avatar" }),
    /* @__PURE__ */ e(ee, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(re, { bgColor: k.bgColor, textColor: k.textColor, children: E }), j = A ? /* @__PURE__ */ e("span", { className: "user-name", children: `${m} ${u}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: p }), f = W(() => {
    const n = /* @__PURE__ */ new Set();
    return l.forEach((r) => {
      r.sectionItems.forEach((s) => {
        (i === s.url || i.startsWith(s.url + "/")) && n.add(s.url), s.children?.forEach((o) => {
          (i === o.url || i.startsWith(o.url + "/")) && (n.add(o.url), n.add(s.url));
        });
      });
    }), n;
  }, [l, i]), { state: G } = H(), [b, x] = _(!1), L = {
    ...h,
    signOutFn: B,
    isCollapsed: G === "collapsed"
  };
  return /* @__PURE__ */ a(T, { children: [
    !b && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-4 left-4 z-40", children: /* @__PURE__ */ e(z, { variant: "ghost", size: "icon", onClick: () => x(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(te, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ a(
      P,
      {
        variant: "sidebar",
        collapsible: "none",
        ...F,
        className: ce(
          "fixed top-0 left-0 z-40 h-full bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden pr-4 lg:pr-0",
          "lg:translate-x-0 lg:block",
          b ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          b && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(z, { variant: "ghost", size: "icon", onClick: () => x(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(se, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e(w, { children: /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(Y, { ...L }) }) }) }),
          /* @__PURE__ */ e(q, { children: l.map((n) => /* @__PURE__ */ a(J, { children: [
            /* @__PURE__ */ e(K, { children: n.section }),
            /* @__PURE__ */ e(Q, { className: "list-none", children: n.sectionItems.map((r) => {
              const s = r.target === "blank", N = r?.onClick, o = Array.from(f).some((t) => t.startsWith(r.url));
              return /* @__PURE__ */ e(D, { children: /* @__PURE__ */ a(le, { open: o, children: [
                /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(ie, { asChild: !0, children: /* @__PURE__ */ e(g, { asChild: !0, isActive: f.has(r.url), children: /* @__PURE__ */ a(
                  v,
                  {
                    "data-cy": `nav-${r.url.slice(1)}`,
                    onClick: async () => {
                      N && await N();
                    },
                    href: r.url,
                    target: s ? "_blank" : "_self",
                    className: "flex w-full gap-2",
                    children: [
                      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                        r.icon && /* @__PURE__ */ e(r.icon, {}),
                        /* @__PURE__ */ e("span", { children: r.title })
                      ] }),
                      o ? /* @__PURE__ */ e(
                        oe,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${o ? "rotate-180" : ""}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ e(ne, { children: /* @__PURE__ */ e(R, { children: r.children?.map((t) => /* @__PURE__ */ a(c, { children: [
                  /* @__PURE__ */ e(g, { asChild: !0, isActive: f.has(t.url), children: /* @__PURE__ */ e(v, { href: t.url, children: /* @__PURE__ */ e("span", { children: t.title }) }) }),
                  y(v, t, f)
                ] }, t.title)) }) })
              ] }) }, r.title);
            }) })
          ] }, n.section)) }),
          /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(w, { children: /* @__PURE__ */ e(c, { children: /* @__PURE__ */ a(g, { size: "lg", children: [
            O,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: j }) })
          ] }) }) }) })
        ]
      }
    ),
    b && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => x(!1) })
  ] });
}
export {
  Se as default
};
