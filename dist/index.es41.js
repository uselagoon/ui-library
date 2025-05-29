import * as e from "react";
import * as o from "@radix-ui/react-dialog";
import { XIcon as l } from "lucide-react";
import { cn as n } from "./index.es54.js";
function u({ ...t }) {
  return /* @__PURE__ */ e.createElement(o.Root, { "data-slot": "sheet", ...t });
}
function f({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(o.Trigger, { "data-slot": "sheet-trigger", ...t });
}
function h({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(o.Close, { "data-slot": "sheet-close", ...t });
}
function i({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(o.Portal, { "data-slot": "sheet-portal", ...t });
}
function d({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e.createElement(
    o.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...a
    }
  );
}
function p({
  className: t,
  children: a,
  side: s = "right",
  ...r
}) {
  return /* @__PURE__ */ e.createElement(i, null, /* @__PURE__ */ e.createElement(d, null), /* @__PURE__ */ e.createElement(
    o.Content,
    {
      "data-slot": "sheet-content",
      className: n(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
        s === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
        s === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        s === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        s === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        t
      ),
      ...r
    },
    a,
    /* @__PURE__ */ e.createElement(o.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, /* @__PURE__ */ e.createElement(l, { className: "size-4" }), /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, "Close"))
  ));
}
function g({ className: t, ...a }) {
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-slot": "sheet-header",
      className: n("flex flex-col gap-1.5 p-4", t),
      ...a
    }
  );
}
function b({ className: t, ...a }) {
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-slot": "sheet-footer",
      className: n("mt-auto flex flex-col gap-2 p-4", t),
      ...a
    }
  );
}
function x({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e.createElement(
    o.Title,
    {
      "data-slot": "sheet-title",
      className: n("text-foreground font-semibold", t),
      ...a
    }
  );
}
function E({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e.createElement(
    o.Description,
    {
      "data-slot": "sheet-description",
      className: n("text-muted-foreground text-sm", t),
      ...a
    }
  );
}
export {
  u as Sheet,
  h as SheetClose,
  p as SheetContent,
  E as SheetDescription,
  b as SheetFooter,
  g as SheetHeader,
  x as SheetTitle,
  f as SheetTrigger
};
