import * as t from "react";
import * as a from "@radix-ui/react-context-menu";
import { CheckIcon as i, CircleIcon as d, ChevronRightIcon as c } from "lucide-react";
import { cn as r } from "./index.es54.js";
function m({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Root, { "data-slot": "context-menu", ...e });
}
function f({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function x({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Group, { "data-slot": "context-menu-group", ...e });
}
function p({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Portal, { "data-slot": "context-menu-portal", ...e });
}
function g({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Sub, { "data-slot": "context-menu-sub", ...e });
}
function v({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function b({
  className: e,
  inset: n,
  children: o,
  ...s
}) {
  return /* @__PURE__ */ t.createElement(
    a.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": n,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...s
    },
    o,
    /* @__PURE__ */ t.createElement(c, { className: "ml-auto" })
  );
}
function h({ className: e, ...n }) {
  return /* @__PURE__ */ t.createElement(
    a.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...n
    }
  );
}
function C({ className: e, ...n }) {
  return /* @__PURE__ */ t.createElement(a.Portal, null, /* @__PURE__ */ t.createElement(
    a.Content,
    {
      "data-slot": "context-menu-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ));
}
function E({
  className: e,
  inset: n,
  variant: o = "default",
  ...s
}) {
  return /* @__PURE__ */ t.createElement(
    a.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": n,
      "data-variant": o,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...s
    }
  );
}
function z({
  className: e,
  children: n,
  checked: o,
  ...s
}) {
  return /* @__PURE__ */ t.createElement(
    a.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: o,
      ...s
    },
    /* @__PURE__ */ t.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ t.createElement(a.ItemIndicator, null, /* @__PURE__ */ t.createElement(i, { className: "size-4" }))),
    n
  );
}
function M({
  className: e,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ t.createElement(
    a.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    },
    /* @__PURE__ */ t.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ t.createElement(a.ItemIndicator, null, /* @__PURE__ */ t.createElement(d, { className: "size-2 fill-current" }))),
    n
  );
}
function N({
  className: e,
  inset: n,
  ...o
}) {
  return /* @__PURE__ */ t.createElement(
    a.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": n,
      className: r("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...o
    }
  );
}
function I({ className: e, ...n }) {
  return /* @__PURE__ */ t.createElement(
    a.Separator,
    {
      "data-slot": "context-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function _({ className: e, ...n }) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: r("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...n
    }
  );
}
export {
  m as ContextMenu,
  z as ContextMenuCheckboxItem,
  C as ContextMenuContent,
  x as ContextMenuGroup,
  E as ContextMenuItem,
  N as ContextMenuLabel,
  p as ContextMenuPortal,
  v as ContextMenuRadioGroup,
  M as ContextMenuRadioItem,
  I as ContextMenuSeparator,
  _ as ContextMenuShortcut,
  g as ContextMenuSub,
  h as ContextMenuSubContent,
  b as ContextMenuSubTrigger,
  f as ContextMenuTrigger
};
//# sourceMappingURL=index.es22.js.map
