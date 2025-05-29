import * as n from "react";
import { Slot as o } from "@radix-ui/react-slot";
import { cva as a } from "class-variance-authority";
import { cn as s } from "./index.es54.js";
const d = a(
  "lib:inline-flex lib:items-center lib:justify-center lib:gap-2 lib:whitespace-nowrap lib:rounded-md lib:text-sm lib:font-medium lib:transition-all disabled:lib:pointer-events-none disabled:lib:opacity-50 [&_svg]:lib:pointer-events-none [&_svg:not([class*=size-])]:lib:size-4 lib:shrink-0 [&_svg]:lib:shrink-0 lib:outline-none focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 focus-visible:lib:ring-[3px] aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive",
  {
    variants: {
      variant: {
        default: "lib:bg-primary lib:text-primary-foreground lib:shadow-xs hover:lib:bg-primary/90",
        destructive: "lib:bg-destructive lib:text-white lib:shadow-xs hover:lib:bg-destructive/90 focus-visible:lib:ring-destructive/20 dark:focus-visible:lib:ring-destructive/40 dark:lib:bg-destructive/60",
        outline: "lib:border lib:bg-background lib:shadow-xs hover:lib:bg-accent hover:lib:text-accent-foreground dark:lib:bg-input/30 dark:lib:border-input dark:hover:lib:bg-input/50",
        secondary: "lib:bg-secondary lib:text-secondary-foreground lib:shadow-xs hover:lib:bg-secondary/80",
        ghost: "hover:lib:bg-accent hover:lib:text-accent-foreground dark:hover:lib:bg-accent/50",
        link: "lib:text-primary lib:underline-offset-4 hover:lib:underline"
      },
      size: {
        default: "lib:h-9 lib:px-4 lib:py-2 has-[>svg]:lib:px-3",
        sm: "lib:h-8 lib:rounded-md lib:gap-1.5 lib:px-3 has-[>svg]:lib:px-2.5",
        lg: "lib:h-10 lib:rounded-md lib:px-6 has-[>svg]:lib:px-4",
        icon: "lib:size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function g({
  className: i,
  variant: e,
  size: l,
  asChild: r = !1,
  ...b
}) {
  const t = r ? o : "button";
  return /* @__PURE__ */ n.createElement(t, { "data-slot": "button", className: s(d({ variant: e, size: l, className: i })), ...b });
}
export {
  g as Button,
  d as buttonVariants
};
