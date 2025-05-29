import * as i from "react";
import * as e from "@radix-ui/react-checkbox";
import { CheckIcon as a } from "lucide-react";
import { cn as l } from "./index.es54.js";
function c({ className: r, ...t }) {
  return /* @__PURE__ */ i.createElement(
    e.Root,
    {
      "data-slot": "checkbox",
      className: l(
        "lib:peer lib:border-input dark:lib:bg-input/30 data-[state=checked]:lib:bg-primary data-[state=checked]:lib:text-primary-foreground dark:data-[state=checked]:lib:bg-primary data-[state=checked]:lib:border-primary focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive lib:size-4 lib:shrink-0 lib:rounded-[4px] lib:border lib:shadow-xs lib:transition-shadow lib:outline-none focus-visible:lib:ring-[3px] disabled:lib:cursor-not-allowed disabled:lib:opacity-50",
        r
      ),
      ...t
    },
    /* @__PURE__ */ i.createElement(
      e.Indicator,
      {
        "data-slot": "checkbox-indicator",
        className: "lib:flex lib:items-center lib:justify-center lib:text-current lib:transition-none"
      },
      /* @__PURE__ */ i.createElement(a, { className: "lib:size-3.5" })
    )
  );
}
export {
  c as Checkbox
};
