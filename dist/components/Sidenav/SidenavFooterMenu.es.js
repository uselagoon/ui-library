import { jsxs as r, jsx as e, Fragment as m } from "react/jsx-runtime";
import { ChevronsUpDown as d, LifeBuoy as u, UserRoundCog as h, LogOut as f } from "lucide-react";
import { DropdownMenu as p, DropdownMenuTrigger as g, DropdownMenuContent as N, DropdownMenuItem as n } from "../ui/dropdown-menu.es.js";
import { SidebarMenuButton as w } from "../ui/sidebar.es.js";
import { useLinkComponent as x } from "../../providers/NextLinkProvider.es.js";
function b({ email: a, kcUrl: o, signOutFn: t, avatar: s, userDisplayName: i, documentationUrl: c = "https://docs.lagoon.sh/" }) {
  const l = x();
  return /* @__PURE__ */ r(p, { modal: !1, children: [
    /* @__PURE__ */ e("section", { className: "flex items-center gap-1 pl-1", children: /* @__PURE__ */ e(g, { className: "w-full", children: /* @__PURE__ */ r(w, { size: "lg", className: "w-full", children: [
      (() => {
        if (s)
          return /* @__PURE__ */ r(m, { children: [
            s,
            /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-medium", children: i }),
              /* @__PURE__ */ e("span", { className: "truncate font-light text-xs", children: a })
            ] })
          ] });
      })(),
      /* @__PURE__ */ e(d, { className: "ml-auto h-4 w-4" })
    ] }) }) }),
    /* @__PURE__ */ r(N, { className: "w-56", align: "start", side: "top", sideOffset: 4, children: [
      /* @__PURE__ */ e(n, { asChild: !0, children: /* @__PURE__ */ r(l, { href: c, target: "_blank", className: "cursor-pointer", children: [
        /* @__PURE__ */ e(u, { className: "mr-2 h-4 w-4" }),
        "Documentation"
      ] }) }),
      /* @__PURE__ */ e(n, { asChild: !0, children: /* @__PURE__ */ r(l, { href: `${o}/account`, target: "_blank", className: "cursor-pointer", children: [
        /* @__PURE__ */ e(h, { className: "mr-2 h-4 w-4" }),
        "My Account"
      ] }) }),
      /* @__PURE__ */ e(n, { asChild: !0, onClick: () => t(), children: /* @__PURE__ */ r("div", { onClick: () => t(), className: "flex items-center w-full cursor-pointer", children: [
        /* @__PURE__ */ e(f, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] }) })
    ] })
  ] });
}
export {
  b as default
};
