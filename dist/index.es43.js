import { j as a } from "./index.es70.js";
import * as h from "react";
import * as o from "@radix-ui/react-slider";
import { cn as n } from "./index.es71.js";
function u({
  className: l,
  defaultValue: r,
  value: t,
  min: i = 0,
  max: e = 100,
  ...s
}) {
  const d = h.useMemo(
    () => Array.isArray(t) ? t : Array.isArray(r) ? r : [i, e],
    [t, r, i, e]
  );
  return /* @__PURE__ */ a.jsxs(
    o.Root,
    {
      "data-slot": "slider",
      defaultValue: r,
      value: t,
      min: i,
      max: e,
      className: n(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        l
      ),
      ...s,
      children: [
        /* @__PURE__ */ a.jsx(
          o.Track,
          {
            "data-slot": "slider-track",
            className: n(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a.jsx(
              o.Range,
              {
                "data-slot": "slider-range",
                className: n("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
              }
            )
          }
        ),
        Array.from({ length: d.length }, (m, c) => /* @__PURE__ */ a.jsx(
          o.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          c
        ))
      ]
    }
  );
}
export {
  u as Slider
};
