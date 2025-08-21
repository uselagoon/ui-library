import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { Select as d, SelectTrigger as S, SelectValue as s, SelectContent as i, SelectGroup as f, SelectLabel as v, SelectItem as u } from "./index.es38.js";
function x(a) {
  return Array.isArray(a) && a.length > 0 && "options" in a[0];
}
function A({ placeholder: a, options: r, disabled: c, width: h, ...m }) {
  return /* @__PURE__ */ n(d, { disabled: c, ...m, children: [
    /* @__PURE__ */ l(S, { className: `w-[${h ?? "266px"}]`, children: /* @__PURE__ */ l(s, { placeholder: a || "Make a selection" }) }),
    !c && r && Array.isArray(r) && (r.length > 0 ? /* @__PURE__ */ l(i, { children: x(r) ? r.map((e) => /* @__PURE__ */ n(f, { children: [
      /* @__PURE__ */ l(v, { children: e.label }),
      e.options.map((t) => /* @__PURE__ */ l(u, { value: String(t.value), children: t.label }, t.value))
    ] }, e.label)) : r.map((e) => /* @__PURE__ */ l(u, { value: String(e.value), children: e.label }, e.value)) }) : /* @__PURE__ */ l(i, { className: "text-center text-muted-foreground", children: "No options" }))
  ] });
}
export {
  A as default
};
