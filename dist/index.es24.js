import { j as t } from "./index.es64.js";
import * as n from "@radix-ui/react-dropdown-menu";
import { CheckIcon as s, CircleIcon as i, ChevronRightIcon as u } from "lucide-react";
import { cn as r } from "./index.es65.js";
function p({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Root, { "data-slot": "dropdown-menu", ...e });
}
function f({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function x({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function g({
  className: e,
  sideOffset: o = 4,
  ...a
}) {
  return /* @__PURE__ */ t.jsx(n.Portal, { children: /* @__PURE__ */ t.jsx(
    n.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: o,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...a
    }
  ) });
}
function v({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function w({
  className: e,
  inset: o,
  variant: a = "default",
  ...d
}) {
  return /* @__PURE__ */ t.jsx(
    n.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": o,
      "data-variant": a,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...d
    }
  );
}
function b({
  className: e,
  children: o,
  checked: a,
  ...d
}) {
  return /* @__PURE__ */ t.jsxs(
    n.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: a,
      ...d,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t.jsx(n.ItemIndicator, { children: /* @__PURE__ */ t.jsx(s, { className: "size-4" }) }) }),
        o
      ]
    }
  );
}
function h({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function j({
  className: e,
  children: o,
  ...a
}) {
  return /* @__PURE__ */ t.jsxs(
    n.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t.jsx(n.ItemIndicator, { children: /* @__PURE__ */ t.jsx(i, { className: "size-2 fill-current" }) }) }),
        o
      ]
    }
  );
}
function z({
  className: e,
  inset: o,
  ...a
}) {
  return /* @__PURE__ */ t.jsx(
    n.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": o,
      className: r("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...a
    }
  );
}
function D({ className: e, ...o }) {
  return /* @__PURE__ */ t.jsx(
    n.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...o
    }
  );
}
function M({ className: e, ...o }) {
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: r("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...o
    }
  );
}
function N({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function I({
  className: e,
  inset: o,
  children: a,
  ...d
}) {
  return /* @__PURE__ */ t.jsxs(
    n.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": o,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...d,
      children: [
        a,
        /* @__PURE__ */ t.jsx(u, { className: "ml-auto size-4" })
      ]
    }
  );
}
function y({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t.jsx(
    n.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...o
    }
  );
}
export {
  p as DropdownMenu,
  b as DropdownMenuCheckboxItem,
  g as DropdownMenuContent,
  v as DropdownMenuGroup,
  w as DropdownMenuItem,
  z as DropdownMenuLabel,
  f as DropdownMenuPortal,
  h as DropdownMenuRadioGroup,
  j as DropdownMenuRadioItem,
  D as DropdownMenuSeparator,
  M as DropdownMenuShortcut,
  N as DropdownMenuSub,
  y as DropdownMenuSubContent,
  I as DropdownMenuSubTrigger,
  x as DropdownMenuTrigger
};
