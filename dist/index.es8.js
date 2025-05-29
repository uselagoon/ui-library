import * as a from "react";
import * as l from "@radix-ui/react-alert-dialog";
import { cn as o } from "./index.es54.js";
import { buttonVariants as r } from "./index.es14.js";
function c({ ...t }) {
  return /* @__PURE__ */ a.createElement(l.Root, { "data-slot": "alert-dialog", ...t });
}
function m({ ...t }) {
  return /* @__PURE__ */ a.createElement(l.Trigger, { "data-slot": "alert-dialog-trigger", ...t });
}
function n({ ...t }) {
  return /* @__PURE__ */ a.createElement(l.Portal, { "data-slot": "alert-dialog-portal", ...t });
}
function i({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    l.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...e
    }
  );
}
function g({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(n, null, /* @__PURE__ */ a.createElement(i, null), /* @__PURE__ */ a.createElement(
    l.Content,
    {
      "data-slot": "alert-dialog-content",
      className: o(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        t
      ),
      ...e
    }
  ));
}
function u({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", t),
      ...e
    }
  );
}
function f({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: o("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t),
      ...e
    }
  );
}
function p({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    l.Title,
    {
      "data-slot": "alert-dialog-title",
      className: o("text-lg font-semibold", t),
      ...e
    }
  );
}
function x({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.createElement(
    l.Description,
    {
      "data-slot": "alert-dialog-description",
      className: o("text-muted-foreground text-sm", t),
      ...e
    }
  );
}
function A({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(l.Action, { className: o(r(), t), ...e });
}
function D({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(l.Cancel, { className: o(r({ variant: "outline" }), t), ...e });
}
export {
  c as AlertDialog,
  A as AlertDialogAction,
  D as AlertDialogCancel,
  g as AlertDialogContent,
  x as AlertDialogDescription,
  f as AlertDialogFooter,
  u as AlertDialogHeader,
  i as AlertDialogOverlay,
  n as AlertDialogPortal,
  p as AlertDialogTitle,
  m as AlertDialogTrigger
};
//# sourceMappingURL=index.es8.js.map
