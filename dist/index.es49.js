import * as e from "react";
import { cn as r } from "./index.es54.js";
function b({ className: i, ...l }) {
  return /* @__PURE__ */ e.createElement(
    "textarea",
    {
      "data-slot": "textarea",
      className: r(
        "lib:border-input placeholder:lib:text-muted-foreground focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive dark:lib:bg-input/30 lib:flex lib:field-sizing-content lib:min-h-16 lib:w-full lib:rounded-md lib:border lib:bg-transparent lib:px-3 lib:py-2 lib:text-base lib:shadow-xs lib:transition-[color,box-shadow] lib:outline-none focus-visible:lib:ring-[3px] disabled:lib:cursor-not-allowed disabled:lib:opacity-50 md:lib:text-sm",
        i
      ),
      ...l
    }
  );
}
export {
  b as Textarea
};
