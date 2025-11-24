import { jsxs as n, Fragment as P, jsx as e } from "react/jsx-runtime";
import { useState as T, Fragment as _ } from "react";
import { Sidebar as D, SidebarContent as E, SidebarGroup as W, SidebarGroupLabel as X, SidebarGroupContent as q, SidebarMenuItem as p, SidebarMenuButton as N, SidebarMenuSub as H, SidebarFooter as J, SidebarMenu as K } from "./index.es41.js";
import Q from "./index.es97.js";
import { genAvatarBackground as $ } from "./index.es98.js";
import { Avatar as R, AvatarImage as V } from "./index.es10.js";
import { AvatarFallback as Y } from "@radix-ui/react-avatar";
import Z from "./index.es99.js";
import { useLinkComponent as I } from "./index.es5.js";
import { Collapsible as ee, CollapsibleTrigger as re, CollapsibleContent as ae } from "./index.es19.js";
import { Menu as ne, X as le, ChevronUp as te } from "lucide-react";
import { Button as M } from "./index.es13.js";
import { cn as ie } from "./index.es71.js";
import se from "./index.es100.js";
import oe from "./index.es101.js";
const y = (o, c, t) => c.children?.length ? /* @__PURE__ */ e("ul", { className: "ml-4 mt-2 space-y-1", children: c.children.map((r) => {
  const u = r.children && r.children.length > 0 ? t.has(r.url) || t.has(`${r.url}:parent`) : t.has(r.url);
  return /* @__PURE__ */ n(p, { children: [
    /* @__PURE__ */ e(N, { asChild: !0, isActive: u, children: /* @__PURE__ */ e(o, { href: r.url, className: `${r.icon ? "" : "ml-4"}`, children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
      r.icon && /* @__PURE__ */ e(r.icon, {}),
      /* @__PURE__ */ e("span", { children: r.title })
    ] }) }) }),
    y(o, r, t)
  ] }, r.title);
}) }) : null;
function we({ userInfo: o, appInfo: c, currentPath: t, sidenavItems: r, signOutFn: x, ...u }) {
  const f = I(), { name: z, image: A, email: s } = o, F = !!A, b = z?.split(" ") ?? [], d = b[0] ?? void 0, h = b.length > 1 ? b.slice(1).join(" ") : " ", g = !!(d && h), S = g ? $(d.charAt(0), h.charAt(0)) : $(s.charAt(0), s.charAt(1)), B = g ? d.charAt(0).toUpperCase() + h.charAt(0).toUpperCase() : s.charAt(0).toUpperCase(), O = F ? /* @__PURE__ */ n(R, { children: [
    /* @__PURE__ */ e(V, { src: A, alt: "user_avatar" }),
    /* @__PURE__ */ e(Y, { children: "Avatar" })
  ] }) : /* @__PURE__ */ e(Z, { bgColor: S.bgColor, textColor: S.textColor, children: B }), U = g ? /* @__PURE__ */ e("span", { className: "user-name", children: `${d} ${h}` }) : /* @__PURE__ */ e("span", { className: "user-name", children: s }), i = se(r, t), [m, v] = T(!1), j = {
    ...c,
    signOutFn: x,
    avatar: O,
    userDisplayName: U,
    email: s
  };
  return /* @__PURE__ */ n(P, { children: [
    !m && /* @__PURE__ */ e("div", { className: "lg:hidden fixed top-2 left-4 z-40", children: /* @__PURE__ */ e(M, { variant: "ghost", size: "icon", onClick: () => v(!0), "aria-label": "Open sidebar", children: /* @__PURE__ */ e(ne, { className: "h-5 w-5" }) }) }),
    /* @__PURE__ */ n(
      D,
      {
        variant: "sidebar",
        collapsible: "none",
        ...u,
        className: ie(
          "fixed top-0 left-0 z-40 h-screen bg-background transition-transform duration-300",
          "min-w-[290px] overflow-hidden",
          "flex flex-col",
          m ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        ),
        children: [
          m && /* @__PURE__ */ e("div", { className: "lg:hidden absolute top-4 right-0", children: /* @__PURE__ */ e(M, { variant: "ghost", size: "icon", onClick: () => v(!1), "aria-label": "Close sidebar", children: /* @__PURE__ */ e(le, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e(oe, {}) }),
          /* @__PURE__ */ e(E, { className: "flex-1 overflow-y-auto min-h-0", children: r.map((C) => /* @__PURE__ */ n(W, { children: [
            /* @__PURE__ */ e(X, { children: C.section }),
            /* @__PURE__ */ e(q, { className: "list-none", children: C.sectionItems.map((a) => {
              const L = a.target === "blank", k = a?.onClick, w = Array.from(i).some((l) => l.startsWith(a.url)), G = ["Projects", "Organizations"].includes(a.title);
              return /* @__PURE__ */ e(_, { children: /* @__PURE__ */ n(ee, { open: w, children: [
                /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(re, { asChild: !0, children: /* @__PURE__ */ e(
                  N,
                  {
                    asChild: !0,
                    isActive: i.has(a.url) || i.has(`${a.url}:parent`),
                    children: /* @__PURE__ */ n(
                      f,
                      {
                        "data-cy": `nav-${a.url.slice(1)}`,
                        onClick: async () => {
                          k && await k();
                        },
                        href: a.url,
                        target: L ? "_blank" : "_self",
                        className: "flex w-full gap-2",
                        children: [
                          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                            a.icon && /* @__PURE__ */ e(a.icon, {}),
                            /* @__PURE__ */ e("span", { children: a.title })
                          ] }),
                          G ? /* @__PURE__ */ e(
                            te,
                            {
                              className: `ml-auto h-4 w-4 transition-transform ${w ? "rotate-180" : "rotate-90"}`
                            }
                          ) : null
                        ]
                      }
                    )
                  }
                ) }) }),
                /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(H, { children: a.children?.map((l) => /* @__PURE__ */ n(p, { children: [
                  /* @__PURE__ */ e(
                    N,
                    {
                      asChild: !0,
                      isActive: i.has(l.url) || i.has(`${l.url}:parent`),
                      children: /* @__PURE__ */ e(f, { href: l.url, className: "mt-2", children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                        l.icon && /* @__PURE__ */ e(l.icon, {}),
                        /* @__PURE__ */ e("span", { children: l.title })
                      ] }) })
                    }
                  ),
                  y(f, l, i)
                ] }, l.title)) }) })
              ] }) }, a.title);
            }) })
          ] }, C.section)) }),
          /* @__PURE__ */ e(J, { className: "flex-shrink-0", children: /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(Q, { ...j }) }) }) })
        ]
      }
    ),
    m && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/40 z-30 lg:hidden", onClick: () => v(!1) })
  ] });
}
export {
  we as default
};
