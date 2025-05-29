import * as l from "react";
import * as a from "@radix-ui/react-alert-dialog";
import { cn as i } from "./index.es54.js";
import { buttonVariants as o } from "./index.es14.js";
function c({ ...t }) {
  return /* @__PURE__ */ l.createElement(a.Root, { "data-slot": "alert-dialog", ...t });
}
function b({ ...t }) {
  return /* @__PURE__ */ l.createElement(a.Trigger, { "data-slot": "alert-dialog-trigger", ...t });
}
function r({ ...t }) {
  return /* @__PURE__ */ l.createElement(a.Portal, { "data-slot": "alert-dialog-portal", ...t });
}
function n({ className: t, ...e }) {
  return /* @__PURE__ */ l.createElement(
    a.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: i(
        "data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 lib:fixed lib:inset-0 lib:z-50 lib:bg-black/50",
        t
      ),
      ...e
    }
  );
}
function m({ className: t, ...e }) {
  return /* @__PURE__ */ l.createElement(r, null, /* @__PURE__ */ l.createElement(n, null), /* @__PURE__ */ l.createElement(
    a.Content,
    {
      "data-slot": "alert-dialog-content",
      className: i(
        "lib:bg-background data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 lib:fixed lib:top-[50%] lib:left-[50%] lib:z-50 lib:grid lib:w-full lib:max-w-[calc(100%-2rem)] lib:translate-x-[-50%] lib:translate-y-[-50%] lib:gap-4 lib:rounded-lg lib:border lib:p-6 lib:shadow-lg lib:duration-200 sm:lib:max-w-lg",
        t
      ),
      ...e
    }
  ));
}
function g({ className: t, ...e }) {
  return /* @__PURE__ */ l.createElement(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: i("lib:flex lib:flex-col lib:gap-2 lib:text-center sm:lib:text-left", t),
      ...e
    }
  );
}
function u({ className: t, ...e }) {
  return /* @__PURE__ */ l.createElement(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: i("lib:flex lib:flex-col-reverse lib:gap-2 sm:lib:flex-row sm:lib:justify-end", t),
      ...e
    }
  );
}
function f({ className: t, ...e }) {
  return /* @__PURE__ */ l.createElement(
    a.Title,
    {
      "data-slot": "alert-dialog-title",
      className: i("lib:text-lg lib:font-semibold", t),
      ...e
    }
  );
}
function p({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ l.createElement(
    a.Description,
    {
      "data-slot": "alert-dialog-description",
      className: i("lib:text-muted-foreground lib:text-sm", t),
      ...e
    }
  );
}
function x({ className: t, ...e }) {
  return /* @__PURE__ */ l.createElement(a.Action, { className: i(o(), t), ...e });
}
function A({ className: t, ...e }) {
  return /* @__PURE__ */ l.createElement(a.Cancel, { className: i(o({ variant: "outline" }), t), ...e });
}
export {
  c as AlertDialog,
  x as AlertDialogAction,
  A as AlertDialogCancel,
  m as AlertDialogContent,
  p as AlertDialogDescription,
  u as AlertDialogFooter,
  g as AlertDialogHeader,
  n as AlertDialogOverlay,
  r as AlertDialogPortal,
  f as AlertDialogTitle,
  b as AlertDialogTrigger
};
