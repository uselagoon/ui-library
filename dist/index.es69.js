import { j as e } from "./index.es70.js";
import { useReactTable as p, getFilteredRowModel as j, getPaginationRowModel as b, getCoreRowModel as w, flexRender as r } from "@tanstack/react-table";
import { Table as f, TableHeader as R, TableRow as n, TableHead as v, TableBody as M, TableCell as d } from "./index.es46.js";
import { Button as s } from "./index.es13.js";
import { Input as N } from "./index.es28.js";
import { DropdownMenu as P, DropdownMenuTrigger as T, DropdownMenuContent as y, DropdownMenuCheckboxItem as F } from "./index.es24.js";
import { useState as o } from "react";
function B({ columns: a, data: c }) {
  const [m, g] = o([]), [u, x] = o({}), [h, C] = o({}), t = p({
    data: c,
    columns: a,
    getCoreRowModel: w(),
    getPaginationRowModel: b(),
    onColumnFiltersChange: g,
    getFilteredRowModel: j(),
    onColumnVisibilityChange: x,
    onRowSelectionChange: C,
    state: {
      columnFilters: m,
      columnVisibility: u,
      rowSelection: h
    }
  });
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center py-4", children: [
      /* @__PURE__ */ e.jsx(
        N,
        {
          placeholder: "Filter emails...",
          value: t.getColumn("email")?.getFilterValue() ?? "",
          onChange: (l) => t.getColumn("email")?.setFilterValue(l.target.value),
          className: "max-w-sm"
        }
      ),
      /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsx(T, { asChild: !0, children: /* @__PURE__ */ e.jsx(s, { variant: "outline", className: "ml-auto", children: "Columns" }) }),
        /* @__PURE__ */ e.jsx(y, { align: "end", children: t.getAllColumns().filter((l) => l.getCanHide()).map((l) => /* @__PURE__ */ e.jsx(
          F,
          {
            className: "capitalize",
            checked: l.getIsVisible(),
            onCheckedChange: (i) => l.toggleVisibility(!!i),
            children: l.id
          },
          l.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "rounded-md border", children: [
      /* @__PURE__ */ e.jsxs(f, { children: [
        /* @__PURE__ */ e.jsx(R, { children: t.getHeaderGroups().map((l) => /* @__PURE__ */ e.jsx(n, { children: l.headers.map((i) => /* @__PURE__ */ e.jsx(v, { children: i.isPlaceholder ? null : r(i.column.columnDef.header, i.getContext()) }, i.id)) }, l.id)) }),
        /* @__PURE__ */ e.jsx(M, { children: t.getRowModel().rows?.length ? t.getRowModel().rows.map((l) => /* @__PURE__ */ e.jsx(n, { "data-state": l.getIsSelected() && "selected", children: l.getVisibleCells().map((i) => /* @__PURE__ */ e.jsx(d, { children: r(i.column.columnDef.cell, i.getContext()) }, i.id)) }, l.id)) : /* @__PURE__ */ e.jsx(n, { children: /* @__PURE__ */ e.jsx(d, { colSpan: a.length, className: "h-24 text-center", children: "No results." }) }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end space-x-2 py-4", children: [
        /* @__PURE__ */ e.jsx(
          s,
          {
            variant: "outline",
            size: "sm",
            onClick: () => t.previousPage(),
            disabled: !t.getCanPreviousPage(),
            children: "Previous"
          }
        ),
        /* @__PURE__ */ e.jsx(s, { variant: "outline", size: "sm", onClick: () => t.nextPage(), disabled: !t.getCanNextPage(), children: "Next" })
      ] })
    ] })
  ] });
}
export {
  B as default
};
