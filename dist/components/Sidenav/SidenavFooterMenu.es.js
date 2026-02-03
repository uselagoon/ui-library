import { jsxs as n, jsx as e, Fragment as u } from "react/jsx-runtime";
import { ChevronsUpDown as f, LogOut as h } from "lucide-react";
import { DropdownMenu as p, DropdownMenuTrigger as g, DropdownMenuContent as w, DropdownMenuItem as a } from "../ui/dropdown-menu.es.js";
import { SidebarMenuButton as N } from "../ui/sidebar.es.js";
import { useLinkComponent as x } from "../../providers/NextLinkProvider.es.js";
function j({ email: s, kcUrl: k, signOutFn: l, avatar: t, userDisplayName: i, footerItems: o, disableAccountLink: C = !1, disableChangeFeedLink: b = !1 }) {
  const c = x();
  return /* @__PURE__ */ n(p, { modal: !1, children: [
    /* @__PURE__ */ e("section", { className: "flex items-center gap-1 pl-1", children: /* @__PURE__ */ e(g, { className: "w-full", children: /* @__PURE__ */ n(N, { size: "lg", className: "w-full", children: [
      (() => {
        if (t)
          return /* @__PURE__ */ n(u, { children: [
            t,
            /* @__PURE__ */ n("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-medium", children: i }),
              /* @__PURE__ */ e("span", { className: "truncate font-light text-xs", children: s })
            ] })
          ] });
      })(),
      /* @__PURE__ */ e(f, { className: "ml-auto h-4 w-4" })
    ] }) }) }),
    /* @__PURE__ */ n(w, { className: "w-56", align: "start", side: "top", sideOffset: 4, children: [
      o.map((r, d) => {
        const m = r.target === "blank";
        return /* @__PURE__ */ e(a, { asChild: !0, children: /* @__PURE__ */ n(
          c,
          {
            href: r.url,
            target: m ? "_blank" : "_self",
            className: "cursor-pointer",
            children: [
              r.icon && /* @__PURE__ */ e(r.icon, { className: "mr-2 h-4 w-4" }),
              r.title
            ]
          }
        ) }, d);
      }),
      /* @__PURE__ */ e(a, { asChild: !0, onClick: () => l(), children: /* @__PURE__ */ n("div", { onClick: () => l(), className: "flex items-center w-full cursor-pointer", children: [
        /* @__PURE__ */ e(h, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] }) })
    ] })
  ] });
}
export {
  j as default
};
