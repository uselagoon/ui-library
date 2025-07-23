import { j as s } from "./index.es70.js";
import { cva as m } from "class-variance-authority";
import { cn as n } from "./index.es71.js";
const l = m("rounded-full h-6 w-6 min-w-[24px] flex justify-center items-center mr-2 text-xs");
function f({ bgColor: r, textColor: t, className: e, children: o, ...a }) {
  return /* @__PURE__ */ s.jsx("div", { ...a, className: n(l(), e), style: { backgroundColor: r, color: t }, children: o });
}
export {
  f as default
};
