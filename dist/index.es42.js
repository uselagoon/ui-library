import * as i from "react";
import { Slot as p } from "@radix-ui/react-slot";
import { cva as _ } from "class-variance-authority";
import { PanelLeftIcon as k } from "lucide-react";
import { useIsMobile as M } from "./index.es55.js";
import { cn as t } from "./index.es54.js";
import { Button as C } from "./index.es14.js";
import { Input as z } from "./index.es29.js";
import { Separator as I } from "./index.es40.js";
import { Sheet as D, SheetContent as T, SheetHeader as B, SheetTitle as A, SheetDescription as O } from "./index.es41.js";
import { Skeleton as E } from "./index.es43.js";
import { Tooltip as R, TooltipTrigger as H, TooltipContent as K, TooltipProvider as G } from "./index.es52.js";
const L = "sidebar_state", $ = 60 * 60 * 24 * 7, j = "16rem", P = "18rem", V = "3rem", W = "b", S = i.createContext(null);
function x() {
  const a = i.useContext(S);
  if (!a)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return a;
}
function le({
  defaultOpen: a = !0,
  open: e,
  onOpenChange: l,
  className: r,
  style: b,
  children: o,
  ...m
}) {
  const s = M(), [u, d] = i.useState(!1), [g, N] = i.useState(a), f = e ?? g, h = i.useCallback(
    (n) => {
      const c = typeof n == "function" ? n(f) : n;
      l ? l(c) : N(c), document.cookie = `${L}=${c}; path=/; max-age=${$}`;
    },
    [l, f]
  ), v = i.useCallback(() => s ? d((n) => !n) : h((n) => !n), [s, h, d]);
  i.useEffect(() => {
    const n = (c) => {
      c.key === W && (c.metaKey || c.ctrlKey) && (c.preventDefault(), v());
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [v]);
  const w = f ? "expanded" : "collapsed", y = i.useMemo(
    () => ({
      state: w,
      open: f,
      setOpen: h,
      isMobile: s,
      openMobile: u,
      setOpenMobile: d,
      toggleSidebar: v
    }),
    [w, f, h, s, u, d, v]
  );
  return /* @__PURE__ */ i.createElement(S.Provider, { value: y }, /* @__PURE__ */ i.createElement(G, { delayDuration: 0 }, /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": j,
        "--sidebar-width-icon": V,
        ...b
      },
      className: t(
        "lib:group/sidebar-wrapper has-data-[variant=inset]:lib:bg-sidebar lib:flex lib:min-h-svh lib:w-full",
        r
      ),
      ...m
    },
    o
  )));
}
function re({
  side: a = "left",
  variant: e = "sidebar",
  collapsible: l = "offcanvas",
  className: r,
  children: b,
  ...o
}) {
  const { isMobile: m, state: s, openMobile: u, setOpenMobile: d } = x();
  return l === "none" ? /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-slot": "sidebar",
      className: t(
        "lib:bg-sidebar lib:text-sidebar-foreground lib:flex lib:h-full lib:w-(--sidebar-width) lib:flex-col",
        r
      ),
      ...o
    },
    b
  ) : m ? /* @__PURE__ */ i.createElement(D, { open: u, onOpenChange: d, ...o }, /* @__PURE__ */ i.createElement(
    T,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "lib:bg-sidebar lib:text-sidebar-foreground lib:w-(--sidebar-width) lib:p-0 [&>button]:lib:hidden",
      style: {
        "--sidebar-width": P
      },
      side: a
    },
    /* @__PURE__ */ i.createElement(B, { className: "lib:sr-only" }, /* @__PURE__ */ i.createElement(A, null, "Sidebar"), /* @__PURE__ */ i.createElement(O, null, "Displays the mobile sidebar.")),
    /* @__PURE__ */ i.createElement("div", { className: "lib:flex lib:h-full lib:w-full lib:flex-col" }, b)
  )) : /* @__PURE__ */ i.createElement(
    "div",
    {
      className: "lib:group lib:peer lib:text-sidebar-foreground lib:hidden md:lib:block",
      "data-state": s,
      "data-collapsible": s === "collapsed" ? l : "",
      "data-variant": e,
      "data-side": a,
      "data-slot": "sidebar"
    },
    /* @__PURE__ */ i.createElement(
      "div",
      {
        "data-slot": "sidebar-gap",
        className: t(
          "lib:relative lib:w-(--sidebar-width) lib:bg-transparent lib:transition-[width] lib:duration-200 lib:ease-linear",
          "group-data-[collapsible=offcanvas]:lib:w-0",
          "group-data-[side=right]:lib:rotate-180",
          e === "floating" || e === "inset" ? "group-data-[collapsible=icon]:lib:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:lib:w-(--sidebar-width-icon)"
        )
      }
    ),
    /* @__PURE__ */ i.createElement(
      "div",
      {
        "data-slot": "sidebar-container",
        className: t(
          "lib:fixed lib:inset-y-0 lib:z-10 lib:hidden lib:h-svh lib:w-(--sidebar-width) lib:transition-[left,right,width] lib:duration-200 lib:ease-linear md:lib:flex",
          a === "left" ? "lib:left-0 group-data-[collapsible=offcanvas]:lib:left-[calc(var(--sidebar-width)*-1)]" : "lib:right-0 group-data-[collapsible=offcanvas]:lib:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e === "floating" || e === "inset" ? "lib:p-2 group-data-[collapsible=icon]:lib:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:lib:w-(--sidebar-width-icon) group-data-[side=left]:lib:border-r group-data-[side=right]:lib:border-l",
          r
        ),
        ...o
      },
      /* @__PURE__ */ i.createElement(
        "div",
        {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar-inner",
          className: "lib:bg-sidebar group-data-[variant=floating]:lib:border-sidebar-border lib:flex lib:h-full lib:w-full lib:flex-col group-data-[variant=floating]:lib:rounded-lg group-data-[variant=floating]:lib:border group-data-[variant=floating]:lib:shadow-sm"
        },
        b
      )
    )
  );
}
function be({ className: a, onClick: e, ...l }) {
  const { toggleSidebar: r } = x();
  return /* @__PURE__ */ i.createElement(
    C,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: t("lib:size-7", a),
      onClick: (b) => {
        e?.(b), r();
      },
      ...l
    },
    /* @__PURE__ */ i.createElement(k, null),
    /* @__PURE__ */ i.createElement("span", { className: "lib:sr-only" }, "Toggle Sidebar")
  );
}
function ne({ className: a, ...e }) {
  const { toggleSidebar: l } = x();
  return /* @__PURE__ */ i.createElement(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: l,
      title: "Toggle Sidebar",
      className: t(
        "hover:after:lib:bg-sidebar-border lib:absolute lib:inset-y-0 lib:z-20 lib:hidden lib:w-4 lib:-translate-x-1/2 lib:transition-all lib:ease-linear group-data-[side=left]:lib:-right-4 group-data-[side=right]:lib:left-0 after:lib:absolute after:lib:inset-y-0 after:lib:left-1/2 after:lib:w-[2px] sm:lib:flex",
        "in-data-[side=left]:lib:cursor-w-resize in-data-[side=right]:lib:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:lib:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:lib:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:lib:bg-sidebar group-data-[collapsible=offcanvas]:lib:translate-x-0 group-data-[collapsible=offcanvas]:after:lib:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:lib:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:lib:-left-2",
        a
      ),
      ...e
    }
  );
}
function oe({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: t(
        "lib:bg-background lib:relative lib:flex lib:w-full lib:flex-1 lib:flex-col",
        "md:peer-data-[variant=inset]:lib:m-2 md:peer-data-[variant=inset]:lib:ml-0 md:peer-data-[variant=inset]:lib:rounded-xl md:peer-data-[variant=inset]:lib:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:lib:ml-2",
        a
      ),
      ...e
    }
  );
}
function se({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    z,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: t("lib:bg-background lib:h-8 lib:w-full lib:shadow-none", a),
      ...e
    }
  );
}
function de({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: t("lib:flex lib:flex-col lib:gap-2 lib:p-2", a),
      ...e
    }
  );
}
function ce({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: t("lib:flex lib:flex-col lib:gap-2 lib:p-2", a),
      ...e
    }
  );
}
function ue({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    I,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: t("lib:bg-sidebar-border lib:mx-2 lib:w-auto", a),
      ...e
    }
  );
}
function me({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: t(
        "lib:flex lib:min-h-0 lib:flex-1 lib:flex-col lib:gap-2 lib:overflow-auto group-data-[collapsible=icon]:lib:overflow-hidden",
        a
      ),
      ...e
    }
  );
}
function fe({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: t("lib:relative lib:flex lib:w-full lib:min-w-0 lib:flex-col lib:p-2", a),
      ...e
    }
  );
}
function pe({
  className: a,
  asChild: e = !1,
  ...l
}) {
  const r = e ? p : "div";
  return /* @__PURE__ */ i.createElement(
    r,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: t(
        "lib:text-sidebar-foreground/70 lib:ring-sidebar-ring lib:flex lib:h-8 lib:shrink-0 lib:items-center lib:rounded-md lib:px-2 lib:text-xs lib:font-medium lib:outline-hidden lib:transition-[margin,opacity] lib:duration-200 lib:ease-linear focus-visible:lib:ring-2 [&>svg]:lib:size-4 [&>svg]:lib:shrink-0",
        "group-data-[collapsible=icon]:lib:-mt-8 group-data-[collapsible=icon]:lib:opacity-0",
        a
      ),
      ...l
    }
  );
}
function ge({
  className: a,
  asChild: e = !1,
  ...l
}) {
  const r = e ? p : "button";
  return /* @__PURE__ */ i.createElement(
    r,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: t(
        "lib:text-sidebar-foreground lib:ring-sidebar-ring hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground lib:absolute lib:top-3.5 lib:right-3 lib:flex lib:aspect-square lib:w-5 lib:items-center lib:justify-center lib:rounded-md lib:p-0 lib:outline-hidden lib:transition-transform focus-visible:lib:ring-2 [&>svg]:lib:size-4 [&>svg]:lib:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:lib:absolute after:lib:-inset-2 md:after:lib:hidden",
        "group-data-[collapsible=icon]:lib:hidden",
        a
      ),
      ...l
    }
  );
}
function he({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: t("lib:w-full lib:text-sm", a),
      ...e
    }
  );
}
function ve({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: t("lib:flex lib:w-full lib:min-w-0 lib:flex-col lib:gap-1", a),
      ...e
    }
  );
}
function xe({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: t("lib:group/menu-item lib:relative", a),
      ...e
    }
  );
}
const q = _(
  "lib:peer/menu-button lib:flex lib:w-full lib:items-center lib:gap-2 lib:overflow-hidden lib:rounded-md lib:p-2 lib:text-left lib:text-sm lib:outline-hidden lib:ring-sidebar-ring lib:transition-[width,height,padding] hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground focus-visible:lib:ring-2 active:lib:bg-sidebar-accent active:lib:text-sidebar-accent-foreground disabled:lib:pointer-events-none disabled:lib:opacity-50 lib:group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:lib:pointer-events-none aria-disabled:lib:opacity-50 data-[active=true]:lib:bg-sidebar-accent data-[active=true]:lib:font-medium data-[active=true]:lib:text-sidebar-accent-foreground data-[state=open]:hover:lib:bg-sidebar-accent data-[state=open]:hover:lib:text-sidebar-accent-foreground group-data-[collapsible=icon]:lib:size-8! group-data-[collapsible=icon]:lib:p-2! [&>span:last-child]:lib:truncate [&>svg]:lib:size-4 [&>svg]:lib:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground",
        outline: "lib:bg-background lib:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground hover:lib:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "lib:h-8 lib:text-sm",
        sm: "lib:h-7 lib:text-xs",
        lg: "lib:h-12 lib:text-sm group-data-[collapsible=icon]:lib:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function we({
  asChild: a = !1,
  isActive: e = !1,
  variant: l = "default",
  size: r = "default",
  tooltip: b,
  className: o,
  ...m
}) {
  const s = a ? p : "button", { isMobile: u, state: d } = x(), g = /* @__PURE__ */ i.createElement(
    s,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": e,
      className: t(q({ variant: l, size: r }), o),
      ...m
    }
  );
  return b ? (typeof b == "string" && (b = {
    children: b
  }), /* @__PURE__ */ i.createElement(R, null, /* @__PURE__ */ i.createElement(H, { asChild: !0 }, g), /* @__PURE__ */ i.createElement(K, { side: "right", align: "center", hidden: d !== "collapsed" || u, ...b }))) : g;
}
function Ee({
  className: a,
  asChild: e = !1,
  showOnHover: l = !1,
  ...r
}) {
  const b = e ? p : "button";
  return /* @__PURE__ */ i.createElement(
    b,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: t(
        "lib:text-sidebar-foreground lib:ring-sidebar-ring hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground lib:peer-hover/menu-button:text-sidebar-accent-foreground lib:absolute lib:top-1.5 lib:right-1 lib:flex lib:aspect-square lib:w-5 lib:items-center lib:justify-center lib:rounded-md lib:p-0 lib:outline-hidden lib:transition-transform focus-visible:lib:ring-2 [&>svg]:lib:size-4 [&>svg]:lib:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:lib:absolute after:lib:-inset-2 md:after:lib:hidden",
        "lib:peer-data-[size=sm]/menu-button:top-1",
        "lib:peer-data-[size=default]/menu-button:top-1.5",
        "lib:peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:lib:hidden",
        l && "lib:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground lib:group-focus-within/menu-item:opacity-100 lib:group-hover/menu-item:opacity-100 data-[state=open]:lib:opacity-100 md:lib:opacity-0",
        a
      ),
      ...r
    }
  );
}
function Se({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: t(
        "lib:text-sidebar-foreground lib:pointer-events-none lib:absolute lib:right-1 lib:flex lib:h-5 lib:min-w-5 lib:items-center lib:justify-center lib:rounded-md lib:px-1 lib:text-xs lib:font-medium lib:tabular-nums lib:select-none",
        "lib:peer-hover/menu-button:text-sidebar-accent-foreground lib:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "lib:peer-data-[size=sm]/menu-button:top-1",
        "lib:peer-data-[size=default]/menu-button:top-1.5",
        "lib:peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:lib:hidden",
        a
      ),
      ...e
    }
  );
}
function Ne({
  className: a,
  showIcon: e = !1,
  ...l
}) {
  const r = i.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: t("lib:flex lib:h-8 lib:items-center lib:gap-2 lib:rounded-md lib:px-2", a),
      ...l
    },
    e && /* @__PURE__ */ i.createElement(E, { className: "lib:size-4 lib:rounded-md", "data-sidebar": "menu-skeleton-icon" }),
    /* @__PURE__ */ i.createElement(
      E,
      {
        className: "lib:h-4 lib:max-w-(--skeleton-width) lib:flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: {
          "--skeleton-width": r
        }
      }
    )
  );
}
function ye({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: t(
        "lib:border-sidebar-border lib:mx-3.5 lib:flex lib:min-w-0 lib:translate-x-px lib:flex-col lib:gap-1 lib:border-l lib:px-2.5 lib:py-0.5",
        "group-data-[collapsible=icon]:lib:hidden",
        a
      ),
      ...e
    }
  );
}
function _e({ className: a, ...e }) {
  return /* @__PURE__ */ i.createElement(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: t("lib:group/menu-sub-item lib:relative", a),
      ...e
    }
  );
}
function ke({
  asChild: a = !1,
  size: e = "md",
  isActive: l = !1,
  className: r,
  ...b
}) {
  const o = a ? p : "a";
  return /* @__PURE__ */ i.createElement(
    o,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": e,
      "data-active": l,
      className: t(
        "lib:text-sidebar-foreground lib:ring-sidebar-ring hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground active:lib:bg-sidebar-accent active:lib:text-sidebar-accent-foreground [&>svg]:lib:text-sidebar-accent-foreground lib:flex lib:h-7 lib:min-w-0 lib:-translate-x-px lib:items-center lib:gap-2 lib:overflow-hidden lib:rounded-md lib:px-2 lib:outline-hidden focus-visible:lib:ring-2 disabled:lib:pointer-events-none disabled:lib:opacity-50 aria-disabled:lib:pointer-events-none aria-disabled:lib:opacity-50 [&>span:last-child]:lib:truncate [&>svg]:lib:size-4 [&>svg]:lib:shrink-0",
        "data-[active=true]:lib:bg-sidebar-accent data-[active=true]:lib:text-sidebar-accent-foreground",
        e === "sm" && "lib:text-xs",
        e === "md" && "lib:text-sm",
        "group-data-[collapsible=icon]:lib:hidden",
        r
      ),
      ...b
    }
  );
}
export {
  re as Sidebar,
  me as SidebarContent,
  ce as SidebarFooter,
  fe as SidebarGroup,
  ge as SidebarGroupAction,
  he as SidebarGroupContent,
  pe as SidebarGroupLabel,
  de as SidebarHeader,
  se as SidebarInput,
  oe as SidebarInset,
  ve as SidebarMenu,
  Ee as SidebarMenuAction,
  Se as SidebarMenuBadge,
  we as SidebarMenuButton,
  xe as SidebarMenuItem,
  Ne as SidebarMenuSkeleton,
  ye as SidebarMenuSub,
  ke as SidebarMenuSubButton,
  _e as SidebarMenuSubItem,
  le as SidebarProvider,
  ne as SidebarRail,
  ue as SidebarSeparator,
  be as SidebarTrigger,
  x as useSidebar
};
