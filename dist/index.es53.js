import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { Sidebar as M, SidebarHeader as z, SidebarMenu as A, SidebarMenuItem as u, SidebarContent as G, SidebarGroup as $, SidebarGroupLabel as D, SidebarGroupContent as F, SidebarMenuButton as C, SidebarFooter as _ } from "./index.es41.js";
import { FolderGit2 as H, BriefcaseBusiness as K, ServerCog as O, KeyRound as R, ListChecks as T, UserRoundCog as E } from "lucide-react";
import q from "./index.es94.js";
import { genAvatarBackground as S, getCurrentPath as J } from "./index.es95.js";
import { Avatar as Q, AvatarImage as V } from "./index.es10.js";
import { AvatarFallback as W } from "@radix-ui/react-avatar";
import X from "./index.es96.js";
import { useLinkComponent as Y } from "./index.es5.js";
const Z = (o, a) => [
  {
    section: "Projects",
    sectionItems: [
      {
        title: "All Projects",
        url: "/projects",
        icon: H
      }
    ]
  },
  {
    section: "Organizations",
    sectionItems: [
      {
        title: "All Organizations",
        url: "/organizations",
        icon: K
      },
      {
        title: "All Deployments",
        url: "/alldeployments",
        icon: O
      }
    ]
  },
  {
    section: "Settings",
    sectionItems: [
      {
        title: "SSH Keys",
        url: "/settings",
        icon: R
      },
      {
        title: "Preferences",
        url: "/settings/preferences",
        icon: T
      },
      {
        title: "My Account",
        url: `${o}/account`,
        target: "blank",
        onClick: () => {
        },
        icon: E
      }
    ]
  }
];
function ce({ userInfo: o, appInfo: a, currentPath: h, signOutFn: p, ...k }) {
  const x = Y(), { name: N, image: g, email: n } = o, y = !!g, l = N?.split(" ") ?? [], i = l[0] ?? void 0, s = l.length > 1 ? l.slice(1).join(" ") : " ", c = !!(i && s), b = c ? S(i.charAt(0), s.charAt(0)) : S(n.charAt(0), n.charAt(1)), P = c ? i.charAt(0).toUpperCase() + s.charAt(0).toUpperCase() : n.charAt(0).toUpperCase(), U = y ? /* @__PURE__ */ t(Q, { children: [
    /* @__PURE__ */ e(V, { src: g, alt: "user_avatar" }),
    /* @__PURE__ */ e(W, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(X, { bgColor: b.bgColor, textColor: b.textColor, children: P }), j = c ? /* @__PURE__ */ e("span", { className: "user-name", children: `${i} ${s}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: n }), d = f(() => Z(a.kcUrl), [a.kcUrl, p]), B = f(() => J(d, h || ""), [d, h]), w = { ...a, signOutFn: p };
  return /* @__PURE__ */ t(M, { variant: "sidebar", collapsible: "icon", ...k, className: "w-[clamp(0px,20vw,256px)] transition-all", children: [
    /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(A, { children: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(q, { ...w }) }) }) }),
    /* @__PURE__ */ e(G, { children: d.map((m) => /* @__PURE__ */ t($, { children: [
      /* @__PURE__ */ e(D, { children: m.section }),
      /* @__PURE__ */ e(F, { className: "list-none", children: m.sectionItems.map((r) => {
        const L = r.target === "blank", v = r?.onClick;
        return /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(C, { asChild: !0, isActive: B === r.url, children: /* @__PURE__ */ t(
          x,
          {
            "data-cy": `nav-${r.url.slice(1)}`,
            onClick: async () => {
              v && await v();
            },
            href: r.url,
            target: L ? "_blank" : "_self",
            children: [
              /* @__PURE__ */ e(r.icon, {}),
              /* @__PURE__ */ e("span", { children: r.title })
            ]
          }
        ) }) }, r.title);
      }) })
    ] }, m.section)) }),
    /* @__PURE__ */ e(_, { children: /* @__PURE__ */ e(A, { children: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ t(C, { size: "lg", children: [
      U,
      /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: j }) })
    ] }) }) }) })
  ] });
}
export {
  ce as default
};
