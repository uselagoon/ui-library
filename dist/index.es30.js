import * as a from "react";
import * as o from "@radix-ui/react-label";
import { cn as r } from "./index.es54.js";
function n({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.createElement(
    o.Root,
    {
      "data-slot": "label",
      className: r(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
export {
  n as Label
};
