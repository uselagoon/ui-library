import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { Label as i } from "./index.es29.js";
import { Switch as l } from "./index.es45.js";
function n({ id: s, label: t, description: a, ...c }) {
  return /* @__PURE__ */ r("div", { className: "flex space-x-2", children: [
    /* @__PURE__ */ e(l, { id: s, ...c }),
    /* @__PURE__ */ r("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(i, { className: "pt-[3px]", htmlFor: s, children: t }),
      /* @__PURE__ */ e("span", { className: "text-[#737373]", children: a })
    ] })
  ] });
}
export {
  n as default
};
