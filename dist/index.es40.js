import { jsx as e, jsxs as r } from "react/jsx-runtime";
import * as a from "@radix-ui/react-dialog";
import { XIcon as l } from "lucide-react";
import { cn as s } from "./index.es70.js";
function h({ ...t }) {
  return /* @__PURE__ */ e(a.Root, { "data-slot": "sheet", ...t });
}
function p({ ...t }) {
  return /* @__PURE__ */ e(a.Trigger, { "data-slot": "sheet-trigger", ...t });
}
function g({ ...t }) {
  return /* @__PURE__ */ e(a.Close, { "data-slot": "sheet-close", ...t });
}
function d({ ...t }) {
  return /* @__PURE__ */ e(a.Portal, { "data-slot": "sheet-portal", ...t });
}
function c({ className: t, ...o }) {
  return /* @__PURE__ */ e(
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
  ...i
}) {
  return /* @__PURE__ */ r(d, { children: [
    /* @__PURE__ */ e(c, {}),
    /* @__PURE__ */ r(
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
        ...i,
        children: [
          o,
          /* @__PURE__ */ r(a.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ e(l, { className: "size-4" }),
            /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function b({ className: t, ...o }) {
  return /* @__PURE__ */ e("div", { "data-slot": "sheet-header", className: s("flex flex-col gap-1.5 p-4", t), ...o });
}
function y({ className: t, ...o }) {
  return /* @__PURE__ */ e("div", { "data-slot": "sheet-footer", className: s("mt-auto flex flex-col gap-2 p-4", t), ...o });
}
function S({ className: t, ...o }) {
  return /* @__PURE__ */ e(
    a.Title,
    {
      "data-slot": "sheet-title",
      className: s("text-foreground font-semibold", t),
      ...o
    }
  );
}
function N({ className: t, ...o }) {
  return /* @__PURE__ */ e(
    a.Description,
    {
      "data-slot": "sheet-description",
      className: s("text-muted-foreground text-sm", t),
      ...o
    }
  );
}
export {
  h as Sheet,
  g as SheetClose,
  x as SheetContent,
  N as SheetDescription,
  y as SheetFooter,
  b as SheetHeader,
  S as SheetTitle,
  p as SheetTrigger
};
