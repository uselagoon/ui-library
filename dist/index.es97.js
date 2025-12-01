import { jsxs as n, jsx as e, Fragment as d } from "react/jsx-runtime";
import { ChevronsUpDown as m, LifeBuoy as h, UserRoundCog as u, LogOut as f } from "lucide-react";
import { DropdownMenu as p, DropdownMenuTrigger as g, DropdownMenuContent as w, DropdownMenuItem as r } from "./index.es24.js";
import { SidebarMenuButton as N } from "./index.es41.js";
import { useLinkComponent as x } from "./index.es5.js";
function b({ email: a, kcUrl: o, signOutFn: t, avatar: l, userDisplayName: i, documentationUrl: c = "https://docs.lagoon.sh/" }) {
  const s = x();
  return /* @__PURE__ */ n(p, { modal: !1, children: [
    /* @__PURE__ */ e("section", { className: "flex items-center gap-1 pl-1", children: /* @__PURE__ */ e(g, { className: "w-full", children: /* @__PURE__ */ n(N, { size: "lg", className: "w-full", children: [
      (() => {
        if (l)
          return /* @__PURE__ */ n(d, { children: [
            l,
            /* @__PURE__ */ n("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-medium", children: i }),
              /* @__PURE__ */ e("span", { className: "truncate font-light text-xs", children: a })
            ] })
          ] });
      })(),
      /* @__PURE__ */ e(m, { className: "ml-auto h-4 w-4" })
    ] }) }) }),
    /* @__PURE__ */ n(w, { className: "w-56", align: "start", side: "top", sideOffset: 4, children: [
      /* @__PURE__ */ e(r, { asChild: !0, children: /* @__PURE__ */ n(s, { href: c, target: "_blank", children: [
        /* @__PURE__ */ e(h, { className: "mr-2 h-4 w-4" }),
        "Documentation"
      ] }) }),
      /* @__PURE__ */ e(r, { asChild: !0, children: /* @__PURE__ */ n(s, { href: `${o}/account`, target: "_blank", children: [
        /* @__PURE__ */ e(u, { className: "mr-2 h-4 w-4" }),
        "My Account"
      ] }) }),
      /* @__PURE__ */ e(r, { asChild: !0, onClick: () => t(), children: /* @__PURE__ */ n("div", { onClick: () => t(), className: "flex items-center w-full cursor-pointer", children: [
        /* @__PURE__ */ e(f, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] }) })
    ] })
  ] });
}
export {
  b as default
};
