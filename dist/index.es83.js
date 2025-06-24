import { j as e } from "./index.es64.js";
import { ChevronsUpDown as m, Sun as l, Moon as d, LogOut as x } from "lucide-react";
import { useTheme as h } from "next-themes";
import { DropdownMenu as u, DropdownMenuTrigger as p, DropdownMenuContent as j, DropdownMenuItem as s } from "./index.es24.js";
import { SidebarMenuButton as f } from "./index.es41.js";
import g from "./index.es89.js";
import { useLinkComponent as w } from "./index.es5.js";
function v({ name: n, version: a, logo: r, signOutFn: o }) {
  const { setTheme: t, theme: i } = h(), c = w();
  return /* @__PURE__ */ e.jsxs(u, { children: [
    /* @__PURE__ */ e.jsx(p, { className: "w-full", children: /* @__PURE__ */ e.jsxs(
      f,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground", children: /* @__PURE__ */ e.jsx(c, { href: "/projects", children: r || /* @__PURE__ */ e.jsx("img", { src: g, className: "size-8" }) }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ e.jsx("span", { className: "truncate font-semibold", children: n }),
            /* @__PURE__ */ e.jsx("span", { className: "truncate text-xs", children: a })
          ] }),
          /* @__PURE__ */ e.jsx(m, { className: "ml-auto h-4 w-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsxs(j, { className: "w-56", align: "start", side: "right", sideOffset: 4, style: { zIndex: 9999 }, children: [
      i === "dark" ? /* @__PURE__ */ e.jsxs(s, { onClick: () => t("light"), children: [
        /* @__PURE__ */ e.jsx(l, { className: "mr-2 h-4 w-4" }),
        "Light"
      ] }) : /* @__PURE__ */ e.jsxs(s, { onClick: () => t("dark"), children: [
        /* @__PURE__ */ e.jsx(d, { className: "mr-2 h-4 w-4" }),
        "Dark"
      ] }),
      /* @__PURE__ */ e.jsxs(s, { onClick: () => o(), children: [
        /* @__PURE__ */ e.jsx(x, { className: "mr-2 h-4 w-4" }),
        "Sign Out"
      ] })
    ] })
  ] });
}
export {
  v as default
};
