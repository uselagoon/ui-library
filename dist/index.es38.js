import { j as e } from "./index.es70.js";
import * as a from "@radix-ui/react-select";
import { CheckIcon as i, ChevronDownIcon as l, ChevronUpIcon as d } from "lucide-react";
import { cn as r } from "./index.es71.js";
function f({ ...t }) {
  return /* @__PURE__ */ e.jsx(a.Root, { "data-slot": "select", ...t });
}
function g({ ...t }) {
  return /* @__PURE__ */ e.jsx(a.Group, { "data-slot": "select-group", ...t });
}
function v({ ...t }) {
  return /* @__PURE__ */ e.jsx(a.Value, { "data-slot": "select-value", ...t });
}
function h({
  className: t,
  size: s = "default",
  children: o,
  ...n
}) {
  return /* @__PURE__ */ e.jsxs(
    a.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": s,
      className: r(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ e.jsx(a.Icon, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function b({
  className: t,
  children: s,
  position: o = "popper",
  ...n
}) {
  return /* @__PURE__ */ e.jsx(a.Portal, { children: /* @__PURE__ */ e.jsxs(
    a.Content,
    {
      "data-slot": "select-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        t
      ),
      position: o,
      ...n,
      children: [
        /* @__PURE__ */ e.jsx(c, {}),
        /* @__PURE__ */ e.jsx(
          a.Viewport,
          {
            className: r(
              "p-1",
              o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: s
          }
        ),
        /* @__PURE__ */ e.jsx(u, {})
      ]
    }
  ) });
}
function j({ className: t, ...s }) {
  return /* @__PURE__ */ e.jsx(
    a.Label,
    {
      "data-slot": "select-label",
      className: r("text-muted-foreground px-2 py-1.5 text-xs", t),
      ...s
    }
  );
}
function w({ className: t, children: s, ...o }) {
  return /* @__PURE__ */ e.jsxs(
    a.Item,
    {
      "data-slot": "select-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(a.ItemIndicator, { children: /* @__PURE__ */ e.jsx(i, { className: "size-4" }) }) }),
        /* @__PURE__ */ e.jsx(a.ItemText, { children: s })
      ]
    }
  );
}
function y({ className: t, ...s }) {
  return /* @__PURE__ */ e.jsx(
    a.Separator,
    {
      "data-slot": "select-separator",
      className: r("bg-border pointer-events-none -mx-1 my-1 h-px", t),
      ...s
    }
  );
}
function c({ className: t, ...s }) {
  return /* @__PURE__ */ e.jsx(
    a.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: r("flex cursor-default items-center justify-center py-1", t),
      ...s,
      children: /* @__PURE__ */ e.jsx(d, { className: "size-4" })
    }
  );
}
function u({
  className: t,
  ...s
}) {
  return /* @__PURE__ */ e.jsx(
    a.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: r("flex cursor-default items-center justify-center py-1", t),
      ...s,
      children: /* @__PURE__ */ e.jsx(l, { className: "size-4" })
    }
  );
}
export {
  f as Select,
  b as SelectContent,
  g as SelectGroup,
  w as SelectItem,
  j as SelectLabel,
  u as SelectScrollDownButton,
  c as SelectScrollUpButton,
  y as SelectSeparator,
  h as SelectTrigger,
  v as SelectValue
};
