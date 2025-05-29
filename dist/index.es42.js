import * as a from "react";
import { Slot as p } from "@radix-ui/react-slot";
import { cva as _ } from "class-variance-authority";
import { PanelLeftIcon as k } from "lucide-react";
import { useIsMobile as M } from "./index.es55.js";
import { cn as r } from "./index.es54.js";
import { Button as C } from "./index.es14.js";
import { Input as z } from "./index.es29.js";
import { Separator as I } from "./index.es40.js";
import { Sheet as D, SheetContent as T, SheetHeader as B, SheetTitle as A, SheetDescription as O } from "./index.es41.js";
import { Skeleton as E } from "./index.es43.js";
import { Tooltip as R, TooltipTrigger as H, TooltipContent as K, TooltipProvider as G } from "./index.es52.js";
const L = "sidebar_state", $ = 60 * 60 * 24 * 7, j = "16rem", P = "18rem", V = "3rem", W = "b", S = a.createContext(null);
function x() {
  const t = a.useContext(S);
  if (!t)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
function ne({
  defaultOpen: t = !0,
  open: e,
  onOpenChange: n,
  className: i,
  style: o,
  children: d,
  ...m
}) {
  const l = M(), [b, c] = a.useState(!1), [g, N] = a.useState(t), f = e ?? g, h = a.useCallback(
    (s) => {
      const u = typeof s == "function" ? s(f) : s;
      n ? n(u) : N(u), document.cookie = `${L}=${u}; path=/; max-age=${$}`;
    },
    [n, f]
  ), v = a.useCallback(() => l ? c((s) => !s) : h((s) => !s), [l, h, c]);
  a.useEffect(() => {
    const s = (u) => {
      u.key === W && (u.metaKey || u.ctrlKey) && (u.preventDefault(), v());
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [v]);
  const w = f ? "expanded" : "collapsed", y = a.useMemo(
    () => ({
      state: w,
      open: f,
      setOpen: h,
      isMobile: l,
      openMobile: b,
      setOpenMobile: c,
      toggleSidebar: v
    }),
    [w, f, h, l, b, c, v]
  );
  return /* @__PURE__ */ a.createElement(S.Provider, { value: y }, /* @__PURE__ */ a.createElement(G, { delayDuration: 0 }, /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": j,
        "--sidebar-width-icon": V,
        ...o
      },
      className: r(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        i
      ),
      ...m
    },
    d
  )));
}
function ie({
  side: t = "left",
  variant: e = "sidebar",
  collapsible: n = "offcanvas",
  className: i,
  children: o,
  ...d
}) {
  const { isMobile: m, state: l, openMobile: b, setOpenMobile: c } = x();
  return n === "none" ? /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "sidebar",
      className: r(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        i
      ),
      ...d
    },
    o
  ) : m ? /* @__PURE__ */ a.createElement(D, { open: b, onOpenChange: c, ...d }, /* @__PURE__ */ a.createElement(
    T,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": P
      },
      side: t
    },
    /* @__PURE__ */ a.createElement(B, { className: "sr-only" }, /* @__PURE__ */ a.createElement(A, null, "Sidebar"), /* @__PURE__ */ a.createElement(O, null, "Displays the mobile sidebar.")),
    /* @__PURE__ */ a.createElement("div", { className: "flex h-full w-full flex-col" }, o)
  )) : /* @__PURE__ */ a.createElement(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": l,
      "data-collapsible": l === "collapsed" ? n : "",
      "data-variant": e,
      "data-side": t,
      "data-slot": "sidebar"
    },
    /* @__PURE__ */ a.createElement(
      "div",
      {
        "data-slot": "sidebar-gap",
        className: r(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          e === "floating" || e === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )
      }
    ),
    /* @__PURE__ */ a.createElement(
      "div",
      {
        "data-slot": "sidebar-container",
        className: r(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e === "floating" || e === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          i
        ),
        ...d
      },
      /* @__PURE__ */ a.createElement(
        "div",
        {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar-inner",
          className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        },
        o
      )
    )
  );
}
function oe({
  className: t,
  onClick: e,
  ...n
}) {
  const { toggleSidebar: i } = x();
  return /* @__PURE__ */ a.createElement(
    C,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: r("size-7", t),
      onClick: (o) => {
        e?.(o), i();
      },
      ...n
    },
    /* @__PURE__ */ a.createElement(k, null),
    /* @__PURE__ */ a.createElement("span", { className: "sr-only" }, "Toggle Sidebar")
  );
}
function se({ className: t, ...e }) {
  const { toggleSidebar: n } = x();
  return /* @__PURE__ */ a.createElement(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: n,
      title: "Toggle Sidebar",
      className: r(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        t
      ),
      ...e
    }
  );
}
function de({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: r(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        t
      ),
      ...e
    }
  );
}
function le({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.createElement(
    z,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: r("bg-background h-8 w-full shadow-none", t),
      ...e
    }
  );
}
function ce({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: r("flex flex-col gap-2 p-2", t),
      ...e
    }
  );
}
function ue({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: r("flex flex-col gap-2 p-2", t),
      ...e
    }
  );
}
function be({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.createElement(
    I,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: r("bg-sidebar-border mx-2 w-auto", t),
      ...e
    }
  );
}
function me({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: r(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        t
      ),
      ...e
    }
  );
}
function fe({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: r("relative flex w-full min-w-0 flex-col p-2", t),
      ...e
    }
  );
}
function pe({
  className: t,
  asChild: e = !1,
  ...n
}) {
  const i = e ? p : "div";
  return /* @__PURE__ */ a.createElement(
    i,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: r(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t
      ),
      ...n
    }
  );
}
function ge({
  className: t,
  asChild: e = !1,
  ...n
}) {
  const i = e ? p : "button";
  return /* @__PURE__ */ a.createElement(
    i,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...n
    }
  );
}
function he({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: r("w-full text-sm", t),
      ...e
    }
  );
}
function ve({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: r("flex w-full min-w-0 flex-col gap-1", t),
      ...e
    }
  );
}
function xe({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: r("group/menu-item relative", t),
      ...e
    }
  );
}
const q = _(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function we({
  asChild: t = !1,
  isActive: e = !1,
  variant: n = "default",
  size: i = "default",
  tooltip: o,
  className: d,
  ...m
}) {
  const l = t ? p : "button", { isMobile: b, state: c } = x(), g = /* @__PURE__ */ a.createElement(
    l,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": i,
      "data-active": e,
      className: r(q({ variant: n, size: i }), d),
      ...m
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ a.createElement(R, null, /* @__PURE__ */ a.createElement(H, { asChild: !0 }, g), /* @__PURE__ */ a.createElement(
    K,
    {
      side: "right",
      align: "center",
      hidden: c !== "collapsed" || b,
      ...o
    }
  ))) : g;
}
function Ee({
  className: t,
  asChild: e = !1,
  showOnHover: n = !1,
  ...i
}) {
  const o = e ? p : "button";
  return /* @__PURE__ */ a.createElement(
    o,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        n && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        t
      ),
      ...i
    }
  );
}
function Se({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: r(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...e
    }
  );
}
function Ne({
  className: t,
  showIcon: e = !1,
  ...n
}) {
  const i = a.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: r("flex h-8 items-center gap-2 rounded-md px-2", t),
      ...n
    },
    e && /* @__PURE__ */ a.createElement(
      E,
      {
        className: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      }
    ),
    /* @__PURE__ */ a.createElement(
      E,
      {
        className: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: {
          "--skeleton-width": i
        }
      }
    )
  );
}
function ye({ className: t, ...e }) {
  return /* @__PURE__ */ a.createElement(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: r(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...e
    }
  );
}
function _e({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.createElement(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: r("group/menu-sub-item relative", t),
      ...e
    }
  );
}
function ke({
  asChild: t = !1,
  size: e = "md",
  isActive: n = !1,
  className: i,
  ...o
}) {
  const d = t ? p : "a";
  return /* @__PURE__ */ a.createElement(
    d,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": e,
      "data-active": n,
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e === "sm" && "text-xs",
        e === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        i
      ),
      ...o
    }
  );
}
export {
  ie as Sidebar,
  me as SidebarContent,
  ue as SidebarFooter,
  fe as SidebarGroup,
  ge as SidebarGroupAction,
  he as SidebarGroupContent,
  pe as SidebarGroupLabel,
  ce as SidebarHeader,
  le as SidebarInput,
  de as SidebarInset,
  ve as SidebarMenu,
  Ee as SidebarMenuAction,
  Se as SidebarMenuBadge,
  we as SidebarMenuButton,
  xe as SidebarMenuItem,
  Ne as SidebarMenuSkeleton,
  ye as SidebarMenuSub,
  ke as SidebarMenuSubButton,
  _e as SidebarMenuSubItem,
  ne as SidebarProvider,
  se as SidebarRail,
  be as SidebarSeparator,
  oe as SidebarTrigger,
  x as useSidebar
};
