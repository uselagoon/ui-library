import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { ChevronsUpDown as f, LogOut as g, Sun as w, Moon as x } from "lucide-react";
import { useTheme as N } from "next-themes";
import { DropdownMenu as k, DropdownMenuTrigger as S, DropdownMenuContent as T, DropdownMenuItem as r } from "./index.es24.js";
import { SidebarMenuButton as D } from "./index.es41.js";
import b from "./index.es99.js";
import { useLinkComponent as v } from "./index.es5.js";
function E({ name: i, version: o, logo: n, signOutFn: c }) {
  const { setTheme: m, theme: s, systemTheme: d } = N(), l = v(), a = (u) => {
    m(u), window.dispatchEvent(new Event("storage"));
  }, h = /* @__PURE__ */ t(r, { onClick: () => a("light"), children: [
    /* @__PURE__ */ e(w, { className: "mr-2 h-4 w-4" }),
    "Light"
  ] }), p = /* @__PURE__ */ t(r, { onClick: () => a("dark"), children: [
    /* @__PURE__ */ e(x, { className: "mr-2 h-4 w-4" }),
    "Dark"
  ] });
  return /* @__PURE__ */ t(k, { children: [
    /* @__PURE__ */ t("section", { className: "flex items-center gap-1 pl-2", children: [
      /* @__PURE__ */ e("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground", children: /* @__PURE__ */ e(l, { href: "/projects", children: n || /* @__PURE__ */ e("img", { src: b, className: "size-8" }) }) }),
      /* @__PURE__ */ e(S, { className: "w-full", children: /* @__PURE__ */ t(
        D,
        {
          size: "lg",
          className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
          children: [
            /* @__PURE__ */ t("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-semibold", children: i }),
              /* @__PURE__ */ e("span", { className: "truncate text-xs", children: o })
            ] }),
            /* @__PURE__ */ e(f, { className: "ml-auto h-4 w-4" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ t(T, { className: "w-56", align: "start", side: "right", sideOffset: 4, style: { zIndex: 9999 }, children: [
      s === "dark" || s === "system" && d === "dark" ? h : p,
      /* @__PURE__ */ t(r, { onClick: () => c(), children: [
        /* @__PURE__ */ e(g, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] })
    ] })
  ] });
}
export {
  E as default
};
