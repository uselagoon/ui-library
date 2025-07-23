import { j as a } from "./index.es70.js";
import { Slot as o } from "@radix-ui/react-slot";
import { ChevronRight as i, MoreHorizontal as l } from "lucide-react";
import { cn as t } from "./index.es71.js";
function b({ ...r }) {
  return /* @__PURE__ */ a.jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...r });
}
function p({ className: r, ...e }) {
  return /* @__PURE__ */ a.jsx(
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
function x({ className: r, ...e }) {
  return /* @__PURE__ */ a.jsx("li", { "data-slot": "breadcrumb-item", className: t("inline-flex items-center gap-1.5", r), ...e });
}
function f({
  asChild: r,
  className: e,
  ...s
}) {
  const n = r ? o : "a";
  return /* @__PURE__ */ a.jsx(n, { "data-slot": "breadcrumb-link", className: t("hover:text-foreground transition-colors", e), ...s });
}
function j({ className: r, ...e }) {
  return /* @__PURE__ */ a.jsx(
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
function g({ children: r, className: e, ...s }) {
  return /* @__PURE__ */ a.jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: t("[&>svg]:size-3.5", e),
      ...s,
      children: r ?? /* @__PURE__ */ a.jsx(i, {})
    }
  );
}
function h({ className: r, ...e }) {
  return /* @__PURE__ */ a.jsxs(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: t("flex size-9 items-center justify-center", r),
      ...e,
      children: [
        /* @__PURE__ */ a.jsx(l, { className: "size-4" }),
        /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
export {
  b as Breadcrumb,
  h as BreadcrumbEllipsis,
  x as BreadcrumbItem,
  f as BreadcrumbLink,
  p as BreadcrumbList,
  j as BreadcrumbPage,
  g as BreadcrumbSeparator
};
