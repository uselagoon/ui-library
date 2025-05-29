import * as e from "react";
import * as n from "@radix-ui/react-toggle-group";
import { cn as d } from "./index.es54.js";
import { toggleVariants as u } from "./index.es51.js";
const s = e.createContext({
  size: "default",
  variant: "default"
});
function g({
  className: r,
  variant: o,
  size: t,
  children: a,
  ...l
}) {
  return /* @__PURE__ */ e.createElement(
    n.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": o,
      "data-size": t,
      className: d(
        "lib:group/toggle-group lib:flex lib:w-fit lib:items-center lib:rounded-md data-[variant=outline]:lib:shadow-xs",
        r
      ),
      ...l
    },
    /* @__PURE__ */ e.createElement(s.Provider, { value: { variant: o, size: t } }, a)
  );
}
function c({
  className: r,
  children: o,
  variant: t,
  size: a,
  ...l
}) {
  const i = e.useContext(s);
  return /* @__PURE__ */ e.createElement(
    n.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": i.variant || t,
      "data-size": i.size || a,
      className: d(
        u({
          variant: i.variant || t,
          size: i.size || a
        }),
        "lib:min-w-0 lib:flex-1 lib:shrink-0 lib:rounded-none lib:shadow-none first:lib:rounded-l-md last:lib:rounded-r-md focus:lib:z-10 focus-visible:lib:z-10 data-[variant=outline]:lib:border-l-0 data-[variant=outline]:first:lib:border-l",
        r
      ),
      ...l
    },
    o
  );
}
export {
  g as ToggleGroup,
  c as ToggleGroupItem
};
