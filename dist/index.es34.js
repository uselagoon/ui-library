import * as e from "react";
import * as o from "@radix-ui/react-popover";
import { cn as n } from "./index.es54.js";
function d({ ...t }) {
  return /* @__PURE__ */ e.createElement(o.Root, { "data-slot": "popover", ...t });
}
function p({ ...t }) {
  return /* @__PURE__ */ e.createElement(o.Trigger, { "data-slot": "popover-trigger", ...t });
}
function s({
  className: t,
  align: r = "center",
  sideOffset: i = 4,
  ...a
}) {
  return /* @__PURE__ */ e.createElement(o.Portal, null, /* @__PURE__ */ e.createElement(
    o.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: i,
      className: n(
        "lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:w-72 lib:origin-(--radix-popover-content-transform-origin) lib:rounded-md lib:border lib:p-4 lib:shadow-md lib:outline-hidden",
        t
      ),
      ...a
    }
  ));
}
function m({ ...t }) {
  return /* @__PURE__ */ e.createElement(o.Anchor, { "data-slot": "popover-anchor", ...t });
}
export {
  d as Popover,
  m as PopoverAnchor,
  s as PopoverContent,
  p as PopoverTrigger
};
