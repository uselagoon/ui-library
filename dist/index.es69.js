import { jsx as l, jsxs as r } from "react/jsx-runtime";
import s, { useEffect as b } from "react";
import { Button as C } from "./index.es13.js";
import { useReactTable as z, getSortedRowModel as B, getFilteredRowModel as G, getPaginationRowModel as _, getCoreRowModel as $, flexRender as S } from "@tanstack/react-table";
import { Table as A, TableHeader as W, TableRow as f, TableHead as q, TableBody as E, TableCell as N } from "./index.es46.js";
import { DebouncedInput as J } from "./index.es63.js";
import { highlightTextInElement as K } from "./index.es93.js";
import { cn as R } from "./index.es70.js";
import { l as O } from "./index.es94.js";
import { Skeleton as Q } from "./index.es42.js";
function re({
  columns: a,
  data: m,
  searchableColumns: i,
  loading: d,
  renderFilters: p,
  disableExtra: c,
  onSearch: w,
  initialSearch: M,
  initialPageSize: u
}) {
  const [h, P] = s.useState([]), [F, T] = s.useState([]), [V, v] = s.useState({}), [g, D] = s.useState(M ?? ""), j = (e, o, n) => i?.length === 0 ? String(e.getValue(o)).toLowerCase().includes(n.toLowerCase()) : i?.some((y) => {
    const L = e.getValue(y);
    return String(L).toLowerCase().includes(n.toLowerCase());
  }), H = (e) => {
    const o = e.getValue(), n = S(e.column.columnDef.cell, e.getContext());
    return o && g && (!i?.length || i?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? K(
      e?.column?.columnDef?.cell(e.getContext()),
      g,
      o
    ) : n;
  }, k = s.useMemo(() => d ? Array(10).fill({}) : m, [d, m]), I = s.useMemo(
    () => d ? a.map((e) => ({
      ...e,
      cell: () => /* @__PURE__ */ l(Q, { className: "h-6 w-50 rounded-sm" })
    })) : a,
    [d, a]
  ), t = z({
    data: k,
    columns: I,
    getCoreRowModel: $(),
    getPaginationRowModel: _(),
    getFilteredRowModel: G(),
    getSortedRowModel: B(),
    onColumnFiltersChange: T,
    onSortingChange: P,
    onColumnVisibilityChange: v,
    ...i ? { globalFilterFn: j } : {},
    state: {
      sorting: h,
      columnFilters: F,
      columnVisibility: V,
      globalFilter: g
    }
  }), x = h.length > 0 ? h[0].id : null;
  return b(() => {
    c && t.setPageSize(m.length);
  }, [c]), b(() => {
    u && t.setPageSize(u);
  }, [u]), /* @__PURE__ */ r("div", { className: "w-[100%] mx-auto", children: [
    c ? null : /* @__PURE__ */ r("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ l(
        J,
        {
          label: "",
          placeholder: `Search ${i?.length ? `by ${i.map((e) => O.capitalize(e)).join(",")}` : "all columns"}...`,
          value: g ?? "",
          onChange: (e) => {
            D(e), w && w(e);
          },
          className: "max-w-sm"
        }
      ),
      p && p(t)
    ] }),
    /* @__PURE__ */ l("div", { className: "rounded-md border", children: /* @__PURE__ */ r(A, { children: [
      /* @__PURE__ */ l(W, { children: t.getHeaderGroups().map((e) => /* @__PURE__ */ l(f, { className: "py-6", children: e.headers.map((o) => {
        const n = o.column.id === x;
        return /* @__PURE__ */ l(
          q,
          {
            className: R("transition-colors py-1", n && "bg-gray-100 dark:bg-gray-700"),
            children: o.isPlaceholder ? null : S(o.column.columnDef.header, o.getContext())
          },
          o.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ l(E, { children: t.getRowModel().rows?.length ? t.getRowModel().rows.map((e) => /* @__PURE__ */ l(f, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((o) => {
        const n = o.column.id === x;
        return /* @__PURE__ */ l(
          N,
          {
            className: R("transition-colors py-6", n && "bg-gray-100 dark:bg-gray-700"),
            children: H(o)
          },
          o.id
        );
      }) }, e.id)) : /* @__PURE__ */ l(f, { children: /* @__PURE__ */ l(N, { colSpan: a.length, className: "h-28 text-center", children: "Nothing here." }) }) })
    ] }) }),
    c ? null : /* @__PURE__ */ r("div", { className: "flex items-center justify-end space-x-2 py-6", children: [
      /* @__PURE__ */ r("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        "Showing ",
        t.getRowModel().rows.length,
        " of ",
        t.getPrePaginationRowModel().rows.length,
        " entries"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        t.getState().pagination.pageIndex + 1,
        " of ",
        t.getPageCount()
      ] }),
      /* @__PURE__ */ l(
        C,
        {
          variant: "outline",
          size: "sm",
          onClick: () => t.previousPage(),
          disabled: !t.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ l(C, { variant: "outline", size: "sm", onClick: () => t.nextPage(), disabled: !t.getCanNextPage(), children: "Next" })
    ] })
  ] });
}
export {
  re as default
};
