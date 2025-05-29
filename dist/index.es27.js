import * as e from "react";
import * as o from "@radix-ui/react-hover-card";
import { cn as d } from "./index.es54.js";
function l({ ...t }) {
  return /* @__PURE__ */ e.createElement(o.Root, { "data-slot": "hover-card", ...t });
}
function s({ ...t }) {
  return /* @__PURE__ */ e.createElement(o.Trigger, { "data-slot": "hover-card-trigger", ...t });
}
function m({
  className: t,
  align: a = "center",
  sideOffset: r = 4,
  ...i
}) {
  return /* @__PURE__ */ e.createElement(o.Portal, { "data-slot": "hover-card-portal" }, /* @__PURE__ */ e.createElement(
    o.Content,
    {
      "data-slot": "hover-card-content",
      align: a,
      sideOffset: r,
      className: d(
        "lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=open]:lib:fade-in-0 data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:w-64 lib:origin-(--radix-hover-card-content-transform-origin) lib:rounded-md lib:border lib:p-4 lib:shadow-md lib:outline-hidden",
        t
      ),
      ...i
    }
  ));
}
export {
  l as HoverCard,
  m as HoverCardContent,
  s as HoverCardTrigger
};
