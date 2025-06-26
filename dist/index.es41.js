import { j as t } from "./index.es64.js";
import * as c from "react";
import { Slot as g } from "@radix-ui/react-slot";
import { cva as k } from "class-variance-authority";
import { PanelLeftIcon as M } from "lucide-react";
import { useIsMobile as C } from "./index.es66.js";
import { cn as r } from "./index.es65.js";
import { Button as z } from "./index.es13.js";
import { Input as I } from "./index.es28.js";
import { Separator as E } from "./index.es39.js";
import { Sheet as D, SheetContent as T, SheetHeader as B, SheetTitle as A, SheetDescription as O } from "./index.es40.js";
import { Skeleton as j } from "./index.es42.js";
import { Tooltip as R, TooltipTrigger as H, TooltipContent as K, TooltipProvider as G } from "./index.es51.js";
const L = "sidebar_state", $ = 60 * 60 * 24 * 7, P = "16rem", V = "18rem", W = "3rem", q = "b", N = c.createContext(null);
function w() {
  const a = c.useContext(N);
  if (!a)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return a;
}
function ne({
  defaultOpen: a = !0,
  open: e,
  onOpenChange: i,
  className: s,
  style: n,
  children: d,
  ...p
}) {
  const l = C(), [f, u] = c.useState(!1), [x, y] = c.useState(a), m = e ?? x, h = c.useCallback(
    (o) => {
      const b = typeof o == "function" ? o(m) : o;
      i ? i(b) : y(b), document.cookie = `${L}=${b}; path=/; max-age=${$}`;
    },
    [i, m]
  ), v = c.useCallback(() => l ? u((o) => !o) : h((o) => !o), [l, h, u]);
  c.useEffect(() => {
    const o = (b) => {
      b.key === q && (b.metaKey || b.ctrlKey) && (b.preventDefault(), v());
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [v]);
  const S = m ? "expanded" : "collapsed", _ = c.useMemo(
    () => ({
      state: S,
      open: m,
      setOpen: h,
      isMobile: l,
      openMobile: f,
      setOpenMobile: u,
      toggleSidebar: v
    }),
    [S, m, h, l, f, u, v]
  );
  return /* @__PURE__ */ t.jsx(N.Provider, { value: _, children: /* @__PURE__ */ t.jsx(G, { delayDuration: 0, children: /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": P,
        "--sidebar-width-icon": W,
        ...n
      },
      className: r("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", s),
      ...p,
      children: d
    }
  ) }) });
}
function oe({
  side: a = "left",
  variant: e = "sidebar",
  collapsible: i = "offcanvas",
  className: s,
  children: n,
  ...d
}) {
  const { isMobile: p, state: l, openMobile: f, setOpenMobile: u } = w();
  return i === "none" ? /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-slot": "sidebar",
      className: r("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", s),
      ...d,
      children: n
    }
  ) : p ? /* @__PURE__ */ t.jsx(D, { open: f, onOpenChange: u, ...d, children: /* @__PURE__ */ t.jsxs(
    T,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": V
      },
      side: a,
      children: [
        /* @__PURE__ */ t.jsxs(B, { className: "sr-only", children: [
          /* @__PURE__ */ t.jsx(A, { children: "Sidebar" }),
          /* @__PURE__ */ t.jsx(O, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex h-full w-full flex-col", children: n })
      ]
    }
  ) }) : /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": l,
      "data-collapsible": l === "collapsed" ? i : "",
      "data-variant": e,
      "data-side": a,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ t.jsx(
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
        /* @__PURE__ */ t.jsx(
          "div",
          {
            "data-slot": "sidebar-container",
            className: r(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              a === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              e === "floating" || e === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              s
            ),
            ...d,
            children: /* @__PURE__ */ t.jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
function de({ className: a, onClick: e, ...i }) {
  const { toggleSidebar: s } = w();
  return /* @__PURE__ */ t.jsxs(
    z,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: r("size-7", a),
      onClick: (n) => {
        e?.(n), s();
      },
      ...i,
      children: [
        /* @__PURE__ */ t.jsx(M, {}),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function le({ className: a, ...e }) {
  const { toggleSidebar: i } = w();
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: i,
      title: "Toggle Sidebar",
      className: r(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        a
      ),
      ...e
    }
  );
}
function ce({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: r(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        a
      ),
      ...e
    }
  );
}
function ue({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    I,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: r("bg-background h-8 w-full shadow-none", a),
      ...e
    }
  );
}
function be({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: r("flex flex-col gap-2 p-2", a),
      ...e
    }
  );
}
function fe({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: r("flex flex-col gap-2 p-2", a),
      ...e
    }
  );
}
function pe({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    E,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: r("bg-sidebar-border mx-2 w-auto", a),
      ...e
    }
  );
}
function me({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: r(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        a
      ),
      ...e
    }
  );
}
function ge({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: r("relative flex w-full min-w-0 flex-col p-2", a),
      ...e
    }
  );
}
function xe({
  className: a,
  asChild: e = !1,
  ...i
}) {
  const s = e ? g : "div";
  return /* @__PURE__ */ t.jsx(
    s,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: r(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        a
      ),
      ...i
    }
  );
}
function he({
  className: a,
  asChild: e = !1,
  ...i
}) {
  const s = e ? g : "button";
  return /* @__PURE__ */ t.jsx(
    s,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      ...i
    }
  );
}
function ve({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: r("w-full text-sm", a),
      ...e
    }
  );
}
function we({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: r("flex w-full min-w-0 flex-col gap-1", a),
      ...e
    }
  );
}
function Se({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: r("group/menu-item relative", a),
      ...e
    }
  );
}
const F = k(
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
function je({
  asChild: a = !1,
  isActive: e = !1,
  variant: i = "default",
  size: s = "default",
  tooltip: n,
  className: d,
  ...p
}) {
  const l = a ? g : "button", { isMobile: f, state: u } = w(), x = /* @__PURE__ */ t.jsx(
    l,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": s,
      "data-active": e,
      className: r(F({ variant: i, size: s }), d),
      ...p
    }
  );
  return n ? (typeof n == "string" && (n = {
    children: n
  }), /* @__PURE__ */ t.jsxs(R, { children: [
    /* @__PURE__ */ t.jsx(H, { asChild: !0, children: x }),
    /* @__PURE__ */ t.jsx(K, { side: "right", align: "center", hidden: u !== "collapsed" || f, ...n })
  ] })) : x;
}
function Ne({
  className: a,
  asChild: e = !1,
  showOnHover: i = !1,
  ...s
}) {
  const n = e ? g : "button";
  return /* @__PURE__ */ t.jsx(
    n,
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
        i && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        a
      ),
      ...s
    }
  );
}
function ye({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
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
        a
      ),
      ...e
    }
  );
}
function _e({
  className: a,
  showIcon: e = !1,
  ...i
}) {
  const s = c.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: r("flex h-8 items-center gap-2 rounded-md px-2", a),
      ...i,
      children: [
        e && /* @__PURE__ */ t.jsx(j, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ t.jsx(
          j,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": s
            }
          }
        )
      ]
    }
  );
}
function ke({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: r(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      ...e
    }
  );
}
function Me({ className: a, ...e }) {
  return /* @__PURE__ */ t.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: r("group/menu-sub-item relative", a),
      ...e
    }
  );
}
function Ce({
  asChild: a = !1,
  size: e = "md",
  isActive: i = !1,
  className: s,
  ...n
}) {
  const d = a ? g : "a";
  return /* @__PURE__ */ t.jsx(
    d,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": e,
      "data-active": i,
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e === "sm" && "text-xs",
        e === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        s
      ),
      ...n
    }
  );
}
export {
  oe as Sidebar,
  me as SidebarContent,
  fe as SidebarFooter,
  ge as SidebarGroup,
  he as SidebarGroupAction,
  ve as SidebarGroupContent,
  xe as SidebarGroupLabel,
  be as SidebarHeader,
  ue as SidebarInput,
  ce as SidebarInset,
  we as SidebarMenu,
  Ne as SidebarMenuAction,
  ye as SidebarMenuBadge,
  je as SidebarMenuButton,
  Se as SidebarMenuItem,
  _e as SidebarMenuSkeleton,
  ke as SidebarMenuSub,
  Ce as SidebarMenuSubButton,
  Me as SidebarMenuSubItem,
  ne as SidebarProvider,
  le as SidebarRail,
  pe as SidebarSeparator,
  de as SidebarTrigger,
  w as useSidebar
};
