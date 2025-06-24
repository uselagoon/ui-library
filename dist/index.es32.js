import { j as t } from "./index.es64.js";
import { ChevronLeftIcon as r, ChevronRightIcon as l, MoreHorizontalIcon as c } from "lucide-react";
import { cn as i } from "./index.es65.js";
import { buttonVariants as p } from "./index.es13.js";
function d({ className: a, ...n }) {
  return /* @__PURE__ */ t.jsx(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: i("mx-auto flex w-full justify-center", a),
      ...n
    }
  );
}
function f({ className: a, ...n }) {
  return /* @__PURE__ */ t.jsx("ul", { "data-slot": "pagination-content", className: i("flex flex-row items-center gap-1", a), ...n });
}
function j({ ...a }) {
  return /* @__PURE__ */ t.jsx("li", { "data-slot": "pagination-item", ...a });
}
function e({ className: a, isActive: n, size: s = "icon", ...o }) {
  return /* @__PURE__ */ t.jsx(
    "a",
    {
      "aria-current": n ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": n,
      className: i(
        p({
          variant: n ? "outline" : "ghost",
          size: s
        }),
        a
      ),
      ...o
    }
  );
}
function h({ className: a, ...n }) {
  return /* @__PURE__ */ t.jsxs(
    e,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: i("gap-1 px-2.5 sm:pl-2.5", a),
      ...n,
      children: [
        /* @__PURE__ */ t.jsx(r, {}),
        /* @__PURE__ */ t.jsx("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function N({ className: a, ...n }) {
  return /* @__PURE__ */ t.jsxs(
    e,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: i("gap-1 px-2.5 sm:pr-2.5", a),
      ...n,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ t.jsx(l, {})
      ]
    }
  );
}
function P({ className: a, ...n }) {
  return /* @__PURE__ */ t.jsxs(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: i("flex size-9 items-center justify-center", a),
      ...n,
      children: [
        /* @__PURE__ */ t.jsx(c, { className: "size-4" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
export {
  d as Pagination,
  f as PaginationContent,
  P as PaginationEllipsis,
  j as PaginationItem,
  e as PaginationLink,
  N as PaginationNext,
  h as PaginationPrevious
};
