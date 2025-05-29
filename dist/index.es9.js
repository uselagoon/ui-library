import * as l from "react";
import { cva as a } from "class-variance-authority";
import { cn as e } from "./index.es54.js";
const s = a(
  "lib:relative lib:w-full lib:rounded-lg lib:border lib:px-4 lib:py-3 lib:text-sm lib:grid has-[>svg]:lib:grid-cols-[calc(var(--spacing)*4)_1fr] lib:grid-cols-[0_1fr] has-[>svg]:lib:gap-x-3 lib:gap-y-0.5 lib:items-start [&>svg]:lib:size-4 [&>svg]:lib:translate-y-0.5 [&>svg]:lib:text-current",
  {
    variants: {
      variant: {
        default: "lib:bg-card lib:text-card-foreground",
        destructive: "lib:text-destructive lib:bg-card [&>svg]:lib:text-current *:data-[slot=alert-description]:lib:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function c({ className: t, variant: i, ...r }) {
  return /* @__PURE__ */ l.createElement("div", { "data-slot": "alert", role: "alert", className: e(s({ variant: i }), t), ...r });
}
function d({ className: t, ...i }) {
  return /* @__PURE__ */ l.createElement(
    "div",
    {
      "data-slot": "alert-title",
      className: e("lib:col-start-2 lib:line-clamp-1 lib:min-h-4 lib:font-medium lib:tracking-tight", t),
      ...i
    }
  );
}
function o({ className: t, ...i }) {
  return /* @__PURE__ */ l.createElement(
    "div",
    {
      "data-slot": "alert-description",
      className: e(
        "lib:text-muted-foreground lib:col-start-2 lib:grid lib:justify-items-start lib:gap-1 lib:text-sm [&_p]:lib:leading-relaxed",
        t
      ),
      ...i
    }
  );
}
export {
  c as Alert,
  o as AlertDescription,
  d as AlertTitle
};
