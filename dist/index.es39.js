import * as e from "react";
import * as a from "@radix-ui/react-select";
import { CheckIcon as i, ChevronDownIcon as o, ChevronUpIcon as c } from "lucide-react";
import { cn as l } from "./index.es54.js";
function f({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(a.Root, { "data-slot": "select", ...t });
}
function g({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(a.Group, { "data-slot": "select-group", ...t });
}
function v({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(a.Value, { "data-slot": "select-value", ...t });
}
function x({
  className: t,
  size: r = "default",
  children: n,
  ...s
}) {
  return /* @__PURE__ */ e.createElement(
    a.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": r,
      className: l(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...s
    },
    n,
    /* @__PURE__ */ e.createElement(a.Icon, { asChild: !0 }, /* @__PURE__ */ e.createElement(o, { className: "size-4 opacity-50" }))
  );
}
function b({
  className: t,
  children: r,
  position: n = "popper",
  ...s
}) {
  return /* @__PURE__ */ e.createElement(a.Portal, null, /* @__PURE__ */ e.createElement(
    a.Content,
    {
      "data-slot": "select-content",
      className: l(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        t
      ),
      position: n,
      ...s
    },
    /* @__PURE__ */ e.createElement(d, null),
    /* @__PURE__ */ e.createElement(
      a.Viewport,
      {
        className: l(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
        )
      },
      r
    ),
    /* @__PURE__ */ e.createElement(u, null)
  ));
}
function h({
  className: t,
  ...r
}) {
  return /* @__PURE__ */ e.createElement(
    a.Label,
    {
      "data-slot": "select-label",
      className: l("text-muted-foreground px-2 py-1.5 text-xs", t),
      ...r
    }
  );
}
function E({
  className: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ e.createElement(
    a.Item,
    {
      "data-slot": "select-item",
      className: l(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t
      ),
      ...n
    },
    /* @__PURE__ */ e.createElement("span", { className: "absolute right-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ e.createElement(a.ItemIndicator, null, /* @__PURE__ */ e.createElement(i, { className: "size-4" }))),
    /* @__PURE__ */ e.createElement(a.ItemText, null, r)
  );
}
function w({
  className: t,
  ...r
}) {
  return /* @__PURE__ */ e.createElement(
    a.Separator,
    {
      "data-slot": "select-separator",
      className: l("bg-border pointer-events-none -mx-1 my-1 h-px", t),
      ...r
    }
  );
}
function d({
  className: t,
  ...r
}) {
  return /* @__PURE__ */ e.createElement(
    a.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: l(
        "flex cursor-default items-center justify-center py-1",
        t
      ),
      ...r
    },
    /* @__PURE__ */ e.createElement(c, { className: "size-4" })
  );
}
function u({
  className: t,
  ...r
}) {
  return /* @__PURE__ */ e.createElement(
    a.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: l(
        "flex cursor-default items-center justify-center py-1",
        t
      ),
      ...r
    },
    /* @__PURE__ */ e.createElement(o, { className: "size-4" })
  );
}
export {
  f as Select,
  b as SelectContent,
  g as SelectGroup,
  E as SelectItem,
  h as SelectLabel,
  u as SelectScrollDownButton,
  d as SelectScrollUpButton,
  w as SelectSeparator,
  x as SelectTrigger,
  v as SelectValue
};
