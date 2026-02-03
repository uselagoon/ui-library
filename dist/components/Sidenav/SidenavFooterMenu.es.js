import { jsxs as r, jsx as e, Fragment as u } from "react/jsx-runtime";
import { ChevronsUpDown as f, LogOut as h } from "lucide-react";
import { DropdownMenu as p, DropdownMenuTrigger as g, DropdownMenuContent as w, DropdownMenuItem as s } from "../ui/dropdown-menu.es.js";
import { SidebarMenuButton as N } from "../ui/sidebar.es.js";
import { useLinkComponent as x } from "../../providers/NextLinkProvider.es.js";
function S({ email: a, kcUrl: k, signOutFn: t, avatar: l, userDisplayName: o, footerItems: i }) {
  const c = x();
  return /* @__PURE__ */ r(p, { modal: !1, children: [
    /* @__PURE__ */ e("section", { className: "flex items-center gap-1 pl-1", children: /* @__PURE__ */ e(g, { className: "w-full", children: /* @__PURE__ */ r(N, { size: "lg", className: "w-full", children: [
      (() => {
        if (l)
          return /* @__PURE__ */ r(u, { children: [
            l,
            /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-medium", children: o }),
              /* @__PURE__ */ e("span", { className: "truncate font-light text-xs", children: a })
            ] })
          ] });
      })(),
      /* @__PURE__ */ e(f, { className: "ml-auto h-4 w-4" })
    ] }) }) }),
    /* @__PURE__ */ r(w, { className: "w-56", align: "start", side: "top", sideOffset: 4, children: [
      i.map((n, d) => {
        const m = n.target === "blank";
        return /* @__PURE__ */ e(s, { asChild: !0, children: /* @__PURE__ */ r(
          c,
          {
            href: n.url,
            target: m ? "_blank" : "_self",
            className: "cursor-pointer",
            children: [
              n.icon && /* @__PURE__ */ e(n.icon, { className: "mr-2 h-4 w-4" }),
              n.title
            ]
          }
        ) }, d);
      }),
      /* @__PURE__ */ e(s, { asChild: !0, onClick: () => t(), children: /* @__PURE__ */ r("div", { onClick: () => t(), className: "flex items-center w-full cursor-pointer", children: [
        /* @__PURE__ */ e(h, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] }) })
    ] })
  ] });
}
export {
  S as default
};
