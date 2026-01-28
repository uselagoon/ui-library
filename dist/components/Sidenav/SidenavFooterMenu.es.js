import { jsxs as r, jsx as e, Fragment as d } from "react/jsx-runtime";
import { ChevronsUpDown as u, LifeBuoy as h, UserRoundCog as f, LogOut as p } from "lucide-react";
import { DropdownMenu as g, DropdownMenuTrigger as N, DropdownMenuContent as w, DropdownMenuItem as n } from "../ui/dropdown-menu.es.js";
import { SidebarMenuButton as x } from "../ui/sidebar.es.js";
import { useLinkComponent as C } from "../../providers/NextLinkProvider.es.js";
function A({ email: a, kcUrl: o, signOutFn: t, avatar: s, userDisplayName: i, documentationUrl: c = "https://docs.lagoon.sh/", disableAccountLink: m = !1 }) {
  const l = C();
  return /* @__PURE__ */ r(g, { modal: !1, children: [
    /* @__PURE__ */ e("section", { className: "flex items-center gap-1 pl-1", children: /* @__PURE__ */ e(N, { className: "w-full", children: /* @__PURE__ */ r(x, { size: "lg", className: "w-full", children: [
      (() => {
        if (s)
          return /* @__PURE__ */ r(d, { children: [
            s,
            /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-medium", children: i }),
              /* @__PURE__ */ e("span", { className: "truncate font-light text-xs", children: a })
            ] })
          ] });
      })(),
      /* @__PURE__ */ e(u, { className: "ml-auto h-4 w-4" })
    ] }) }) }),
    /* @__PURE__ */ r(w, { className: "w-56", align: "start", side: "top", sideOffset: 4, children: [
      /* @__PURE__ */ e(n, { asChild: !0, children: /* @__PURE__ */ r(l, { href: c, target: "_blank", className: "cursor-pointer", children: [
        /* @__PURE__ */ e(h, { className: "mr-2 h-4 w-4" }),
        "Documentation"
      ] }) }),
      !m && /* @__PURE__ */ e(n, { asChild: !0, children: /* @__PURE__ */ r(l, { href: `${o}/account`, target: "_blank", className: "cursor-pointer", children: [
        /* @__PURE__ */ e(f, { className: "mr-2 h-4 w-4" }),
        "My Account"
      ] }) }),
      /* @__PURE__ */ e(n, { asChild: !0, onClick: () => t(), children: /* @__PURE__ */ r("div", { onClick: () => t(), className: "flex items-center w-full cursor-pointer", children: [
        /* @__PURE__ */ e(p, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] }) })
    ] })
  ] });
}
export {
  A as default
};
