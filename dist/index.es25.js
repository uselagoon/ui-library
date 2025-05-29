import * as t from "react";
import * as o from "@radix-ui/react-dropdown-menu";
import { CheckIcon as s, CircleIcon as i, ChevronRightIcon as u } from "lucide-react";
import { cn as r } from "./index.es54.js";
function m({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(o.Root, { "data-slot": "dropdown-menu", ...e });
}
function p({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(o.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function f({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(
    o.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function g({
  className: e,
  sideOffset: n = 4,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(o.Portal, null, /* @__PURE__ */ t.createElement(
    o.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: n,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...a
    }
  ));
}
function v({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(o.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function w({
  className: e,
  inset: n,
  variant: a = "default",
  ...d
}) {
  return /* @__PURE__ */ t.createElement(
    o.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": n,
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
  children: n,
  checked: a,
  ...d
}) {
  return /* @__PURE__ */ t.createElement(
    o.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: a,
      ...d
    },
    /* @__PURE__ */ t.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ t.createElement(o.ItemIndicator, null, /* @__PURE__ */ t.createElement(s, { className: "size-4" }))),
    n
  );
}
function x({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(
    o.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function h({
  className: e,
  children: n,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...a
    },
    /* @__PURE__ */ t.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ t.createElement(o.ItemIndicator, null, /* @__PURE__ */ t.createElement(i, { className: "size-2 fill-current" }))),
    n
  );
}
function E({
  className: e,
  inset: n,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": n,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...a
    }
  );
}
function z({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t.createElement(
    o.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function D({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...n
    }
  );
}
function M({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(o.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function N({
  className: e,
  inset: n,
  children: a,
  ...d
}) {
  return /* @__PURE__ */ t.createElement(
    o.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": n,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...d
    },
    a,
    /* @__PURE__ */ t.createElement(u, { className: "ml-auto size-4" })
  );
}
function I({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t.createElement(
    o.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...n
    }
  );
}
export {
  m as DropdownMenu,
  b as DropdownMenuCheckboxItem,
  g as DropdownMenuContent,
  v as DropdownMenuGroup,
  w as DropdownMenuItem,
  E as DropdownMenuLabel,
  p as DropdownMenuPortal,
  x as DropdownMenuRadioGroup,
  h as DropdownMenuRadioItem,
  z as DropdownMenuSeparator,
  D as DropdownMenuShortcut,
  M as DropdownMenuSub,
  I as DropdownMenuSubContent,
  N as DropdownMenuSubTrigger,
  f as DropdownMenuTrigger
};
