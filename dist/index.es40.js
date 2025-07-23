import { j as e } from "./index.es70.js";
import * as a from "@radix-ui/react-dialog";
import { XIcon as i } from "lucide-react";
import { cn as s } from "./index.es71.js";
function m({ ...t }) {
  return /* @__PURE__ */ e.jsx(a.Root, { "data-slot": "sheet", ...t });
}
function h({ ...t }) {
  return /* @__PURE__ */ e.jsx(a.Trigger, { "data-slot": "sheet-trigger", ...t });
}
function p({ ...t }) {
  return /* @__PURE__ */ e.jsx(a.Close, { "data-slot": "sheet-close", ...t });
}
function l({ ...t }) {
  return /* @__PURE__ */ e.jsx(a.Portal, { "data-slot": "sheet-portal", ...t });
}
function d({ className: t, ...o }) {
  return /* @__PURE__ */ e.jsx(
    a.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: s(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...o
    }
  );
}
function x({
  className: t,
  children: o,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ e.jsxs(l, { children: [
    /* @__PURE__ */ e.jsx(d, {}),
    /* @__PURE__ */ e.jsxs(
      a.Content,
      {
        "data-slot": "sheet-content",
        className: s(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          n === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          n === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          n === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          t
        ),
        ...r,
        children: [
          o,
          /* @__PURE__ */ e.jsxs(a.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ e.jsx(i, { className: "size-4" }),
            /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function g({ className: t, ...o }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "sheet-header", className: s("flex flex-col gap-1.5 p-4", t), ...o });
}
function b({ className: t, ...o }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "sheet-footer", className: s("mt-auto flex flex-col gap-2 p-4", t), ...o });
}
function j({ className: t, ...o }) {
  return /* @__PURE__ */ e.jsx(
    a.Title,
    {
      "data-slot": "sheet-title",
      className: s("text-foreground font-semibold", t),
      ...o
    }
  );
}
function y({ className: t, ...o }) {
  return /* @__PURE__ */ e.jsx(
    a.Description,
    {
      "data-slot": "sheet-description",
      className: s("text-muted-foreground text-sm", t),
      ...o
    }
  );
}
export {
  m as Sheet,
  p as SheetClose,
  x as SheetContent,
  y as SheetDescription,
  b as SheetFooter,
  g as SheetHeader,
  j as SheetTitle,
  h as SheetTrigger
};
