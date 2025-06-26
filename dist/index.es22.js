import { j as a } from "./index.es64.js";
import * as o from "@radix-ui/react-dialog";
import { XIcon as l } from "lucide-react";
import { cn as s } from "./index.es65.js";
function f({ ...t }) {
  return /* @__PURE__ */ a.jsx(o.Root, { "data-slot": "dialog", ...t });
}
function m({ ...t }) {
  return /* @__PURE__ */ a.jsx(o.Trigger, { "data-slot": "dialog-trigger", ...t });
}
function r({ ...t }) {
  return /* @__PURE__ */ a.jsx(o.Portal, { "data-slot": "dialog-portal", ...t });
}
function x({ ...t }) {
  return /* @__PURE__ */ a.jsx(o.Close, { "data-slot": "dialog-close", ...t });
}
function d({ className: t, ...e }) {
  return /* @__PURE__ */ a.jsx(
    o.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: s(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...e
    }
  );
}
function p({
  className: t,
  children: e,
  showCloseButton: n = !0,
  ...i
}) {
  return /* @__PURE__ */ a.jsxs(r, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a.jsx(d, {}),
    /* @__PURE__ */ a.jsxs(
      o.Content,
      {
        "data-slot": "dialog-content",
        className: s(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          t
        ),
        ...i,
        children: [
          e,
          n && /* @__PURE__ */ a.jsxs(
            o.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a.jsx(l, {}),
                /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function j({ className: t, ...e }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: s("flex flex-col gap-2 text-center sm:text-left", t),
      ...e
    }
  );
}
function v({ className: t, ...e }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t),
      ...e
    }
  );
}
function D({ className: t, ...e }) {
  return /* @__PURE__ */ a.jsx(
    o.Title,
    {
      "data-slot": "dialog-title",
      className: s("text-lg leading-none font-semibold", t),
      ...e
    }
  );
}
function b({ className: t, ...e }) {
  return /* @__PURE__ */ a.jsx(
    o.Description,
    {
      "data-slot": "dialog-description",
      className: s("text-muted-foreground text-sm", t),
      ...e
    }
  );
}
export {
  f as Dialog,
  x as DialogClose,
  p as DialogContent,
  b as DialogDescription,
  v as DialogFooter,
  j as DialogHeader,
  d as DialogOverlay,
  r as DialogPortal,
  D as DialogTitle,
  m as DialogTrigger
};
