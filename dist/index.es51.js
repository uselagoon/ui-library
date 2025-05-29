import * as r from "react";
import * as n from "@radix-ui/react-toggle";
import { cva as a } from "class-variance-authority";
import { cn as b } from "./index.es54.js";
const o = a(
  "lib:inline-flex lib:items-center lib:justify-center lib:gap-2 lib:rounded-md lib:text-sm lib:font-medium hover:lib:bg-muted hover:lib:text-muted-foreground disabled:lib:pointer-events-none disabled:lib:opacity-50 data-[state=on]:lib:bg-accent data-[state=on]:lib:text-accent-foreground [&_svg]:lib:pointer-events-none [&_svg:not([class*=size-])]:lib:size-4 [&_svg]:lib:shrink-0 focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 focus-visible:lib:ring-[3px] lib:outline-none lib:transition-[color,box-shadow] aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive lib:whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "lib:bg-transparent",
        outline: "lib:border lib:border-input lib:bg-transparent lib:shadow-xs hover:lib:bg-accent hover:lib:text-accent-foreground"
      },
      size: {
        default: "lib:h-9 lib:px-2 lib:min-w-9",
        sm: "lib:h-8 lib:px-1.5 lib:min-w-8",
        lg: "lib:h-10 lib:px-2.5 lib:min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function c({
  className: i,
  variant: e,
  size: t,
  ...l
}) {
  return /* @__PURE__ */ r.createElement(n.Root, { "data-slot": "toggle", className: b(o({ variant: e, size: t, className: i })), ...l });
}
export {
  c as Toggle,
  o as toggleVariants
};
