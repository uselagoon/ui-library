import { j as e } from "./index.es70.js";
import * as n from "@radix-ui/react-accordion";
import { ChevronDownIcon as a } from "lucide-react";
import { cn as i } from "./index.es71.js";
function l({ ...t }) {
  return /* @__PURE__ */ e.jsx(n.Root, { "data-slot": "accordion", ...t });
}
function m({ className: t, ...o }) {
  return /* @__PURE__ */ e.jsx(
    n.Item,
    {
      "data-slot": "accordion-item",
      className: i("border-b last:border-b-0", t),
      ...o
    }
  );
}
function u({ className: t, children: o, ...r }) {
  return /* @__PURE__ */ e.jsx(n.Header, { className: "flex", children: /* @__PURE__ */ e.jsxs(
    n.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: i(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        t
      ),
      ...r,
      children: [
        o,
        /* @__PURE__ */ e.jsx(a, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function f({ className: t, children: o, ...r }) {
  return /* @__PURE__ */ e.jsx(
    n.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...r,
      children: /* @__PURE__ */ e.jsx("div", { className: i("pt-0 pb-4", t), children: o })
    }
  );
}
export {
  l as Accordion,
  f as AccordionContent,
  m as AccordionItem,
  u as AccordionTrigger
};
