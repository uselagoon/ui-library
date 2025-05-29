import * as l from "react";
import * as t from "@radix-ui/react-avatar";
import { cn as i } from "./index.es54.js";
function n({ className: a, ...e }) {
  return /* @__PURE__ */ l.createElement(
    t.Root,
    {
      "data-slot": "avatar",
      className: i("lib:relative lib:flex lib:size-8 lib:shrink-0 lib:overflow-hidden lib:rounded-full", a),
      ...e
    }
  );
}
function o({ className: a, ...e }) {
  return /* @__PURE__ */ l.createElement(
    t.Image,
    {
      "data-slot": "avatar-image",
      className: i("lib:aspect-square lib:size-full", a),
      ...e
    }
  );
}
function s({ className: a, ...e }) {
  return /* @__PURE__ */ l.createElement(
    t.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: i(
        "lib:bg-muted lib:flex lib:size-full lib:items-center lib:justify-center lib:rounded-full",
        a
      ),
      ...e
    }
  );
}
export {
  n as Avatar,
  s as AvatarFallback,
  o as AvatarImage
};
