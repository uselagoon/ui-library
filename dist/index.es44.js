import * as t from "react";
import * as r from "@radix-ui/react-slider";
import { cn as n } from "./index.es54.js";
function b({
  className: l,
  defaultValue: e,
  value: a,
  min: o = 0,
  max: i = 100,
  ...s
}) {
  const d = t.useMemo(
    () => Array.isArray(a) ? a : Array.isArray(e) ? e : [o, i],
    [a, e, o, i]
  );
  return /* @__PURE__ */ t.createElement(
    r.Root,
    {
      "data-slot": "slider",
      defaultValue: e,
      value: a,
      min: o,
      max: i,
      className: n(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        l
      ),
      ...s
    },
    /* @__PURE__ */ t.createElement(
      r.Track,
      {
        "data-slot": "slider-track",
        className: n(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )
      },
      /* @__PURE__ */ t.createElement(
        r.Range,
        {
          "data-slot": "slider-range",
          className: n(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )
        }
      )
    ),
    Array.from({ length: d.length }, (m, c) => /* @__PURE__ */ t.createElement(
      r.Thumb,
      {
        "data-slot": "slider-thumb",
        key: c,
        className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
      }
    ))
  );
}
export {
  b as Slider
};
