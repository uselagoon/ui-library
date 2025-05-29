import * as r from "react";
import * as e from "@radix-ui/react-progress";
import { cn as l } from "./index.es54.js";
function i({
  className: t,
  value: a,
  ...o
}) {
  return /* @__PURE__ */ r.createElement(
    e.Root,
    {
      "data-slot": "progress",
      className: l(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        t
      ),
      ...o
    },
    /* @__PURE__ */ r.createElement(
      e.Indicator,
      {
        "data-slot": "progress-indicator",
        className: "bg-primary h-full w-full flex-1 transition-all",
        style: { transform: `translateX(-${100 - (a || 0)}%)` }
      }
    )
  );
}
export {
  i as Progress
};
