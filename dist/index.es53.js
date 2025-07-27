import { j as e } from "./index.es70.js";
import { useMemo as p } from "react";
import { Sidebar as M, SidebarHeader as P, SidebarMenu as g, SidebarMenuItem as m, SidebarContent as z, SidebarGroup as L, SidebarGroupLabel as w, SidebarGroupContent as D, SidebarMenuButton as b, SidebarFooter as G } from "./index.es41.js";
import { SquareTerminal as R, BriefcaseBusiness as T, ServerCog as _, KeyRound as $, UserRoundCog as E } from "lucide-react";
import H from "./index.es97.js";
import { genAvatarBackground as v, getCurrentPath as K } from "./index.es98.js";
import { Avatar as q, AvatarImage as F } from "./index.es10.js";
import { AvatarFallback as I } from "@radix-ui/react-avatar";
import J from "./index.es99.js";
import { useLinkComponent as O } from "./index.es5.js";
const Q = (n, t) => [
  {
    section: "Projects",
    sectionItems: [
      {
        title: "All Projects",
        url: "/projects",
        icon: R
      }
    ]
  },
  {
    section: "Organizations",
    sectionItems: [
      {
        title: "All Organizations",
        url: "/organizations",
        icon: T
      },
      {
        title: "All Deployments",
        url: "/deployments",
        icon: _
      }
    ]
  },
  {
    section: "Settings",
    sectionItems: [
      {
        title: "SSH Keys",
        url: "/settings",
        icon: $
      },
      {
        title: "My Account",
        url: `${n}/account`,
        target: "blank",
        onClick: t,
        icon: E
      }
    ]
  }
];
function ie({ userInfo: n, appInfo: t, currentPath: u, signOutFn: o, ...f }) {
  const A = O(), { firstName: s, lastName: a, image: h, email: i } = n, S = !!h, l = !!(s && a), x = l ? v(s.charAt(0), a.charAt(0)) : v(i.charAt(0), i.charAt(1)), C = l ? s.charAt(0).toUpperCase() + a.charAt(0).toUpperCase() : i.charAt(0).toUpperCase(), k = S ? /* @__PURE__ */ e.jsxs(q, { children: [
    /* @__PURE__ */ e.jsx(F, { src: h, alt: "user_avatar" }),
    /* @__PURE__ */ e.jsx(I, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e.jsx(J, { bgColor: x.bgColor, textColor: x.textColor, children: C }), N = l ? /* @__PURE__ */ e.jsx("span", { className: "user-name", children: `${s} ${a}` }) : /* @__PURE__ */ e.jsx("span", { className: "user-name", children: i }), c = p(() => Q(t.kcUrl, o), [t.kcUrl, o]), y = p(() => K(c, u || ""), [c, u]), U = { ...t, signOutFn: o };
  return /* @__PURE__ */ e.jsxs(M, { variant: "sidebar", collapsible: "icon", ...f, children: [
    /* @__PURE__ */ e.jsx(P, { children: /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsx(H, { ...U }) }) }) }),
    /* @__PURE__ */ e.jsx(z, { children: c.map((d) => /* @__PURE__ */ e.jsxs(L, { children: [
      /* @__PURE__ */ e.jsx(w, { children: d.section }),
      /* @__PURE__ */ e.jsx(D, { className: "list-none", children: d.sectionItems.map((r) => {
        const B = r.target === "blank", j = r.onClick;
        return /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsx(b, { asChild: !0, isActive: y === r.url, children: /* @__PURE__ */ e.jsxs(
          A,
          {
            onClick: async () => {
              j && await j();
            },
            href: r.url,
            target: B ? "_blank" : "_self",
            children: [
              /* @__PURE__ */ e.jsx(r.icon, {}),
              /* @__PURE__ */ e.jsx("span", { children: r.title })
            ]
          }
        ) }) }, r.title);
      }) })
    ] }, d.section)) }),
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsxs(b, { size: "lg", children: [
      k,
      /* @__PURE__ */ e.jsx("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e.jsx("span", { className: "truncate font-light", children: N }) })
    ] }) }) }) })
  ] });
}
export {
  ie as default
};
