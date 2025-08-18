import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { ChevronsUpDown as f, LogOut as g, Sun as w, Moon as x } from "lucide-react";
import { useTheme as N } from "next-themes";
import { DropdownMenu as k, DropdownMenuTrigger as S, DropdownMenuContent as T, DropdownMenuItem as t } from "./index.es24.js";
import { SidebarMenuButton as D } from "./index.es41.js";
import b from "./index.es99.js";
import { useLinkComponent as v } from "./index.es5.js";
function E({ name: i, version: o, logo: n, signOutFn: c }) {
  const { setTheme: d, theme: s, systemTheme: m } = N(), l = v(), a = (p) => {
    d(p), window.dispatchEvent(new Event("storage"));
  }, h = /* @__PURE__ */ r(t, { onClick: () => a("light"), children: [
    /* @__PURE__ */ e(w, { className: "mr-2 h-4 w-4" }),
    "Light"
  ] }), u = /* @__PURE__ */ r(t, { onClick: () => a("dark"), children: [
    /* @__PURE__ */ e(x, { className: "mr-2 h-4 w-4" }),
    "Dark"
  ] });
  return /* @__PURE__ */ r(k, { children: [
    /* @__PURE__ */ e(S, { className: "w-full", children: /* @__PURE__ */ r(
      D,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ e("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground", children: /* @__PURE__ */ e(l, { href: "/projects", children: n || /* @__PURE__ */ e("img", { src: b, className: "size-8" }) }) }),
          /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ e("span", { className: "truncate font-semibold", children: i }),
            /* @__PURE__ */ e("span", { className: "truncate text-xs", children: o })
          ] }),
          /* @__PURE__ */ e(f, { className: "ml-auto h-4 w-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ r(T, { className: "w-56", align: "start", side: "right", sideOffset: 4, style: { zIndex: 9999 }, children: [
      s === "dark" || s === "system" && m === "dark" ? h : u,
      /* @__PURE__ */ r(t, { onClick: () => c(), children: [
        /* @__PURE__ */ e(g, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] })
    ] })
  ] });
}
export {
  E as default
};
