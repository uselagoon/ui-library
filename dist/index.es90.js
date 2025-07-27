import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { ChevronsUpDown as m, Sun as d, Moon as h, LogOut as u } from "lucide-react";
import { useTheme as p } from "next-themes";
import { DropdownMenu as f, DropdownMenuTrigger as g, DropdownMenuContent as w, DropdownMenuItem as t } from "./index.es24.js";
import { SidebarMenuButton as x } from "./index.es41.js";
import N from "./index.es95.js";
import { useLinkComponent as k } from "./index.es5.js";
function z({ name: a, version: o, logo: n, signOutFn: i }) {
  const { setTheme: s, theme: c } = p(), l = k();
  return /* @__PURE__ */ r(f, { children: [
    /* @__PURE__ */ e(g, { className: "w-full", children: /* @__PURE__ */ r(
      x,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ e("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground", children: /* @__PURE__ */ e(l, { href: "/projects", children: n || /* @__PURE__ */ e("img", { src: N, className: "size-8" }) }) }),
          /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ e("span", { className: "truncate font-semibold", children: a }),
            /* @__PURE__ */ e("span", { className: "truncate text-xs", children: o })
          ] }),
          /* @__PURE__ */ e(m, { className: "ml-auto h-4 w-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ r(w, { className: "w-56", align: "start", side: "right", sideOffset: 4, style: { zIndex: 9999 }, children: [
      c === "dark" ? /* @__PURE__ */ r(t, { onClick: () => s("light"), children: [
        /* @__PURE__ */ e(d, { className: "mr-2 h-4 w-4" }),
        "Light"
      ] }) : /* @__PURE__ */ r(t, { onClick: () => s("dark"), children: [
        /* @__PURE__ */ e(h, { className: "mr-2 h-4 w-4" }),
        "Dark"
      ] }),
      /* @__PURE__ */ r(t, { onClick: () => i(), children: [
        /* @__PURE__ */ e(u, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] })
    ] })
  ] });
}
export {
  z as default
};
