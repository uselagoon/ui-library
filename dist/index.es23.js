import * as t from "react";
import * as a from "@radix-ui/react-dialog";
import { XIcon as n } from "lucide-react";
import { cn as i } from "./index.es54.js";
function c({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Root, { "data-slot": "dialog", ...e });
}
function g({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function r({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Portal, { "data-slot": "dialog-portal", ...e });
}
function m({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Close, { "data-slot": "dialog-close", ...e });
}
function s({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    a.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: i(
        "data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 lib:fixed lib:inset-0 lib:z-50 lib:bg-black/50",
        e
      ),
      ...l
    }
  );
}
function u({ className: e, children: l, ...o }) {
  return /* @__PURE__ */ t.createElement(r, { "data-slot": "dialog-portal" }, /* @__PURE__ */ t.createElement(s, null), /* @__PURE__ */ t.createElement(
    a.Content,
    {
      "data-slot": "dialog-content",
      className: i(
        "lib:bg-background data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 lib:fixed lib:top-[50%] lib:left-[50%] lib:z-50 lib:grid lib:w-full lib:max-w-[calc(100%-2rem)] lib:translate-x-[-50%] lib:translate-y-[-50%] lib:gap-4 lib:rounded-lg lib:border lib:p-6 lib:shadow-lg lib:duration-200 sm:lib:max-w-lg",
        e
      ),
      ...o
    },
    l,
    /* @__PURE__ */ t.createElement(a.Close, { className: "lib:ring-offset-background focus:lib:ring-ring data-[state=open]:lib:bg-accent data-[state=open]:lib:text-muted-foreground lib:absolute lib:top-4 lib:right-4 lib:rounded-xs lib:opacity-70 lib:transition-opacity hover:lib:opacity-100 focus:lib:ring-2 focus:lib:ring-offset-2 focus:lib:outline-hidden disabled:lib:pointer-events-none [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4" }, /* @__PURE__ */ t.createElement(n, null), /* @__PURE__ */ t.createElement("span", { className: "lib:sr-only" }, "Close"))
  ));
}
function f({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      "data-slot": "dialog-header",
      className: i("lib:flex lib:flex-col lib:gap-2 lib:text-center sm:lib:text-left", e),
      ...l
    }
  );
}
function p({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      "data-slot": "dialog-footer",
      className: i("lib:flex lib:flex-col-reverse lib:gap-2 sm:lib:flex-row sm:lib:justify-end", e),
      ...l
    }
  );
}
function x({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    a.Title,
    {
      "data-slot": "dialog-title",
      className: i("lib:text-lg lib:leading-none lib:font-semibold", e),
      ...l
    }
  );
}
function E({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    a.Description,
    {
      "data-slot": "dialog-description",
      className: i("lib:text-muted-foreground lib:text-sm", e),
      ...l
    }
  );
}
export {
  c as Dialog,
  m as DialogClose,
  u as DialogContent,
  E as DialogDescription,
  p as DialogFooter,
  f as DialogHeader,
  s as DialogOverlay,
  r as DialogPortal,
  x as DialogTitle,
  g as DialogTrigger
};
