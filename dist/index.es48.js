import * as a from "react";
import * as n from "@radix-ui/react-tabs";
import { cn as r } from "./index.es54.js";
function i({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.createElement(
    n.Root,
    {
      "data-slot": "tabs",
      className: r("flex flex-col gap-2", e),
      ...t
    }
  );
}
function o({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.createElement(
    n.List,
    {
      "data-slot": "tabs-list",
      className: r(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function c({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.createElement(
    n.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: r(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function d({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.createElement(
    n.Content,
    {
      "data-slot": "tabs-content",
      className: r("flex-1 outline-none", e),
      ...t
    }
  );
}
export {
  i as Tabs,
  d as TabsContent,
  o as TabsList,
  c as TabsTrigger
};
