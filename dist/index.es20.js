import { j as t } from "./index.es70.js";
import { Command as n } from "cmdk";
import { SearchIcon as c } from "lucide-react";
import { cn as a } from "./index.es71.js";
import { Dialog as i, DialogHeader as u, DialogTitle as l, DialogDescription as p, DialogContent as x } from "./index.es22.js";
function g({ className: e, ...o }) {
  return /* @__PURE__ */ t.jsx(
    n,
    {
      "data-slot": "command",
      className: a(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...o
    }
  );
}
function j({
  title: e = "Command Palette",
  description: o = "Search for a command to run...",
  children: r,
  className: d,
  showCloseButton: m = !0,
  ...s
}) {
  return /* @__PURE__ */ t.jsxs(i, { ...s, children: [
    /* @__PURE__ */ t.jsxs(u, { className: "sr-only", children: [
      /* @__PURE__ */ t.jsx(l, { children: e }),
      /* @__PURE__ */ t.jsx(p, { children: o })
    ] }),
    /* @__PURE__ */ t.jsx(x, { className: a("overflow-hidden p-0", d), showCloseButton: m, children: /* @__PURE__ */ t.jsx(g, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r }) })
  ] });
}
function w({ className: e, ...o }) {
  return /* @__PURE__ */ t.jsxs("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [
    /* @__PURE__ */ t.jsx(c, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ t.jsx(
      n.Input,
      {
        "data-slot": "command-input",
        className: a(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...o
      }
    )
  ] });
}
function y({ className: e, ...o }) {
  return /* @__PURE__ */ t.jsx(
    n.List,
    {
      "data-slot": "command-list",
      className: a("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...o
    }
  );
}
function C({ ...e }) {
  return /* @__PURE__ */ t.jsx(n.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...e });
}
function N({ className: e, ...o }) {
  return /* @__PURE__ */ t.jsx(
    n.Group,
    {
      "data-slot": "command-group",
      className: a(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...o
    }
  );
}
function b({ className: e, ...o }) {
  return /* @__PURE__ */ t.jsx(
    n.Separator,
    {
      "data-slot": "command-separator",
      className: a("bg-border -mx-1 h-px", e),
      ...o
    }
  );
}
function D({ className: e, ...o }) {
  return /* @__PURE__ */ t.jsx(
    n.Item,
    {
      "data-slot": "command-item",
      className: a(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function I({ className: e, ...o }) {
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      "data-slot": "command-shortcut",
      className: a("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...o
    }
  );
}
export {
  g as Command,
  j as CommandDialog,
  C as CommandEmpty,
  N as CommandGroup,
  w as CommandInput,
  D as CommandItem,
  y as CommandList,
  b as CommandSeparator,
  I as CommandShortcut
};
