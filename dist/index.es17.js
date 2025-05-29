import * as e from "react";
import S from "embla-carousel-react";
import { ArrowLeft as y, ArrowRight as P } from "lucide-react";
import { cn as b } from "./index.es54.js";
import { Button as C } from "./index.es14.js";
const x = e.createContext(null);
function f() {
  const t = e.useContext(x);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
function D({
  orientation: t = "horizontal",
  opts: o,
  setApi: r,
  plugins: n,
  className: i,
  children: s,
  ...c
}) {
  const [v, l] = S(
    {
      ...o,
      axis: t === "horizontal" ? "x" : "y"
    },
    n
  ), [N, h] = e.useState(!1), [p, E] = e.useState(!1), u = e.useCallback((a) => {
    a && (h(a.canScrollPrev()), E(a.canScrollNext()));
  }, []), m = e.useCallback(() => {
    l?.scrollPrev();
  }, [l]), d = e.useCallback(() => {
    l?.scrollNext();
  }, [l]), w = e.useCallback(
    (a) => {
      a.key === "ArrowLeft" ? (a.preventDefault(), m()) : a.key === "ArrowRight" && (a.preventDefault(), d());
    },
    [m, d]
  );
  return e.useEffect(() => {
    !l || !r || r(l);
  }, [l, r]), e.useEffect(() => {
    if (l)
      return u(l), l.on("reInit", u), l.on("select", u), () => {
        l?.off("select", u);
      };
  }, [l, u]), /* @__PURE__ */ e.createElement(
    x.Provider,
    {
      value: {
        carouselRef: v,
        api: l,
        opts: o,
        orientation: t || (o?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: m,
        scrollNext: d,
        canScrollPrev: N,
        canScrollNext: p
      }
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        onKeyDownCapture: w,
        className: b("lib:relative", i),
        role: "region",
        "aria-roledescription": "carousel",
        "data-slot": "carousel",
        ...c
      },
      s
    )
  );
}
function A({ className: t, ...o }) {
  const { carouselRef: r, orientation: n } = f();
  return /* @__PURE__ */ e.createElement("div", { ref: r, className: "lib:overflow-hidden", "data-slot": "carousel-content" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: b("lib:flex", n === "horizontal" ? "lib:-ml-4" : "lib:-mt-4 lib:flex-col", t),
      ...o
    }
  ));
}
function I({ className: t, ...o }) {
  const { orientation: r } = f();
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: b(
        "lib:min-w-0 lib:shrink-0 lib:grow-0 lib:basis-full",
        r === "horizontal" ? "lib:pl-4" : "lib:pt-4",
        t
      ),
      ...o
    }
  );
}
function K({
  className: t,
  variant: o = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollPrev: s, canScrollPrev: c } = f();
  return /* @__PURE__ */ e.createElement(
    C,
    {
      "data-slot": "carousel-previous",
      variant: o,
      size: r,
      className: b(
        "lib:absolute lib:size-8 lib:rounded-full",
        i === "horizontal" ? "lib:top-1/2 lib:-left-12 lib:-translate-y-1/2" : "lib:-top-12 lib:left-1/2 lib:-translate-x-1/2 lib:rotate-90",
        t
      ),
      disabled: !c,
      onClick: s,
      ...n
    },
    /* @__PURE__ */ e.createElement(y, null),
    /* @__PURE__ */ e.createElement("span", { className: "lib:sr-only" }, "Previous slide")
  );
}
function L({
  className: t,
  variant: o = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollNext: s, canScrollNext: c } = f();
  return /* @__PURE__ */ e.createElement(
    C,
    {
      "data-slot": "carousel-next",
      variant: o,
      size: r,
      className: b(
        "lib:absolute lib:size-8 lib:rounded-full",
        i === "horizontal" ? "lib:top-1/2 lib:-right-12 lib:-translate-y-1/2" : "lib:-bottom-12 lib:left-1/2 lib:-translate-x-1/2 lib:rotate-90",
        t
      ),
      disabled: !c,
      onClick: s,
      ...n
    },
    /* @__PURE__ */ e.createElement(P, null),
    /* @__PURE__ */ e.createElement("span", { className: "lib:sr-only" }, "Next slide")
  );
}
export {
  D as Carousel,
  A as CarouselContent,
  I as CarouselItem,
  L as CarouselNext,
  K as CarouselPrevious
};
