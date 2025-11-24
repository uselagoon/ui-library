import { jsx as o, jsxs as r } from "react/jsx-runtime";
import c, { useRef as q, useEffect as x, useMemo as J } from "react";
import { Button as h } from "./index.es13.js";
import { useReactTable as K, getSortedRowModel as Q, getFilteredRowModel as U, getPaginationRowModel as X, getCoreRowModel as Y, flexRender as v } from "@tanstack/react-table";
import { Table as Z, TableHeader as ee, TableRow as P, TableHead as te, TableBody as ne, TableCell as k } from "./index.es46.js";
import { DebouncedInput as oe } from "./index.es63.js";
import { highlightTextInElement as le } from "./index.es102.js";
import { cn as I } from "./index.es71.js";
import { Skeleton as ie } from "./index.es42.js";
import ae from "./index.es62.js";
function be({
  columns: g,
  data: f,
  searchableColumns: d,
  searchPlaceholder: T,
  onSearch: y,
  loading: a,
  renderFilters: S,
  disableExtra: u,
  initialSearch: N,
  initialPageSize: p,
  onRowClick: R
}) {
  const [b, V] = c.useState([]), [D, F] = c.useState([]), [z, H] = c.useState({}), [m, W] = c.useState(N ?? ""), w = q(null);
  x(() => {
    N && w.current && w.current.focus();
  }, []);
  const j = (e, t, l) => d?.length === 0 ? String(e.getValue(t)).toLowerCase().includes(l.toLowerCase()) : d?.some((i) => {
    const s = e.getValue(i);
    return String(s).toLowerCase().includes(l.toLowerCase());
  }), L = (e) => {
    const t = e.getValue(), l = v(e.column.columnDef.cell, e.getContext());
    return t && m && (!d?.length || d?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? le(
      e?.column?.columnDef?.cell(e.getContext()),
      m,
      t
    ) : l;
  }, C = c.useMemo(() => a ? Array(10).fill({}) : f, [a, f]), G = c.useMemo(
    () => a ? g.map((e) => ({
      ...e,
      cell: () => /* @__PURE__ */ o(ie, { className: "h-6 w-50 rounded-sm" })
    })) : g,
    [a, g]
  ), n = K({
    data: C,
    columns: G,
    getCoreRowModel: Y(),
    getPaginationRowModel: X(),
    getFilteredRowModel: U(),
    getSortedRowModel: Q(),
    onColumnFiltersChange: F,
    onSortingChange: V,
    onColumnVisibilityChange: H,
    autoResetPageIndex: !1,
    ...d ? { globalFilterFn: j } : {},
    state: {
      sorting: b,
      columnFilters: D,
      columnVisibility: z,
      globalFilter: m
    }
  }), M = b.length > 0 ? b[0].id : null;
  x(() => {
    u && n.setPageSize(f.length);
  }, [u]), x(() => {
    p && n.setPageSize(p);
  }, [p]);
  const _ = J(
    () => Math.min(1e3, Math.max(40, Math.floor(C.length * 0.0725))),
    [C.length]
  ), A = n.getPageCount(), B = n.getState().pagination.pageIndex + 1, O = Array.from({ length: A || 1 }, (e, t) => t + 1).map((e) => ({ label: `Page ${String(e)}`, value: e })), E = (e) => {
    n.setPageIndex(Number(e) - 1);
  }, $ = (e, t) => {
    if (typeof R != "function") return;
    const l = e.target, i = l.closest('[data-slot="table-cell"]');
    e.currentTarget.contains(l) && (i?.firstElementChild?.contains(l) || R(t));
  };
  return /* @__PURE__ */ r("div", { className: "w-[100%] mx-auto", children: [
    u ? null : /* @__PURE__ */ r("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ o(
        oe,
        {
          ref: w,
          debounce: _,
          label: "",
          placeholder: T ?? "Start typing to search",
          value: m ?? "",
          onChange: (e) => {
            y && y(e), !a && W(e);
          },
          className: "max-w-sm"
        }
      ),
      S && S(n)
    ] }),
    /* @__PURE__ */ o("div", { className: "rounded-md border", children: /* @__PURE__ */ r(Z, { className: "table-fixed", children: [
      /* @__PURE__ */ o(ee, { children: n.getHeaderGroups().map((e) => /* @__PURE__ */ o(P, { className: "py-6", children: e.headers.map((t) => {
        const l = t.column.id === M, i = t.column.getSize(), s = t.column.columnDef?.width || i;
        return /* @__PURE__ */ o(
          te,
          {
            className: I("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            style: { width: s },
            children: /* @__PURE__ */ o("div", { className: "line-clamp-2 break-all leading-snug", children: t.isPlaceholder ? null : v(t.column.columnDef.header, t.getContext()) })
          },
          t.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ o(ne, { children: n.getRowModel().rows?.length ? n.getRowModel().rows.map((e) => /* @__PURE__ */ o(
        P,
        {
          onClick: (t) => $(t, e),
          className: "py-6",
          "data-state": e.getIsSelected() && "selected",
          children: e.getVisibleCells().map((t) => {
            const l = t.column.id === M, i = t.column.getSize(), s = t.column.columnDef?.width || i;
            return /* @__PURE__ */ o(
              k,
              {
                style: { width: s },
                className: I(
                  "transition-colors py-6 text-ellipsis",
                  l && "bg-gray-100 dark:bg-gray-700"
                ),
                children: /* @__PURE__ */ o("div", { className: "line-clamp-3 break-words leading-snug", children: L(t) })
              },
              t.id
            );
          })
        },
        e.id
      )) : /* @__PURE__ */ o(P, { children: /* @__PURE__ */ o(k, { colSpan: g.length, className: "h-48 text-center", children: "No entries" }) }) })
    ] }) }),
    u ? null : /* @__PURE__ */ r("div", { className: "flex items-center justify-end space-x-2 py-6", children: [
      /* @__PURE__ */ r("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        "Showing ",
        n.getRowModel().rows.length,
        " of ",
        n.getPrePaginationRowModel().rows.length,
        " entries"
      ] }),
      /* @__PURE__ */ r("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        n.getState().pagination.pageIndex + 1,
        " of ",
        n.getPageCount() || 1
      ] }),
      /* @__PURE__ */ o(h, { variant: "outline", size: "sm", onClick: () => n.firstPage(), disabled: !n.getCanPreviousPage(), children: "<<" }),
      /* @__PURE__ */ o(
        h,
        {
          variant: "outline",
          size: "sm",
          onClick: () => n.previousPage(),
          disabled: !n.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ o(h, { variant: "outline", size: "sm", onClick: () => n.nextPage(), disabled: !n.getCanNextPage(), children: "Next" }),
      /* @__PURE__ */ o(h, { variant: "outline", size: "sm", onClick: () => n.lastPage(), disabled: !n.getCanNextPage(), children: ">>" }),
      /* @__PURE__ */ o(
        ae,
        {
          value: String(B) || void 0,
          placeholder: "Go to page",
          options: O,
          onValueChange: E,
          disabled: a
        }
      )
    ] })
  ] });
}
export {
  be as default
};
