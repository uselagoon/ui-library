import * as r from "react";
import * as l from "@radix-ui/react-progress";
import { cn as a } from "./index.es54.js";
function s({ className: i, value: e, ...t }) {
  return /* @__PURE__ */ r.createElement(
    l.Root,
    {
      "data-slot": "progress",
      className: a(
        "lib:bg-primary/20 lib:relative lib:h-2 lib:w-full lib:overflow-hidden lib:rounded-full",
        i
      ),
      ...t
    },
    /* @__PURE__ */ r.createElement(
      l.Indicator,
      {
        "data-slot": "progress-indicator",
        className: "lib:bg-primary lib:h-full lib:w-full lib:flex-1 lib:transition-all",
        style: { transform: `translateX(-${100 - (e || 0)}%)` }
      }
    )
  );
}
export {
  s as Progress
};
