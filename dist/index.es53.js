import { jsxs as l, Fragment as W, jsx as e } from "react/jsx-runtime";
import { useMemo as _, useState as D, Fragment as H } from "react";
import { useSidebar as P, Sidebar as X, SidebarHeader as q, SidebarMenu as M, SidebarMenuItem as o, SidebarContent as J, SidebarGroup as K, SidebarGroupLabel as Q, SidebarGroupContent as R, SidebarMenuButton as x, SidebarMenuSub as V, SidebarFooter as Y } from "./index.es41.js";
import Z from "./index.es94.js";
import { genAvatarBackground as z } from "./index.es95.js";
import { Avatar as I, AvatarImage as ee } from "./index.es10.js";
import { AvatarFallback as re } from "@radix-ui/react-avatar";
import ae from "./index.es96.js";
import { useLinkComponent as le } from "./index.es5.js";
import { Collapsible as ne, CollapsibleTrigger as ie, CollapsibleContent as te } from "./index.es19.js";
import { Menu as se, X as oe, ChevronUp as ce } from "lucide-react";
import { Button as y } from "./index.es13.js";
import { cn as de } from "./index.es70.js";
const B = (c, d, n) => d.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-2", children: d.children.map((a) => /* @__PURE__ */ l(o, { children: [
  /* @__PURE__ */ e(x, { asChild: !0, isActive: n.has(a.url), children: /* @__PURE__ */ e(c, { href: a.url, children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
    a.icon && /* @__PURE__ */ e(a.icon, {}),
    /* @__PURE__ */ e("span", { children: a.title })
  ] }) }) }),
  B(c, a, n)
] }, a.title)) }) : null;
function ke({ userInfo: c, appInfo: d, currentPath: n, sidenavItems: a, signOutFn: F, ...U }) {
  const N = le(), { name: $, image: S, email: h } = c, E = !!S, b = $?.split(" ") ?? [], p = b[0] ?? void 0, m = b.length > 1 ? b.slice(1).join(" ") : " ", g = !!(p && m), k = g ? z(p.charAt(0), m.charAt(0)) : z(h.charAt(0), h.charAt(1)), O = g ? p.charAt(0).toUpperCase() + m.charAt(0).toUpperCase() : h.charAt(0).toUpperCase(), j = E ? /* @__PURE__ */ l(I, { children: [
    /* @__PURE__ */ e(ee, { src: S, alt: "user_avatar" }),
    /* @__PURE__ */ e(re, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(ae, { bgColor: k.bgColor, textColor: k.textColor, children: O }), G = g ? /* @__PURE__ */ e("span", { className: "user-name", children: `${p} ${m}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: h }), v = _(() => {
    const i = /* @__PURE__ */ new Set();
    return a.forEach((r) => {
      r.sectionItems.forEach((t) => {
        (n === t.url || n.startsWith(t.url + "/")) && i.add(t.url), t.children?.forEach((s) => {
          (n === s.url || n.startsWith(s.url + "/")) && (i.add(s.url), i.add(t.url));
        });
      });
    }), i;
  }, [a, n]), { state: L } = P(), [u, C] = D(!1), T = {
    ...d,
    signOutFn: F,
    isCollapsed: L === "collapsed"
  };
  return /* @__PURE__ */ l(W, { children: [
    !u && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-4 left-4 z-40", children: /* @__PURE__ */ e(y, { variant: "ghost", size: "icon", onClick: () => C(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(se, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ l(
      X,
      {
        variant: "sidebar",
        collapsible: "none",
        ...U,
        className: de(
          "fixed lg:static top-0 left-0 z-40 h-full lg:h-[unset] bg-background transition-transform duration-300",
          "w-[min(20vw,100%)] min-w-[290px] overflow-hidden pr-4 lg:pr-0",
          "lg:translate-x-0",
          u ? "translate-x-0" : "-translate-x-full"
        ),
        children: [
          u && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(y, { variant: "ghost", size: "icon", onClick: () => C(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(oe, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e(q, { children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(Z, { ...T }) }) }) }),
          /* @__PURE__ */ e(J, { children: a.map((i) => /* @__PURE__ */ l(K, { children: [
            /* @__PURE__ */ e(Q, { children: i.section }),
            /* @__PURE__ */ e(R, { className: "list-none", children: i.sectionItems.map((r) => {
              const t = r.target === "blank", A = r?.onClick, s = Array.from(v).some((f) => f.startsWith(r.url)), w = s && r.children;
              return /* @__PURE__ */ e(H, { children: /* @__PURE__ */ l(ne, { open: s, children: [
                /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(ie, { asChild: !0, children: /* @__PURE__ */ e(x, { asChild: !0, isActive: v.has(r.url), children: /* @__PURE__ */ l(
                  N,
                  {
                    "data-cy": `nav-${r.url.slice(1)}`,
                    onClick: async () => {
                      A && await A();
                    },
                    href: r.url,
                    target: t ? "_blank" : "_self",
                    className: "flex w-full gap-2",
                    children: [
                      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                        r.icon && /* @__PURE__ */ e(r.icon, {}),
                        /* @__PURE__ */ e("span", { children: r.title })
                      ] }),
                      w ? /* @__PURE__ */ e(
                        ce,
                        {
                          className: `ml-auto h-4 w-4 transition-transform ${s ? "rotate-180" : ""}`
                        }
                      ) : null
                    ]
                  }
                ) }) }) }),
                /* @__PURE__ */ e(te, { children: /* @__PURE__ */ e(V, { children: r.children?.map((f) => /* @__PURE__ */ e(o, { children: B(N, f, v) }, f.title)) }) })
              ] }) }, r.title);
            }) })
          ] }, i.section)) }),
          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(o, { children: /* @__PURE__ */ l(x, { size: "lg", children: [
            j,
            /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: G }) })
          ] }) }) }) })
        ]
      }
    ),
    u && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => C(!1) })
  ] });
}
export {
  ke as default
};
