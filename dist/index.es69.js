import { jsxs as r, jsx as n } from "react/jsx-runtime";
import d, { useEffect as D } from "react";
import { Button as w } from "./index.es13.js";
import { useReactTable as H, getSortedRowModel as I, getFilteredRowModel as k, getPaginationRowModel as z, getCoreRowModel as L, flexRender as y } from "@tanstack/react-table";
import { Table as B, TableHeader as G, TableRow as m, TableHead as _, TableBody as $, TableCell as C } from "./index.es46.js";
import { DebouncedInput as W } from "./index.es63.js";
import { highlightTextInElement as q } from "./index.es93.js";
import { cn as b } from "./index.es70.js";
import { l as A } from "./index.es94.js";
function ee({
  columns: u,
  data: c,
  searchableColumns: i,
  renderFilters: h,
  disableExtra: s,
  onSearch: f,
  initialSearch: S
}) {
  const [g, N] = d.useState([]), [R, P] = d.useState([]), [M, F] = d.useState({}), [a, T] = d.useState(S ?? ""), V = (e, t, l) => i?.length === 0 ? String(e.getValue(t)).toLowerCase().includes(l.toLowerCase()) : i?.some((x) => {
    const j = e.getValue(x);
    return String(j).toLowerCase().includes(l.toLowerCase());
  }), v = (e) => {
    const t = e.getValue(), l = y(e.column.columnDef.cell, e.getContext());
    return t && a && (!i?.length || i?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? q(
      e?.column?.columnDef?.cell(e.getContext()),
      a,
      t
    ) : l;
  }, o = H({
    data: c,
    columns: u,
    getCoreRowModel: L(),
    getPaginationRowModel: z(),
    getFilteredRowModel: k(),
    getSortedRowModel: I(),
    onColumnFiltersChange: P,
    onSortingChange: N,
    onColumnVisibilityChange: F,
    ...i ? { globalFilterFn: V } : {},
    state: {
      sorting: g,
      columnFilters: R,
      columnVisibility: M,
      globalFilter: a
    }
  }), p = g.length > 0 ? g[0].id : null;
  return D(() => {
    s && o.setPageSize(c.length);
  }, [s]), /* @__PURE__ */ r("div", { className: "w-[92%] mx-auto", children: [
    s ? null : /* @__PURE__ */ r("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ n(
        W,
        {
          label: "",
          placeholder: `Search ${i?.length ? `by ${i.map((e) => A.capitalize(e)).join(",")}` : "all columns"}...`,
          value: a ?? "",
          onChange: (e) => {
            T(e), f && f(e);
          },
          className: "max-w-sm"
        }
      ),
      h && h(o)
    ] }),
    /* @__PURE__ */ n("div", { className: "rounded-md border", children: /* @__PURE__ */ r(B, { children: [
      /* @__PURE__ */ n(G, { children: o.getHeaderGroups().map((e) => /* @__PURE__ */ n(m, { className: "py-6", children: e.headers.map((t) => {
        const l = t.column.id === p;
        return /* @__PURE__ */ n(
          _,
          {
            className: b("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            children: t.isPlaceholder ? null : y(t.column.columnDef.header, t.getContext())
          },
          t.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ n($, { children: o.getRowModel().rows?.length ? o.getRowModel().rows.map((e) => /* @__PURE__ */ n(m, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((t) => {
        const l = t.column.id === p;
        return /* @__PURE__ */ n(
          C,
          {
            className: b("transition-colors py-6", l && "bg-gray-100 dark:bg-gray-700"),
            children: v(t)
          },
          t.id
        );
      }) }, e.id)) : /* @__PURE__ */ n(m, { children: /* @__PURE__ */ n(C, { colSpan: u.length, className: "h-28 text-center", children: "Nothing here." }) }) })
    ] }) }),
    s ? null : /* @__PURE__ */ r("div", { className: "flex items-center justify-end space-x-2 py-6", children: [
      /* @__PURE__ */ r("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        "Showing ",
        o.getRowModel().rows.length,
        " of ",
        c.length,
        " entries"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        o.getState().pagination.pageIndex + 1,
        " of ",
        o.getPageCount()
      ] }),
      /* @__PURE__ */ n(
        w,
        {
          variant: "outline",
          size: "sm",
          onClick: () => o.previousPage(),
          disabled: !o.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ n(w, { variant: "outline", size: "sm", onClick: () => o.nextPage(), disabled: !o.getCanNextPage(), children: "Next" })
    ] })
  ] });
}
export {
  ee as default
};
