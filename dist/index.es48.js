import * as t from "react";
import * as l from "@radix-ui/react-tabs";
import { cn as a } from "./index.es54.js";
function n({ className: i, ...e }) {
  return /* @__PURE__ */ t.createElement(l.Root, { "data-slot": "tabs", className: a("lib:flex lib:flex-col lib:gap-2", i), ...e });
}
function r({ className: i, ...e }) {
  return /* @__PURE__ */ t.createElement(
    l.List,
    {
      "data-slot": "tabs-list",
      className: a(
        "lib:bg-muted lib:text-muted-foreground lib:inline-flex lib:h-9 lib:w-fit lib:items-center lib:justify-center lib:rounded-lg lib:p-[3px]",
        i
      ),
      ...e
    }
  );
}
function s({ className: i, ...e }) {
  return /* @__PURE__ */ t.createElement(
    l.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: a(
        "data-[state=active]:lib:bg-background dark:data-[state=active]:lib:text-foreground focus-visible:lib:border-ring focus-visible:lib:ring-ring/50 focus-visible:lib:outline-ring dark:data-[state=active]:lib:border-input dark:data-[state=active]:lib:bg-input/30 lib:text-foreground dark:lib:text-muted-foreground lib:inline-flex lib:h-[calc(100%-1px)] lib:flex-1 lib:items-center lib:justify-center lib:gap-1.5 lib:rounded-md lib:border lib:border-transparent lib:px-2 lib:py-1 lib:text-sm lib:font-medium lib:whitespace-nowrap lib:transition-[color,box-shadow] focus-visible:lib:ring-[3px] focus-visible:lib:outline-1 disabled:lib:pointer-events-none disabled:lib:opacity-50 data-[state=active]:lib:shadow-sm [&_svg]:lib:pointer-events-none [&_svg]:lib:shrink-0 [&_svg:not([class*=size-])]:lib:size-4",
        i
      ),
      ...e
    }
  );
}
function o({ className: i, ...e }) {
  return /* @__PURE__ */ t.createElement(
    l.Content,
    {
      "data-slot": "tabs-content",
      className: a("lib:flex-1 lib:outline-none", i),
      ...e
    }
  );
}
export {
  n as Tabs,
  o as TabsContent,
  r as TabsList,
  s as TabsTrigger
};
