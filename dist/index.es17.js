import * as e from "react";
import S from "embla-carousel-react";
import { ArrowLeft as y, ArrowRight as P } from "lucide-react";
import { cn as f } from "./index.es54.js";
import { Button as x } from "./index.es14.js";
const v = e.createContext(null);
function m() {
  const o = e.useContext(v);
  if (!o)
    throw new Error("useCarousel must be used within a <Carousel />");
  return o;
}
function D({
  orientation: o = "horizontal",
  opts: r,
  setApi: l,
  plugins: n,
  className: s,
  children: c,
  ...i
}) {
  const [N, t] = S(
    {
      ...r,
      axis: o === "horizontal" ? "x" : "y"
    },
    n
  ), [h, p] = e.useState(!1), [E, b] = e.useState(!1), u = e.useCallback((a) => {
    a && (p(a.canScrollPrev()), b(a.canScrollNext()));
  }, []), d = e.useCallback(() => {
    t?.scrollPrev();
  }, [t]), C = e.useCallback(() => {
    t?.scrollNext();
  }, [t]), w = e.useCallback(
    (a) => {
      a.key === "ArrowLeft" ? (a.preventDefault(), d()) : a.key === "ArrowRight" && (a.preventDefault(), C());
    },
    [d, C]
  );
  return e.useEffect(() => {
    !t || !l || l(t);
  }, [t, l]), e.useEffect(() => {
    if (t)
      return u(t), t.on("reInit", u), t.on("select", u), () => {
        t?.off("select", u);
      };
  }, [t, u]), /* @__PURE__ */ e.createElement(
    v.Provider,
    {
      value: {
        carouselRef: N,
        api: t,
        opts: r,
        orientation: o || (r?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: d,
        scrollNext: C,
        canScrollPrev: h,
        canScrollNext: E
      }
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        onKeyDownCapture: w,
        className: f("relative", s),
        role: "region",
        "aria-roledescription": "carousel",
        "data-slot": "carousel",
        ...i
      },
      c
    )
  );
}
function A({ className: o, ...r }) {
  const { carouselRef: l, orientation: n } = m();
  return /* @__PURE__ */ e.createElement("div", { ref: l, className: "overflow-hidden", "data-slot": "carousel-content" }, /* @__PURE__ */ e.createElement("div", { className: f("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", o), ...r }));
}
function I({ className: o, ...r }) {
  const { orientation: l } = m();
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: f("min-w-0 shrink-0 grow-0 basis-full", l === "horizontal" ? "pl-4" : "pt-4", o),
      ...r
    }
  );
}
function K({
  className: o,
  variant: r = "outline",
  size: l = "icon",
  ...n
}) {
  const { orientation: s, scrollPrev: c, canScrollPrev: i } = m();
  return /* @__PURE__ */ e.createElement(
    x,
    {
      "data-slot": "carousel-previous",
      variant: r,
      size: l,
      className: f(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        o
      ),
      disabled: !i,
      onClick: c,
      ...n
    },
    /* @__PURE__ */ e.createElement(y, null),
    /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, "Previous slide")
  );
}
function L({
  className: o,
  variant: r = "outline",
  size: l = "icon",
  ...n
}) {
  const { orientation: s, scrollNext: c, canScrollNext: i } = m();
  return /* @__PURE__ */ e.createElement(
    x,
    {
      "data-slot": "carousel-next",
      variant: r,
      size: l,
      className: f(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        o
      ),
      disabled: !i,
      onClick: c,
      ...n
    },
    /* @__PURE__ */ e.createElement(P, null),
    /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, "Next slide")
  );
}
export {
  D as Carousel,
  A as CarouselContent,
  I as CarouselItem,
  L as CarouselNext,
  K as CarouselPrevious
};
//# sourceMappingURL=index.es17.js.map
