import { j as a } from "./index.es70.js";
import { Card as e, CardHeader as s, CardTitle as l, CardContent as o } from "./index.es15.js";
import { cva as d } from "class-variance-authority";
import { cn as i } from "./index.es71.js";
const m = d("max-w-[160px] border rounded-lg flex flex-col justify-center", {
  variants: {
    type: {
      default: "h-[108px]",
      withIcon: "h-[125px] gap-2 p-6",
      stat: "w-[370px] max-w-[370px] h-[140px] gap-3 p-5"
    }
  },
  defaultVariants: {
    type: "default"
  }
});
function u({ type: t = "default", title: n, content: r }) {
  return /* @__PURE__ */ a.jsxs(e, { className: i(m({ type: t })), children: [
    /* @__PURE__ */ a.jsx(s, { children: /* @__PURE__ */ a.jsx(
      l,
      {
        className: t === "stat" ? "font-sans font-light text-sm leading-[1.4] tracking-normal" : "font-sans font-medium text-sm leading-[1.5] tracking-normal",
        children: n
      }
    ) }),
    /* @__PURE__ */ a.jsx(o, { children: t === "stat" ? /* @__PURE__ */ a.jsx("section", { className: "font-sans font-normal leading-[1.75] tracking-normal", children: r }) : t === "default" ? /* @__PURE__ */ a.jsx("p", { className: "text-2xl leading-normal font-bold ml-auto w-max", children: r }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: r }) })
  ] });
}
export {
  m as cardVariants,
  u as default
};
