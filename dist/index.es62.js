import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { Select as h, SelectTrigger as m, SelectValue as d, SelectContent as s, SelectGroup as v, SelectLabel as f, SelectItem as i } from "./index.es38.js";
function b(r) {
  return Array.isArray(r) && "options" in r[0];
}
function y({ placeholder: r, options: a, disabled: t, width: u, ...S }) {
  return /* @__PURE__ */ n(h, { disabled: t, ...S, children: [
    /* @__PURE__ */ l(m, { className: `w-[${u ?? "266px"}]`, children: /* @__PURE__ */ l(d, { placeholder: r || "Make a selection" }) }),
    !t && a && /* @__PURE__ */ l(s, { children: b(a) ? a.map((e) => /* @__PURE__ */ n(v, { children: [
      /* @__PURE__ */ l(f, { children: e.label }),
      e.options.map((c) => /* @__PURE__ */ l(i, { value: String(c.value), children: c.label }, c.value))
    ] }, e.label)) : a.map((e) => /* @__PURE__ */ l(i, { value: String(e.value), children: e.label }, e.value)) })
  ] });
}
export {
  y as default
};
