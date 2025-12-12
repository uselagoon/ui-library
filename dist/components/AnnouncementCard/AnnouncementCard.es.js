import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { useState as u } from "react";
import { Card as p, CardHeader as h, CardContent as g } from "../ui/card.es.js";
import { X as b, BotMessageSquare as x } from "lucide-react";
import { cn as N } from "../../lib/utils.es.js";
function S({
  title: n = "Latest Changes",
  description: r,
  ctaText: s = "See What's New",
  ctaUrl: t = "https://docs.lagoon.sh/releases/2.29.2/",
  // hardcoded for now, need a way to make this dynamic in the future
  openInNewTab: o = !0,
  onClose: l,
  className: i = "[background:#dae8fd] ![color:#387eda] [box-shadow:var(--badge-ring)]",
  defaultLogo: c = !1
}) {
  const [d, m] = u(!0), f = () => {
    m(!1), l?.();
  };
  return d ? /* @__PURE__ */ a(p, { className: N("m-2 w-auto bg-[#737373]/20 gap-0  !p-4", i), children: [
    /* @__PURE__ */ e(
      "button",
      {
        onClick: f,
        className: "absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
        "aria-label": "Close announcement",
        children: /* @__PURE__ */ e(b, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ e(h, { className: "relative pb-0 !px-3", children: /* @__PURE__ */ a("div", { className: "flex flex-row items-center gap-2", children: [
      c && /* @__PURE__ */ e(x, { className: "h-5 w-5 flex-shrink-0" }),
      n && /* @__PURE__ */ e("p", { className: "text-sm font-bold leading-[1.4]", children: n })
    ] }) }),
    /* @__PURE__ */ a(g, { className: `!px-3 ${r ? "pt-2 space-y-2" : ""}`, children: [
      /* @__PURE__ */ e("p", { className: "text-sm font-normal leading-[1.4]", children: r }),
      /* @__PURE__ */ e(
        "a",
        {
          href: t,
          target: o ? "_blank" : void 0,
          rel: o ? "noopener noreferrer" : void 0,
          className: "text-sm font-normal underline hover:no-underline promo-link__ai",
          children: s
        }
      )
    ] })
  ] }) : null;
}
export {
  S as default
};
