import * as e from "react";
import * as l from "@radix-ui/react-toggle-group";
import { cn as d } from "./index.es54.js";
import { toggleVariants as u } from "./index.es51.js";
const s = e.createContext({
  size: "default",
  variant: "default"
});
function c({
  className: n,
  variant: o,
  size: t,
  children: a,
  ...i
}) {
  return /* @__PURE__ */ e.createElement(
    l.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": o,
      "data-size": t,
      className: d(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        n
      ),
      ...i
    },
    /* @__PURE__ */ e.createElement(s.Provider, { value: { variant: o, size: t } }, a)
  );
}
function f({
  className: n,
  children: o,
  variant: t,
  size: a,
  ...i
}) {
  const r = e.useContext(s);
  return /* @__PURE__ */ e.createElement(
    l.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": r.variant || t,
      "data-size": r.size || a,
      className: d(
        u({
          variant: r.variant || t,
          size: r.size || a
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        n
      ),
      ...i
    },
    o
  );
}
export {
  c as ToggleGroup,
  f as ToggleGroupItem
};
//# sourceMappingURL=index.es50.js.map
