import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { Accordion as d, AccordionItem as e, AccordionTrigger as t, AccordionContent as l } from "./index.es6.js";
function f({ items: c, ...n }) {
  return /* @__PURE__ */ o(d, { ...n, children: c.map((r) => /* @__PURE__ */ i(e, { value: r.id, children: [
    /* @__PURE__ */ o(t, { children: r.trigger }),
    /* @__PURE__ */ o(l, { children: r.content })
  ] }, r.id)) });
}
export {
  f as default
};
