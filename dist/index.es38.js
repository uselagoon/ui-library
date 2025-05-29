import * as e from "react";
import * as l from "@radix-ui/react-scroll-area";
import { cn as t } from "./index.es54.js";
function s({
  className: o,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ e.createElement(
    l.Root,
    {
      "data-slot": "scroll-area",
      className: t("relative", o),
      ...a
    },
    /* @__PURE__ */ e.createElement(
      l.Viewport,
      {
        "data-slot": "scroll-area-viewport",
        className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      },
      r
    ),
    /* @__PURE__ */ e.createElement(c, null),
    /* @__PURE__ */ e.createElement(l.Corner, null)
  );
}
function c({
  className: o,
  orientation: r = "vertical",
  ...a
}) {
  return /* @__PURE__ */ e.createElement(
    l.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: r,
      className: t(
        "flex touch-none p-px transition-colors select-none",
        r === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        o
      ),
      ...a
    },
    /* @__PURE__ */ e.createElement(
      l.ScrollAreaThumb,
      {
        "data-slot": "scroll-area-thumb",
        className: "bg-border relative flex-1 rounded-full"
      }
    )
  );
}
export {
  s as ScrollArea,
  c as ScrollBar
};
