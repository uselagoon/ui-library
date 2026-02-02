import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { useState as y, useEffect as _ } from "react";
import { Card as L, CardHeader as V, CardContent as E } from "../ui/card.es.js";
import { BotMessageSquare as K, X as j } from "lucide-react";
import { cn as A } from "../../lib/utils.es.js";
import { getLocalStorage as f, setLocalStorage as d } from "../../_util/helpers.es.js";
import { cva as D } from "class-variance-authority";
const I = D(
  "m-2 w-auto gap-0 !p-4",
  {
    variants: {
      variant: {
        marketing: "bg-[#737373]/20",
        changelog: "[background:#dae8fd] ![color:#387eda] [box-shadow:var(--badge-ring)]"
      }
    },
    defaultVariants: {
      variant: "changelog"
    }
  }
), o = "promo-card-dismissed";
function u(e) {
  return e ? `announcement-dismissed-${e}` : o;
}
function M({
  id: e,
  variant: r,
  icon: s,
  title: t = "Latest Changes",
  description: l,
  ctaText: g = "See What's New",
  ctaUrl: h = "https://docs.lagoon.sh/releases/2.30.0/",
  openInNewTab: c = !0,
  onClose: p,
  className: x,
  defaultLogo: v = !1,
  disabled: b = !1
}) {
  const [N, i] = y(!1);
  _(() => {
    const m = u(e);
    e && f(o) === !0 && e === "whats-new" && (d(m, !0, 30), localStorage.removeItem(o));
    const k = f(m) === !0;
    i(!k);
  }, [e]);
  const C = () => {
    i(!1), p?.(e), d(u(e), !0, 30);
  };
  if (!N || b)
    return null;
  const w = s || v || r === "changelog", S = s || K;
  return /* @__PURE__ */ n(L, { className: A(I({ variant: r }), x), children: [
    /* @__PURE__ */ a(V, { className: "relative pb-0 !px-3", children: /* @__PURE__ */ n("div", { className: "flex flex-row items-center gap-2", children: [
      w && /* @__PURE__ */ a(S, { className: "h-5 w-5 flex-shrink-0" }),
      t && /* @__PURE__ */ a("p", { className: "text-sm font-bold leading-[1.4] flex-1", children: t }),
      /* @__PURE__ */ a(
        "button",
        {
          onClick: C,
          className: "rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 disabled:pointer-events-none flex-shrink-0 -mr-1 -mt-1",
          "aria-label": "Close announcement",
          children: /* @__PURE__ */ a(j, { className: "h-4 w-4" })
        }
      )
    ] }) }),
    /* @__PURE__ */ n(E, { className: `!px-3 ${l ? "pt-2 space-y-2" : ""}`, children: [
      /* @__PURE__ */ a("p", { className: "text-sm font-normal leading-[1.4]", children: l }),
      /* @__PURE__ */ a(
        "a",
        {
          href: h,
          target: c ? "_blank" : void 0,
          rel: c ? "noopener noreferrer" : void 0,
          className: "text-sm font-normal underline hover:no-underline promo-link__ai",
          children: g
        }
      )
    ] })
  ] });
}
export {
  M as default
};
