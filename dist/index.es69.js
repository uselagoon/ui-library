import { j as t } from "./index.es70.js";
import a, { useEffect as F } from "react";
import { Button as f } from "./index.es13.js";
import { useReactTable as T, getSortedRowModel as V, getFilteredRowModel as D, getPaginationRowModel as H, getCoreRowModel as I, flexRender as p } from "@tanstack/react-table";
import { Table as k, TableHeader as z, TableRow as g, TableHead as L, TableBody as B, TableCell as j } from "./index.es46.js";
import { DebouncedInput as G } from "./index.es63.js";
import { highlightTextInElement as _ } from "./index.es100.js";
import { cn as w } from "./index.es71.js";
import { l as $ } from "./index.es101.js";
function X({
  columns: u,
  data: d,
  searchableColumns: i,
  renderFilters: m,
  disableExtra: s
}) {
  const [c, C] = a.useState([]), [S, b] = a.useState([]), [R, y] = a.useState({}), [r, N] = a.useState(""), P = (e, o, l) => i?.length === 0 ? String(e.getValue(o)).toLowerCase().includes(l.toLowerCase()) : i?.some((x) => {
    const v = e.getValue(x);
    return String(v).toLowerCase().includes(l.toLowerCase());
  }), M = (e) => {
    const o = e.getValue(), l = p(e.column.columnDef.cell, e.getContext());
    return o && r && (!i?.length || i?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? _(
      e?.column?.columnDef?.cell(e.getContext()),
      r,
      o
    ) : l;
  }, n = T({
    data: d,
    columns: u,
    getCoreRowModel: I(),
    getPaginationRowModel: H(),
    getFilteredRowModel: D(),
    getSortedRowModel: V(),
    onColumnFiltersChange: b,
    onSortingChange: C,
    onColumnVisibilityChange: y,
    ...i ? { globalFilterFn: P } : {},
    state: {
      sorting: c,
      columnFilters: S,
      columnVisibility: R,
      globalFilter: r
    }
  }), h = c.length > 0 ? c[0].id : null;
  return F(() => {
    s && n.setPageSize(d.length);
  }, [s]), /* @__PURE__ */ t.jsxs("div", { className: "w-[92%] mx-auto", children: [
    s ? null : /* @__PURE__ */ t.jsxs("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ t.jsx(
        G,
        {
          label: "",
          placeholder: `Search ${i?.length ? `by ${i.map((e) => $.capitalize(e)).join(",")}` : "all columns"}...`,
          value: r ?? "",
          onChange: (e) => N(e),
          className: "max-w-sm"
        }
      ),
      m && m(n)
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ t.jsxs(k, { children: [
      /* @__PURE__ */ t.jsx(z, { children: n.getHeaderGroups().map((e) => /* @__PURE__ */ t.jsx(g, { children: e.headers.map((o) => {
        const l = o.column.id === h;
        return /* @__PURE__ */ t.jsx(
          L,
          {
            className: w("transition-colors", l && "bg-gray-100 dark:bg-gray-700"),
            children: o.isPlaceholder ? null : p(o.column.columnDef.header, o.getContext())
          },
          o.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ t.jsx(B, { children: n.getRowModel().rows?.length ? n.getRowModel().rows.map((e) => /* @__PURE__ */ t.jsx(g, { "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((o) => {
        const l = o.column.id === h;
        return /* @__PURE__ */ t.jsx(
          j,
          {
            className: w("transition-colors", l && "bg-gray-100 dark:bg-gray-700"),
            children: M(o)
          },
          o.id
        );
      }) }, e.id)) : /* @__PURE__ */ t.jsx(g, { children: /* @__PURE__ */ t.jsx(j, { colSpan: u.length, className: "h-28 text-center", children: "Nothing here." }) }) })
    ] }) }),
    s ? null : /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-end space-x-2 py-4", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        "Showing ",
        n.getRowModel().rows.length,
        " of ",
        d.length,
        " entries"
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        n.getState().pagination.pageIndex + 1,
        " of ",
        n.getPageCount()
      ] }),
      /* @__PURE__ */ t.jsx(
        f,
        {
          variant: "outline",
          size: "sm",
          onClick: () => n.previousPage(),
          disabled: !n.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ t.jsx(f, { variant: "outline", size: "sm", onClick: () => n.nextPage(), disabled: !n.getCanNextPage(), children: "Next" })
    ] })
  ] });
}
export {
  X as default
};
