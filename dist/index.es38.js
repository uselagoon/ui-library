import * as l from "react";
import * as r from "@radix-ui/react-scroll-area";
import { cn as a } from "./index.es54.js";
function c({ className: i, children: e, ...o }) {
  return /* @__PURE__ */ l.createElement(r.Root, { "data-slot": "scroll-area", className: a("lib:relative", i), ...o }, /* @__PURE__ */ l.createElement(
    r.Viewport,
    {
      "data-slot": "scroll-area-viewport",
      className: "focus-visible:lib:ring-ring/50 lib:size-full lib:rounded-[inherit] lib:transition-[color,box-shadow] lib:outline-none focus-visible:lib:ring-[3px] focus-visible:lib:outline-1"
    },
    e
  ), /* @__PURE__ */ l.createElement(t, null), /* @__PURE__ */ l.createElement(r.Corner, null));
}
function t({
  className: i,
  orientation: e = "vertical",
  ...o
}) {
  return /* @__PURE__ */ l.createElement(
    r.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: e,
      className: a(
        "lib:flex lib:touch-none lib:p-px lib:transition-colors lib:select-none",
        e === "vertical" && "lib:h-full lib:w-2.5 lib:border-l lib:border-l-transparent",
        e === "horizontal" && "lib:h-2.5 lib:flex-col lib:border-t lib:border-t-transparent",
        i
      ),
      ...o
    },
    /* @__PURE__ */ l.createElement(
      r.ScrollAreaThumb,
      {
        "data-slot": "scroll-area-thumb",
        className: "lib:bg-border lib:relative lib:flex-1 lib:rounded-full"
      }
    )
  );
}
export {
  c as ScrollArea,
  t as ScrollBar
};
