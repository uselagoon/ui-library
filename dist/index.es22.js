import * as t from "react";
import * as n from "@radix-ui/react-context-menu";
import { CheckIcon as r, CircleIcon as s, ChevronRightIcon as b } from "lucide-react";
import { cn as a } from "./index.es54.js";
function u({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Root, { "data-slot": "context-menu", ...e });
}
function m({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function f({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Group, { "data-slot": "context-menu-group", ...e });
}
function x({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Portal, { "data-slot": "context-menu-portal", ...e });
}
function p({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Sub, { "data-slot": "context-menu-sub", ...e });
}
function g({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function v({
  className: e,
  inset: i,
  children: l,
  ...o
}) {
  return /* @__PURE__ */ t.createElement(
    n.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": i,
      className: a(
        "focus:lib:bg-accent focus:lib:text-accent-foreground data-[state=open]:lib:bg-accent data-[state=open]:lib:text-accent-foreground lib:flex lib:cursor-default lib:items-center lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-hidden lib:select-none data-[inset]:lib:pl-8 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      ...o
    },
    l,
    /* @__PURE__ */ t.createElement(b, { className: "lib:ml-auto" })
  );
}
function h({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    n.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: a(
        "lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:min-w-[8rem] lib:origin-(--radix-context-menu-content-transform-origin) lib:overflow-hidden lib:rounded-md lib:border lib:p-1 lib:shadow-lg",
        e
      ),
      ...i
    }
  );
}
function C({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(n.Portal, null, /* @__PURE__ */ t.createElement(
    n.Content,
    {
      "data-slot": "context-menu-content",
      className: a(
        "lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:max-h-(--radix-context-menu-content-available-height) lib:min-w-[8rem] lib:origin-(--radix-context-menu-content-transform-origin) lib:overflow-x-hidden lib:overflow-y-auto lib:rounded-md lib:border lib:p-1 lib:shadow-md",
        e
      ),
      ...i
    }
  ));
}
function E({
  className: e,
  inset: i,
  variant: l = "default",
  ...o
}) {
  return /* @__PURE__ */ t.createElement(
    n.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": i,
      "data-variant": l,
      className: a(
        "focus:lib:bg-accent focus:lib:text-accent-foreground data-[variant=destructive]:lib:text-destructive data-[variant=destructive]:focus:lib:bg-destructive/10 dark:data-[variant=destructive]:focus:lib:bg-destructive/20 data-[variant=destructive]:focus:lib:text-destructive data-[variant=destructive]:*:[svg]:lib:!text-destructive [&_svg:not([class*=text-])]:lib:text-muted-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 data-[inset]:lib:pl-8 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      ...o
    }
  );
}
function z({
  className: e,
  children: i,
  checked: l,
  ...o
}) {
  return /* @__PURE__ */ t.createElement(
    n.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: a(
        "focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      checked: l,
      ...o
    },
    /* @__PURE__ */ t.createElement("span", { className: "lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center" }, /* @__PURE__ */ t.createElement(n.ItemIndicator, null, /* @__PURE__ */ t.createElement(r, { className: "lib:size-4" }))),
    i
  );
}
function M({
  className: e,
  children: i,
  ...l
}) {
  return /* @__PURE__ */ t.createElement(
    n.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: a(
        "focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      ...l
    },
    /* @__PURE__ */ t.createElement("span", { className: "lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center" }, /* @__PURE__ */ t.createElement(n.ItemIndicator, null, /* @__PURE__ */ t.createElement(s, { className: "lib:size-2 lib:fill-current" }))),
    i
  );
}
function N({
  className: e,
  inset: i,
  ...l
}) {
  return /* @__PURE__ */ t.createElement(
    n.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": i,
      className: a(
        "lib:text-foreground lib:px-2 lib:py-1.5 lib:text-sm lib:font-medium data-[inset]:lib:pl-8",
        e
      ),
      ...l
    }
  );
}
function I({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    n.Separator,
    {
      "data-slot": "context-menu-separator",
      className: a("lib:bg-border lib:-mx-1 lib:my-1 lib:h-px", e),
      ...i
    }
  );
}
function _({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: a("lib:text-muted-foreground lib:ml-auto lib:text-xs lib:tracking-widest", e),
      ...i
    }
  );
}
export {
  u as ContextMenu,
  z as ContextMenuCheckboxItem,
  C as ContextMenuContent,
  f as ContextMenuGroup,
  E as ContextMenuItem,
  N as ContextMenuLabel,
  x as ContextMenuPortal,
  g as ContextMenuRadioGroup,
  M as ContextMenuRadioItem,
  I as ContextMenuSeparator,
  _ as ContextMenuShortcut,
  p as ContextMenuSub,
  h as ContextMenuSubContent,
  v as ContextMenuSubTrigger,
  m as ContextMenuTrigger
};
