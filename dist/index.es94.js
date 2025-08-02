import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { ChevronsUpDown as u, LogOut as p, Sun as f, Moon as g } from "lucide-react";
import { useTheme as w } from "next-themes";
import { DropdownMenu as x, DropdownMenuTrigger as N, DropdownMenuContent as k, DropdownMenuItem as t } from "./index.es24.js";
import { SidebarMenuButton as S } from "./index.es41.js";
import D from "./index.es99.js";
import { useLinkComponent as b } from "./index.es5.js";
function I({ name: a, version: o, logo: n, signOutFn: c }) {
  const { setTheme: s, theme: i, systemTheme: m } = w(), d = b(), l = /* @__PURE__ */ r(t, { onClick: () => s("light"), children: [
    /* @__PURE__ */ e(f, { className: "mr-2 h-4 w-4" }),
    "Light"
  ] }), h = /* @__PURE__ */ r(t, { onClick: () => s("dark"), children: [
    /* @__PURE__ */ e(g, { className: "mr-2 h-4 w-4" }),
    "Dark"
  ] });
  return /* @__PURE__ */ r(x, { children: [
    /* @__PURE__ */ e(N, { className: "w-full", children: /* @__PURE__ */ r(
      S,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ e("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground", children: /* @__PURE__ */ e(d, { href: "/projects", children: n || /* @__PURE__ */ e("img", { src: D, className: "size-8" }) }) }),
          /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ e("span", { className: "truncate font-semibold", children: a }),
            /* @__PURE__ */ e("span", { className: "truncate text-xs", children: o })
          ] }),
          /* @__PURE__ */ e(u, { className: "ml-auto h-4 w-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ r(k, { className: "w-56", align: "start", side: "right", sideOffset: 4, style: { zIndex: 9999 }, children: [
      i === "dark" || i === "system" && m === "dark" ? l : h,
      /* @__PURE__ */ r(t, { onClick: () => c(), children: [
        /* @__PURE__ */ e(p, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] })
    ] })
  ] });
}
export {
  I as default
};
