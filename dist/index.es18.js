import { j as r } from "./index.es64.js";
import * as e from "@radix-ui/react-checkbox";
import { CheckIcon as a } from "lucide-react";
import { cn as o } from "./index.es65.js";
function c({ className: i, ...t }) {
  return /* @__PURE__ */ r.jsx(
    e.Root,
    {
      "data-slot": "checkbox",
      className: o(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        i
      ),
      ...t,
      children: /* @__PURE__ */ r.jsx(
        e.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ r.jsx(a, { className: "size-3.5" })
        }
      )
    }
  );
}
export {
  c as Checkbox
};
