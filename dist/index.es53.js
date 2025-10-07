import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { useMemo as F, Fragment as G } from "react";
import { useSidebar as _, Sidebar as $, SidebarHeader as D, SidebarMenu as A, SidebarMenuItem as d, SidebarContent as P, SidebarGroup as T, SidebarGroupLabel as W, SidebarGroupContent as z, SidebarMenuButton as f, SidebarFooter as H } from "./index.es41.js";
import q from "./index.es94.js";
import { genAvatarBackground as S } from "./index.es95.js";
import { Avatar as J, AvatarImage as K } from "./index.es10.js";
import { AvatarFallback as O } from "@radix-ui/react-avatar";
import Q from "./index.es96.js";
import { useLinkComponent as R } from "./index.es5.js";
function ir({ userInfo: x, appInfo: N, currentPath: h, sidenavItems: p, signOutFn: k, ...w }) {
  const b = R(), { name: B, image: v, email: l } = x, E = !!v, u = B?.split(" ") ?? [], s = u[0] ?? void 0, o = u.length > 1 ? u.slice(1).join(" ") : " ", m = !!(s && o), g = m ? S(s.charAt(0), o.charAt(0)) : S(l.charAt(0), l.charAt(1)), L = m ? s.charAt(0).toUpperCase() + o.charAt(0).toUpperCase() : l.charAt(0).toUpperCase(), M = E ? /* @__PURE__ */ n(J, { children: [
    /* @__PURE__ */ r(K, { src: v, alt: "user_avatar" }),
    /* @__PURE__ */ r(O, { children: "Avatar" })
  ] }) : /* @__PURE__ */ r(Q, { bgColor: g.bgColor, textColor: g.textColor, children: L }), U = m ? /* @__PURE__ */ r("span", { className: "user-name", children: `${s} ${o}` }) : /* @__PURE__ */ r("span", { className: "user-name", children: l }), C = F(() => {
    const e = /* @__PURE__ */ new Set();
    return p.forEach((a) => {
      a.sectionItems.forEach((t) => {
        h.startsWith(t.url) && (e.add(t.url), t.children && t.children.forEach((i) => {
          h.startsWith(i.url) && e.add(i.url);
        }));
      });
    }), e;
  }, [p, h]), { state: j } = _(), y = { ...N, signOutFn: k, isCollapsed: j === "collapsed" };
  return /* @__PURE__ */ n(
    $,
    {
      variant: "sidebar",
      collapsible: "icon",
      ...w,
      className: "w-[clamp(0px,20vw,256px)] transition-all overflow-hidden",
      children: [
        /* @__PURE__ */ r(D, { children: /* @__PURE__ */ r(A, { children: /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(q, { ...y }) }) }) }),
        /* @__PURE__ */ r(P, { children: p.map((e) => /* @__PURE__ */ n(T, { children: [
          /* @__PURE__ */ r(W, { children: e.section }),
          /* @__PURE__ */ r(z, { className: "list-none", children: e.sectionItems.map((a) => {
            const t = a.target === "blank", i = a?.onClick;
            return /* @__PURE__ */ n(G, { children: [
              /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(f, { asChild: !0, isActive: C.has(a.url), children: /* @__PURE__ */ n(
                b,
                {
                  "data-cy": `nav-${a.url.slice(1)}`,
                  onClick: async () => {
                    i && await i();
                  },
                  href: a.url,
                  target: t ? "_blank" : "_self",
                  children: [
                    a.icon && /* @__PURE__ */ r(a.icon, {}),
                    /* @__PURE__ */ r("span", { children: a.title })
                  ]
                }
              ) }) }),
              /* @__PURE__ */ r("ul", { className: "ml-4", children: a.children?.map((c) => /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(f, { asChild: !0, isActive: C.has(c.url), children: /* @__PURE__ */ r(b, { href: c.url, children: /* @__PURE__ */ r("span", { children: c.title }) }) }) }, c.title)) })
            ] }, a.title);
          }) })
        ] }, e.section)) }),
        /* @__PURE__ */ r(H, { children: /* @__PURE__ */ r(A, { children: /* @__PURE__ */ r(d, { children: /* @__PURE__ */ n(f, { size: "lg", children: [
          M,
          /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ r("span", { className: "truncate font-light", children: U }) })
        ] }) }) }) })
      ]
    }
  );
}
export {
  ir as default
};
