import * as l from "react";
import { cn as a } from "./index.es54.js";
function r({ className: e, ...t }) {
  return /* @__PURE__ */ l.createElement("div", { "data-slot": "table-container", className: "lib:relative lib:w-full lib:overflow-x-auto" }, /* @__PURE__ */ l.createElement("table", { "data-slot": "table", className: a("lib:w-full lib:caption-bottom lib:text-sm", e), ...t }));
}
function o({ className: e, ...t }) {
  return /* @__PURE__ */ l.createElement("thead", { "data-slot": "table-header", className: a("[&_tr]:lib:border-b", e), ...t });
}
function i({ className: e, ...t }) {
  return /* @__PURE__ */ l.createElement("tbody", { "data-slot": "table-body", className: a("[&_tr:last-child]:lib:border-0", e), ...t });
}
function n({ className: e, ...t }) {
  return /* @__PURE__ */ l.createElement(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: a("lib:bg-muted/50 lib:border-t lib:font-medium [&>tr]:last:lib:border-b-0", e),
      ...t
    }
  );
}
function c({ className: e, ...t }) {
  return /* @__PURE__ */ l.createElement(
    "tr",
    {
      "data-slot": "table-row",
      className: a(
        "hover:lib:bg-muted/50 data-[state=selected]:lib:bg-muted lib:border-b lib:transition-colors",
        e
      ),
      ...t
    }
  );
}
function s({ className: e, ...t }) {
  return /* @__PURE__ */ l.createElement(
    "th",
    {
      "data-slot": "table-head",
      className: a(
        "lib:text-foreground lib:h-10 lib:px-2 lib:text-left lib:align-middle lib:font-medium lib:whitespace-nowrap [&:has([role=checkbox])]:lib:pr-0 [&>[role=checkbox]]:lib:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function d({ className: e, ...t }) {
  return /* @__PURE__ */ l.createElement(
    "td",
    {
      "data-slot": "table-cell",
      className: a(
        "lib:p-2 lib:align-middle lib:whitespace-nowrap [&:has([role=checkbox])]:lib:pr-0 [&>[role=checkbox]]:lib:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function m({ className: e, ...t }) {
  return /* @__PURE__ */ l.createElement(
    "caption",
    {
      "data-slot": "table-caption",
      className: a("lib:text-muted-foreground lib:mt-4 lib:text-sm", e),
      ...t
    }
  );
}
export {
  r as Table,
  i as TableBody,
  m as TableCaption,
  d as TableCell,
  n as TableFooter,
  s as TableHead,
  o as TableHeader,
  c as TableRow
};
