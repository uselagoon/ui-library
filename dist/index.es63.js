import { j as t } from "./index.es70.js";
import { Label as o } from "./index.es29.js";
import { Input as m } from "./index.es28.js";
import { cva as i } from "class-variance-authority";
const l = i("w-full rounded-lg bg-background", {
  variants: {
    hasIcon: {
      true: "pl-8",
      false: ""
    }
  }
});
function f({ label: s, placeholder: e = "", icon: r, description: a, ...n }) {
  return /* @__PURE__ */ t.jsxs("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
    /* @__PURE__ */ t.jsx(o, { htmlFor: `${s}-input`, children: s }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
      r && /* @__PURE__ */ t.jsx("div", { className: "absolute left-2.5 top-1.5 h-2.5 w-2.5 text-muted-foreground", children: r }),
      /* @__PURE__ */ t.jsx(
        m,
        {
          className: l({ hasIcon: !!r }),
          id: `${s}-input`,
          placeholder: e,
          ...n
        }
      ),
      a && /* @__PURE__ */ t.jsx("p", { className: "font-sans font-normal text-sm leading-[1.5] tracking-[0%] text-muted-foreground", children: a })
    ] })
  ] });
}
export {
  f as default
};
