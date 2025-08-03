import { jsxs as i, jsx as l } from "react/jsx-runtime";
import { Select as h, SelectTrigger as m, SelectValue as d, SelectContent as s, SelectGroup as v, SelectLabel as f, SelectItem as n } from "./index.es38.js";
function y(a) {
  return Array.isArray(a) && "options" in a[0];
}
function x({ placeholder: a, options: r, disabled: t, width: u, ...S }) {
  return /* @__PURE__ */ i(h, { disabled: t, ...S, children: [
    /* @__PURE__ */ l(m, { className: `w-[${u ?? "266px"}]`, children: /* @__PURE__ */ l(d, { placeholder: a || "Make a selection" }) }),
    !t && r && Array.isArray(r) && /* @__PURE__ */ l(s, { children: y(r) ? r.map((e) => /* @__PURE__ */ i(v, { children: [
      /* @__PURE__ */ l(f, { children: e.label }),
      e.options.map((c) => /* @__PURE__ */ l(n, { value: String(c.value), children: c.label }, c.value))
    ] }, e.label)) : r.map((e) => /* @__PURE__ */ l(n, { value: String(e.value), children: e.label }, e.value)) })
  ] });
}
export {
  x as default
};
