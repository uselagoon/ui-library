import * as i from "react";
import * as e from "@radix-ui/react-separator";
import { cn as l } from "./index.es54.js";
function m({
  className: t,
  orientation: a = "horizontal",
  decorative: o = !0,
  ...r
}) {
  return /* @__PURE__ */ i.createElement(
    e.Root,
    {
      "data-slot": "separator-root",
      decorative: o,
      orientation: a,
      className: l(
        "lib:bg-border lib:shrink-0 data-[orientation=horizontal]:lib:h-px data-[orientation=horizontal]:lib:w-full data-[orientation=vertical]:lib:h-full data-[orientation=vertical]:lib:w-px",
        t
      ),
      ...r
    }
  );
}
export {
  m as Separator
};
