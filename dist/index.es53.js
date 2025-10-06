import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { useMemo as F, Fragment as G } from "react";
import { useSidebar as $, Sidebar as D, SidebarHeader as P, SidebarMenu as C, SidebarMenuItem as d, SidebarContent as T, SidebarGroup as W, SidebarGroupLabel as z, SidebarGroupContent as H, SidebarMenuButton as f, SidebarFooter as q } from "./index.es41.js";
import J from "./index.es94.js";
import { genAvatarBackground as S } from "./index.es95.js";
import { Avatar as K, AvatarImage as O } from "./index.es10.js";
import { AvatarFallback as Q } from "@radix-ui/react-avatar";
import R from "./index.es96.js";
import { useLinkComponent as V } from "./index.es5.js";
import { Skeleton as X } from "./index.es42.js";
function or({ userInfo: N, appInfo: x, currentPath: h, sidenavItems: p, signOutFn: k, ...w }) {
  const b = V(), { name: y, image: v, email: s } = N, B = !!v, m = y?.split(" ") ?? [], o = m[0] ?? void 0, c = m.length > 1 ? m.slice(1).join(" ") : " ", u = !!(o && c), g = u ? S(o.charAt(0), c.charAt(0)) : S(s.charAt(0), s.charAt(1)), E = u ? o.charAt(0).toUpperCase() + c.charAt(0).toUpperCase() : s.charAt(0).toUpperCase(), L = B ? /* @__PURE__ */ n(K, { children: [
    /* @__PURE__ */ r(O, { src: v, alt: "user_avatar" }),
    /* @__PURE__ */ r(Q, { children: "Avatar" })
  ] }) : /* @__PURE__ */ r(R, { bgColor: g.bgColor, textColor: g.textColor, children: E }), M = u ? /* @__PURE__ */ r("span", { className: "user-name", children: `${o} ${c}` }) : /* @__PURE__ */ r("span", { className: "user-name", children: s }), A = F(() => {
    const e = /* @__PURE__ */ new Set();
    return p.forEach((a) => {
      a.sectionItems.forEach((l) => {
        h.startsWith(l.url) && (e.add(l.url), l.children && l.children.forEach((t) => {
          h.startsWith(t.url) && e.add(t.url);
        }));
      });
    }), e;
  }, [p, h]), { state: U } = $(), _ = { ...x, signOutFn: k, isCollapsed: U === "collapsed" };
  return /* @__PURE__ */ n(
    D,
    {
      variant: "sidebar",
      collapsible: "icon",
      ...w,
      className: "w-[clamp(0px,20vw,256px)] transition-all overflow-hidden",
      children: [
        /* @__PURE__ */ r(P, { children: /* @__PURE__ */ r(C, { children: /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(J, { ..._ }) }) }) }),
        /* @__PURE__ */ r(T, { children: p.map((e) => /* @__PURE__ */ n(W, { children: [
          /* @__PURE__ */ r(z, { children: e.section }),
          /* @__PURE__ */ r(H, { className: "list-none", children: e.sectionItems.map((a) => {
            const l = a.target === "blank", t = a?.onClick;
            return /* @__PURE__ */ n(G, { children: [
              /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(f, { asChild: !0, isActive: A.has(a.url), children: /* @__PURE__ */ n(
                b,
                {
                  "data-cy": `nav-${a.url.slice(1)}`,
                  onClick: async () => {
                    t && await t();
                  },
                  href: a.url,
                  target: l ? "_blank" : "_self",
                  children: [
                    a.icon && /* @__PURE__ */ r(a.icon, {}),
                    /* @__PURE__ */ r("span", { children: a.title })
                  ]
                }
              ) }) }),
              a.children ? /* @__PURE__ */ r("ul", { className: "ml-4", children: a.children.map((i) => /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(f, { asChild: !0, isActive: A.has(i.url), children: /* @__PURE__ */ r(b, { href: i.url, children: /* @__PURE__ */ r("span", { children: i.title }) }) }) }, i.title)) }) : /* @__PURE__ */ r("ul", { className: "ml-4 space-y-1", children: Array.from({ length: 3 }).map((i, j) => /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(X, { className: "h-6 w-100 rounded-sm" }) }, j)) })
            ] }, a.title);
          }) })
        ] }, e.section)) }),
        /* @__PURE__ */ r(q, { children: /* @__PURE__ */ r(C, { children: /* @__PURE__ */ r(d, { children: /* @__PURE__ */ n(f, { size: "lg", children: [
          L,
          /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ r("span", { className: "truncate font-light", children: M }) })
        ] }) }) }) })
      ]
    }
  );
}
export {
  or as default
};
