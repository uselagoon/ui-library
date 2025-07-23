import { j as e } from "./index.es70.js";
import { Select as i, SelectTrigger as u, SelectValue as x, SelectContent as j, SelectGroup as m, SelectLabel as S, SelectItem as s } from "./index.es38.js";
function h(r) {
  return Array.isArray(r) && "options" in r[0];
}
function f({ placeholder: r, options: a, disabled: c, ...n }) {
  return /* @__PURE__ */ e.jsxs(i, { disabled: c, ...n, children: [
    /* @__PURE__ */ e.jsx(u, { className: "w-[266px]", children: /* @__PURE__ */ e.jsx(x, { placeholder: r || "Make a selection" }) }),
    !c && a && /* @__PURE__ */ e.jsx(j, { children: h(a) ? a.map((l) => /* @__PURE__ */ e.jsxs(m, { children: [
      /* @__PURE__ */ e.jsx(S, { children: l.label }),
      l.options.map((t) => /* @__PURE__ */ e.jsx(s, { value: String(t.value), children: t.label }, t.value))
    ] }, l.label)) : a.map((l) => /* @__PURE__ */ e.jsx(s, { value: String(l.value), children: l.label }, l.value)) })
  ] });
}
export {
  f as default
};
