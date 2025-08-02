import { jsx as o, jsxs as s } from "react/jsx-runtime";
import a, { useEffect as C } from "react";
import { Button as N } from "./index.es13.js";
import { useReactTable as L, getSortedRowModel as B, getFilteredRowModel as G, getPaginationRowModel as _, getCoreRowModel as A, flexRender as S } from "@tanstack/react-table";
import { Table as q, TableHeader as J, TableRow as w, TableHead as K, TableBody as O, TableCell as R } from "./index.es46.js";
import { DebouncedInput as Q } from "./index.es63.js";
import { highlightTextInElement as U } from "./index.es97.js";
import { cn as M } from "./index.es70.js";
import { Skeleton as X } from "./index.es42.js";
function ie({
  columns: c,
  data: h,
  searchableColumns: r,
  searchPlaceholder: P,
  onSearch: x,
  loading: m,
  renderFilters: y,
  disableExtra: g,
  initialSearch: D,
  initialPageSize: f
}) {
  const [p, F] = a.useState([]), [T, V] = a.useState([]), [v, I] = a.useState({}), [u, k] = a.useState(D ?? ""), H = (e, t, l) => r?.length === 0 ? String(e.getValue(t)).toLowerCase().includes(l.toLowerCase()) : r?.some((i) => {
    const d = e.getValue(i);
    return String(d).toLowerCase().includes(l.toLowerCase());
  }), j = (e) => {
    const t = e.getValue(), l = S(e.column.columnDef.cell, e.getContext());
    return t && u && (!r?.length || r?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? U(
      e?.column?.columnDef?.cell(e.getContext()),
      u,
      t
    ) : l;
  }, W = a.useMemo(() => m ? Array(10).fill({}) : h, [m, h]), z = a.useMemo(
    () => m ? c.map((e) => ({
      ...e,
      cell: () => /* @__PURE__ */ o(X, { className: "h-6 w-50 rounded-sm" })
    })) : c,
    [m, c]
  ), n = L({
    data: W,
    columns: z,
    getCoreRowModel: A(),
    getPaginationRowModel: _(),
    getFilteredRowModel: G(),
    getSortedRowModel: B(),
    onColumnFiltersChange: V,
    onSortingChange: F,
    onColumnVisibilityChange: I,
    autoResetPageIndex: !1,
    ...r ? { globalFilterFn: H } : {},
    state: {
      sorting: p,
      columnFilters: T,
      columnVisibility: v,
      globalFilter: u
    }
  }), b = p.length > 0 ? p[0].id : null;
  return C(() => {
    g && n.setPageSize(h.length);
  }, [g]), C(() => {
    f && n.setPageSize(f);
  }, [f]), /* @__PURE__ */ s("div", { className: "w-[100%] mx-auto", children: [
    g ? null : /* @__PURE__ */ s("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ o(
        Q,
        {
          label: "",
          placeholder: P ?? "Start typing to search",
          value: u ?? "",
          onChange: (e) => {
            k(e), x && x(e);
          },
          className: "max-w-sm"
        }
      ),
      y && y(n)
    ] }),
    /* @__PURE__ */ o("div", { className: "rounded-md border", children: /* @__PURE__ */ s(q, { className: "table-fixed", children: [
      /* @__PURE__ */ o(J, { children: n.getHeaderGroups().map((e) => /* @__PURE__ */ o(w, { className: "py-6", children: e.headers.map((t) => {
        const l = t.column.id === b, i = t.column.getSize(), d = t.column.columnDef?.width || i;
        return /* @__PURE__ */ o(
          K,
          {
            className: M("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            style: { width: d },
            children: /* @__PURE__ */ o("div", { className: "line-clamp-2 break-all leading-snug", children: t.isPlaceholder ? null : S(t.column.columnDef.header, t.getContext()) })
          },
          t.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ o(O, { children: n.getRowModel().rows?.length ? n.getRowModel().rows.map((e) => /* @__PURE__ */ o(w, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((t) => {
        const l = t.column.id === b, i = t.column.getSize(), d = t.column.columnDef?.width || i;
        return /* @__PURE__ */ o(
          R,
          {
            style: { width: d },
            className: M(
              "transition-colors py-6 text-ellipsis",
              l && "bg-gray-100 dark:bg-gray-700"
            ),
            children: /* @__PURE__ */ o("div", { className: "line-clamp-3 break-words leading-snug", children: j(t) })
          },
          t.id
        );
      }) }, e.id)) : /* @__PURE__ */ o(w, { children: /* @__PURE__ */ o(R, { colSpan: c.length, className: "h-48 text-center", children: "No entries" }) }) })
    ] }) }),
    g ? null : /* @__PURE__ */ s("div", { className: "flex items-center justify-end space-x-2 py-6", children: [
      /* @__PURE__ */ s("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        "Showing ",
        n.getRowModel().rows.length,
        " of ",
        n.getPrePaginationRowModel().rows.length,
        " entries"
      ] }),
      /* @__PURE__ */ s("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        n.getState().pagination.pageIndex + 1,
        " of ",
        n.getPageCount() || 1
      ] }),
      /* @__PURE__ */ o(
        N,
        {
          variant: "outline",
          size: "sm",
          onClick: () => n.previousPage(),
          disabled: !n.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ o(N, { variant: "outline", size: "sm", onClick: () => n.nextPage(), disabled: !n.getCanNextPage(), children: "Next" })
    ] })
  ] });
}
export {
  ie as default
};
