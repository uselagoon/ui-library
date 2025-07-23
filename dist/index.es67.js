import { j as s } from "./index.es70.js";
import { Label as i } from "./index.es29.js";
import { Switch as c } from "./index.es45.js";
function o({ id: e, label: t, description: r, ...a }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "flex space-x-2", children: [
    /* @__PURE__ */ s.jsx(c, { id: e, ...a }),
    /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ s.jsx(i, { className: "pt-[3px]", htmlFor: e, children: t }),
      /* @__PURE__ */ s.jsx("span", { className: "text-[#737373]", children: r })
    ] })
  ] });
}
export {
  o as default
};
