import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { useMemo as N, Fragment as F } from "react";
import { useSidebar as G, Sidebar as O, SidebarHeader as $, SidebarMenu as M, SidebarMenuItem as u, SidebarContent as _, SidebarGroup as E, SidebarGroupLabel as H, SidebarGroupContent as K, SidebarMenuButton as A, SidebarFooter as R } from "./index.es41.js";
import { FolderGit2 as T, ServerCog as q, BriefcaseBusiness as J, KeyRound as Q, ListChecks as V, UserRoundCog as W } from "lucide-react";
import X from "./index.es94.js";
import { genAvatarBackground as P, getCurrentPath as Y } from "./index.es95.js";
import { Avatar as Z, AvatarImage as I } from "./index.es10.js";
import { AvatarFallback as ee } from "@radix-ui/react-avatar";
import te from "./index.es96.js";
import { useLinkComponent as re } from "./index.es5.js";
const ne = (m, n, r) => {
  const s = n.match(/^\/projects\/([^/]+)/), p = n.match(/^\/projects\/([^/]+)\/([^/]+)/), g = n.match(/^\/organizations\/([^/]+)/), a = s?.[1], v = p?.[2], o = g?.[1];
  return [
    {
      section: "Projects",
      sectionItems: [
        {
          title: "Projects",
          url: "/projects",
          icon: T,
          children: a && r?.getProjectNav ? r.getProjectNav(a, v, r.getEnvironmentNav) : void 0
        }
      ]
    },
    {
      section: "Deployments",
      sectionItems: [
        {
          title: "Active Deployments",
          url: "/alldeployments",
          icon: q
        }
      ]
    },
    {
      section: "Organizations",
      sectionItems: [
        {
          title: "Organizations",
          url: "/organizations",
          icon: J,
          children: o && r?.getOrgNav ? r.getOrgNav(o) : void 0
        }
      ]
    },
    {
      section: "Settings",
      sectionItems: [
        {
          title: "SSH Keys",
          url: "/settings",
          icon: Q
        },
        {
          title: "Preferences",
          url: "/settings/preferences",
          icon: V
        },
        {
          title: "My Account",
          url: `${m}/account`,
          target: "blank",
          onClick: () => {
          },
          icon: W
        }
      ]
    }
  ];
};
function ge({ userInfo: m, appInfo: n, currentPath: r, dynamicNav: s, signOutFn: p, ...g }) {
  const a = re(), { name: v, image: o, email: l } = m, U = !!o, b = v?.split(" ") ?? [], c = b[0] ?? void 0, d = b.length > 1 ? b.slice(1).join(" ") : " ", f = !!(c && d), k = f ? P(c.charAt(0), d.charAt(0)) : P(l.charAt(0), l.charAt(1)), w = f ? c.charAt(0).toUpperCase() + d.charAt(0).toUpperCase() : l.charAt(0).toUpperCase(), B = U ? /* @__PURE__ */ i(Z, { children: [
    /* @__PURE__ */ e(I, { src: o, alt: "user_avatar" }),
    /* @__PURE__ */ e(ee, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(te, { bgColor: k.bgColor, textColor: k.textColor, children: w }), z = f ? /* @__PURE__ */ e("span", { className: "user-name", children: `${c} ${d}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: l }), C = N(() => ne(n.kcUrl, r, s), [n.kcUrl, r, s]), j = N(() => Y(C, r || ""), [C, r]), { state: L } = G(), y = { ...n, signOutFn: p, isCollapsed: L === "collapsed" };
  return /* @__PURE__ */ i(
    O,
    {
      variant: "sidebar",
      collapsible: "icon",
      ...g,
      className: "w-[clamp(0px,20vw,256px)] transition-all overflow-hidden",
      children: [
        /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(X, { ...y }) }) }) }),
        /* @__PURE__ */ e(_, { children: C.map((S) => /* @__PURE__ */ i(E, { children: [
          /* @__PURE__ */ e(H, { children: S.section }),
          /* @__PURE__ */ e(K, { className: "list-none", children: S.sectionItems.map((t) => {
            const D = t.target === "blank", x = t?.onClick;
            return /* @__PURE__ */ i(F, { children: [
              /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(A, { asChild: !0, isActive: j === t.url, children: /* @__PURE__ */ i(
                a,
                {
                  "data-cy": `nav-${t.url.slice(1)}`,
                  onClick: async () => {
                    x && await x();
                  },
                  href: t.url,
                  target: D ? "_blank" : "_self",
                  children: [
                    t.icon && /* @__PURE__ */ e(t.icon, {}),
                    /* @__PURE__ */ e("span", { children: t.title })
                  ]
                }
              ) }) }, t.title),
              t.children && /* @__PURE__ */ e("ul", { className: "ml-4", children: t.children.map((h) => /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(A, { asChild: !0, isActive: j === h.url, children: /* @__PURE__ */ e(a, { href: h.url, children: /* @__PURE__ */ e("span", { children: h.title }) }) }) }, h.title)) })
            ] });
          }) })
        ] }, S.section)) }),
        /* @__PURE__ */ e(R, { children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ i(A, { size: "lg", children: [
          B,
          /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: z }) })
        ] }) }) }) })
      ]
    }
  );
}
export {
  ge as default,
  ne as getSidenavItems
};
