import { jsx as o, jsxs as s } from "react/jsx-runtime";
import r, { useRef as $, useEffect as C, useMemo as q } from "react";
import { Button as h } from "./index.es13.js";
import { useReactTable as J, getSortedRowModel as K, getFilteredRowModel as Q, getPaginationRowModel as U, getCoreRowModel as X, flexRender as M } from "@tanstack/react-table";
import { Table as Y, TableHeader as Z, TableRow as P, TableHead as E, TableBody as ee, TableCell as v } from "./index.es46.js";
import { DebouncedInput as te } from "./index.es63.js";
import { highlightTextInElement as ne } from "./index.es97.js";
import { cn as I } from "./index.es70.js";
import { Skeleton as oe } from "./index.es42.js";
import le from "./index.es62.js";
function fe({
  columns: g,
  data: f,
  searchableColumns: c,
  searchPlaceholder: V,
  onSearch: S,
  loading: i,
  renderFilters: y,
  disableExtra: u,
  initialSearch: N,
  initialPageSize: p
}) {
  const [w, k] = r.useState([]), [D, F] = r.useState([]), [T, z] = r.useState({}), [m, H] = r.useState(N ?? ""), b = $(null);
  C(() => {
    N && b.current && b.current.focus();
  }, []);
  const W = (e, n, l) => c?.length === 0 ? String(e.getValue(n)).toLowerCase().includes(l.toLowerCase()) : c?.some((a) => {
    const d = e.getValue(a);
    return String(d).toLowerCase().includes(l.toLowerCase());
  }), j = (e) => {
    const n = e.getValue(), l = M(e.column.columnDef.cell, e.getContext());
    return n && m && (!c?.length || c?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? ne(
      e?.column?.columnDef?.cell(e.getContext()),
      m,
      n
    ) : l;
  }, x = r.useMemo(() => i ? Array(10).fill({}) : f, [i, f]), L = r.useMemo(
    () => i ? g.map((e) => ({
      ...e,
      cell: () => /* @__PURE__ */ o(oe, { className: "h-6 w-50 rounded-sm" })
    })) : g,
    [i, g]
  ), t = J({
    data: x,
    columns: L,
    getCoreRowModel: X(),
    getPaginationRowModel: U(),
    getFilteredRowModel: Q(),
    getSortedRowModel: K(),
    onColumnFiltersChange: F,
    onSortingChange: k,
    onColumnVisibilityChange: z,
    autoResetPageIndex: !1,
    ...c ? { globalFilterFn: W } : {},
    state: {
      sorting: w,
      columnFilters: D,
      columnVisibility: T,
      globalFilter: m
    }
  }), R = w.length > 0 ? w[0].id : null;
  C(() => {
    u && t.setPageSize(f.length);
  }, [u]), C(() => {
    p && t.setPageSize(p);
  }, [p]);
  const G = q(
    () => Math.min(1e3, Math.max(40, Math.floor(x.length * 0.0725))),
    [x.length]
  ), _ = t.getPageCount(), A = t.getState().pagination.pageIndex + 1, B = Array.from({ length: _ || 1 }, (e, n) => n + 1).map((e) => ({ label: `Page ${String(e)}`, value: e })), O = (e) => {
    t.setPageIndex(Number(e) - 1);
  };
  return /* @__PURE__ */ s("div", { className: "w-[100%] mx-auto", children: [
    u ? null : /* @__PURE__ */ s("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ o(
        te,
        {
          ref: b,
          debounce: G,
          label: "",
          placeholder: V ?? "Start typing to search",
          value: m ?? "",
          onChange: (e) => {
            S && S(e), !i && H(e);
          },
          className: "max-w-sm"
        }
      ),
      y && y(t)
    ] }),
    /* @__PURE__ */ o("div", { className: "rounded-md border", children: /* @__PURE__ */ s(Y, { className: "table-fixed", children: [
      /* @__PURE__ */ o(Z, { children: t.getHeaderGroups().map((e) => /* @__PURE__ */ o(P, { className: "py-6", children: e.headers.map((n) => {
        const l = n.column.id === R, a = n.column.getSize(), d = n.column.columnDef?.width || a;
        return /* @__PURE__ */ o(
          E,
          {
            className: I("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            style: { width: d },
            children: /* @__PURE__ */ o("div", { className: "line-clamp-2 break-all leading-snug", children: n.isPlaceholder ? null : M(n.column.columnDef.header, n.getContext()) })
          },
          n.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ o(ee, { children: t.getRowModel().rows?.length ? t.getRowModel().rows.map((e) => /* @__PURE__ */ o(P, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((n) => {
        const l = n.column.id === R, a = n.column.getSize(), d = n.column.columnDef?.width || a;
        return /* @__PURE__ */ o(
          v,
          {
            style: { width: d },
            className: I(
              "transition-colors py-6 text-ellipsis",
              l && "bg-gray-100 dark:bg-gray-700"
            ),
            children: /* @__PURE__ */ o("div", { className: "line-clamp-3 break-words leading-snug", children: j(n) })
          },
          n.id
        );
      }) }, e.id)) : /* @__PURE__ */ o(P, { children: /* @__PURE__ */ o(v, { colSpan: g.length, className: "h-48 text-center", children: "No entries" }) }) })
    ] }) }),
    u ? null : /* @__PURE__ */ s("div", { className: "flex items-center justify-end space-x-2 py-6", children: [
      /* @__PURE__ */ s("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        "Showing ",
        t.getRowModel().rows.length,
        " of ",
        t.getPrePaginationRowModel().rows.length,
        " entries"
      ] }),
      /* @__PURE__ */ s("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        t.getState().pagination.pageIndex + 1,
        " of ",
        t.getPageCount() || 1
      ] }),
      /* @__PURE__ */ o(h, { variant: "outline", size: "sm", onClick: () => t.firstPage(), disabled: !t.getCanPreviousPage(), children: "<<" }),
      /* @__PURE__ */ o(
        h,
        {
          variant: "outline",
          size: "sm",
          onClick: () => t.previousPage(),
          disabled: !t.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ o(h, { variant: "outline", size: "sm", onClick: () => t.nextPage(), disabled: !t.getCanNextPage(), children: "Next" }),
      /* @__PURE__ */ o(h, { variant: "outline", size: "sm", onClick: () => t.lastPage(), disabled: !t.getCanNextPage(), children: ">>" }),
      /* @__PURE__ */ o(
        le,
        {
          value: String(A) || void 0,
          placeholder: "Go to page",
          options: B,
          onValueChange: O,
          disabled: i
        }
      )
    ] })
  ] });
}
export {
  fe as default
};
