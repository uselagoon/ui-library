import * as a from "react";
import { cn as r } from "./index.es54.js";
function d({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "card",
      className: r("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", t),
      ...e
    }
  );
}
function n({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "card-header",
      className: r(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        t
      ),
      ...e
    }
  );
}
function c({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement("div", { "data-slot": "card-title", className: r("leading-none font-semibold", t), ...e });
}
function s({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement("div", { "data-slot": "card-description", className: r("text-muted-foreground text-sm", t), ...e });
}
function i({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "card-action",
      className: r("col-start-2 row-span-2 row-start-1 self-start justify-self-end", t),
      ...e
    }
  );
}
function l({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement("div", { "data-slot": "card-content", className: r("px-6", t), ...e });
}
function m({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement("div", { "data-slot": "card-footer", className: r("flex items-center px-6 [.border-t]:pt-6", t), ...e });
}
export {
  d as Card,
  i as CardAction,
  l as CardContent,
  s as CardDescription,
  m as CardFooter,
  n as CardHeader,
  c as CardTitle
};
//# sourceMappingURL=index.es16.js.map
