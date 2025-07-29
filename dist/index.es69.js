import { jsx as n, jsxs as s } from "react/jsx-runtime";
import r, { useEffect as C } from "react";
import { Button as S } from "./index.es13.js";
import { useReactTable as L, getSortedRowModel as B, getFilteredRowModel as G, getPaginationRowModel as _, getCoreRowModel as A, flexRender as N } from "@tanstack/react-table";
import { Table as q, TableHeader as J, TableRow as w, TableHead as K, TableBody as O, TableCell as R } from "./index.es46.js";
import { DebouncedInput as Q } from "./index.es63.js";
import { highlightTextInElement as U } from "./index.es93.js";
import { cn as M } from "./index.es70.js";
import { Skeleton as X } from "./index.es42.js";
function ie({
  columns: d,
  data: h,
  searchableColumns: a,
  searchPlaceholder: P,
  onSearch: x,
  loading: m,
  renderFilters: y,
  disableExtra: g,
  initialSearch: D,
  initialPageSize: f
}) {
  const [p, F] = r.useState([]), [T, V] = r.useState([]), [v, I] = r.useState({}), [u, k] = r.useState(D ?? ""), H = (e, t, l) => a?.length === 0 ? String(e.getValue(t)).toLowerCase().includes(l.toLowerCase()) : a?.some((i) => {
    const c = e.getValue(i);
    return String(c).toLowerCase().includes(l.toLowerCase());
  }), j = (e) => {
    const t = e.getValue(), l = N(e.column.columnDef.cell, e.getContext());
    return t && u && (!a?.length || a?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? U(
      e?.column?.columnDef?.cell(e.getContext()),
      u,
      t
    ) : l;
  }, W = r.useMemo(() => m ? Array(10).fill({}) : h, [m, h]), z = r.useMemo(
    () => m ? d.map((e) => ({
      ...e,
      cell: () => /* @__PURE__ */ n(X, { className: "h-6 w-50 rounded-sm" })
    })) : d,
    [m, d]
  ), o = L({
    data: W,
    columns: z,
    getCoreRowModel: A(),
    getPaginationRowModel: _(),
    getFilteredRowModel: G(),
    getSortedRowModel: B(),
    onColumnFiltersChange: V,
    onSortingChange: F,
    onColumnVisibilityChange: I,
    ...a ? { globalFilterFn: H } : {},
    state: {
      sorting: p,
      columnFilters: T,
      columnVisibility: v,
      globalFilter: u
    }
  }), b = p.length > 0 ? p[0].id : null;
  return C(() => {
    g && o.setPageSize(h.length);
  }, [g]), C(() => {
    f && o.setPageSize(f);
  }, [f]), /* @__PURE__ */ s("div", { className: "w-[100%] mx-auto", children: [
    g ? null : /* @__PURE__ */ s("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ n(
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
      y && y(o)
    ] }),
    /* @__PURE__ */ n("div", { className: "rounded-md border", children: /* @__PURE__ */ s(q, { className: "table-fixed", children: [
      /* @__PURE__ */ n(J, { children: o.getHeaderGroups().map((e) => /* @__PURE__ */ n(w, { className: "py-6", children: e.headers.map((t) => {
        const l = t.column.id === b, i = t.column.getSize(), c = t.column.columnDef?.width || i;
        return /* @__PURE__ */ n(
          K,
          {
            className: M("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            style: { width: c },
            children: t.isPlaceholder ? null : N(t.column.columnDef.header, t.getContext())
          },
          t.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ n(O, { children: o.getRowModel().rows?.length ? o.getRowModel().rows.map((e) => /* @__PURE__ */ n(w, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((t) => {
        const l = t.column.id === b, i = t.column.getSize(), c = t.column.columnDef?.width || i;
        return /* @__PURE__ */ n(
          R,
          {
            style: {
              width: c
            },
            className: M(
              "transition-colors py-6 text-ellipsis",
              l && "bg-gray-100 dark:bg-gray-700"
            ),
            children: /* @__PURE__ */ n("div", { className: "line-clamp-3 break-words leading-snug", children: j(t) })
          },
          t.id
        );
      }) }, e.id)) : /* @__PURE__ */ n(w, { children: /* @__PURE__ */ n(R, { colSpan: d.length, className: "h-48 text-center", children: "No entries" }) }) })
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
        o.getPageCount()
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
  ie as default
};
