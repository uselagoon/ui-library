import * as t from "react";
import { Command as o } from "cmdk";
import { SearchIcon as d } from "lucide-react";
import { cn as n } from "./index.es54.js";
import { Dialog as c, DialogHeader as l, DialogTitle as s, DialogDescription as u, DialogContent as i } from "./index.es23.js";
function p({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o,
    {
      "data-slot": "command",
      className: n(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...a
    }
  );
}
function _({
  title: e = "Command Palette",
  description: a = "Search for a command to run...",
  children: m,
  ...r
}) {
  return /* @__PURE__ */ t.createElement(c, { ...r }, /* @__PURE__ */ t.createElement(l, { className: "sr-only" }, /* @__PURE__ */ t.createElement(s, null, e), /* @__PURE__ */ t.createElement(u, null, a)), /* @__PURE__ */ t.createElement(i, { className: "overflow-hidden p-0" }, /* @__PURE__ */ t.createElement(p, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, m)));
}
function k({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3"
    },
    /* @__PURE__ */ t.createElement(d, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ t.createElement(
      o.Input,
      {
        "data-slot": "command-input",
        className: n(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...a
      }
    )
  );
}
function v({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o.List,
    {
      "data-slot": "command-list",
      className: n(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...a
    }
  );
}
function E({
  ...e
}) {
  return /* @__PURE__ */ t.createElement(
    o.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function w({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o.Group,
    {
      "data-slot": "command-group",
      className: n(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...a
    }
  );
}
function y({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o.Separator,
    {
      "data-slot": "command-separator",
      className: n("bg-border -mx-1 h-px", e),
      ...a
    }
  );
}
function C({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    o.Item,
    {
      "data-slot": "command-item",
      className: n(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...a
    }
  );
}
function N({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "command-shortcut",
      className: n(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...a
    }
  );
}
export {
  p as Command,
  _ as CommandDialog,
  E as CommandEmpty,
  w as CommandGroup,
  k as CommandInput,
  C as CommandItem,
  v as CommandList,
  y as CommandSeparator,
  N as CommandShortcut
};
