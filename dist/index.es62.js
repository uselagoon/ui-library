import { j as e } from "./index.es70.js";
import { Select as u, SelectTrigger as x, SelectValue as j, SelectContent as m, SelectGroup as S, SelectLabel as h, SelectItem as s } from "./index.es38.js";
function d(r) {
  return Array.isArray(r) && "options" in r[0];
}
function p({ placeholder: r, options: a, disabled: c, width: n, ...i }) {
  return /* @__PURE__ */ e.jsxs(u, { disabled: c, ...i, children: [
    /* @__PURE__ */ e.jsx(x, { className: `w-[${n ?? "266px"}]`, children: /* @__PURE__ */ e.jsx(j, { placeholder: r || "Make a selection" }) }),
    !c && a && /* @__PURE__ */ e.jsx(m, { children: d(a) ? a.map((l) => /* @__PURE__ */ e.jsxs(S, { children: [
      /* @__PURE__ */ e.jsx(h, { children: l.label }),
      l.options.map((t) => /* @__PURE__ */ e.jsx(s, { value: String(t.value), children: t.label }, t.value))
    ] }, l.label)) : a.map((l) => /* @__PURE__ */ e.jsx(s, { value: String(l.value), children: l.label }, l.value)) })
  ] });
}
export {
  p as default
};
