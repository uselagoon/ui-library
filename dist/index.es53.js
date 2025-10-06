import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { useMemo as G, Fragment as $ } from "react";
import { useSidebar as D, Sidebar as T, SidebarHeader as W, SidebarMenu as S, SidebarMenuItem as h, SidebarContent as z, SidebarGroup as H, SidebarGroupLabel as P, SidebarGroupContent as q, SidebarMenuButton as f, SidebarFooter as J } from "./index.es41.js";
import K from "./index.es94.js";
import { genAvatarBackground as N } from "./index.es95.js";
import { Avatar as O, AvatarImage as Q } from "./index.es10.js";
import { AvatarFallback as R } from "@radix-ui/react-avatar";
import V from "./index.es96.js";
import { useLinkComponent as X } from "./index.es5.js";
import { useSidenavItems as Y } from "./index.es97.js";
import { Skeleton as Z } from "./index.es42.js";
function hr({ userInfo: x, appInfo: v, currentPath: s, dynamicNav: k, signOutFn: w, ...y }) {
  const b = X(), m = Y(v, s, k), { name: B, image: g, email: o } = x, E = !!g, p = B?.split(" ") ?? [], c = p[0] ?? void 0, d = p.length > 1 ? p.slice(1).join(" ") : " ", u = !!(c && d), A = u ? N(c.charAt(0), d.charAt(0)) : N(o.charAt(0), o.charAt(1)), L = u ? c.charAt(0).toUpperCase() + d.charAt(0).toUpperCase() : o.charAt(0).toUpperCase(), M = E ? /* @__PURE__ */ i(O, { children: [
    /* @__PURE__ */ r(Q, { src: g, alt: "user_avatar" }),
    /* @__PURE__ */ r(R, { children: "Avatar" })
  ] }) : /* @__PURE__ */ r(V, { bgColor: A.bgColor, textColor: A.textColor, children: L }), U = u ? /* @__PURE__ */ r("span", { className: "user-name", children: `${c} ${d}` }) : /* @__PURE__ */ r("span", { className: "user-name", children: o }), C = G(() => {
    const e = /* @__PURE__ */ new Set();
    return m.forEach((a) => {
      a.sectionItems.forEach((t) => {
        s.startsWith(t.url) && (e.add(t.url), t.children && t.children.forEach((n) => {
          s.startsWith(n.url) && e.add(n.url);
        }));
      });
    }), e;
  }, [m, s]), { state: _ } = D(), j = { ...v, signOutFn: w, isCollapsed: _ === "collapsed" };
  return /* @__PURE__ */ i(
    T,
    {
      variant: "sidebar",
      collapsible: "icon",
      ...y,
      className: "w-[clamp(0px,20vw,256px)] transition-all overflow-hidden",
      children: [
        /* @__PURE__ */ r(W, { children: /* @__PURE__ */ r(S, { children: /* @__PURE__ */ r(h, { children: /* @__PURE__ */ r(K, { ...j }) }) }) }),
        /* @__PURE__ */ r(z, { children: m.map((e) => /* @__PURE__ */ i(H, { children: [
          /* @__PURE__ */ r(P, { children: e.section }),
          /* @__PURE__ */ r(q, { className: "list-none", children: e.sectionItems.map((a) => {
            const t = a.target === "blank", n = a?.onClick;
            return /* @__PURE__ */ i($, { children: [
              /* @__PURE__ */ r(h, { children: /* @__PURE__ */ r(f, { asChild: !0, isActive: C.has(a.url), children: /* @__PURE__ */ i(
                b,
                {
                  "data-cy": `nav-${a.url.slice(1)}`,
                  onClick: async () => {
                    n && await n();
                  },
                  href: a.url,
                  target: t ? "_blank" : "_self",
                  children: [
                    a.icon && /* @__PURE__ */ r(a.icon, {}),
                    /* @__PURE__ */ r("span", { children: a.title })
                  ]
                }
              ) }) }),
              a.children ? /* @__PURE__ */ r("ul", { className: "ml-4", children: a.children.map((l) => /* @__PURE__ */ r(h, { children: /* @__PURE__ */ r(f, { asChild: !0, isActive: C.has(l.url), children: /* @__PURE__ */ r(b, { href: l.url, children: /* @__PURE__ */ r("span", { children: l.title }) }) }) }, l.title)) }) : /* @__PURE__ */ r("ul", { className: "ml-4 space-y-1", children: Array.from({ length: 3 }).map((l, F) => /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(Z, { className: "h-6 w-100 rounded-sm" }) }, F)) })
            ] }, a.title);
          }) })
        ] }, e.section)) }),
        /* @__PURE__ */ r(J, { children: /* @__PURE__ */ r(S, { children: /* @__PURE__ */ r(h, { children: /* @__PURE__ */ i(f, { size: "lg", children: [
          M,
          /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ r("span", { className: "truncate font-light", children: U }) })
        ] }) }) }) })
      ]
    }
  );
}
export {
  hr as default
};
