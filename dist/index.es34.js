import { j as r } from "./index.es70.js";
import * as o from "@radix-ui/react-progress";
import { cn as l } from "./index.es71.js";
function n({ className: s, value: t, ...a }) {
  return /* @__PURE__ */ r.jsx(
    o.Root,
    {
      "data-slot": "progress",
      className: l("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", s),
      ...a,
      children: /* @__PURE__ */ r.jsx(
        o.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
export {
  n as Progress
};
