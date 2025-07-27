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
  data: c,
  searchableColumns: i,
  loading: d,
  renderFilters: p,
  disableExtra: m,
  onSearch: w,
  initialSearch: M,
  initialPageSize: u
}) {
  const [h, P] = s.useState([]), [F, T] = s.useState([]), [V, v] = s.useState({}), [g, D] = s.useState(M ?? ""), j = (e, t, n) => i?.length === 0 ? String(e.getValue(t)).toLowerCase().includes(n.toLowerCase()) : i?.some((y) => {
    const L = e.getValue(y);
    return String(L).toLowerCase().includes(n.toLowerCase());
  }), H = (e) => {
    const t = e.getValue(), n = S(e.column.columnDef.cell, e.getContext());
    return t && g && (!i?.length || i?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? K(
      e?.column?.columnDef?.cell(e.getContext()),
      g,
      t
    ) : n;
  }, k = s.useMemo(() => d ? Array(10).fill({}) : c, [d, c]), I = s.useMemo(
    () => d ? a.map((e) => ({
      ...e,
      cell: () => /* @__PURE__ */ l(Q, { className: "h-6 w-50 rounded-sm" })
    })) : a,
    [d, a]
  ), o = z({
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
    m && o.setPageSize(c.length);
  }, [m]), b(() => {
    u && o.setPageSize(u);
  }, [u]), /* @__PURE__ */ r("div", { className: "w-[92%] mx-auto", children: [
    m ? null : /* @__PURE__ */ r("div", { className: "flex items-end justify-between py-4", children: [
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
      p && p(o)
    ] }),
    /* @__PURE__ */ l("div", { className: "rounded-md border", children: /* @__PURE__ */ r(A, { children: [
      /* @__PURE__ */ l(W, { children: o.getHeaderGroups().map((e) => /* @__PURE__ */ l(f, { className: "py-6", children: e.headers.map((t) => {
        const n = t.column.id === x;
        return /* @__PURE__ */ l(
          q,
          {
            className: R("transition-colors py-1", n && "bg-gray-100 dark:bg-gray-700"),
            children: t.isPlaceholder ? null : S(t.column.columnDef.header, t.getContext())
          },
          t.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ l(E, { children: o.getRowModel().rows?.length ? o.getRowModel().rows.map((e) => /* @__PURE__ */ l(f, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((t) => {
        const n = t.column.id === x;
        return /* @__PURE__ */ l(
          N,
          {
            className: R("transition-colors py-6", n && "bg-gray-100 dark:bg-gray-700"),
            children: H(t)
          },
          t.id
        );
      }) }, e.id)) : /* @__PURE__ */ l(f, { children: /* @__PURE__ */ l(N, { colSpan: a.length, className: "h-28 text-center", children: "Nothing here." }) }) })
    ] }) }),
    m ? null : /* @__PURE__ */ r("div", { className: "flex items-center justify-end space-x-2 py-6", children: [
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
      /* @__PURE__ */ l(
        C,
        {
          variant: "outline",
          size: "sm",
          onClick: () => o.previousPage(),
          disabled: !o.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ l(C, { variant: "outline", size: "sm", onClick: () => o.nextPage(), disabled: !o.getCanNextPage(), children: "Next" })
    ] })
  ] });
}
export {
  re as default
};
