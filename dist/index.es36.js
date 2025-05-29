import * as r from "react";
import * as t from "@radix-ui/react-radio-group";
import { CircleIcon as o } from "lucide-react";
import { cn as a } from "./index.es54.js";
function l({
  className: e,
  ...i
}) {
  return /* @__PURE__ */ r.createElement(
    t.Root,
    {
      "data-slot": "radio-group",
      className: a("grid gap-3", e),
      ...i
    }
  );
}
function d({
  className: e,
  ...i
}) {
  return /* @__PURE__ */ r.createElement(
    t.Item,
    {
      "data-slot": "radio-group-item",
      className: a(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...i
    },
    /* @__PURE__ */ r.createElement(
      t.Indicator,
      {
        "data-slot": "radio-group-indicator",
        className: "relative flex items-center justify-center"
      },
      /* @__PURE__ */ r.createElement(o, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
    )
  );
}
export {
  l as RadioGroup,
  d as RadioGroupItem
};
