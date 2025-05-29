import * as t from "react";
import * as a from "@radix-ui/react-menubar";
import { CheckIcon as o, CircleIcon as s, ChevronRightIcon as d } from "lucide-react";
import { cn as n } from "./index.es54.js";
function f({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    a.Root,
    {
      "data-slot": "menubar",
      className: n(
        "lib:bg-background lib:flex lib:h-9 lib:items-center lib:gap-1 lib:rounded-md lib:border lib:p-1 lib:shadow-xs",
        e
      ),
      ...i
    }
  );
}
function p({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Menu, { "data-slot": "menubar-menu", ...e });
}
function g({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Group, { "data-slot": "menubar-group", ...e });
}
function u({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Portal, { "data-slot": "menubar-portal", ...e });
}
function v({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function x({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    a.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: n(
        "focus:lib:bg-accent focus:lib:text-accent-foreground data-[state=open]:lib:bg-accent data-[state=open]:lib:text-accent-foreground lib:flex lib:items-center lib:rounded-sm lib:px-2 lib:py-1 lib:text-sm lib:font-medium lib:outline-hidden lib:select-none",
        e
      ),
      ...i
    }
  );
}
function h({
  className: e,
  align: i = "start",
  alignOffset: l = -4,
  sideOffset: r = 8,
  ...b
}) {
  return /* @__PURE__ */ t.createElement(u, null, /* @__PURE__ */ t.createElement(
    a.Content,
    {
      "data-slot": "menubar-content",
      align: i,
      alignOffset: l,
      sideOffset: r,
      className: n(
        "lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:min-w-[12rem] lib:origin-(--radix-menubar-content-transform-origin) lib:overflow-hidden lib:rounded-md lib:border lib:p-1 lib:shadow-md",
        e
      ),
      ...b
    }
  ));
}
function E({
  className: e,
  inset: i,
  variant: l = "default",
  ...r
}) {
  return /* @__PURE__ */ t.createElement(
    a.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": i,
      "data-variant": l,
      className: n(
        "focus:lib:bg-accent focus:lib:text-accent-foreground data-[variant=destructive]:lib:text-destructive data-[variant=destructive]:focus:lib:bg-destructive/10 dark:data-[variant=destructive]:focus:lib:bg-destructive/20 data-[variant=destructive]:focus:lib:text-destructive data-[variant=destructive]:*:[svg]:lib:!text-destructive [&_svg:not([class*=text-])]:lib:text-muted-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 data-[inset]:lib:pl-8 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      ...r
    }
  );
}
function M({
  className: e,
  children: i,
  checked: l,
  ...r
}) {
  return /* @__PURE__ */ t.createElement(
    a.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: n(
        "focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-xs lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      checked: l,
      ...r
    },
    /* @__PURE__ */ t.createElement("span", { className: "lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center" }, /* @__PURE__ */ t.createElement(a.ItemIndicator, null, /* @__PURE__ */ t.createElement(o, { className: "lib:size-4" }))),
    i
  );
}
function z({ className: e, children: i, ...l }) {
  return /* @__PURE__ */ t.createElement(
    a.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: n(
        "focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-xs lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      ...l
    },
    /* @__PURE__ */ t.createElement("span", { className: "lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center" }, /* @__PURE__ */ t.createElement(a.ItemIndicator, null, /* @__PURE__ */ t.createElement(s, { className: "lib:size-2 lib:fill-current" }))),
    i
  );
}
function N({
  className: e,
  inset: i,
  ...l
}) {
  return /* @__PURE__ */ t.createElement(
    a.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": i,
      className: n("lib:px-2 lib:py-1.5 lib:text-sm lib:font-medium data-[inset]:lib:pl-8", e),
      ...l
    }
  );
}
function I({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    a.Separator,
    {
      "data-slot": "menubar-separator",
      className: n("lib:bg-border lib:-mx-1 lib:my-1 lib:h-px", e),
      ...i
    }
  );
}
function y({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: n("lib:text-muted-foreground lib:ml-auto lib:text-xs lib:tracking-widest", e),
      ...i
    }
  );
}
function k({ ...e }) {
  return /* @__PURE__ */ t.createElement(a.Sub, { "data-slot": "menubar-sub", ...e });
}
function _({
  className: e,
  inset: i,
  children: l,
  ...r
}) {
  return /* @__PURE__ */ t.createElement(
    a.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": i,
      className: n(
        "focus:lib:bg-accent focus:lib:text-accent-foreground data-[state=open]:lib:bg-accent data-[state=open]:lib:text-accent-foreground lib:flex lib:cursor-default lib:items-center lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-none lib:select-none data-[inset]:lib:pl-8",
        e
      ),
      ...r
    },
    l,
    /* @__PURE__ */ t.createElement(d, { className: "lib:ml-auto lib:h-4 lib:w-4" })
  );
}
function w({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    a.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: n(
        "lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:min-w-[8rem] lib:origin-(--radix-menubar-content-transform-origin) lib:overflow-hidden lib:rounded-md lib:border lib:p-1 lib:shadow-lg",
        e
      ),
      ...i
    }
  );
}
export {
  f as Menubar,
  M as MenubarCheckboxItem,
  h as MenubarContent,
  g as MenubarGroup,
  E as MenubarItem,
  N as MenubarLabel,
  p as MenubarMenu,
  u as MenubarPortal,
  v as MenubarRadioGroup,
  z as MenubarRadioItem,
  I as MenubarSeparator,
  y as MenubarShortcut,
  k as MenubarSub,
  w as MenubarSubContent,
  _ as MenubarSubTrigger,
  x as MenubarTrigger
};
