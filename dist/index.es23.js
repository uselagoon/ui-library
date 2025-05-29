import * as t from "react";
import * as o from "@radix-ui/react-dialog";
import { XIcon as r } from "lucide-react";
import { cn as n } from "./index.es54.js";
function g({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(o.Root, { "data-slot": "dialog", ...e });
}
function m({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(o.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function i({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(o.Portal, { "data-slot": "dialog-portal", ...e });
}
function u({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(o.Close, { "data-slot": "dialog-close", ...e });
}
function s({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...a
    }
  );
}
function f({
  className: e,
  children: a,
  ...l
}) {
  return /* @__PURE__ */ t.createElement(i, { "data-slot": "dialog-portal" }, /* @__PURE__ */ t.createElement(s, null), /* @__PURE__ */ t.createElement(
    o.Content,
    {
      "data-slot": "dialog-content",
      className: n(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        e
      ),
      ...l
    },
    a,
    /* @__PURE__ */ t.createElement(o.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" }, /* @__PURE__ */ t.createElement(r, null), /* @__PURE__ */ t.createElement("span", { className: "sr-only" }, "Close"))
  ));
}
function p({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      "data-slot": "dialog-header",
      className: n("flex flex-col gap-2 text-center sm:text-left", e),
      ...a
    }
  );
}
function x({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      "data-slot": "dialog-footer",
      className: n(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...a
    }
  );
}
function E({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o.Title,
    {
      "data-slot": "dialog-title",
      className: n("text-lg leading-none font-semibold", e),
      ...a
    }
  );
}
function v({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o.Description,
    {
      "data-slot": "dialog-description",
      className: n("text-muted-foreground text-sm", e),
      ...a
    }
  );
}
export {
  g as Dialog,
  u as DialogClose,
  f as DialogContent,
  v as DialogDescription,
  x as DialogFooter,
  p as DialogHeader,
  s as DialogOverlay,
  i as DialogPortal,
  E as DialogTitle,
  m as DialogTrigger
};
