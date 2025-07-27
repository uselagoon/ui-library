import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { useMemo as v } from "react";
import { Sidebar as P, SidebarHeader as z, SidebarMenu as f, SidebarMenuItem as h, SidebarContent as L, SidebarGroup as w, SidebarGroupLabel as D, SidebarGroupContent as G, SidebarMenuButton as A, SidebarFooter as T } from "./index.es41.js";
import { SquareTerminal as _, BriefcaseBusiness as $, ServerCog as H, KeyRound as K, UserRoundCog as R } from "lucide-react";
import q from "./index.es90.js";
import { genAvatarBackground as S, getCurrentPath as E } from "./index.es91.js";
import { Avatar as F, AvatarImage as I } from "./index.es10.js";
import { AvatarFallback as J } from "@radix-ui/react-avatar";
import O from "./index.es92.js";
import { useLinkComponent as Q } from "./index.es5.js";
const V = (s, t) => [
  {
    section: "Projects",
    sectionItems: [
      {
        title: "All Projects",
        url: "/projects",
        icon: _
      }
    ]
  },
  {
    section: "Organizations",
    sectionItems: [
      {
        title: "All Organizations",
        url: "/organizations",
        icon: $
      },
      {
        title: "All Deployments",
        url: "/deployments",
        icon: H
      }
    ]
  },
  {
    section: "Settings",
    sectionItems: [
      {
        title: "SSH Keys",
        url: "/settings",
        icon: K
      },
      {
        title: "My Account",
        url: `${s}/account`,
        target: "blank",
        onClick: t,
        icon: R
      }
    ]
  }
];
function oe({ userInfo: s, appInfo: t, currentPath: u, signOutFn: l, ...C }) {
  const k = Q(), { firstName: i, lastName: n, image: p, email: o } = s, x = !!p, c = !!(i && n), g = c ? S(i.charAt(0), n.charAt(0)) : S(o.charAt(0), o.charAt(1)), N = c ? i.charAt(0).toUpperCase() + n.charAt(0).toUpperCase() : o.charAt(0).toUpperCase(), y = x ? /* @__PURE__ */ a(F, { children: [
    /* @__PURE__ */ e(I, { src: p, alt: "user_avatar" }),
    /* @__PURE__ */ e(J, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(O, { bgColor: g.bgColor, textColor: g.textColor, children: N }), U = c ? /* @__PURE__ */ e("span", { className: "user-name", children: `${i} ${n}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: o }), d = v(() => V(t.kcUrl, l), [t.kcUrl, l]), B = v(() => E(d, u || ""), [d, u]), j = { ...t, signOutFn: l };
  return /* @__PURE__ */ a(P, { variant: "sidebar", collapsible: "icon", ...C, children: [
    /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(q, { ...j }) }) }) }),
    /* @__PURE__ */ e(L, { children: d.map((m) => /* @__PURE__ */ a(w, { children: [
      /* @__PURE__ */ e(D, { children: m.section }),
      /* @__PURE__ */ e(G, { className: "list-none", children: m.sectionItems.map((r) => {
        const M = r.target === "blank", b = r.onClick;
        return /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(A, { asChild: !0, isActive: B === r.url, children: /* @__PURE__ */ a(
          k,
          {
            onClick: async () => {
              b && await b();
            },
            href: r.url,
            target: M ? "_blank" : "_self",
            children: [
              /* @__PURE__ */ e(r.icon, {}),
              /* @__PURE__ */ e("span", { children: r.title })
            ]
          }
        ) }) }, r.title);
      }) })
    ] }, m.section)) }),
    /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ a(A, { size: "lg", children: [
      y,
      /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: U }) })
    ] }) }) }) })
  ] });
}
export {
  oe as default
};
