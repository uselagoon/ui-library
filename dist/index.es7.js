import * as t from "react";
import * as n from "@radix-ui/react-accordion";
import { ChevronDownIcon as i } from "lucide-react";
import { cn as a } from "./index.es54.js";
function d({ ...e }) {
  return /* @__PURE__ */ t.createElement(n.Root, { "data-slot": "accordion", ...e });
}
function m({ className: e, ...o }) {
  return /* @__PURE__ */ t.createElement(
    n.Item,
    {
      "data-slot": "accordion-item",
      className: a("border-b last:border-b-0", e),
      ...o
    }
  );
}
function l({ className: e, children: o, ...r }) {
  return /* @__PURE__ */ t.createElement(n.Header, { className: "flex" }, /* @__PURE__ */ t.createElement(
    n.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: a(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...r
    },
    o,
    /* @__PURE__ */ t.createElement(i, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
  ));
}
function f({ className: e, children: o, ...r }) {
  return /* @__PURE__ */ t.createElement(
    n.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...r
    },
    /* @__PURE__ */ t.createElement("div", { className: a("pt-0 pb-4", e) }, o)
  );
}
export {
  d as Accordion,
  f as AccordionContent,
  m as AccordionItem,
  l as AccordionTrigger
};
//# sourceMappingURL=index.es7.js.map
