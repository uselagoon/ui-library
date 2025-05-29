import * as t from "react";
import * as l from "@radix-ui/react-label";
import { cn as a } from "./index.es54.js";
function r({ className: e, ...i }) {
  return /* @__PURE__ */ t.createElement(
    l.Root,
    {
      "data-slot": "label",
      className: a(
        "lib:flex lib:items-center lib:gap-2 lib:text-sm lib:leading-none lib:font-medium lib:select-none group-data-[disabled=true]:lib:pointer-events-none group-data-[disabled=true]:lib:opacity-50 peer-disabled:lib:cursor-not-allowed peer-disabled:lib:opacity-50",
        e
      ),
      ...i
    }
  );
}
export {
  r as Label
};
