import { j as l } from "./index.es64.js";
import * as s from "react";
import y from "embla-carousel-react";
import { ArrowLeft as P, ArrowRight as k } from "lucide-react";
import { cn as x } from "./index.es65.js";
import { Button as h } from "./index.es13.js";
const v = s.createContext(null);
function d() {
  const o = s.useContext(v);
  if (!o)
    throw new Error("useCarousel must be used within a <Carousel />");
  return o;
}
function A({
  orientation: o = "horizontal",
  opts: r,
  setApi: t,
  plugins: n,
  className: c,
  children: i,
  ...u
}) {
  const [p, e] = y(
    {
      ...r,
      axis: o === "horizontal" ? "x" : "y"
    },
    n
  ), [N, j] = s.useState(!1), [b, w] = s.useState(!1), f = s.useCallback((a) => {
    a && (j(a.canScrollPrev()), w(a.canScrollNext()));
  }, []), m = s.useCallback(() => {
    e?.scrollPrev();
  }, [e]), C = s.useCallback(() => {
    e?.scrollNext();
  }, [e]), S = s.useCallback(
    (a) => {
      a.key === "ArrowLeft" ? (a.preventDefault(), m()) : a.key === "ArrowRight" && (a.preventDefault(), C());
    },
    [m, C]
  );
  return s.useEffect(() => {
    !e || !t || t(e);
  }, [e, t]), s.useEffect(() => {
    if (e)
      return f(e), e.on("reInit", f), e.on("select", f), () => {
        e?.off("select", f);
      };
  }, [e, f]), /* @__PURE__ */ l.jsx(
    v.Provider,
    {
      value: {
        carouselRef: p,
        api: e,
        opts: r,
        orientation: o || (r?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: m,
        scrollNext: C,
        canScrollPrev: N,
        canScrollNext: b
      },
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          onKeyDownCapture: S,
          className: x("relative", c),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...u,
          children: i
        }
      )
    }
  );
}
function I({ className: o, ...r }) {
  const { carouselRef: t, orientation: n } = d();
  return /* @__PURE__ */ l.jsx("div", { ref: t, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ l.jsx("div", { className: x("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", o), ...r }) });
}
function K({ className: o, ...r }) {
  const { orientation: t } = d();
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: x("min-w-0 shrink-0 grow-0 basis-full", t === "horizontal" ? "pl-4" : "pt-4", o),
      ...r
    }
  );
}
function L({
  className: o,
  variant: r = "outline",
  size: t = "icon",
  ...n
}) {
  const { orientation: c, scrollPrev: i, canScrollPrev: u } = d();
  return /* @__PURE__ */ l.jsxs(
    h,
    {
      "data-slot": "carousel-previous",
      variant: r,
      size: t,
      className: x(
        "absolute size-8 rounded-full",
        c === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        o
      ),
      disabled: !u,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ l.jsx(P, {}),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function B({
  className: o,
  variant: r = "outline",
  size: t = "icon",
  ...n
}) {
  const { orientation: c, scrollNext: i, canScrollNext: u } = d();
  return /* @__PURE__ */ l.jsxs(
    h,
    {
      "data-slot": "carousel-next",
      variant: r,
      size: t,
      className: x(
        "absolute size-8 rounded-full",
        c === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        o
      ),
      disabled: !u,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ l.jsx(k, {}),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
export {
  A as Carousel,
  I as CarouselContent,
  K as CarouselItem,
  B as CarouselNext,
  L as CarouselPrevious
};
