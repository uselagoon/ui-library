import * as e from "react";
import * as i from "@radix-ui/react-dialog";
import { XIcon as s } from "lucide-react";
import { cn as a } from "./index.es54.js";
function m({ ...t }) {
  return /* @__PURE__ */ e.createElement(i.Root, { "data-slot": "sheet", ...t });
}
function u({ ...t }) {
  return /* @__PURE__ */ e.createElement(i.Trigger, { "data-slot": "sheet-trigger", ...t });
}
function f({ ...t }) {
  return /* @__PURE__ */ e.createElement(i.Close, { "data-slot": "sheet-close", ...t });
}
function r({ ...t }) {
  return /* @__PURE__ */ e.createElement(i.Portal, { "data-slot": "sheet-portal", ...t });
}
function b({ className: t, ...l }) {
  return /* @__PURE__ */ e.createElement(
    i.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: a(
        "data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 lib:fixed lib:inset-0 lib:z-50 lib:bg-black/50",
        t
      ),
      ...l
    }
  );
}
function h({
  className: t,
  children: l,
  side: o = "right",
  ...n
}) {
  return /* @__PURE__ */ e.createElement(r, null, /* @__PURE__ */ e.createElement(b, null), /* @__PURE__ */ e.createElement(
    i.Content,
    {
      "data-slot": "sheet-content",
      className: a(
        "lib:bg-background data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out lib:fixed lib:z-50 lib:flex lib:flex-col lib:gap-4 lib:shadow-lg lib:transition lib:ease-in-out data-[state=closed]:lib:duration-300 data-[state=open]:lib:duration-500",
        o === "right" && "data-[state=closed]:lib:slide-out-to-right data-[state=open]:lib:slide-in-from-right lib:inset-y-0 lib:right-0 lib:h-full lib:w-3/4 lib:border-l sm:lib:max-w-sm",
        o === "left" && "data-[state=closed]:lib:slide-out-to-left data-[state=open]:lib:slide-in-from-left lib:inset-y-0 lib:left-0 lib:h-full lib:w-3/4 lib:border-r sm:lib:max-w-sm",
        o === "top" && "data-[state=closed]:lib:slide-out-to-top data-[state=open]:lib:slide-in-from-top lib:inset-x-0 lib:top-0 lib:h-auto lib:border-b",
        o === "bottom" && "data-[state=closed]:lib:slide-out-to-bottom data-[state=open]:lib:slide-in-from-bottom lib:inset-x-0 lib:bottom-0 lib:h-auto lib:border-t",
        t
      ),
      ...n
    },
    l,
    /* @__PURE__ */ e.createElement(i.Close, { className: "lib:ring-offset-background focus:lib:ring-ring data-[state=open]:lib:bg-secondary lib:absolute lib:top-4 lib:right-4 lib:rounded-xs lib:opacity-70 lib:transition-opacity hover:lib:opacity-100 focus:lib:ring-2 focus:lib:ring-offset-2 focus:lib:outline-hidden disabled:lib:pointer-events-none" }, /* @__PURE__ */ e.createElement(s, { className: "lib:size-4" }), /* @__PURE__ */ e.createElement("span", { className: "lib:sr-only" }, "Close"))
  ));
}
function p({ className: t, ...l }) {
  return /* @__PURE__ */ e.createElement("div", { "data-slot": "sheet-header", className: a("lib:flex lib:flex-col lib:gap-1.5 lib:p-4", t), ...l });
}
function g({ className: t, ...l }) {
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-slot": "sheet-footer",
      className: a("lib:mt-auto lib:flex lib:flex-col lib:gap-2 lib:p-4", t),
      ...l
    }
  );
}
function x({ className: t, ...l }) {
  return /* @__PURE__ */ e.createElement(
    i.Title,
    {
      "data-slot": "sheet-title",
      className: a("lib:text-foreground lib:font-semibold", t),
      ...l
    }
  );
}
function E({ className: t, ...l }) {
  return /* @__PURE__ */ e.createElement(
    i.Description,
    {
      "data-slot": "sheet-description",
      className: a("lib:text-muted-foreground lib:text-sm", t),
      ...l
    }
  );
}
export {
  m as Sheet,
  f as SheetClose,
  h as SheetContent,
  E as SheetDescription,
  g as SheetFooter,
  p as SheetHeader,
  x as SheetTitle,
  u as SheetTrigger
};
