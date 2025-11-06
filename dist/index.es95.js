import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { useState as T, useEffect as S } from "react";
import { ChevronsUpDown as v, LogOut as D, Sun as $, Moon as j } from "lucide-react";
import { useTheme as y } from "next-themes";
import { DropdownMenu as z, DropdownMenuTrigger as M, DropdownMenuContent as E, DropdownMenuItem as c } from "./index.es24.js";
import { SidebarMenuButton as I } from "./index.es41.js";
import d from "./index.es101.js";
import { useLinkComponent as O } from "./index.es5.js";
import { useSyncTheme as C } from "./index.es102.js";
function K({ name: h, version: g, signOutFn: u, isCollapsed: n = !1 }) {
  const { setTheme: f, theme: o, systemTheme: p } = y(), [i, l] = T(!1);
  C();
  const w = O();
  S(() => {
    l(!1);
  }, [n, o]);
  const N = () => {
    const r = "/sidebar-icons";
    return n ? `${r}/logo-${o}-collapsed.svg` : `${r}/logo-${o}.svg`;
  }, x = () => {
    const r = N();
    if (!r.includes("undefined"))
      return /* @__PURE__ */ e(
        "img",
        {
          src: r,
          className: `object-contain ${n ? "w-100" : "h-18"}`,
          onLoad: (a) => {
            const s = a.currentTarget;
            !i && s.src !== d && (s.className = `object-contain ${n ? "w-100" : "h-18"}`);
          },
          onError: (a) => {
            l(!0);
            const s = a.currentTarget;
            s.src = d, s.className = "size-10";
          }
        }
      );
  }, m = (r) => {
    f(r), window.dispatchEvent(new Event("storage"));
  }, k = /* @__PURE__ */ t(c, { onClick: () => m("light"), children: [
    /* @__PURE__ */ e($, { className: "mr-2 h-4 w-4" }),
    "Light"
  ] }), b = /* @__PURE__ */ t(c, { onClick: () => m("dark"), children: [
    /* @__PURE__ */ e(j, { className: "mr-2 h-4 w-4" }),
    "Dark"
  ] }), L = () => o === "dark" || o === "system" && p === "dark" ? k : b;
  return /* @__PURE__ */ t(z, { children: [
    /* @__PURE__ */ t("section", { className: "flex items-center gap-1 pl-1", children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: `flex aspect-square items-center justify-center rounded-lg text-sidebar-primary-foreground ${n ? "size-8" : i ? "size-10" : "size-18"}`,
          children: /* @__PURE__ */ e(w, { href: "/projects", children: x() })
        }
      ),
      /* @__PURE__ */ e(M, { className: "w-full", children: /* @__PURE__ */ t(
        I,
        {
          size: "lg",
          className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
          children: [
            /* @__PURE__ */ t("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-semibold", children: h }),
              /* @__PURE__ */ e("span", { className: "truncate text-xs", children: g })
            ] }),
            /* @__PURE__ */ e(v, { className: "ml-auto h-4 w-4" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ t(E, { className: "w-56", align: "start", side: "right", sideOffset: 4, style: { zIndex: 9999 }, children: [
      L(),
      /* @__PURE__ */ t(c, { onClick: () => u(), children: [
        /* @__PURE__ */ e(D, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] })
    ] })
  ] });
}
export {
  K as default
};
