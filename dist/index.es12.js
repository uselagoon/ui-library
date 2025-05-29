import * as b from "react";
import { Slot as l } from "@radix-ui/react-slot";
import { cva as n } from "class-variance-authority";
import { cn as o } from "./index.es54.js";
const s = n(
  "lib:inline-flex lib:items-center lib:justify-center lib:rounded-md lib:border lib:px-2 lib:py-0.5 lib:text-xs lib:font-medium lib:w-fit lib:whitespace-nowrap lib:shrink-0 [&>svg]:lib:size-3 lib:gap-1 [&>svg]:lib:pointer-events-none focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 focus-visible:lib:ring-[3px] aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive lib:transition-[color,box-shadow] lib:overflow-hidden",
  {
    variants: {
      variant: {
        default: "lib:border-transparent lib:bg-primary lib:text-primary-foreground [a&]:hover:lib:bg-primary/90",
        secondary: "lib:border-transparent lib:bg-secondary lib:text-secondary-foreground [a&]:hover:lib:bg-secondary/90",
        destructive: "lib:border-transparent lib:bg-destructive lib:text-white [a&]:hover:lib:bg-destructive/90 focus-visible:lib:ring-destructive/20 dark:focus-visible:lib:ring-destructive/40 dark:lib:bg-destructive/60",
        outline: "lib:text-foreground [a&]:hover:lib:bg-accent [a&]:hover:lib:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function u({
  className: i,
  variant: r,
  asChild: e = !1,
  ...t
}) {
  const a = e ? l : "span";
  return /* @__PURE__ */ b.createElement(a, { "data-slot": "badge", className: o(s({ variant: r }), i), ...t });
}
export {
  u as Badge,
  s as badgeVariants
};
