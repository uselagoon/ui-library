import { j as r } from "./index.es64.js";
import * as o from "@radix-ui/react-scroll-area";
import { cn as s } from "./index.es65.js";
function n({ className: e, children: l, ...a }) {
  return /* @__PURE__ */ r.jsxs(o.Root, { "data-slot": "scroll-area", className: s("relative", e), ...a, children: [
    /* @__PURE__ */ r.jsx(
      o.Viewport,
      {
        "data-slot": "scroll-area-viewport",
        className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
        children: l
      }
    ),
    /* @__PURE__ */ r.jsx(t, {}),
    /* @__PURE__ */ r.jsx(o.Corner, {})
  ] });
}
function t({
  className: e,
  orientation: l = "vertical",
  ...a
}) {
  return /* @__PURE__ */ r.jsx(
    o.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: l,
      className: s(
        "flex touch-none p-px transition-colors select-none",
        l === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        l === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...a,
      children: /* @__PURE__ */ r.jsx(
        o.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
export {
  n as ScrollArea,
  t as ScrollBar
};
