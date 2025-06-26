import { j as t } from "./index.es64.js";
import o from "./index.es55.js";
function l({ name: e, category: n, value: s, img: a }) {
  const r = /* @__PURE__ */ t.jsxs("section", { className: "flex-row justify-items-end font-sans font-normal text-xs leading-[1.25] tracking-normal text-right", children: [
    a,
    /* @__PURE__ */ t.jsx("span", { className: "name", children: e }),
    /* @__PURE__ */ t.jsx("br", {}),
    /* @__PURE__ */ t.jsx("span", { className: "value", children: s })
  ] });
  return /* @__PURE__ */ t.jsx(o, { type: "withIcon", title: n, content: r });
}
export {
  l as default
};
