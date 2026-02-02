import { jsxs as x, jsx as n } from "react/jsx-runtime";
import { useState as i, useEffect as g, useCallback as E } from "react";
import { Carousel as L, CarouselContent as D, CarouselItem as G } from "../ui/carousel.es.js";
import K from "../AnnouncementCard/AnnouncementCard.es.js";
import { getLocalStorage as p, setLocalStorage as C } from "../../_util/helpers.es.js";
import { cn as d } from "../../lib/utils.es.js";
const f = "promo-card-dismissed";
function m(o) {
  return o ? `announcement-dismissed-${o}` : f;
}
function O(o) {
  return p(m(o)) === !0;
}
function q({
  cards: o,
  showDots: w = !0,
  expiryDays: l = 30,
  className: S
}) {
  const [t, b] = i(), [r, h] = i([]), [N, I] = i(!1), [v, A] = i(0);
  g(() => {
    p(f) === !0 && o.find((c) => c.id === "whats-new") && (C(m("whats-new"), !0, l), localStorage.removeItem(f));
    const e = o.filter((s) => !O(s.id));
    h(e), I(!0);
  }, [o, l]), g(() => {
    if (!t) return;
    const e = () => {
      A(t.selectedScrollSnap());
    };
    return t.on("select", e), e(), () => {
      t.off("select", e);
    };
  }, [t]);
  const T = E((e) => {
    e && C(m(e), !0, l);
    const s = t?.selectedScrollSnap() ?? 0;
    h((c) => {
      const a = c.filter((u) => u.id !== e);
      if (t && a.length > 0) {
        const u = s >= a.length ? a.length - 1 : s;
        setTimeout(() => {
          t.scrollTo(u);
        }, 0);
      }
      return a;
    });
  }, [t, l]), j = (e) => {
    t?.scrollTo(e);
  };
  if (!N || r.length === 0)
    return null;
  const k = w && r.length > 1;
  return /* @__PURE__ */ x("div", { className: d("w-full", S), children: [
    /* @__PURE__ */ n(
      L,
      {
        setApi: b,
        opts: {
          align: "start",
          loop: !1
        },
        children: /* @__PURE__ */ n(D, { className: "-ml-0", children: r.map((e) => /* @__PURE__ */ n(G, { className: "pl-0 flex items-end", children: /* @__PURE__ */ n(
          K,
          {
            ...e,
            onClose: T,
            disabled: !1,
            className: d("w-full", e.className)
          }
        ) }, e.id || "default")) })
      }
    ),
    k && /* @__PURE__ */ n("div", { className: "flex justify-center gap-1.5 mt-0.5", children: r.map((e, s) => /* @__PURE__ */ n(
      "button",
      {
        onClick: () => j(s),
        className: d(
          "h-1.5 w-1.5 rounded-full transition-colors",
          s === v ? "bg-foreground" : "bg-foreground/30 hover:bg-foreground/50"
        ),
        "aria-label": `Go to slide ${s + 1}`
      },
      e.id || s
    )) })
  ] });
}
export {
  q as default
};
