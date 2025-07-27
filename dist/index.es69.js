import { jsxs as r, jsx as n } from "react/jsx-runtime";
import d, { useEffect as j } from "react";
import { Button as w } from "./index.es13.js";
import { useReactTable as D, getSortedRowModel as H, getFilteredRowModel as I, getPaginationRowModel as k, getCoreRowModel as z, flexRender as y } from "@tanstack/react-table";
import { Table as L, TableHeader as B, TableRow as m, TableHead as G, TableBody as _, TableCell as C } from "./index.es46.js";
import { DebouncedInput as $ } from "./index.es63.js";
import { highlightTextInElement as W } from "./index.es93.js";
import { cn as b } from "./index.es70.js";
import { l as q } from "./index.es94.js";
function Z({
  columns: u,
  data: c,
  searchableColumns: i,
  renderFilters: h,
  disableExtra: s,
  onSearch: f
}) {
  const [g, S] = d.useState([]), [N, R] = d.useState([]), [P, M] = d.useState({}), [a, F] = d.useState(""), T = (e, t, l) => i?.length === 0 ? String(e.getValue(t)).toLowerCase().includes(l.toLowerCase()) : i?.some((x) => {
    const v = e.getValue(x);
    return String(v).toLowerCase().includes(l.toLowerCase());
  }), V = (e) => {
    const t = e.getValue(), l = y(e.column.columnDef.cell, e.getContext());
    return t && a && (!i?.length || i?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? W(
      e?.column?.columnDef?.cell(e.getContext()),
      a,
      t
    ) : l;
  }, o = D({
    data: c,
    columns: u,
    getCoreRowModel: z(),
    getPaginationRowModel: k(),
    getFilteredRowModel: I(),
    getSortedRowModel: H(),
    onColumnFiltersChange: R,
    onSortingChange: S,
    onColumnVisibilityChange: M,
    ...i ? { globalFilterFn: T } : {},
    state: {
      sorting: g,
      columnFilters: N,
      columnVisibility: P,
      globalFilter: a
    }
  }), p = g.length > 0 ? g[0].id : null;
  return j(() => {
    s && o.setPageSize(c.length);
  }, [s]), /* @__PURE__ */ r("div", { className: "w-[92%] mx-auto", children: [
    s ? null : /* @__PURE__ */ r("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ n(
        $,
        {
          label: "",
          placeholder: `Search ${i?.length ? `by ${i.map((e) => q.capitalize(e)).join(",")}` : "all columns"}...`,
          value: a ?? "",
          onChange: (e) => {
            F(e), f && f(e);
          },
          className: "max-w-sm"
        }
      ),
      h && h(o)
    ] }),
    /* @__PURE__ */ n("div", { className: "rounded-md border", children: /* @__PURE__ */ r(L, { children: [
      /* @__PURE__ */ n(B, { children: o.getHeaderGroups().map((e) => /* @__PURE__ */ n(m, { className: "py-6", children: e.headers.map((t) => {
        const l = t.column.id === p;
        return /* @__PURE__ */ n(
          G,
          {
            className: b("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            children: t.isPlaceholder ? null : y(t.column.columnDef.header, t.getContext())
          },
          t.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ n(_, { children: o.getRowModel().rows?.length ? o.getRowModel().rows.map((e) => /* @__PURE__ */ n(m, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((t) => {
        const l = t.column.id === p;
        return /* @__PURE__ */ n(
          C,
          {
            className: b("transition-colors py-6", l && "bg-gray-100 dark:bg-gray-700"),
            children: V(t)
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
  Z as default
};
