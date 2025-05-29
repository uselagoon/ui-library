import * as i from "react";
import * as e from "@radix-ui/react-separator";
import { cn as n } from "./index.es54.js";
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
      className: n(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t
      ),
      ...r
    }
  );
}
export {
  m as Separator
};
