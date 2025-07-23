import { j as n } from "./index.es70.js";
import { isValidElement as m } from "react";
import l from "./index.es55.js";
import { cva as f } from "class-variance-authority";
const p = f("font-sans font-normal text-lg leading-normal tracking-normal text-right", {
  variants: {
    transform: {
      lowercase: "lowercase",
      capitalize: "capitalize",
      none: ""
    }
  },
  defaultVariants: {
    transform: "none"
  }
});
function s(t) {
  return t.toLowerCase().replace(/\s+/g, "-");
}
const w = ({ title: t, value: a, lowercaseValue: e, capitalizeValue: o }) => {
  const i = m(a);
  let r = "";
  e && (r = "lowercase"), o && (r = "capitalize");
  const c = i ? /* @__PURE__ */ n.jsx("div", { className: r, "data-cy": s(t), children: a }) : /* @__PURE__ */ n.jsx(
    "span",
    {
      className: p({
        transform: e ? "lowercase" : o ? "capitalize" : "none"
      }),
      "data-cy": s(t),
      children: a
    }
  );
  return /* @__PURE__ */ n.jsx(l, { type: "stat", title: t, content: c });
};
export {
  w as default
};
