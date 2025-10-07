import { jsx as i } from "react/jsx-runtime";
import * as n from "@radix-ui/react-separator";
import { cn as e } from "./index.es70.js";
function m({
  className: t,
  orientation: o = "horizontal",
  decorative: r = !0,
  ...a
}) {
  return /* @__PURE__ */ i(
    n.Root,
    {
      "data-slot": "separator",
      decorative: r,
      orientation: o,
      className: e(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t
      ),
      ...a
    }
  );
}
export {
  m as Separator
};
