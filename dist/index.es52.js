import * as i from "react";
import * as e from "@radix-ui/react-tooltip";
import { cn as a } from "./index.es54.js";
function n({ delayDuration: t = 0, ...o }) {
  return /* @__PURE__ */ i.createElement(e.Provider, { "data-slot": "tooltip-provider", delayDuration: t, ...o });
}
function b({ ...t }) {
  return /* @__PURE__ */ i.createElement(n, null, /* @__PURE__ */ i.createElement(e.Root, { "data-slot": "tooltip", ...t }));
}
function m({ ...t }) {
  return /* @__PURE__ */ i.createElement(e.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function s({
  className: t,
  sideOffset: o = 0,
  children: l,
  ...r
}) {
  return /* @__PURE__ */ i.createElement(e.Portal, null, /* @__PURE__ */ i.createElement(
    e.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: o,
      className: a(
        "lib:bg-primary lib:text-primary-foreground lib:animate-in lib:fade-in-0 lib:zoom-in-95 data-[state=closed]:lib:animate-out data-[state=closed]:lib:fade-out-0 data-[state=closed]:lib:zoom-out-95 data-[side=bottom]:lib:slide-in-from-top-2 data-[side=left]:lib:slide-in-from-right-2 data-[side=right]:lib:slide-in-from-left-2 data-[side=top]:lib:slide-in-from-bottom-2 lib:z-50 lib:w-fit lib:origin-(--radix-tooltip-content-transform-origin) lib:rounded-md lib:px-3 lib:py-1.5 lib:text-xs lib:text-balance",
        t
      ),
      ...r
    },
    l,
    /* @__PURE__ */ i.createElement(e.Arrow, { className: "lib:bg-primary lib:fill-primary lib:z-50 lib:size-2.5 lib:translate-y-[calc(-50%_-_2px)] lib:rotate-45 lib:rounded-[2px]" })
  ));
}
export {
  b as Tooltip,
  s as TooltipContent,
  n as TooltipProvider,
  m as TooltipTrigger
};
