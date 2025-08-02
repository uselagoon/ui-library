import { jsx as o, jsxs as s } from "react/jsx-runtime";
import r, { useEffect as y, useMemo as O } from "react";
import { Button as h } from "./index.es13.js";
import { useReactTable as $, getSortedRowModel as q, getFilteredRowModel as J, getPaginationRowModel as K, getCoreRowModel as Q, flexRender as N } from "@tanstack/react-table";
import { Table as U, TableHeader as X, TableRow as x, TableHead as Y, TableBody as Z, TableCell as M } from "./index.es46.js";
import { DebouncedInput as E } from "./index.es63.js";
import { highlightTextInElement as ee } from "./index.es97.js";
import { cn as R } from "./index.es70.js";
import { Skeleton as te } from "./index.es42.js";
import ne from "./index.es62.js";
function ue({
  columns: g,
  data: f,
  searchableColumns: c,
  searchPlaceholder: v,
  onSearch: C,
  loading: i,
  renderFilters: P,
  disableExtra: m,
  initialSearch: V,
  initialPageSize: p
}) {
  const [w, k] = r.useState([]), [D, F] = r.useState([]), [I, T] = r.useState({}), [u, z] = r.useState(V ?? ""), H = (e, n, l) => c?.length === 0 ? String(e.getValue(n)).toLowerCase().includes(l.toLowerCase()) : c?.some((a) => {
    const d = e.getValue(a);
    return String(d).toLowerCase().includes(l.toLowerCase());
  }), W = (e) => {
    const n = e.getValue(), l = N(e.column.columnDef.cell, e.getContext());
    return n && u && (!c?.length || c?.includes(e.column.id)) && typeof e.column.columnDef.cell == "function" ? ee(
      e?.column?.columnDef?.cell(e.getContext()),
      u,
      n
    ) : l;
  }, b = r.useMemo(() => i ? Array(10).fill({}) : f, [i, f]), j = r.useMemo(
    () => i ? g.map((e) => ({
      ...e,
      cell: () => /* @__PURE__ */ o(te, { className: "h-6 w-50 rounded-sm" })
    })) : g,
    [i, g]
  ), t = $({
    data: b,
    columns: j,
    getCoreRowModel: Q(),
    getPaginationRowModel: K(),
    getFilteredRowModel: J(),
    getSortedRowModel: q(),
    onColumnFiltersChange: F,
    onSortingChange: k,
    onColumnVisibilityChange: T,
    autoResetPageIndex: !1,
    ...c ? { globalFilterFn: H } : {},
    state: {
      sorting: w,
      columnFilters: D,
      columnVisibility: I,
      globalFilter: u
    }
  }), S = w.length > 0 ? w[0].id : null;
  y(() => {
    m && t.setPageSize(f.length);
  }, [m]), y(() => {
    p && t.setPageSize(p);
  }, [p]);
  const L = O(
    () => Math.min(1e3, Math.max(40, Math.floor(b.length * 0.0725))),
    [b.length]
  ), G = t.getPageCount(), _ = t.getState().pagination.pageIndex + 1, A = Array.from({ length: G || 1 }, (e, n) => n + 1).map((e) => ({ label: `Page ${String(e)}`, value: e })), B = (e) => {
    t.setPageIndex(Number(e) - 1);
  };
  return /* @__PURE__ */ s("div", { className: "w-[100%] mx-auto", children: [
    m ? null : /* @__PURE__ */ s("div", { className: "flex items-end justify-between py-4", children: [
      /* @__PURE__ */ o(
        E,
        {
          debounce: L,
          label: "",
          placeholder: v ?? "Start typing to search",
          value: u ?? "",
          onChange: (e) => {
            C && C(e), !i && z(e);
          },
          className: "max-w-sm"
        }
      ),
      P && P(t)
    ] }),
    /* @__PURE__ */ o("div", { className: "rounded-md border", children: /* @__PURE__ */ s(U, { className: "table-fixed", children: [
      /* @__PURE__ */ o(X, { children: t.getHeaderGroups().map((e) => /* @__PURE__ */ o(x, { className: "py-6", children: e.headers.map((n) => {
        const l = n.column.id === S, a = n.column.getSize(), d = n.column.columnDef?.width || a;
        return /* @__PURE__ */ o(
          Y,
          {
            className: R("transition-colors py-1", l && "bg-gray-100 dark:bg-gray-700"),
            style: { width: d },
            children: /* @__PURE__ */ o("div", { className: "line-clamp-2 break-all leading-snug", children: n.isPlaceholder ? null : N(n.column.columnDef.header, n.getContext()) })
          },
          n.id
        );
      }) }, e.id)) }),
      /* @__PURE__ */ o(Z, { children: t.getRowModel().rows?.length ? t.getRowModel().rows.map((e) => /* @__PURE__ */ o(x, { className: "py-6", "data-state": e.getIsSelected() && "selected", children: e.getVisibleCells().map((n) => {
        const l = n.column.id === S, a = n.column.getSize(), d = n.column.columnDef?.width || a;
        return /* @__PURE__ */ o(
          M,
          {
            style: { width: d },
            className: R(
              "transition-colors py-6 text-ellipsis",
              l && "bg-gray-100 dark:bg-gray-700"
            ),
            children: /* @__PURE__ */ o("div", { className: "line-clamp-3 break-words leading-snug", children: W(n) })
          },
          n.id
        );
      }) }, e.id)) : /* @__PURE__ */ o(x, { children: /* @__PURE__ */ o(M, { colSpan: g.length, className: "h-48 text-center", children: "No entries" }) }) })
    ] }) }),
    m ? null : /* @__PURE__ */ s("div", { className: "flex items-center justify-end space-x-2 py-6", children: [
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
        ne,
        {
          value: String(_) || void 0,
          placeholder: "Go to page",
          options: A,
          onValueChange: B,
          disabled: i
        }
      )
    ] })
  ] });
}
export {
  ue as default
};
