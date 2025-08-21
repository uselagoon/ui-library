import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { ChevronsUpDown as f, House as g, LogOut as w, Sun as N, Moon as x } from "lucide-react";
import { useTheme as k } from "next-themes";
import { DropdownMenu as S, DropdownMenuTrigger as T, DropdownMenuContent as D, DropdownMenuItem as t } from "./index.es24.js";
import { SidebarMenuButton as b } from "./index.es41.js";
import v from "./index.es99.js";
import { useLinkComponent as C } from "./index.es5.js";
function H({ name: o, version: c, logo: n, signOutFn: m }) {
  const { setTheme: l, theme: s, systemTheme: d } = k(), a = C(), i = (u) => {
    l(u), window.dispatchEvent(new Event("storage"));
  }, h = /* @__PURE__ */ r(t, { onClick: () => i("light"), children: [
    /* @__PURE__ */ e(N, { className: "mr-2 h-4 w-4" }),
    "Light"
  ] }), p = /* @__PURE__ */ r(t, { onClick: () => i("dark"), children: [
    /* @__PURE__ */ e(x, { className: "mr-2 h-4 w-4" }),
    "Dark"
  ] });
  return /* @__PURE__ */ r(S, { children: [
    /* @__PURE__ */ r("section", { className: "flex items-center gap-1 pl-2", children: [
      /* @__PURE__ */ e("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground", children: /* @__PURE__ */ e(a, { href: "/projects", children: n || /* @__PURE__ */ e("img", { src: v, className: "size-8" }) }) }),
      /* @__PURE__ */ e(T, { className: "w-full", children: /* @__PURE__ */ r(
        b,
        {
          size: "lg",
          className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
          children: [
            /* @__PURE__ */ r("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-semibold", children: o }),
              /* @__PURE__ */ e("span", { className: "truncate text-xs", children: c })
            ] }),
            /* @__PURE__ */ e(f, { className: "ml-auto h-4 w-4" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ r(D, { className: "w-56", align: "start", side: "right", sideOffset: 4, style: { zIndex: 9999 }, children: [
      /* @__PURE__ */ e(t, { className: "p-0", children: /* @__PURE__ */ r(a, { href: "/projects", children: [
        /* @__PURE__ */ e(g, { className: "mr-2 h-4 w-4" }),
        "Home"
      ] }) }),
      s === "dark" || s === "system" && d === "dark" ? h : p,
      /* @__PURE__ */ r(t, { onClick: () => m(), children: [
        /* @__PURE__ */ e(w, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] })
    ] })
  ] });
}
export {
  H as default
};
