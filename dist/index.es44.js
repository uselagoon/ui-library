import * as i from "react";
import * as e from "@radix-ui/react-slider";
import { cn as o } from "./index.es54.js";
function h({
  className: n,
  defaultValue: l,
  value: t,
  min: a = 0,
  max: r = 100,
  ...b
}) {
  const s = i.useMemo(
    () => Array.isArray(t) ? t : Array.isArray(l) ? l : [a, r],
    [t, l, a, r]
  );
  return /* @__PURE__ */ i.createElement(
    e.Root,
    {
      "data-slot": "slider",
      defaultValue: l,
      value: t,
      min: a,
      max: r,
      className: o(
        "lib:relative lib:flex lib:w-full lib:touch-none lib:items-center lib:select-none data-[disabled]:lib:opacity-50 data-[orientation=vertical]:lib:h-full data-[orientation=vertical]:lib:min-h-44 data-[orientation=vertical]:lib:w-auto data-[orientation=vertical]:lib:flex-col",
        n
      ),
      ...b
    },
    /* @__PURE__ */ i.createElement(
      e.Track,
      {
        "data-slot": "slider-track",
        className: o(
          "lib:bg-muted lib:relative lib:grow lib:overflow-hidden lib:rounded-full data-[orientation=horizontal]:lib:h-1.5 data-[orientation=horizontal]:lib:w-full data-[orientation=vertical]:lib:h-full data-[orientation=vertical]:lib:w-1.5"
        )
      },
      /* @__PURE__ */ i.createElement(
        e.Range,
        {
          "data-slot": "slider-range",
          className: o(
            "lib:bg-primary lib:absolute data-[orientation=horizontal]:lib:h-full data-[orientation=vertical]:lib:w-full"
          )
        }
      )
    ),
    Array.from({ length: s.length }, (c, d) => /* @__PURE__ */ i.createElement(
      e.Thumb,
      {
        "data-slot": "slider-thumb",
        key: d,
        className: "lib:border-primary lib:bg-background lib:ring-ring/50 lib:block lib:size-4 lib:shrink-0 lib:rounded-full lib:border lib:shadow-sm lib:transition-[color,box-shadow] hover:lib:ring-4 focus-visible:lib:ring-4 focus-visible:lib:outline-hidden disabled:lib:pointer-events-none disabled:lib:opacity-50"
      }
    ))
  );
}
export {
  h as Slider
};
