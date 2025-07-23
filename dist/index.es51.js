import { j as o } from "./index.es70.js";
import * as i from "@radix-ui/react-tooltip";
import { cn as n } from "./index.es71.js";
function s({ delayDuration: t = 0, ...r }) {
  return /* @__PURE__ */ o.jsx(i.Provider, { "data-slot": "tooltip-provider", delayDuration: t, ...r });
}
function m({ ...t }) {
  return /* @__PURE__ */ o.jsx(s, { children: /* @__PURE__ */ o.jsx(i.Root, { "data-slot": "tooltip", ...t }) });
}
function p({ ...t }) {
  return /* @__PURE__ */ o.jsx(i.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function f({
  className: t,
  sideOffset: r = 0,
  children: e,
  ...a
}) {
  return /* @__PURE__ */ o.jsx(i.Portal, { children: /* @__PURE__ */ o.jsxs(
    i.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: r,
      className: n(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        t
      ),
      ...a,
      children: [
        e,
        /* @__PURE__ */ o.jsx(i.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
export {
  m as Tooltip,
  f as TooltipContent,
  s as TooltipProvider,
  p as TooltipTrigger
};
