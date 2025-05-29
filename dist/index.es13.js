import * as t from "react";
import { Slot as n } from "@radix-ui/react-slot";
import { ChevronRight as o, MoreHorizontal as s } from "lucide-react";
import { cn as a } from "./index.es54.js";
function u({ ...e }) {
  return /* @__PURE__ */ t.createElement("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function d({ className: e, ...r }) {
  return /* @__PURE__ */ t.createElement(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: a(
        "lib:text-muted-foreground lib:flex lib:flex-wrap lib:items-center lib:gap-1.5 lib:text-sm lib:break-words sm:lib:gap-2.5",
        e
      ),
      ...r
    }
  );
}
function p({ className: e, ...r }) {
  return /* @__PURE__ */ t.createElement(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: a("lib:inline-flex lib:items-center lib:gap-1.5", e),
      ...r
    }
  );
}
function f({
  asChild: e,
  className: r,
  ...l
}) {
  const i = e ? n : "a";
  return /* @__PURE__ */ t.createElement(
    i,
    {
      "data-slot": "breadcrumb-link",
      className: a("hover:lib:text-foreground lib:transition-colors", r),
      ...l
    }
  );
}
function g({ className: e, ...r }) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: a("lib:text-foreground lib:font-normal", e),
      ...r
    }
  );
}
function E({ children: e, className: r, ...l }) {
  return /* @__PURE__ */ t.createElement(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: a("[&>svg]:lib:size-3.5", r),
      ...l
    },
    e ?? /* @__PURE__ */ t.createElement(o, null)
  );
}
function x({ className: e, ...r }) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: a("lib:flex lib:size-9 lib:items-center lib:justify-center", e),
      ...r
    },
    /* @__PURE__ */ t.createElement(s, { className: "lib:size-4" }),
    /* @__PURE__ */ t.createElement("span", { className: "lib:sr-only" }, "More")
  );
}
export {
  u as Breadcrumb,
  x as BreadcrumbEllipsis,
  p as BreadcrumbItem,
  f as BreadcrumbLink,
  d as BreadcrumbList,
  g as BreadcrumbPage,
  E as BreadcrumbSeparator
};
