import * as t from "react";
import { ChevronLeftIcon as r, ChevronRightIcon as s, MoreHorizontalIcon as c } from "lucide-react";
import { cn as n } from "./index.es54.js";
import { buttonVariants as m } from "./index.es14.js";
function g({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: n("lib:mx-auto lib:flex lib:w-full lib:justify-center", e),
      ...a
    }
  );
}
function f({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    "ul",
    {
      "data-slot": "pagination-content",
      className: n("lib:flex lib:flex-row lib:items-center lib:gap-1", e),
      ...a
    }
  );
}
function d({ ...e }) {
  return /* @__PURE__ */ t.createElement("li", { "data-slot": "pagination-item", ...e });
}
function i({ className: e, isActive: a, size: l = "icon", ...o }) {
  return /* @__PURE__ */ t.createElement(
    "a",
    {
      "aria-current": a ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": a,
      className: n(
        m({
          variant: a ? "outline" : "ghost",
          size: l
        }),
        e
      ),
      ...o
    }
  );
}
function E({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    i,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: n("lib:gap-1 lib:px-2.5 sm:lib:pl-2.5", e),
      ...a
    },
    /* @__PURE__ */ t.createElement(r, null),
    /* @__PURE__ */ t.createElement("span", { className: "lib:hidden sm:lib:block" }, "Previous")
  );
}
function N({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    i,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: n("lib:gap-1 lib:px-2.5 sm:lib:pr-2.5", e),
      ...a
    },
    /* @__PURE__ */ t.createElement("span", { className: "lib:hidden sm:lib:block" }, "Next"),
    /* @__PURE__ */ t.createElement(s, null)
  );
}
function x({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: n("lib:flex lib:size-9 lib:items-center lib:justify-center", e),
      ...a
    },
    /* @__PURE__ */ t.createElement(c, { className: "lib:size-4" }),
    /* @__PURE__ */ t.createElement("span", { className: "lib:sr-only" }, "More pages")
  );
}
export {
  g as Pagination,
  f as PaginationContent,
  x as PaginationEllipsis,
  d as PaginationItem,
  i as PaginationLink,
  N as PaginationNext,
  E as PaginationPrevious
};
