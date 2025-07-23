import { j as t } from "./index.es70.js";
import * as n from "@radix-ui/react-menubar";
import { CheckIcon as i, CircleIcon as u, ChevronRightIcon as c } from "lucide-react";
import { cn as o } from "./index.es71.js";
function p({ className: e, ...a }) {
  return /* @__PURE__ */ t.jsx(
    n.Root,
    {
      "data-slot": "menubar",
      className: o("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs", e),
      ...a
    }
  );
}
function x({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Menu, { "data-slot": "menubar-menu", ...e });
}
function g({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Group, { "data-slot": "menubar-group", ...e });
}
function l({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Portal, { "data-slot": "menubar-portal", ...e });
}
function v({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function h({ className: e, ...a }) {
  return /* @__PURE__ */ t.jsx(
    n.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...a
    }
  );
}
function j({
  className: e,
  align: a = "start",
  alignOffset: r = -4,
  sideOffset: s = 8,
  ...d
}) {
  return /* @__PURE__ */ t.jsx(l, { children: /* @__PURE__ */ t.jsx(
    n.Content,
    {
      "data-slot": "menubar-content",
      align: a,
      alignOffset: r,
      sideOffset: s,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...d
    }
  ) });
}
function M({
  className: e,
  inset: a,
  variant: r = "default",
  ...s
}) {
  return /* @__PURE__ */ t.jsx(
    n.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": a,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...s
    }
  );
}
function z({
  className: e,
  children: a,
  checked: r,
  ...s
}) {
  return /* @__PURE__ */ t.jsxs(
    n.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...s,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t.jsx(n.ItemIndicator, { children: /* @__PURE__ */ t.jsx(i, { className: "size-4" }) }) }),
        a
      ]
    }
  );
}
function N({ className: e, children: a, ...r }) {
  return /* @__PURE__ */ t.jsxs(
    n.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t.jsx(n.ItemIndicator, { children: /* @__PURE__ */ t.jsx(u, { className: "size-2 fill-current" }) }) }),
        a
      ]
    }
  );
}
function I({
  className: e,
  inset: a,
  ...r
}) {
  return /* @__PURE__ */ t.jsx(
    n.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": a,
      className: o("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function y({ className: e, ...a }) {
  return /* @__PURE__ */ t.jsx(
    n.Separator,
    {
      "data-slot": "menubar-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...a
    }
  );
}
function k({ className: e, ...a }) {
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...a
    }
  );
}
function _({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Sub, { "data-slot": "menubar-sub", ...e });
}
function w({
  className: e,
  inset: a,
  children: r,
  ...s
}) {
  return /* @__PURE__ */ t.jsxs(
    n.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": a,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...s,
      children: [
        r,
        /* @__PURE__ */ t.jsx(c, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function C({ className: e, ...a }) {
  return /* @__PURE__ */ t.jsx(
    n.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...a
    }
  );
}
export {
  p as Menubar,
  z as MenubarCheckboxItem,
  j as MenubarContent,
  g as MenubarGroup,
  M as MenubarItem,
  I as MenubarLabel,
  x as MenubarMenu,
  l as MenubarPortal,
  v as MenubarRadioGroup,
  N as MenubarRadioItem,
  y as MenubarSeparator,
  k as MenubarShortcut,
  _ as MenubarSub,
  C as MenubarSubContent,
  w as MenubarSubTrigger,
  h as MenubarTrigger
};
