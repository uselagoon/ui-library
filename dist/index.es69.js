import { jsx as n, jsxs as s } from "react/jsx-runtime";
import a, { useEffect as N, useMemo as B } from "react";
import { Button as S } from "./index.es13.js";
import { useReactTable as G, getSortedRowModel as _, getFilteredRowModel as A, getPaginationRowModel as q, getCoreRowModel as J, flexRender as M } from "@tanstack/react-table";
import { Table as K, TableHeader as O, TableRow as x, TableHead as Q, TableBody as U, TableCell as R } from "./index.es46.js";
import { DebouncedInput as X } from "./index.es63.js";
import { highlightTextInElement as Y } from "./index.es97.js";
import { cn as P } from "./index.es70.js";
import { Skeleton as Z } from "./index.es42.js";
function ae({
  columns: d,
  data: h,
  searchableColumns: r,
  searchPlaceholder: D,
  onSearch: b,
  loading: m,
  renderFilters: y,
  disableExtra: g,
  initialSearch: F,
  initialPageSize: f
}) {
  const [p, T] = a.useState([]), [V, v] = a.useState([]), [I, k] = a.useState({}), [u, H] = a.useState(F ?? ""), j = (e, t, l) => r?.length === 0 ? String(e.getValue(t)).toLowerCase().includes(l.toLowerCase()) : r?.some((i) => {
    const c = e.getValue(i);
    return String(c).toLowerCase().includes(l.toLowerCase());
  }), L = (e) => {
    const t = e.getValue(), l = M(e.column.columnDef.cell, e.getContext());
    return t && u && (!r?.length || r?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? Y(
      e?.column?.columnDef?.cell(e.getContext()),
      u,
      t
    ) : l;
  }, w = a.useMemo(() => m ? Array(10).fill({}) : h, [m, h]), W = a.useMemo(
    () => m ? d.map((e) => ({
      ...e,
      cell: () => /* @__PURE__ */ n(Z, { className: "h-6 w-50 rounded-sm" })
    })) : d,
    [m, d]
  ), o = G({
    data: w,
    columns: W,
    getCoreRowModel: J(),
    getPaginationRowModel: q(),
    getFilteredRowModel: A(),
    getSortedRowModel: _(),
    onColumnFiltersChange: v,
    onSortingChange: T,
    onColumnVisibilityChange: k,
    autoResetPageIndex: !1,
    ...r ? { globalFilterFn: j } : {},
    state: {
      sorting: p,
      columnFilters: V,
      columnVisibility: I,
      globalFilter: u
    }
  }), C = p.length > 0 ? p[0].id : null;
  N(() => {
    g && o.setPageSize(h.length);
  }, [g]), N(() => {
    f && o.setPageSize(f);
  }, [f]);
  const z = B(
    () => Math.min(1e3, Math.max(40, Math.floor(w.length * 0.0725))),
    [w.length]
  );
  return /* @__PURE__ */ s("div", { className: "w-[100%] mx-auto", children: [
    g ? null : /* @__PURE__ */ s("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ n(
        X,
        {
          debounce: z,
          label: "",
          placeholder: D ?? "Start typing to search",
          value: u ?? "",
          onChange: (e) => {
            H(e), b && b(e);
          },
          className: "max-w-sm"
        }
      ),
      y && y(o)
    ] }),
    /* @__PURE__ */ n("div", { className: "rounded-md border", children: /* @__PURE__ */ s(K, { className: "table-fixed", children: [
      /* @__PURE__ */ n(O, { children: o.getHeaderGroups().map((e) => /* @__PURE__ */ n(x, { className: "py-6", children: e.headers.map((t) => {
        const l = t.column.id === C, i = t.column.getSize(), c = t.column.columnDef?.width || i;
        return /* @__PURE__ */ n(
          Q,
          {
            className: P("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            style: { width: c },
            children: /* @__PURE__ */ n("div", { className: "line-clamp-2 break-all leading-snug", children: t.isPlaceholder ? null : M(t.column.columnDef.header, t.getContext()) })
          },
          t.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ n(U, { children: o.getRowModel().rows?.length ? o.getRowModel().rows.map((e) => /* @__PURE__ */ n(x, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((t) => {
        const l = t.column.id === C, i = t.column.getSize(), c = t.column.columnDef?.width || i;
        return /* @__PURE__ */ n(
          R,
          {
            style: { width: c },
            className: P(
              "transition-colors py-6 text-ellipsis",
              l && "bg-gray-100 dark:bg-gray-700"
            ),
            children: /* @__PURE__ */ n("div", { className: "line-clamp-3 break-words leading-snug", children: L(t) })
          },
          t.id
        );
      }) }, e.id)) : /* @__PURE__ */ n(x, { children: /* @__PURE__ */ n(R, { colSpan: d.length, className: "h-48 text-center", children: "No entries" }) }) })
    ] }) }),
    g ? null : /* @__PURE__ */ s("div", { className: "flex items-center justify-end space-x-2 py-6", children: [
      /* @__PURE__ */ s("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        "Showing ",
        o.getRowModel().rows.length,
        " of ",
        o.getPrePaginationRowModel().rows.length,
        " entries"
      ] }),
      /* @__PURE__ */ s("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        o.getState().pagination.pageIndex + 1,
        " of ",
        o.getPageCount() || 1
      ] }),
      /* @__PURE__ */ n(
        S,
        {
          variant: "outline",
          size: "sm",
          onClick: () => o.previousPage(),
          disabled: !o.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ n(S, { variant: "outline", size: "sm", onClick: () => o.nextPage(), disabled: !o.getCanNextPage(), children: "Next" })
    ] })
  ] });
}
export {
  ae as default
};
