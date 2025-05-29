import * as a from "react";
import { cn as l } from "./index.es54.js";
function o({ className: e, ...t }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto"
    },
    /* @__PURE__ */ a.createElement(
      "table",
      {
        "data-slot": "table",
        className: l("w-full caption-bottom text-sm", e),
        ...t
      }
    )
  );
}
function n({ className: e, ...t }) {
  return /* @__PURE__ */ a.createElement(
    "thead",
    {
      "data-slot": "table-header",
      className: l("[&_tr]:border-b", e),
      ...t
    }
  );
}
function c({ className: e, ...t }) {
  return /* @__PURE__ */ a.createElement(
    "tbody",
    {
      "data-slot": "table-body",
      className: l("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function s({ className: e, ...t }) {
  return /* @__PURE__ */ a.createElement(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: l(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
function d({ className: e, ...t }) {
  return /* @__PURE__ */ a.createElement(
    "tr",
    {
      "data-slot": "table-row",
      className: l(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function b({ className: e, ...t }) {
  return /* @__PURE__ */ a.createElement(
    "th",
    {
      "data-slot": "table-head",
      className: l(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function m({ className: e, ...t }) {
  return /* @__PURE__ */ a.createElement(
    "td",
    {
      "data-slot": "table-cell",
      className: l(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function i({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.createElement(
    "caption",
    {
      "data-slot": "table-caption",
      className: l("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
export {
  o as Table,
  c as TableBody,
  i as TableCaption,
  m as TableCell,
  s as TableFooter,
  b as TableHead,
  n as TableHeader,
  d as TableRow
};
