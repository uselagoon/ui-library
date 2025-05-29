import * as t from "react";
import { Command as i } from "cmdk";
import { SearchIcon as m } from "lucide-react";
import { cn as a } from "./index.es54.js";
import { Dialog as r, DialogHeader as d, DialogTitle as b, DialogDescription as c, DialogContent as s } from "./index.es23.js";
function u({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    i,
    {
      "data-slot": "command",
      className: a(
        "lib:bg-popover lib:text-popover-foreground lib:flex lib:h-full lib:w-full lib:flex-col lib:overflow-hidden lib:rounded-md",
        e
      ),
      ...l
    }
  );
}
function h({
  title: e = "Command Palette",
  description: l = "Search for a command to run...",
  children: o,
  ...n
}) {
  return /* @__PURE__ */ t.createElement(r, { ...n }, /* @__PURE__ */ t.createElement(d, { className: "lib:sr-only" }, /* @__PURE__ */ t.createElement(b, null, e), /* @__PURE__ */ t.createElement(c, null, l)), /* @__PURE__ */ t.createElement(s, { className: "lib:overflow-hidden lib:p-0" }, /* @__PURE__ */ t.createElement(u, { className: "[&_[cmdk-group-heading]]:lib:text-muted-foreground **:data-[slot=command-input-wrapper]:lib:h-12 [&_[cmdk-group-heading]]:lib:px-2 [&_[cmdk-group-heading]]:lib:font-medium [&_[cmdk-group]]:lib:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:lib:pt-0 [&_[cmdk-input-wrapper]_svg]:lib:h-5 [&_[cmdk-input-wrapper]_svg]:lib:w-5 [&_[cmdk-input]]:lib:h-12 [&_[cmdk-item]]:lib:px-2 [&_[cmdk-item]]:lib:py-3 [&_[cmdk-item]_svg]:lib:h-5 [&_[cmdk-item]_svg]:lib:w-5" }, o)));
}
function _({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "lib:flex lib:h-9 lib:items-center lib:gap-2 lib:border-b lib:px-3"
    },
    /* @__PURE__ */ t.createElement(m, { className: "lib:size-4 lib:shrink-0 lib:opacity-50" }),
    /* @__PURE__ */ t.createElement(
      i.Input,
      {
        "data-slot": "command-input",
        className: a(
          "placeholder:lib:text-muted-foreground lib:flex lib:h-10 lib:w-full lib:rounded-md lib:bg-transparent lib:py-3 lib:text-sm lib:outline-hidden disabled:lib:cursor-not-allowed disabled:lib:opacity-50",
          e
        ),
        ...l
      }
    )
  );
}
function k({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    i.List,
    {
      "data-slot": "command-list",
      className: a("lib:max-h-[300px] lib:scroll-py-1 lib:overflow-x-hidden lib:overflow-y-auto", e),
      ...l
    }
  );
}
function v({ ...e }) {
  return /* @__PURE__ */ t.createElement(i.Empty, { "data-slot": "command-empty", className: "lib:py-6 lib:text-center lib:text-sm", ...e });
}
function E({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    i.Group,
    {
      "data-slot": "command-group",
      className: a(
        "lib:text-foreground [&_[cmdk-group-heading]]:lib:text-muted-foreground lib:overflow-hidden lib:p-1 [&_[cmdk-group-heading]]:lib:px-2 [&_[cmdk-group-heading]]:lib:py-1.5 [&_[cmdk-group-heading]]:lib:text-xs [&_[cmdk-group-heading]]:lib:font-medium",
        e
      ),
      ...l
    }
  );
}
function w({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    i.Separator,
    {
      "data-slot": "command-separator",
      className: a("lib:bg-border lib:-mx-1 lib:h-px", e),
      ...l
    }
  );
}
function y({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    i.Item,
    {
      "data-slot": "command-item",
      className: a(
        "data-[selected=true]:lib:bg-accent data-[selected=true]:lib:text-accent-foreground [&_svg:not([class*=text-])]:lib:text-muted-foreground lib:relative lib:flex lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:px-2 lib:py-1.5 lib:text-sm lib:outline-hidden lib:select-none data-[disabled=true]:lib:pointer-events-none data-[disabled=true]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        e
      ),
      ...l
    }
  );
}
function C({ className: e, ...l }) {
  return /* @__PURE__ */ t.createElement(
    "span",
    {
      "data-slot": "command-shortcut",
      className: a("lib:text-muted-foreground lib:ml-auto lib:text-xs lib:tracking-widest", e),
      ...l
    }
  );
}
export {
  u as Command,
  h as CommandDialog,
  v as CommandEmpty,
  E as CommandGroup,
  _ as CommandInput,
  y as CommandItem,
  k as CommandList,
  w as CommandSeparator,
  C as CommandShortcut
};
