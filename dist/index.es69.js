import { jsx as n, jsxs as r } from "react/jsx-runtime";
import c, { useRef as q, useEffect as P, useMemo as J } from "react";
import { Button as f } from "./index.es13.js";
import { useReactTable as K, getSortedRowModel as Q, getFilteredRowModel as U, getPaginationRowModel as X, getCoreRowModel as Y, flexRender as v } from "@tanstack/react-table";
import { Table as Z, TableHeader as ee, TableRow as y, TableHead as te, TableBody as ne, TableCell as D } from "./index.es46.js";
import { DebouncedInput as oe } from "./index.es63.js";
import { highlightTextInElement as le } from "./index.es97.js";
import { cn as V } from "./index.es70.js";
import { Skeleton as ie } from "./index.es42.js";
import se from "./index.es62.js";
function Ce({
  columns: u,
  data: p,
  searchableColumns: d,
  searchPlaceholder: I,
  onSearch: R,
  loading: a,
  renderFilters: S,
  disableExtra: g,
  initialSearch: N,
  initialPageSize: C
}) {
  const [w, F] = c.useState([]), [T, z] = c.useState([]), [H, W] = c.useState({}), [m, j] = c.useState(N ?? ""), b = q(null);
  P(() => {
    N && b.current && b.current.focus();
  }, []);
  const L = (e, o, s) => d?.length === 0 ? String(e.getValue(o)).toLowerCase().includes(s.toLowerCase()) : d?.some((l) => {
    const i = e.getValue(l);
    return String(i).toLowerCase().includes(s.toLowerCase());
  }), G = (e) => {
    const o = e.getValue(), s = v(e.column.columnDef.cell, e.getContext());
    return o && m && (!d?.length || d?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? le(
      e?.column?.columnDef?.cell(e.getContext()),
      m,
      o
    ) : s;
  }, x = c.useMemo(() => a ? Array(10).fill({}) : p, [a, p]), O = c.useMemo(
    () => a ? u.map((e) => ({
      ...e,
      cell: () => /* @__PURE__ */ n(ie, { className: "h-6 w-50 rounded-sm" })
    })) : u,
    [a, u]
  ), t = K({
    data: x,
    columns: O,
    getCoreRowModel: Y(),
    getPaginationRowModel: X(),
    getFilteredRowModel: U(),
    getSortedRowModel: Q(),
    onColumnFiltersChange: z,
    onSortingChange: F,
    onColumnVisibilityChange: W,
    autoResetPageIndex: !1,
    ...d ? { globalFilterFn: L } : {},
    state: {
      sorting: w,
      columnFilters: T,
      columnVisibility: H,
      globalFilter: m
    }
  }), M = w.length > 0 ? w[0].id : null;
  P(() => {
    g && t.setPageSize(p.length);
  }, [g]), P(() => {
    C && t.setPageSize(C);
  }, [C]);
  const _ = J(
    () => Math.min(1e3, Math.max(40, Math.floor(x.length * 0.0725))),
    [x.length]
  ), A = t.getPageCount(), B = t.getState().pagination.pageIndex + 1, E = Array.from({ length: A || 1 }, (e, o) => o + 1).map((e) => ({ label: `Page ${String(e)}`, value: e })), $ = (e) => {
    t.setPageIndex(Number(e) - 1);
  };
  return /* @__PURE__ */ r("div", { className: "w-[100%] mx-auto", children: [
    g ? null : /* @__PURE__ */ r("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ n(
        oe,
        {
          ref: b,
          debounce: _,
          label: "",
          placeholder: I ?? "Start typing to search",
          value: m ?? "",
          onChange: (e) => {
            R && R(e), !a && j(e);
          },
          className: "max-w-sm"
        }
      ),
      S && S(t)
    ] }),
    /* @__PURE__ */ n("div", { className: "rounded-md border", children: /* @__PURE__ */ r(Z, { className: "table-fixed", children: [
      /* @__PURE__ */ n(ee, { children: t.getHeaderGroups().map((e) => /* @__PURE__ */ n(y, { className: "py-6", children: e.headers.map((o) => {
        const s = o.column.id === M, l = o.column.getSize(), i = o.column.columnDef?.width || l;
        return /* @__PURE__ */ n(
          te,
          {
            className: V("transition-colors py-1", s && "bg-gray-100 dark:bg-gray-700"),
            style: { width: i },
            children: /* @__PURE__ */ n("div", { className: "line-clamp-2 break-all leading-snug", children: o.isPlaceholder ? null : v(o.column.columnDef.header, o.getContext()) })
          },
          o.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ n(ne, { children: t.getRowModel().rows?.length ? t.getRowModel().rows.map((e) => {
        const o = e.getVisibleCells().find((l) => typeof l.column.columnDef.onRowClick == "function");
        return /* @__PURE__ */ n(
          y,
          {
            onClick: (l) => {
              if (!o) return;
              const i = o.column.columnDef, h = l.target;
              h.closest('[data-slot="table-cell"]')?.firstElementChild?.contains(h) || i.onRowClick?.(e);
            },
            className: "py-6",
            "data-state": e.getIsSelected() && "selected",
            children: e.getVisibleCells().map((l) => {
              const i = l.column.id === M, h = l.column.getSize(), k = l.column.columnDef?.width || h;
              return /* @__PURE__ */ n(
                D,
                {
                  style: { width: k },
                  className: V(
                    "transition-colors py-6 text-ellipsis",
                    i && "bg-gray-100 dark:bg-gray-700"
                  ),
                  children: /* @__PURE__ */ n("div", { className: "line-clamp-3 break-words leading-snug", children: G(l) })
                },
                l.id
              );
            })
          },
          e.id
        );
      }) : /* @__PURE__ */ n(y, { children: /* @__PURE__ */ n(D, { colSpan: u.length, className: "h-48 text-center", children: "No entries" }) }) })
    ] }) }),
    g ? null : /* @__PURE__ */ r("div", { className: "flex items-center justify-end space-x-2 py-6", children: [
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
        t.getPageCount() || 1
      ] }),
      /* @__PURE__ */ n(f, { variant: "outline", size: "sm", onClick: () => t.firstPage(), disabled: !t.getCanPreviousPage(), children: "<<" }),
      /* @__PURE__ */ n(
        f,
        {
          variant: "outline",
          size: "sm",
          onClick: () => t.previousPage(),
          disabled: !t.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ n(f, { variant: "outline", size: "sm", onClick: () => t.nextPage(), disabled: !t.getCanNextPage(), children: "Next" }),
      /* @__PURE__ */ n(f, { variant: "outline", size: "sm", onClick: () => t.lastPage(), disabled: !t.getCanNextPage(), children: ">>" }),
      /* @__PURE__ */ n(
        se,
        {
          value: String(B) || void 0,
          placeholder: "Go to page",
          options: E,
          onValueChange: $,
          disabled: a
        }
      )
    ] })
  ] });
}
export {
  Ce as default
};
