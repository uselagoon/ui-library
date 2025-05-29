import * as e from "react";
import * as n from "@radix-ui/react-navigation-menu";
import { cva as r } from "class-variance-authority";
import { ChevronDownIcon as b } from "lucide-react";
import { cn as a } from "./index.es54.js";
function g({
  className: i,
  children: t,
  viewport: o = !0,
  ...l
}) {
  return /* @__PURE__ */ e.createElement(
    n.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": o,
      className: a(
        "lib:group/navigation-menu lib:relative lib:flex lib:max-w-max lib:flex-1 lib:items-center lib:justify-center",
        i
      ),
      ...l
    },
    t,
    o && /* @__PURE__ */ e.createElement(s, null)
  );
}
function v({ className: i, ...t }) {
  return /* @__PURE__ */ e.createElement(
    n.List,
    {
      "data-slot": "navigation-menu-list",
      className: a(
        "lib:group lib:flex lib:flex-1 lib:list-none lib:items-center lib:justify-center lib:gap-1",
        i
      ),
      ...t
    }
  );
}
function f({ className: i, ...t }) {
  return /* @__PURE__ */ e.createElement(
    n.Item,
    {
      "data-slot": "navigation-menu-item",
      className: a("lib:relative", i),
      ...t
    }
  );
}
const u = r(
  "lib:group lib:inline-flex lib:h-9 lib:w-max lib:items-center lib:justify-center lib:rounded-md lib:bg-background lib:px-4 lib:py-2 lib:text-sm lib:font-medium hover:lib:bg-accent hover:lib:text-accent-foreground focus:lib:bg-accent focus:lib:text-accent-foreground disabled:lib:pointer-events-none disabled:lib:opacity-50 data-[state=open]:hover:lib:bg-accent data-[state=open]:lib:text-accent-foreground data-[state=open]:focus:lib:bg-accent data-[state=open]:lib:bg-accent/50 focus-visible:lib:ring-ring/50 lib:outline-none lib:transition-[color,box-shadow] focus-visible:lib:ring-[3px] focus-visible:lib:outline-1"
);
function p({
  className: i,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ e.createElement(
    n.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: a(u(), "lib:group", i),
      ...o
    },
    t,
    " ",
    /* @__PURE__ */ e.createElement(
      b,
      {
        className: "lib:relative lib:top-[1px] lib:ml-1 lib:size-3 lib:transition lib:duration-300 group-data-[state=open]:lib:rotate-180",
        "aria-hidden": "true"
      }
    )
  );
}
function w({ className: i, ...t }) {
  return /* @__PURE__ */ e.createElement(
    n.Content,
    {
      "data-slot": "navigation-menu-content",
      className: a(
        "data-[motion^=from-]:lib:animate-in data-[motion^=to-]:lib:animate-out data-[motion^=from-]:lib:fade-in data-[motion^=to-]:lib:fade-out data-[motion=from-end]:lib:slide-in-from-right-52 data-[motion=from-start]:lib:slide-in-from-left-52 data-[motion=to-end]:lib:slide-out-to-right-52 data-[motion=to-start]:lib:slide-out-to-left-52 lib:top-0 lib:left-0 lib:w-full lib:p-2 lib:pr-2.5 md:lib:absolute md:lib:w-auto",
        "lib:group-data-[viewport=false]/navigation-menu:bg-popover lib:group-data-[viewport=false]/navigation-menu:text-popover-foreground lib:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in lib:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out lib:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 lib:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 lib:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 lib:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 lib:group-data-[viewport=false]/navigation-menu:top-full lib:group-data-[viewport=false]/navigation-menu:mt-1.5 lib:group-data-[viewport=false]/navigation-menu:overflow-hidden lib:group-data-[viewport=false]/navigation-menu:rounded-md lib:group-data-[viewport=false]/navigation-menu:border lib:group-data-[viewport=false]/navigation-menu:shadow lib:group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:lib:ring-0 **:data-[slot=navigation-menu-link]:focus:lib:outline-none",
        i
      ),
      ...t
    }
  );
}
function s({
  className: i,
  ...t
}) {
  return /* @__PURE__ */ e.createElement("div", { className: a("lib:absolute lib:top-full lib:left-0 lib:isolate lib:z-50 lib:flex lib:justify-center") }, /* @__PURE__ */ e.createElement(
    n.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: a(
        "lib:origin-top-center lib:bg-popover lib:text-popover-foreground data-[state=open]:lib:animate-in data-[state=closed]:lib:animate-out data-[state=closed]:lib:zoom-out-95 data-[state=open]:lib:zoom-in-90 lib:relative lib:mt-1.5 lib:h-[var(--radix-navigation-menu-viewport-height)] lib:w-full lib:overflow-hidden lib:rounded-md lib:border lib:shadow md:lib:w-[var(--radix-navigation-menu-viewport-width)]",
        i
      ),
      ...t
    }
  ));
}
function x({ className: i, ...t }) {
  return /* @__PURE__ */ e.createElement(
    n.Link,
    {
      "data-slot": "navigation-menu-link",
      className: a(
        "data-[active=true]:focus:lib:bg-accent data-[active=true]:hover:lib:bg-accent data-[active=true]:lib:bg-accent/50 data-[active=true]:lib:text-accent-foreground hover:lib:bg-accent hover:lib:text-accent-foreground focus:lib:bg-accent focus:lib:text-accent-foreground focus-visible:lib:ring-ring/50 [&_svg:not([class*=text-])]:lib:text-muted-foreground lib:flex lib:flex-col lib:gap-1 lib:rounded-sm lib:p-2 lib:text-sm lib:transition-all lib:outline-none focus-visible:lib:ring-[3px] focus-visible:lib:outline-1 [&_svg:not([class*=size-])]:lib:size-4",
        i
      ),
      ...t
    }
  );
}
function h({
  className: i,
  ...t
}) {
  return /* @__PURE__ */ e.createElement(
    n.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: a(
        "data-[state=visible]:lib:animate-in data-[state=hidden]:lib:animate-out data-[state=hidden]:lib:fade-out data-[state=visible]:lib:fade-in lib:top-full lib:z-[1] lib:flex lib:h-1.5 lib:items-end lib:justify-center lib:overflow-hidden",
        i
      ),
      ...t
    },
    /* @__PURE__ */ e.createElement("div", { className: "lib:bg-border lib:relative lib:top-[60%] lib:h-2 lib:w-2 lib:rotate-45 lib:rounded-tl-sm lib:shadow-md" })
  );
}
export {
  g as NavigationMenu,
  w as NavigationMenuContent,
  h as NavigationMenuIndicator,
  f as NavigationMenuItem,
  x as NavigationMenuLink,
  v as NavigationMenuList,
  p as NavigationMenuTrigger,
  s as NavigationMenuViewport,
  u as navigationMenuTriggerStyle
};
