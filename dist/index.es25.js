import * as t from "react";
import * as n from "@radix-ui/react-dropdown-menu";
import { CheckIcon as r, CircleIcon as d, ChevronRightIcon as s } from "lucide-react";
import { cn as l } from "./index.es54.js";
function c({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Root, { "data-slot": "dropdown-menu", ...e });
}
function m({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function p({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function f({
  className: e,
  sideOffset: i = 4,
  ...o
}) {
  return /* @__PURE__ */ t.createElement(n.Portal, null, /* @__PURE__ */ t.createElement(
    n.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: i,
      className: l(
        "lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:max-h-(--radix-dropdown-menu-content-available-height) lib:min-w-[8rem] lib:origin-(--radix-dropdown-menu-content-transform-origin) lib:overflow-x-hidden lib:overflow-y-auto lib:rounded-md lib:border lib:p-1 lib:shadow-md",
        e
      ),
      ...o
    }
  ));
}
function g({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function v({
  className: e,
  inset: i,
  variant: o = "default",
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    n.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": i,
      "data-variant": o,
      className: l(
        "focus:lib:bg-accent focus:lib:text-accent-foreground data-[variant=destructive]:lib:text-destructive data-[variant=destructive]:focus:lib:bg-destructive/10 dark:data-[variant=destructive]:focus:lib:bg-destructive/20 data-[variant=destructive]:focus:lib:text-destructive data-[variant=destructive]:*:[svg]:lib:!text-destructive [&_svg:not([class*=text-])]:lib:text-muted-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 data-[inset]:lib:pl-8 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      ...a
    }
  );
}
function w({
  className: e,
  children: i,
  checked: o,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    n.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: l(
        "focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      checked: o,
      ...a
    },
    /* @__PURE__ */ t.createElement("span", { className: "lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center" }, /* @__PURE__ */ t.createElement(n.ItemIndicator, null, /* @__PURE__ */ t.createElement(r, { className: "lib:size-4" }))),
    i
  );
}
function x({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function h({
  className: e,
  children: i,
  ...o
}) {
  return /* @__PURE__ */ t.createElement(
    n.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: l(
        "focus:lib:bg-accent focus:lib:text-accent-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:py-1.5 lib:pr-2 lib:pl-8 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      ...o
    },
    /* @__PURE__ */ t.createElement("span", { className: "lib:pointer-events-none lib:absolute lib:left-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center" }, /* @__PURE__ */ t.createElement(n.ItemIndicator, null, /* @__PURE__ */ t.createElement(d, { className: "lib:size-2 lib:fill-current" }))),
    i
  );
}
function E({
  className: e,
  inset: i,
  ...o
}) {
  return /* @__PURE__ */ t.createElement(
    n.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": i,
      className: l("lib:px-2 lib:py-1.5 lib:text-sm lib:font-medium data-[inset]:lib:pl-8", e),
      ...o
    }
  );
}
function z({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    n.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: l("lib:bg-border lib:-mx-1 lib:my-1 lib:h-px", e),
      ...i
    }
  );
}
function D({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: l("lib:text-muted-foreground lib:ml-auto lib:text-xs lib:tracking-widest", e),
      ...i
    }
  );
}
function M({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function N({
  className: e,
  inset: i,
  children: o,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    n.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": i,
      className: l(
        "focus:lib:bg-accent focus:lib:text-accent-foreground data-[state=open]:lib:bg-accent data-[state=open]:lib:text-accent-foreground lib:flex lib:cursor-default lib:items-center lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-hidden lib:select-none data-[inset]:lib:pl-8",
        e
      ),
      ...a
    },
    o,
    /* @__PURE__ */ t.createElement(s, { className: "lib:ml-auto lib:size-4" })
  );
}
function I({
  className: e,
  ...i
}) {
  return /* @__PURE__ */ t.createElement(
    n.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: l(
        "lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:min-w-[8rem] lib:origin-(--radix-dropdown-menu-content-transform-origin) lib:overflow-hidden lib:rounded-md lib:border lib:p-1 lib:shadow-lg",
        e
      ),
      ...i
    }
  );
}
export {
  c as DropdownMenu,
  w as DropdownMenuCheckboxItem,
  f as DropdownMenuContent,
  g as DropdownMenuGroup,
  v as DropdownMenuItem,
  E as DropdownMenuLabel,
  m as DropdownMenuPortal,
  x as DropdownMenuRadioGroup,
  h as DropdownMenuRadioItem,
  z as DropdownMenuSeparator,
  D as DropdownMenuShortcut,
  M as DropdownMenuSub,
  I as DropdownMenuSubContent,
  N as DropdownMenuSubTrigger,
  p as DropdownMenuTrigger
};
