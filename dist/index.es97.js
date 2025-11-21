import { jsxs as n, jsx as e, Fragment as c } from "react/jsx-runtime";
import { ChevronsUpDown as m, LifeBuoy as d, UserRoundCog as u, LogOut as h } from "lucide-react";
import { DropdownMenu as f, DropdownMenuTrigger as p, DropdownMenuContent as g, DropdownMenuItem as t } from "./index.es24.js";
import { SidebarMenuButton as w } from "./index.es41.js";
import { useLinkComponent as x } from "./index.es5.js";
function U({ version: o, kcUrl: s, signOutFn: r, avatar: l, userDisplayName: i }) {
  const a = x();
  return /* @__PURE__ */ n(f, { modal: !1, children: [
    /* @__PURE__ */ e("section", { className: "flex items-center gap-1 pl-1", children: /* @__PURE__ */ e(p, { className: "w-full", children: /* @__PURE__ */ n(w, { size: "lg", className: "w-full", children: [
      (() => {
        if (l)
          return /* @__PURE__ */ n(c, { children: [
            l,
            /* @__PURE__ */ n("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-medium", children: i }),
              /* @__PURE__ */ e("span", { className: "truncate font-light text-xs", children: "email@example.com" })
            ] })
          ] });
      })(),
      /* @__PURE__ */ e(m, { className: "ml-auto h-4 w-4" })
    ] }) }) }),
    /* @__PURE__ */ e("span", { className: "truncate font-light text-xs ml-2", children: o }),
    /* @__PURE__ */ n(g, { className: "w-56", align: "start", side: "top", sideOffset: 4, children: [
      /* @__PURE__ */ e(t, { asChild: !0, children: /* @__PURE__ */ n(a, { href: "https://docs.lagoon.sh/", target: "_blank", children: [
        /* @__PURE__ */ e(d, { className: "mr-2 h-4 w-4" }),
        "Documentation"
      ] }) }),
      /* @__PURE__ */ e(t, { asChild: !0, children: /* @__PURE__ */ n(a, { href: `${s}/account`, target: "_blank", children: [
        /* @__PURE__ */ e(u, { className: "mr-2 h-4 w-4" }),
        "My Account"
      ] }) }),
      /* @__PURE__ */ e(t, { asChild: !0, onClick: () => r(), children: /* @__PURE__ */ n("div", { onClick: () => r(), className: "flex items-center w-full cursor-pointer", children: [
        /* @__PURE__ */ e(h, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] }) })
    ] })
  ] });
}
export {
  U as default
};
