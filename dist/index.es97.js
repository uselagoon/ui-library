import { jsxs as n, jsx as e, Fragment as s } from "react/jsx-runtime";
import { ChevronsUpDown as c, LifeBuoy as m, UserRoundCog as d, LogOut as u } from "lucide-react";
import { DropdownMenu as h, DropdownMenuTrigger as f, DropdownMenuContent as p, DropdownMenuItem as r } from "./index.es24.js";
import { SidebarMenuButton as g } from "./index.es41.js";
import { useLinkComponent as w } from "./index.es5.js";
function L({ kcUrl: a, signOutFn: t, avatar: l, userDisplayName: i }) {
  const o = w();
  return /* @__PURE__ */ n(h, { modal: !1, children: [
    /* @__PURE__ */ e("section", { className: "flex items-center gap-1 pl-1", children: /* @__PURE__ */ e(f, { className: "w-full", children: /* @__PURE__ */ n(g, { size: "lg", className: "w-full", children: [
      (() => {
        if (l)
          return /* @__PURE__ */ n(s, { children: [
            l,
            /* @__PURE__ */ n("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-medium", children: i }),
              /* @__PURE__ */ e("span", { className: "truncate font-light text-xs", children: "email@example.com" })
            ] })
          ] });
      })(),
      /* @__PURE__ */ e(c, { className: "ml-auto h-4 w-4" })
    ] }) }) }),
    /* @__PURE__ */ n(p, { className: "w-56", align: "start", side: "top", sideOffset: 4, children: [
      /* @__PURE__ */ e(r, { asChild: !0, children: /* @__PURE__ */ n(o, { href: "https://docs.lagoon.sh/", target: "_blank", children: [
        /* @__PURE__ */ e(m, { className: "mr-2 h-4 w-4" }),
        "Documentation"
      ] }) }),
      /* @__PURE__ */ e(r, { asChild: !0, children: /* @__PURE__ */ n(o, { href: `${a}/account`, target: "_blank", children: [
        /* @__PURE__ */ e(d, { className: "mr-2 h-4 w-4" }),
        "My Account"
      ] }) }),
      /* @__PURE__ */ e(r, { asChild: !0, onClick: () => t(), children: /* @__PURE__ */ n("div", { onClick: () => t(), className: "flex items-center w-full cursor-pointer", children: [
        /* @__PURE__ */ e(u, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] }) })
    ] })
  ] });
}
export {
  L as default
};
