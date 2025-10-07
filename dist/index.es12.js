import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { Slot as s } from "@radix-ui/react-slot";
import { ChevronRight as i, MoreHorizontal as l } from "lucide-react";
import { cn as t } from "./index.es70.js";
function p({ ...r }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...r });
}
function f({ className: r, ...e }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: t(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        r
      ),
      ...e
    }
  );
}
function g({ className: r, ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "breadcrumb-item", className: t("inline-flex items-center gap-1.5", r), ...e });
}
function x({
  asChild: r,
  className: e,
  ...n
}) {
  return /* @__PURE__ */ a(r ? s : "a", { "data-slot": "breadcrumb-link", className: t("hover:text-foreground transition-colors", e), ...n });
}
function h({ className: r, ...e }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: t("text-foreground font-normal", r),
      ...e
    }
  );
}
function N({ children: r, className: e, ...n }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: t("[&>svg]:size-3.5", e),
      ...n,
      children: r ?? /* @__PURE__ */ a(i, {})
    }
  );
}
function B({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: t("flex size-9 items-center justify-center", r),
      ...e,
      children: [
        /* @__PURE__ */ a(l, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
export {
  p as Breadcrumb,
  B as BreadcrumbEllipsis,
  g as BreadcrumbItem,
  x as BreadcrumbLink,
  f as BreadcrumbList,
  h as BreadcrumbPage,
  N as BreadcrumbSeparator
};
