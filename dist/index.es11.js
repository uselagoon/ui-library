import * as t from "react";
import * as r from "@radix-ui/react-avatar";
import { cn as l } from "./index.es54.js";
function o({
  className: a,
  ...e
}) {
  return /* @__PURE__ */ t.createElement(
    r.Root,
    {
      "data-slot": "avatar",
      className: l(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        a
      ),
      ...e
    }
  );
}
function s({
  className: a,
  ...e
}) {
  return /* @__PURE__ */ t.createElement(
    r.Image,
    {
      "data-slot": "avatar-image",
      className: l("aspect-square size-full", a),
      ...e
    }
  );
}
function i({
  className: a,
  ...e
}) {
  return /* @__PURE__ */ t.createElement(
    r.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: l(
        "bg-muted flex size-full items-center justify-center rounded-full",
        a
      ),
      ...e
    }
  );
}
export {
  o as Avatar,
  i as AvatarFallback,
  s as AvatarImage
};
