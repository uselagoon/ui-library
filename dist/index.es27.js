import { j as e } from "./index.es70.js";
import * as u from "react";
import { OTPInput as c, OTPInputContext as l } from "input-otp";
import { MinusIcon as p } from "lucide-react";
import { cn as a } from "./index.es71.js";
function b({
  className: t,
  containerClassName: r,
  ...i
}) {
  return /* @__PURE__ */ e.jsx(
    c,
    {
      "data-slot": "input-otp",
      containerClassName: a("flex items-center gap-2 has-disabled:opacity-50", r),
      className: a("disabled:cursor-not-allowed", t),
      ...i
    }
  );
}
function g({ className: t, ...r }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "input-otp-group", className: a("flex items-center", t), ...r });
}
function j({
  index: t,
  className: r,
  ...i
}) {
  const n = u.useContext(l), { char: o, hasFakeCaret: s, isActive: d } = n?.slots[t] ?? {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": d,
      className: a(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        r
      ),
      ...i,
      children: [
        o,
        s && /* @__PURE__ */ e.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function h({ ...t }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...t, children: /* @__PURE__ */ e.jsx(p, {}) });
}
export {
  b as InputOTP,
  g as InputOTPGroup,
  h as InputOTPSeparator,
  j as InputOTPSlot
};
