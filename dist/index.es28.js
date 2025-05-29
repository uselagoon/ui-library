import * as t from "react";
import { OTPInput as u, OTPInputContext as c } from "input-otp";
import { MinusIcon as l } from "lucide-react";
import { cn as r } from "./index.es54.js";
function f({
  className: e,
  containerClassName: a,
  ...n
}) {
  return /* @__PURE__ */ t.createElement(
    u,
    {
      "data-slot": "input-otp",
      containerClassName: r("flex items-center gap-2 has-disabled:opacity-50", a),
      className: r("disabled:cursor-not-allowed", e),
      ...n
    }
  );
}
function b({ className: e, ...a }) {
  return /* @__PURE__ */ t.createElement("div", { "data-slot": "input-otp-group", className: r("flex items-center", e), ...a });
}
function x({
  index: e,
  className: a,
  ...n
}) {
  const i = t.useContext(c), { char: o, hasFakeCaret: s, isActive: d } = i?.slots[e] ?? {};
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": d,
      className: r(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        a
      ),
      ...n
    },
    o,
    s && /* @__PURE__ */ t.createElement("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ t.createElement("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }))
  );
}
function g({ ...e }) {
  return /* @__PURE__ */ t.createElement("div", { "data-slot": "input-otp-separator", role: "separator", ...e }, /* @__PURE__ */ t.createElement(l, null));
}
export {
  f as InputOTP,
  b as InputOTPGroup,
  g as InputOTPSeparator,
  x as InputOTPSlot
};
//# sourceMappingURL=index.es28.js.map
