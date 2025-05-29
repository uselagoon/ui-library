import * as e from "react";
import * as l from "@radix-ui/react-select";
import { CheckIcon as o, ChevronDownIcon as s, ChevronUpIcon as b } from "lucide-react";
import { cn as a } from "./index.es54.js";
function p({ ...t }) {
  return /* @__PURE__ */ e.createElement(l.Root, { "data-slot": "select", ...t });
}
function f({ ...t }) {
  return /* @__PURE__ */ e.createElement(l.Group, { "data-slot": "select-group", ...t });
}
function g({ ...t }) {
  return /* @__PURE__ */ e.createElement(l.Value, { "data-slot": "select-value", ...t });
}
function v({
  className: t,
  size: i = "default",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ e.createElement(
    l.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": i,
      className: a(
        "lib:border-input data-[placeholder]:lib:text-muted-foreground [&_svg:not([class*=text-])]:lib:text-muted-foreground focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive dark:lib:bg-input/30 dark:hover:lib:bg-input/50 lib:flex lib:w-fit lib:items-center lib:justify-between lib:gap-2 lib:rounded-md lib:border lib:bg-transparent lib:px-3 lib:py-2 lib:text-sm lib:whitespace-nowrap lib:shadow-xs lib:transition-[color,box-shadow] lib:outline-none focus-visible:lib:ring-[3px] disabled:lib:cursor-not-allowed disabled:lib:opacity-50 data-[size=default]:lib:h-9 data-[size=sm]:lib:h-8 *:data-[slot=select-value]:lib:line-clamp-1 *:data-[slot=select-value]:lib:flex *:data-[slot=select-value]:lib:items-center *:data-[slot=select-value]:lib:gap-2 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        t
      ),
      ...n
    },
    r,
    /* @__PURE__ */ e.createElement(l.Icon, { asChild: !0 }, /* @__PURE__ */ e.createElement(s, { className: "lib:size-4 lib:opacity-50" }))
  );
}
function x({
  className: t,
  children: i,
  position: r = "popper",
  ...n
}) {
  return /* @__PURE__ */ e.createElement(l.Portal, null, /* @__PURE__ */ e.createElement(
    l.Content,
    {
      "data-slot": "select-content",
      className: a(
        "lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:relative lib:z-50 lib:max-h-(--radix-select-content-available-height) lib:min-w-[8rem] lib:origin-(--radix-select-content-transform-origin) lib:overflow-x-hidden lib:overflow-y-auto lib:rounded-md lib:border lib:shadow-md",
        r === "popper" && "data-[side=bottom]:lib:translate-y-1 data-[side=left]:lib:-translate-x-1 data-[side=right]:lib:translate-x-1 data-[side=top]:lib:-translate-y-1",
        t
      ),
      position: r,
      ...n
    },
    /* @__PURE__ */ e.createElement(c, null),
    /* @__PURE__ */ e.createElement(
      l.Viewport,
      {
        className: a(
          "lib:p-1",
          r === "popper" && "lib:h-[var(--radix-select-trigger-height)] lib:w-full lib:min-w-[var(--radix-select-trigger-width)] lib:scroll-my-1"
        )
      },
      i
    ),
    /* @__PURE__ */ e.createElement(d, null)
  ));
}
function h({ className: t, ...i }) {
  return /* @__PURE__ */ e.createElement(
    l.Label,
    {
      "data-slot": "select-label",
      className: a("lib:text-muted-foreground lib:px-2 lib:py-1.5 lib:text-xs", t),
      ...i
    }
  );
}
function E({ className: t, children: i, ...r }) {
  return /* @__PURE__ */ e.createElement(
    l.Item,
    {
      "data-slot": "select-item",
      className: a(
        "focus:lib:bg-accent focus:lib:text-accent-foreground [&_svg:not([class*=text-])]:lib:text-muted-foreground lib:relative lib:flex lib:w-full lib:cursor-default lib:items-center lib:gap-2 lib:rounded-sm lib:py-1.5 lib:pr-8 lib:pl-2 lib:text-sm lib:outline-hidden lib:select-none data-[disabled]:lib:pointer-events-none data-[disabled]:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4 *:[span]:last:lib:flex *:[span]:last:lib:items-center *:[span]:last:lib:gap-2",
        t
      ),
      ...r
    },
    /* @__PURE__ */ e.createElement("span", { className: "lib:absolute lib:right-2 lib:flex lib:size-3.5 lib:items-center lib:justify-center" }, /* @__PURE__ */ e.createElement(l.ItemIndicator, null, /* @__PURE__ */ e.createElement(o, { className: "lib:size-4" }))),
    /* @__PURE__ */ e.createElement(l.ItemText, null, i)
  );
}
function w({ className: t, ...i }) {
  return /* @__PURE__ */ e.createElement(
    l.Separator,
    {
      "data-slot": "select-separator",
      className: a("lib:bg-border lib:pointer-events-none lib:-mx-1 lib:my-1 lib:h-px", t),
      ...i
    }
  );
}
function c({ className: t, ...i }) {
  return /* @__PURE__ */ e.createElement(
    l.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: a("lib:flex lib:cursor-default lib:items-center lib:justify-center lib:py-1", t),
      ...i
    },
    /* @__PURE__ */ e.createElement(b, { className: "lib:size-4" })
  );
}
function d({
  className: t,
  ...i
}) {
  return /* @__PURE__ */ e.createElement(
    l.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: a("lib:flex lib:cursor-default lib:items-center lib:justify-center lib:py-1", t),
      ...i
    },
    /* @__PURE__ */ e.createElement(s, { className: "lib:size-4" })
  );
}
export {
  p as Select,
  x as SelectContent,
  f as SelectGroup,
  E as SelectItem,
  h as SelectLabel,
  d as SelectScrollDownButton,
  c as SelectScrollUpButton,
  w as SelectSeparator,
  v as SelectTrigger,
  g as SelectValue
};
