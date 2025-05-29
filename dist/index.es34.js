import * as e from "react";
import * as o from "@radix-ui/react-popover";
import { cn as i } from "./index.es54.js";
function p({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(o.Root, { "data-slot": "popover", ...t });
}
function s({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(o.Trigger, { "data-slot": "popover-trigger", ...t });
}
function m({
  className: t,
  align: r = "center",
  sideOffset: a = 4,
  ...n
}) {
  return /* @__PURE__ */ e.createElement(o.Portal, null, /* @__PURE__ */ e.createElement(
    o.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: a,
      className: i(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        t
      ),
      ...n
    }
  ));
}
function l({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(o.Anchor, { "data-slot": "popover-anchor", ...t });
}
export {
  p as Popover,
  l as PopoverAnchor,
  m as PopoverContent,
  s as PopoverTrigger
};
