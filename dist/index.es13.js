import * as t from "react";
import { Slot as o } from "@radix-ui/react-slot";
import { ChevronRight as s, MoreHorizontal as m } from "lucide-react";
import { cn as a } from "./index.es54.js";
function d({ ...e }) {
  return /* @__PURE__ */ t.createElement("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function b({ className: e, ...r }) {
  return /* @__PURE__ */ t.createElement(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: a(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
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
      className: a("inline-flex items-center gap-1.5", e),
      ...r
    }
  );
}
function f({
  asChild: e,
  className: r,
  ...n
}) {
  const l = e ? o : "a";
  return /* @__PURE__ */ t.createElement(
    l,
    {
      "data-slot": "breadcrumb-link",
      className: a("hover:text-foreground transition-colors", r),
      ...n
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
      className: a("text-foreground font-normal", e),
      ...r
    }
  );
}
function E({
  children: e,
  className: r,
  ...n
}) {
  return /* @__PURE__ */ t.createElement(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: a("[&>svg]:size-3.5", r),
      ...n
    },
    e ?? /* @__PURE__ */ t.createElement(s, null)
  );
}
function x({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: a("flex size-9 items-center justify-center", e),
      ...r
    },
    /* @__PURE__ */ t.createElement(m, { className: "size-4" }),
    /* @__PURE__ */ t.createElement("span", { className: "sr-only" }, "More")
  );
}
export {
  d as Breadcrumb,
  x as BreadcrumbEllipsis,
  p as BreadcrumbItem,
  f as BreadcrumbLink,
  b as BreadcrumbList,
  g as BreadcrumbPage,
  E as BreadcrumbSeparator
};
