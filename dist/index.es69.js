import { jsxs as r, jsx as n } from "react/jsx-runtime";
import d, { useEffect as y } from "react";
import { Button as C } from "./index.es13.js";
import { useReactTable as I, getSortedRowModel as k, getFilteredRowModel as L, getPaginationRowModel as z, getCoreRowModel as B, flexRender as b } from "@tanstack/react-table";
import { Table as G, TableHeader as _, TableRow as u, TableHead as $, TableBody as W, TableCell as S } from "./index.es46.js";
import { DebouncedInput as q } from "./index.es63.js";
import { highlightTextInElement as A } from "./index.es93.js";
import { cn as N } from "./index.es70.js";
import { l as E } from "./index.es94.js";
function te({
  columns: h,
  data: c,
  searchableColumns: i,
  renderFilters: f,
  disableExtra: s,
  onSearch: p,
  initialSearch: R,
  initialPageSize: g
}) {
  const [m, M] = d.useState([]), [P, F] = d.useState([]), [T, V] = d.useState({}), [a, v] = d.useState(R ?? ""), j = (e, t, l) => i?.length === 0 ? String(e.getValue(t)).toLowerCase().includes(l.toLowerCase()) : i?.some((w) => {
    const H = e.getValue(w);
    return String(H).toLowerCase().includes(l.toLowerCase());
  }), D = (e) => {
    const t = e.getValue(), l = b(e.column.columnDef.cell, e.getContext());
    return t && a && (!i?.length || i?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? A(
      e?.column?.columnDef?.cell(e.getContext()),
      a,
      t
    ) : l;
  }, o = I({
    data: c,
    columns: h,
    getCoreRowModel: B(),
    getPaginationRowModel: z(),
    getFilteredRowModel: L(),
    getSortedRowModel: k(),
    onColumnFiltersChange: F,
    onSortingChange: M,
    onColumnVisibilityChange: V,
    ...i ? { globalFilterFn: j } : {},
    state: {
      sorting: m,
      columnFilters: P,
      columnVisibility: T,
      globalFilter: a
    }
  }), x = m.length > 0 ? m[0].id : null;
  return y(() => {
    s && o.setPageSize(c.length);
  }, [s]), y(() => {
    g && o.setPageSize(g);
  }, [g]), /* @__PURE__ */ r("div", { className: "w-[92%] mx-auto", children: [
    s ? null : /* @__PURE__ */ r("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ n(
        q,
        {
          label: "",
          placeholder: `Search ${i?.length ? `by ${i.map((e) => E.capitalize(e)).join(",")}` : "all columns"}...`,
          value: a ?? "",
          onChange: (e) => {
            v(e), p && p(e);
          },
          className: "max-w-sm"
        }
      ),
      f && f(o)
    ] }),
    /* @__PURE__ */ n("div", { className: "rounded-md border", children: /* @__PURE__ */ r(G, { children: [
      /* @__PURE__ */ n(_, { children: o.getHeaderGroups().map((e) => /* @__PURE__ */ n(u, { className: "py-6", children: e.headers.map((t) => {
        const l = t.column.id === x;
        return /* @__PURE__ */ n(
          $,
          {
            className: N("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            children: t.isPlaceholder ? null : b(t.column.columnDef.header, t.getContext())
          },
          t.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ n(W, { children: o.getRowModel().rows?.length ? o.getRowModel().rows.map((e) => /* @__PURE__ */ n(u, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((t) => {
        const l = t.column.id === x;
        return /* @__PURE__ */ n(
          S,
          {
            className: N("transition-colors py-6", l && "bg-gray-100 dark:bg-gray-700"),
            children: D(t)
          },
          t.id
        );
      }) }, e.id)) : /* @__PURE__ */ n(u, { children: /* @__PURE__ */ n(S, { colSpan: h.length, className: "h-28 text-center", children: "Nothing here." }) }) })
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
        C,
        {
          variant: "outline",
          size: "sm",
          onClick: () => o.previousPage(),
          disabled: !o.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ n(C, { variant: "outline", size: "sm", onClick: () => o.nextPage(), disabled: !o.getCanNextPage(), children: "Next" })
    ] })
  ] });
}
export {
  te as default
};
