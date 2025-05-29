import * as e from "react";
import * as o from "@radix-ui/react-hover-card";
import { cn as n } from "./index.es54.js";
function s({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(o.Root, { "data-slot": "hover-card", ...t });
}
function m({
  ...t
}) {
  return /* @__PURE__ */ e.createElement(o.Trigger, { "data-slot": "hover-card-trigger", ...t });
}
function c({
  className: t,
  align: a = "center",
  sideOffset: r = 4,
  ...d
}) {
  return /* @__PURE__ */ e.createElement(o.Portal, { "data-slot": "hover-card-portal" }, /* @__PURE__ */ e.createElement(
    o.Content,
    {
      "data-slot": "hover-card-content",
      align: a,
      sideOffset: r,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        t
      ),
      ...d
    }
  ));
}
export {
  s as HoverCard,
  c as HoverCardContent,
  m as HoverCardTrigger
};
