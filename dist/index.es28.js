import * as t from "react";
import { OTPInput as s, OTPInputContext as d } from "input-otp";
import { MinusIcon as u } from "lucide-react";
import { cn as a } from "./index.es54.js";
function v({
  className: e,
  containerClassName: i,
  ...r
}) {
  return /* @__PURE__ */ t.createElement(
    s,
    {
      "data-slot": "input-otp",
      containerClassName: a("flex items-center gap-2 has-disabled:opacity-50", i),
      className: a("disabled:lib:cursor-not-allowed", e),
      ...r
    }
  );
}
function f({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement("div", { "data-slot": "input-otp-group", className: a("lib:flex lib:items-center", e), ...i });
}
function x({
  index: e,
  className: i,
  ...r
}) {
  const l = t.useContext(d), { char: n, hasFakeCaret: o, isActive: b } = l?.slots[e] ?? {};
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": b,
      className: a(
        "data-[active=true]:lib:border-ring data-[active=true]:lib:ring-ring/50 data-[active=true]:aria-invalid:lib:ring-destructive/20 dark:data-[active=true]:aria-invalid:lib:ring-destructive/40 aria-invalid:lib:border-destructive data-[active=true]:aria-invalid:lib:border-destructive dark:lib:bg-input/30 lib:border-input lib:relative lib:flex lib:h-9 lib:w-9 lib:items-center lib:justify-center lib:border-y lib:border-r lib:text-sm lib:shadow-xs lib:transition-all lib:outline-none first:lib:rounded-l-md first:lib:border-l last:lib:rounded-r-md data-[active=true]:lib:z-10 data-[active=true]:lib:ring-[3px]",
        i
      ),
      ...r
    },
    n,
    o && /* @__PURE__ */ t.createElement("div", { className: "lib:pointer-events-none lib:absolute lib:inset-0 lib:flex lib:items-center lib:justify-center" }, /* @__PURE__ */ t.createElement("div", { className: "lib:animate-caret-blink lib:bg-foreground lib:h-4 lib:w-px lib:duration-1000" }))
  );
}
function g({ ...e }) {
  return /* @__PURE__ */ t.createElement("div", { "data-slot": "input-otp-separator", role: "separator", ...e }, /* @__PURE__ */ t.createElement(u, null));
}
export {
  v as InputOTP,
  f as InputOTPGroup,
  g as InputOTPSeparator,
  x as InputOTPSlot
};
