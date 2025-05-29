import * as e from "react";
import { Drawer as r } from "vaul";
import { cn as d } from "./index.es54.js";
function u({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(r.Root, { "data-slot": "drawer", ...t });
}
function m({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(r.Trigger, { "data-slot": "drawer-trigger", ...t });
}
function n({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(r.Portal, { "data-slot": "drawer-portal", ...t });
}
function w({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(r.Close, { "data-slot": "drawer-close", ...t });
}
function i({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e.createElement(
    r.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: d(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...a
    }
  );
}
function s({
  className: t,
  children: a,
  ...o
}) {
  return /* @__PURE__ */ e.createElement(n, { "data-slot": "drawer-portal" }, /* @__PURE__ */ e.createElement(i, null), /* @__PURE__ */ e.createElement(
    r.Content,
    {
      "data-slot": "drawer-content",
      className: d(
        "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
        "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
        "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
        "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
        "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
        t
      ),
      ...o
    },
    /* @__PURE__ */ e.createElement("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
    a
  ));
}
function f({ className: t, ...a }) {
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-slot": "drawer-header",
      className: d("flex flex-col gap-1.5 p-4", t),
      ...a
    }
  );
}
function v({ className: t, ...a }) {
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-slot": "drawer-footer",
      className: d("mt-auto flex flex-col gap-2 p-4", t),
      ...a
    }
  );
}
function p({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e.createElement(
    r.Title,
    {
      "data-slot": "drawer-title",
      className: d("text-foreground font-semibold", t),
      ...a
    }
  );
}
function g({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e.createElement(
    r.Description,
    {
      "data-slot": "drawer-description",
      className: d("text-muted-foreground text-sm", t),
      ...a
    }
  );
}
export {
  u as Drawer,
  w as DrawerClose,
  s as DrawerContent,
  g as DrawerDescription,
  v as DrawerFooter,
  f as DrawerHeader,
  i as DrawerOverlay,
  n as DrawerPortal,
  p as DrawerTitle,
  m as DrawerTrigger
};
