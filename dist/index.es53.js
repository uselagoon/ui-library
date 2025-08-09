import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { Sidebar as z, SidebarHeader as G, SidebarMenu as A, SidebarMenuItem as u, SidebarContent as L, SidebarGroup as $, SidebarGroupLabel as D, SidebarGroupContent as F, SidebarMenuButton as C, SidebarFooter as _ } from "./index.es41.js";
import { FolderGit2 as H, BriefcaseBusiness as K, ServerCog as O, KeyRound as R, UserRoundCog as T } from "lucide-react";
import E from "./index.es94.js";
import { genAvatarBackground as S, getCurrentPath as q } from "./index.es95.js";
import { Avatar as J, AvatarImage as Q } from "./index.es10.js";
import { AvatarFallback as V } from "@radix-ui/react-avatar";
import W from "./index.es96.js";
import { useLinkComponent as X } from "./index.es5.js";
const Y = (s, a) => [
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
        title: "My Account",
        url: `${s}/account`,
        target: "blank",
        onClick: () => {
        },
        icon: T
      }
    ]
  }
];
function le({ userInfo: s, appInfo: a, currentPath: h, signOutFn: p, ...k }) {
  const x = X(), { name: N, image: g, email: n } = s, y = !!g, l = N?.split(" ") ?? [], i = l[0] ?? void 0, o = l.length > 1 ? l.slice(1).join(" ") : " ", c = !!(i && o), b = c ? S(i.charAt(0), o.charAt(0)) : S(n.charAt(0), n.charAt(1)), U = c ? i.charAt(0).toUpperCase() + o.charAt(0).toUpperCase() : n.charAt(0).toUpperCase(), j = y ? /* @__PURE__ */ t(J, { children: [
    /* @__PURE__ */ e(Q, { src: g, alt: "user_avatar" }),
    /* @__PURE__ */ e(V, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(W, { bgColor: b.bgColor, textColor: b.textColor, children: U }), B = c ? /* @__PURE__ */ e("span", { className: "user-name", children: `${i} ${o}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: n }), d = f(() => Y(a.kcUrl), [a.kcUrl, p]), P = f(() => q(d, h || ""), [d, h]), w = { ...a, signOutFn: p };
  return /* @__PURE__ */ t(z, { variant: "sidebar", collapsible: "icon", ...k, className: "w-[clamp(0px,20vw,256px)] transition-all", children: [
    /* @__PURE__ */ e(G, { children: /* @__PURE__ */ e(A, { children: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(E, { ...w }) }) }) }),
    /* @__PURE__ */ e(L, { children: d.map((m) => /* @__PURE__ */ t($, { children: [
      /* @__PURE__ */ e(D, { children: m.section }),
      /* @__PURE__ */ e(F, { className: "list-none", children: m.sectionItems.map((r) => {
        const M = r.target === "blank", v = r?.onClick;
        return /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(C, { asChild: !0, isActive: P === r.url, children: /* @__PURE__ */ t(
          x,
          {
            "data-cy": `nav-${r.url.slice(1)}`,
            onClick: async () => {
              v && await v();
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
    /* @__PURE__ */ e(_, { children: /* @__PURE__ */ e(A, { children: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ t(C, { size: "lg", children: [
      j,
      /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: B }) })
    ] }) }) }) })
  ] });
}
export {
  le as default
};
