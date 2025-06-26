import { j as i } from "./index.es64.js";
import * as n from "@radix-ui/react-separator";
import { cn as e } from "./index.es65.js";
function s({
  className: t,
  orientation: o = "horizontal",
  decorative: r = !0,
  ...a
}) {
  return /* @__PURE__ */ i.jsx(
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
  s as Separator
};
