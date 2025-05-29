import * as r from "react";
import { cva as i } from "class-variance-authority";
import { cn as a } from "./index.es54.js";
const l = i(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function d({
  className: t,
  variant: e,
  ...s
}) {
  return /* @__PURE__ */ r.createElement(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: a(l({ variant: e }), t),
      ...s
    }
  );
}
function o({ className: t, ...e }) {
  return /* @__PURE__ */ r.createElement(
    "div",
    {
      "data-slot": "alert-title",
      className: a(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        t
      ),
      ...e
    }
  );
}
function g({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ r.createElement(
    "div",
    {
      "data-slot": "alert-description",
      className: a(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        t
      ),
      ...e
    }
  );
}
export {
  d as Alert,
  g as AlertDescription,
  o as AlertTitle
};
