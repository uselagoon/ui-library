import * as i from "react";
import * as e from "@radix-ui/react-radio-group";
import { CircleIcon as a } from "lucide-react";
import { cn as t } from "./index.es54.js";
function s({ className: r, ...l }) {
  return /* @__PURE__ */ i.createElement(e.Root, { "data-slot": "radio-group", className: t("lib:grid lib:gap-3", r), ...l });
}
function n({ className: r, ...l }) {
  return /* @__PURE__ */ i.createElement(
    e.Item,
    {
      "data-slot": "radio-group-item",
      className: t(
        "lib:border-input lib:text-primary focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 aria-invalid:lib:ring-destructive/20 dark:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive dark:lib:bg-input/30 lib:aspect-square lib:size-4 lib:shrink-0 lib:rounded-full lib:border lib:shadow-xs lib:transition-[color,box-shadow] lib:outline-none focus-visible:lib:ring-[3px] disabled:lib:cursor-not-allowed disabled:lib:opacity-50",
        r
      ),
      ...l
    },
    /* @__PURE__ */ i.createElement(
      e.Indicator,
      {
        "data-slot": "radio-group-indicator",
        className: "lib:relative lib:flex lib:items-center lib:justify-center"
      },
      /* @__PURE__ */ i.createElement(a, { className: "lib:fill-primary lib:absolute lib:top-1/2 lib:left-1/2 lib:size-2 lib:-translate-x-1/2 lib:-translate-y-1/2" })
    )
  );
}
export {
  s as RadioGroup,
  n as RadioGroupItem
};
