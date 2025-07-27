import { jsxs as r, jsx as n } from "react/jsx-runtime";
import d, { useEffect as V } from "react";
import { Button as x } from "./index.es13.js";
import { useReactTable as j, getSortedRowModel as D, getFilteredRowModel as H, getPaginationRowModel as I, getCoreRowModel as k, flexRender as w } from "@tanstack/react-table";
import { Table as z, TableHeader as L, TableRow as m, TableHead as B, TableBody as G, TableCell as y } from "./index.es46.js";
import { DebouncedInput as _ } from "./index.es63.js";
import { highlightTextInElement as $ } from "./index.es93.js";
import { cn as C } from "./index.es70.js";
import { l as W } from "./index.es94.js";
function Y({
  columns: u,
  data: c,
  searchableColumns: i,
  renderFilters: h,
  disableExtra: s
}) {
  const [g, S] = d.useState([]), [b, N] = d.useState([]), [R, P] = d.useState({}), [a, M] = d.useState(""), v = (e, t, l) => i?.length === 0 ? String(e.getValue(t)).toLowerCase().includes(l.toLowerCase()) : i?.some((p) => {
    const T = e.getValue(p);
    return String(T).toLowerCase().includes(l.toLowerCase());
  }), F = (e) => {
    const t = e.getValue(), l = w(e.column.columnDef.cell, e.getContext());
    return t && a && (!i?.length || i?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? $(
      e?.column?.columnDef?.cell(e.getContext()),
      a,
      t
    ) : l;
  }, o = j({
    data: c,
    columns: u,
    getCoreRowModel: k(),
    getPaginationRowModel: I(),
    getFilteredRowModel: H(),
    getSortedRowModel: D(),
    onColumnFiltersChange: N,
    onSortingChange: S,
    onColumnVisibilityChange: P,
    ...i ? { globalFilterFn: v } : {},
    state: {
      sorting: g,
      columnFilters: b,
      columnVisibility: R,
      globalFilter: a
    }
  }), f = g.length > 0 ? g[0].id : null;
  return V(() => {
    s && o.setPageSize(c.length);
  }, [s]), /* @__PURE__ */ r("div", { className: "w-[92%] mx-auto", children: [
    s ? null : /* @__PURE__ */ r("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ n(
        _,
        {
          label: "",
          placeholder: `Search ${i?.length ? `by ${i.map((e) => W.capitalize(e)).join(",")}` : "all columns"}...`,
          value: a ?? "",
          onChange: (e) => M(e),
          className: "max-w-sm"
        }
      ),
      h && h(o)
    ] }),
    /* @__PURE__ */ n("div", { className: "rounded-md border", children: /* @__PURE__ */ r(z, { children: [
      /* @__PURE__ */ n(L, { children: o.getHeaderGroups().map((e) => /* @__PURE__ */ n(m, { className: "py-6", children: e.headers.map((t) => {
        const l = t.column.id === f;
        return /* @__PURE__ */ n(
          B,
          {
            className: C("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            children: t.isPlaceholder ? null : w(t.column.columnDef.header, t.getContext())
          },
          t.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ n(G, { children: o.getRowModel().rows?.length ? o.getRowModel().rows.map((e) => /* @__PURE__ */ n(m, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((t) => {
        const l = t.column.id === f;
        return /* @__PURE__ */ n(
          y,
          {
            className: C("transition-colors py-6", l && "bg-gray-100 dark:bg-gray-700"),
            children: F(t)
          },
          t.id
        );
      }) }, e.id)) : /* @__PURE__ */ n(m, { children: /* @__PURE__ */ n(y, { colSpan: u.length, className: "h-28 text-center", children: "Nothing here." }) }) })
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
        x,
        {
          variant: "outline",
          size: "sm",
          onClick: () => o.previousPage(),
          disabled: !o.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ n(x, { variant: "outline", size: "sm", onClick: () => o.nextPage(), disabled: !o.getCanNextPage(), children: "Next" })
    ] })
  ] });
}
export {
  Y as default
};
