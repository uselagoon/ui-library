import { j as n } from "./index.es64.js";
import * as s from "react";
import * as d from "@radix-ui/react-toggle-group";
import { cn as l } from "./index.es65.js";
import { toggleVariants as m } from "./index.es50.js";
const u = s.createContext({
  size: "default",
  variant: "default"
});
function c({
  className: a,
  variant: o,
  size: t,
  children: e,
  ...i
}) {
  return /* @__PURE__ */ n.jsx(
    d.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": o,
      "data-size": t,
      className: l(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        a
      ),
      ...i,
      children: /* @__PURE__ */ n.jsx(u.Provider, { value: { variant: o, size: t }, children: e })
    }
  );
}
function x({
  className: a,
  children: o,
  variant: t,
  size: e,
  ...i
}) {
  const r = s.useContext(u);
  return /* @__PURE__ */ n.jsx(
    d.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": r.variant || t,
      "data-size": r.size || e,
      className: l(
        m({
          variant: r.variant || t,
          size: r.size || e
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        a
      ),
      ...i,
      children: o
    }
  );
}
export {
  c as ToggleGroup,
  x as ToggleGroupItem
};
