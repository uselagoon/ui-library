import { j as e } from "./index.es64.js";
import { Checkbox as s } from "./index.es18.js";
import { Label as a } from "./index.es29.js";
function i({ label: t, id: r, ...o }) {
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ e.jsx(s, { id: r, ...o }),
    /* @__PURE__ */ e.jsx(a, { htmlFor: r, children: t })
  ] }) });
}
i.displayName = "CheckboxWithLabel";
export {
  i as default
};
