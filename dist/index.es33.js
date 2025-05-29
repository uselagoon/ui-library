import * as t from "react";
import { ChevronLeftIcon as l, ChevronRightIcon as s, MoreHorizontalIcon as c } from "lucide-react";
import { cn as n } from "./index.es54.js";
import { buttonVariants as m } from "./index.es14.js";
function f({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: n("mx-auto flex w-full justify-center", e),
      ...a
    }
  );
}
function d({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement("ul", { "data-slot": "pagination-content", className: n("flex flex-row items-center gap-1", e), ...a });
}
function E({ ...e }) {
  return /* @__PURE__ */ t.createElement("li", { "data-slot": "pagination-item", ...e });
}
function i({ className: e, isActive: a, size: o = "icon", ...r }) {
  return /* @__PURE__ */ t.createElement(
    "a",
    {
      "aria-current": a ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": a,
      className: n(
        m({
          variant: a ? "outline" : "ghost",
          size: o
        }),
        e
      ),
      ...r
    }
  );
}
function N({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    i,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: n("gap-1 px-2.5 sm:pl-2.5", e),
      ...a
    },
    /* @__PURE__ */ t.createElement(l, null),
    /* @__PURE__ */ t.createElement("span", { className: "hidden sm:block" }, "Previous")
  );
}
function x({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    i,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: n("gap-1 px-2.5 sm:pr-2.5", e),
      ...a
    },
    /* @__PURE__ */ t.createElement("span", { className: "hidden sm:block" }, "Next"),
    /* @__PURE__ */ t.createElement(s, null)
  );
}
function P({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: n("flex size-9 items-center justify-center", e),
      ...a
    },
    /* @__PURE__ */ t.createElement(c, { className: "size-4" }),
    /* @__PURE__ */ t.createElement("span", { className: "sr-only" }, "More pages")
  );
}
export {
  f as Pagination,
  d as PaginationContent,
  P as PaginationEllipsis,
  E as PaginationItem,
  i as PaginationLink,
  x as PaginationNext,
  N as PaginationPrevious
};
//# sourceMappingURL=index.es33.js.map
