import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { useSidebar as z, Sidebar as G, SidebarHeader as $, SidebarMenu as C, SidebarMenuItem as u, SidebarContent as D, SidebarGroup as F, SidebarGroupLabel as _, SidebarGroupContent as H, SidebarMenuButton as A, SidebarFooter as K } from "./index.es41.js";
import { FolderGit2 as O, ServerCog as R, BriefcaseBusiness as T, KeyRound as E, ListChecks as q, UserRoundCog as J } from "lucide-react";
import Q from "./index.es94.js";
import { genAvatarBackground as S, getCurrentPath as V } from "./index.es95.js";
import { Avatar as W, AvatarImage as X } from "./index.es10.js";
import { AvatarFallback as Y } from "@radix-ui/react-avatar";
import Z from "./index.es96.js";
import { useLinkComponent as I } from "./index.es5.js";
const ee = (o, a) => [
  {
    section: "Projects",
    sectionItems: [
      {
        title: "All Projects",
        url: "/projects",
        icon: O
      },
      {
        title: "All Deployments",
        url: "/alldeployments",
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
      }
    ]
  },
  {
    section: "Settings",
    sectionItems: [
      {
        title: "SSH Keys",
        url: "/settings",
        icon: E
      },
      {
        title: "Preferences",
        url: "/settings/preferences",
        icon: q
      },
      {
        title: "My Account",
        url: `${o}/account`,
        target: "blank",
        onClick: () => {
        },
        icon: J
      }
    ]
  }
];
function ue({ userInfo: o, appInfo: a, currentPath: h, signOutFn: p, ...k }) {
  const x = I(), { name: N, image: g, email: n } = o, y = !!g, l = N?.split(" ") ?? [], i = l[0] ?? void 0, s = l.length > 1 ? l.slice(1).join(" ") : " ", c = !!(i && s), b = c ? S(i.charAt(0), s.charAt(0)) : S(n.charAt(0), n.charAt(1)), P = c ? i.charAt(0).toUpperCase() + s.charAt(0).toUpperCase() : n.charAt(0).toUpperCase(), U = y ? /* @__PURE__ */ r(W, { children: [
    /* @__PURE__ */ e(X, { src: g, alt: "user_avatar" }),
    /* @__PURE__ */ e(Y, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(Z, { bgColor: b.bgColor, textColor: b.textColor, children: P }), j = c ? /* @__PURE__ */ e("span", { className: "user-name", children: `${i} ${s}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: n }), d = f(() => ee(a.kcUrl), [a.kcUrl, p]), w = f(() => V(d, h || ""), [d, h]), { state: B } = z(), L = { ...a, signOutFn: p, isCollapsed: B === "collapsed" };
  return /* @__PURE__ */ r(
    G,
    {
      variant: "sidebar",
      collapsible: "icon",
      ...k,
      className: "w-[clamp(0px,20vw,256px)] transition-all overflow-hidden",
      children: [
        /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(C, { children: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(Q, { ...L }) }) }) }),
        /* @__PURE__ */ e(D, { children: d.map((m) => /* @__PURE__ */ r(F, { children: [
          /* @__PURE__ */ e(_, { children: m.section }),
          /* @__PURE__ */ e(H, { className: "list-none", children: m.sectionItems.map((t) => {
            const M = t.target === "blank", v = t?.onClick;
            return /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(A, { asChild: !0, isActive: w === t.url, children: /* @__PURE__ */ r(
              x,
              {
                "data-cy": `nav-${t.url.slice(1)}`,
                onClick: async () => {
                  v && await v();
                },
                href: t.url,
                target: M ? "_blank" : "_self",
                children: [
                  /* @__PURE__ */ e(t.icon, {}),
                  /* @__PURE__ */ e("span", { children: t.title })
                ]
              }
            ) }) }, t.title);
          }) })
        ] }, m.section)) }),
        /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e(C, { children: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ r(A, { size: "lg", children: [
          U,
          /* @__PURE__ */ e("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ e("span", { className: "truncate font-light", children: j }) })
        ] }) }) }) })
      ]
    }
  );
}
export {
  ue as default
};
