import * as t from "react";
import * as o from "@radix-ui/react-accordion";
import { ChevronDownIcon as l } from "lucide-react";
import { cn as r } from "./index.es54.js";
function b({ ...e }) {
  return /* @__PURE__ */ t.createElement(o.Root, { "data-slot": "accordion", ...e });
}
function s({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    o.Item,
    {
      "data-slot": "accordion-item",
      className: r("lib:border-b last:lib:border-b-0", e),
      ...i
    }
  );
}
function d({ className: e, children: i, ...n }) {
  return /* @__PURE__ */ t.createElement(o.Header, { className: "lib:flex" }, /* @__PURE__ */ t.createElement(
    o.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: r(
        "focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 lib:flex lib:flex-1 lib:items-start lib:justify-between lib:gap-4 lib:rounded-md lib:py-4 lib:text-left lib:text-sm lib:font-medium lib:transition-all lib:outline-none hover:lib:underline focus-visible:lib:ring-[3px] disabled:lib:pointer-events-none disabled:lib:opacity-50 [&[data-state=open]>svg]:lib:rotate-180",
        e
      ),
      ...n
    },
    i,
    /* @__PURE__ */ t.createElement(l, { className: "lib:text-muted-foreground lib:pointer-events-none lib:size-4 lib:shrink-0 lib:translate-y-0.5 lib:transition-transform lib:duration-200" })
  ));
}
function m({ className: e, children: i, ...n }) {
  return /* @__PURE__ */ t.createElement(
    o.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:lib:animate-accordion-up data-[state=open]:lib:animate-accordion-down lib:overflow-hidden lib:text-sm",
      ...n
    },
    /* @__PURE__ */ t.createElement("div", { className: r("lib:pt-0 lib:pb-4", e) }, i)
  );
}
export {
  b as Accordion,
  m as AccordionContent,
  s as AccordionItem,
  d as AccordionTrigger
};
