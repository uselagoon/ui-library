import { j as o } from "./index.es70.js";
import { Accordion as i, AccordionItem as d, AccordionTrigger as e, AccordionContent as t } from "./index.es6.js";
function j({ items: n, ...c }) {
  return /* @__PURE__ */ o.jsx(i, { ...c, children: n.map((r) => /* @__PURE__ */ o.jsxs(d, { value: r.id, children: [
    /* @__PURE__ */ o.jsx(e, { children: r.trigger }),
    /* @__PURE__ */ o.jsx(t, { children: r.content })
  ] }, r.id)) });
}
export {
  j as default
};
