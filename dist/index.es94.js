import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { ChevronsUpDown as f, LogOut as g, Sun as w, Moon as x } from "lucide-react";
import { useTheme as N } from "next-themes";
import { DropdownMenu as k, DropdownMenuTrigger as S, DropdownMenuContent as T, DropdownMenuItem as n } from "./index.es24.js";
import { SidebarMenuButton as D } from "./index.es41.js";
import b from "./index.es99.js";
import v from "./index.es100.js";
import { useLinkComponent as y } from "./index.es5.js";
import { useSyncTheme as C } from "./index.es101.js";
function U({ name: o, version: a, logo: s, signOutFn: c }) {
  const { setTheme: m, theme: t, systemTheme: d } = N();
  C();
  const l = y(), i = (u) => {
    m(u), window.dispatchEvent(new Event("storage"));
  }, h = /* @__PURE__ */ r(n, { onClick: () => i("light"), children: [
    /* @__PURE__ */ e(w, { className: "mr-2 h-4 w-4" }),
    "Light"
  ] }), p = /* @__PURE__ */ r(n, { onClick: () => i("dark"), children: [
    /* @__PURE__ */ e(x, { className: "mr-2 h-4 w-4" }),
    "Dark"
  ] });
  return /* @__PURE__ */ r(k, { children: [
    /* @__PURE__ */ r("section", { className: "flex items-center gap-1 pl-2", children: [
      /* @__PURE__ */ e("div", { className: "flex aspect-square size-20 items-center justify-center rounded-lg text-sidebar-primary-foreground", children: /* @__PURE__ */ e(l, { href: "/projects", children: s || /* @__PURE__ */ e("img", { src: t === "light" ? b : v }) }) }),
      /* @__PURE__ */ e(S, { className: "w-full", children: /* @__PURE__ */ r(
        D,
        {
          size: "lg",
          className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
          children: [
            /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-semibold", children: o }),
              /* @__PURE__ */ e("span", { className: "truncate text-xs", children: a })
            ] }),
            /* @__PURE__ */ e(f, { className: "ml-auto h-4 w-4" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ r(T, { className: "w-56", align: "start", side: "right", sideOffset: 4, style: { zIndex: 9999 }, children: [
      t === "dark" || t === "system" && d === "dark" ? h : p,
      /* @__PURE__ */ r(n, { onClick: () => c(), children: [
        /* @__PURE__ */ e(g, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] })
    ] })
  ] });
}
export {
  U as default
};
