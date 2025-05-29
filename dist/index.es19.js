import * as e from "react";
import * as r from "@radix-ui/react-checkbox";
import { CheckIcon as i } from "lucide-react";
import { cn as o } from "./index.es54.js";
function d({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e.createElement(
    r.Root,
    {
      "data-slot": "checkbox",
      className: o(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...a
    },
    /* @__PURE__ */ e.createElement(
      r.Indicator,
      {
        "data-slot": "checkbox-indicator",
        className: "flex items-center justify-center text-current transition-none"
      },
      /* @__PURE__ */ e.createElement(i, { className: "size-3.5" })
    )
  );
}
export {
  d as Checkbox
};
