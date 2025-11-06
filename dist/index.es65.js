import { jsxs as e, jsx as n } from "react/jsx-runtime";
import { useState as u } from "react";
import { Card as p, CardHeader as h, CardContent as g } from "./index.es15.js";
import { BotMessageSquare as b, X as x } from "lucide-react";
import { cn as N } from "./index.es71.js";
function _({
  brand: r,
  title: a,
  description: s,
  ctaText: t,
  ctaUrl: i,
  openInNewTab: o = !0,
  onClose: l,
  className: c
}) {
  const [m, d] = u(!0), f = () => {
    d(!1), l?.();
  };
  return m ? /* @__PURE__ */ e(p, { className: N("m-2 w-auto bg-[#737373]/20 gap-0", c), children: [
    /* @__PURE__ */ e(h, { className: "relative pb-0", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center gap-2", children: [
        /* @__PURE__ */ n(b, { className: "h-5 w-5 flex-shrink-0" }),
        r && /* @__PURE__ */ n("p", { className: "text-sm font-bold leading-[1.4]", children: r })
      ] }),
      /* @__PURE__ */ n(
        "button",
        {
          onClick: f,
          className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
          "aria-label": "Close announcement",
          children: /* @__PURE__ */ n(x, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ e(g, { className: "space-y-2 pt-2", children: [
      /* @__PURE__ */ e("p", { className: "text-sm font-normal leading-[1.4]", children: [
        a,
        " ",
        s
      ] }),
      /* @__PURE__ */ n(
        "a",
        {
          href: i,
          target: o ? "_blank" : void 0,
          rel: o ? "noopener noreferrer" : void 0,
          className: "text-sm font-normal underline hover:no-underline promo-link__ai",
          children: t
        }
      )
    ] })
  ] }) : null;
}
export {
  _ as default
};
