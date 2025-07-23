import { j as o } from "./index.es70.js";
import * as a from "@radix-ui/react-label";
import { cn as r } from "./index.es71.js";
function s({ className: e, ...t }) {
  return /* @__PURE__ */ o.jsx(
    a.Root,
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
  s as Label
};
