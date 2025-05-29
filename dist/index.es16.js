import * as a from "react";
import { cn as r } from "./index.es54.js";
function l({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "card",
      className: r(
        "lib:bg-card lib:text-card-foreground lib:flex lib:flex-col lib:gap-6 lib:rounded-xl lib:border lib:py-6 lib:shadow-sm",
        t
      ),
      ...e
    }
  );
}
function o({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "card-header",
      className: r(
        "lib:@container/card-header lib:grid lib:auto-rows-min lib:grid-rows-[auto_auto] lib:items-start lib:gap-1.5 lib:px-6 has-data-[slot=card-action]:lib:grid-cols-[1fr_auto] [.border-b]:lib:pb-6",
        t
      ),
      ...e
    }
  );
}
function d({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement("div", { "data-slot": "card-title", className: r("lib:leading-none lib:font-semibold", t), ...e });
}
function n({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement("div", { "data-slot": "card-description", className: r("lib:text-muted-foreground lib:text-sm", t), ...e });
}
function c({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "card-action",
      className: r("lib:col-start-2 lib:row-span-2 lib:row-start-1 lib:self-start lib:justify-self-end", t),
      ...e
    }
  );
}
function s({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement("div", { "data-slot": "card-content", className: r("lib:px-6", t), ...e });
}
function b({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "card-footer",
      className: r("lib:flex lib:items-center lib:px-6 [.border-t]:lib:pt-6", t),
      ...e
    }
  );
}
export {
  l as Card,
  c as CardAction,
  s as CardContent,
  n as CardDescription,
  b as CardFooter,
  o as CardHeader,
  d as CardTitle
};
