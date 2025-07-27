import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { useMemo as v } from "react";
import { Sidebar as M, SidebarHeader as P, SidebarMenu as f, SidebarMenuItem as m, SidebarContent as z, SidebarGroup as L, SidebarGroupLabel as $, SidebarGroupContent as D, SidebarMenuButton as A, SidebarFooter as G } from "./index.es41.js";
import { SquareTerminal as T, BriefcaseBusiness as _, ServerCog as F, KeyRound as H, UserRoundCog as K } from "lucide-react";
import O from "./index.es90.js";
import { genAvatarBackground as S, getCurrentPath as R } from "./index.es91.js";
import { Avatar as q, AvatarImage as E } from "./index.es10.js";
import { AvatarFallback as J } from "@radix-ui/react-avatar";
import Q from "./index.es92.js";
import { useLinkComponent as V } from "./index.es5.js";
const W = (s, a) => [
  {
    section: "Projects",
    sectionItems: [
      {
        title: "All Projects",
        url: "/projects",
        icon: T
      }
    ]
  },
  {
    section: "Organizations",
    sectionItems: [
      {
        title: "All Organizations",
        url: "/organizations",
        icon: _
      },
      {
        title: "All Deployments",
        url: "/deployments",
        icon: F
      }
    ]
  },
  {
    section: "Settings",
    sectionItems: [
      {
        title: "SSH Keys",
        url: "/settings",
        icon: H
      },
      {
        title: "My Account",
        url: `${s}/account`,
        target: "blank",
        onClick: () => {
        },
        icon: K
      }
    ]
  }
];
function oe({ userInfo: s, appInfo: a, currentPath: u, signOutFn: h, ...C }) {
  const k = V(), { firstName: i, lastName: n, image: p, email: o } = s, x = !!p, l = !!(i && n), g = l ? S(i.charAt(0), n.charAt(0)) : S(o.charAt(0), o.charAt(1)), N = l ? i.charAt(0).toUpperCase() + n.charAt(0).toUpperCase() : o.charAt(0).toUpperCase(), w = x ? /* @__PURE__ */ t(q, { children: [
    /* @__PURE__ */ e(E, { src: p, alt: "user_avatar" }),
    /* @__PURE__ */ e(J, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(Q, { bgColor: g.bgColor, textColor: g.textColor, children: N }), y = l ? /* @__PURE__ */ e("span", { className: "user-name", children: `${i} ${n}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: o }), c = v(() => W(a.kcUrl), [a.kcUrl, h]), U = v(() => R(c, u || ""), [c, u]), B = { ...a, signOutFn: h };
  return /* @__PURE__ */ t(M, { variant: "sidebar", collapsible: "icon", ...C, className: "w-[18vw] min-w-0 max-w-[22vw] transition-all", children: [
    /* @__PURE__ */ e(P, { children: /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(O, { ...B }) }) }) }),
    /* @__PURE__ */ e(z, { children: c.map((d) => /* @__PURE__ */ t(L, { children: [
      /* @__PURE__ */ e($, { children: d.section }),
      /* @__PURE__ */ e(D, { className: "list-none", children: d.sectionItems.map((r) => {
        const j = r.target === "blank", b = r?.onClick;
        return /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(A, { asChild: !0, isActive: U === r.url, children: /* @__PURE__ */ t(
          k,
          {
            "data-cy": `nav-${r.url.slice(1)}`,
            onClick: async () => {
              b && await b();
            },
            href: r.url,
            target: j ? "_blank" : "_self",
            children: [
              /* @__PURE__ */ e(r.icon, {}),
              /* @__PURE__ */ e("span", { children: r.title })
            ]
          }
        ) }) }, r.title);
      }) })
    ] }, d.section)) }),
    /* @__PURE__ */ e(G, { children: /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(m, { children: /* @__PURE__ */ t(A, { size: "lg", children: [
      w,
      /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: y }) })
    ] }) }) }) })
  ] });
}
export {
  oe as default
};
