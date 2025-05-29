import * as e from "react";
import { Drawer as r } from "vaul";
import { cn as i } from "./index.es54.js";
function c({ ...t }) {
  return /* @__PURE__ */ e.createElement(r.Root, { "data-slot": "drawer", ...t });
}
function u({ ...t }) {
  return /* @__PURE__ */ e.createElement(r.Trigger, { "data-slot": "drawer-trigger", ...t });
}
function d({ ...t }) {
  return /* @__PURE__ */ e.createElement(r.Portal, { "data-slot": "drawer-portal", ...t });
}
function m({ ...t }) {
  return /* @__PURE__ */ e.createElement(r.Close, { "data-slot": "drawer-close", ...t });
}
function o({ className: t, ...a }) {
  return /* @__PURE__ */ e.createElement(
    r.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: i(
        "data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 lib:fixed lib:inset-0 lib:z-50 lib:bg-black/50",
        t
      ),
      ...a
    }
  );
}
function w({ className: t, children: a, ...l }) {
  return /* @__PURE__ */ e.createElement(d, { "data-slot": "drawer-portal" }, /* @__PURE__ */ e.createElement(o, null), /* @__PURE__ */ e.createElement(
    r.Content,
    {
      "data-slot": "drawer-content",
      className: i(
        "lib:group/drawer-content lib:bg-background lib:fixed lib:z-50 lib:flex lib:h-auto lib:flex-col",
        "data-[vaul-drawer-direction=top]:lib:inset-x-0 data-[vaul-drawer-direction=top]:lib:top-0 data-[vaul-drawer-direction=top]:lib:mb-24 data-[vaul-drawer-direction=top]:lib:max-h-[80vh] data-[vaul-drawer-direction=top]:lib:rounded-b-lg data-[vaul-drawer-direction=top]:lib:border-b",
        "data-[vaul-drawer-direction=bottom]:lib:inset-x-0 data-[vaul-drawer-direction=bottom]:lib:bottom-0 data-[vaul-drawer-direction=bottom]:lib:mt-24 data-[vaul-drawer-direction=bottom]:lib:max-h-[80vh] data-[vaul-drawer-direction=bottom]:lib:rounded-t-lg data-[vaul-drawer-direction=bottom]:lib:border-t",
        "data-[vaul-drawer-direction=right]:lib:inset-y-0 data-[vaul-drawer-direction=right]:lib:right-0 data-[vaul-drawer-direction=right]:lib:w-3/4 data-[vaul-drawer-direction=right]:lib:border-l data-[vaul-drawer-direction=right]:sm:lib:max-w-sm",
        "data-[vaul-drawer-direction=left]:lib:inset-y-0 data-[vaul-drawer-direction=left]:lib:left-0 data-[vaul-drawer-direction=left]:lib:w-3/4 data-[vaul-drawer-direction=left]:lib:border-r data-[vaul-drawer-direction=left]:sm:lib:max-w-sm",
        t
      ),
      ...l
    },
    /* @__PURE__ */ e.createElement("div", { className: "lib:bg-muted lib:mx-auto lib:mt-4 lib:hidden lib:h-2 lib:w-[100px] lib:shrink-0 lib:rounded-full lib:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
    a
  ));
}
function s({ className: t, ...a }) {
  return /* @__PURE__ */ e.createElement("div", { "data-slot": "drawer-header", className: i("lib:flex lib:flex-col lib:gap-1.5 lib:p-4", t), ...a });
}
function f({ className: t, ...a }) {
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-slot": "drawer-footer",
      className: i("lib:mt-auto lib:flex lib:flex-col lib:gap-2 lib:p-4", t),
      ...a
    }
  );
}
function v({ className: t, ...a }) {
  return /* @__PURE__ */ e.createElement(
    r.Title,
    {
      "data-slot": "drawer-title",
      className: i("lib:text-foreground lib:font-semibold", t),
      ...a
    }
  );
}
function p({ className: t, ...a }) {
  return /* @__PURE__ */ e.createElement(
    r.Description,
    {
      "data-slot": "drawer-description",
      className: i("lib:text-muted-foreground lib:text-sm", t),
      ...a
    }
  );
}
export {
  c as Drawer,
  m as DrawerClose,
  w as DrawerContent,
  p as DrawerDescription,
  f as DrawerFooter,
  s as DrawerHeader,
  o as DrawerOverlay,
  d as DrawerPortal,
  v as DrawerTitle,
  u as DrawerTrigger
};
