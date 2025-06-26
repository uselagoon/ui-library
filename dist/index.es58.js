import { j as e } from "./index.es64.js";
import { useState as c } from "react";
import { Copy as v, EyeOff as d, Eye as u, Check as C } from "lucide-react";
import { cva as N } from "class-variance-authority";
import { Tooltip as m, TooltipTrigger as h, TooltipContent as x } from "./index.es51.js";
const w = N("truncate transition-all duration-300", {
  variants: {
    type: {
      visible: "",
      hidden: "blur-sm select-none hover:blur-0 hover:select-text",
      hiddenWithIcon: "",
      alwaysHidden: "blur-sm select-none"
    },
    unblur: {
      true: "!blur-0 !select-text",
      false: ""
    }
  },
  compoundVariants: [
    {
      type: "hiddenWithIcon",
      unblur: !1,
      className: "blur-sm select-none"
    },
    {
      type: "hiddenWithIcon",
      unblur: !0,
      className: "!blur-0 !select-text"
    }
  ],
  defaultVariants: {
    type: "visible",
    unblur: !1
  }
}), S = ({
  text: t,
  width: s,
  fontSize: p = "14px",
  type: n = "visible",
  withToolTip: g = !1,
  iconOnly: o = !1
}) => {
  const [b, l] = c(!1), [r, f] = c(!1), y = () => {
    navigator.clipboard.writeText(t.toString());
  }, j = () => {
    y(), l(!0), setTimeout(() => l(!1), 3500);
  }, a = () => f(!r), i = {
    maxWidth: s ? typeof s == "number" ? `${s}px` : s : void 0,
    fontSize: p,
    width: o ? "max-content" : void 0
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4 min-w-max justify-between", style: i, children: [
    !o && /* @__PURE__ */ e.jsx("span", { className: w({ type: n, unblur: r }), style: { maxWidth: i.maxWidth }, children: g ? /* @__PURE__ */ e.jsxs(m, { children: [
      /* @__PURE__ */ e.jsx(h, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t }) }),
      /* @__PURE__ */ e.jsx(x, { side: "bottom", children: /* @__PURE__ */ e.jsx("p", { children: t }) })
    ] }) : t }),
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-3", children: b ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e.jsxs(m, { children: [
        /* @__PURE__ */ e.jsx(h, { asChild: !0, children: /* @__PURE__ */ e.jsx(C, { className: "w-4 h-4 text-green-500" }) }),
        /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: "Copied!" }) })
      ] }),
      n === "hiddenWithIcon" && (r ? /* @__PURE__ */ e.jsx(
        d,
        {
          className: "w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300",
          onClick: a
        }
      ) : /* @__PURE__ */ e.jsx(
        u,
        {
          className: "w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300",
          onClick: a
        }
      ))
    ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        v,
        {
          className: "w-4 h-4 text-muted-foreground hover:bg-gray-200 active:bg-gray-300 cursor-pointer",
          "data-cy": "copy-button",
          onClick: j
        }
      ),
      n === "hiddenWithIcon" && (r ? /* @__PURE__ */ e.jsx(
        d,
        {
          className: "w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300",
          onClick: a
        }
      ) : /* @__PURE__ */ e.jsx(
        u,
        {
          className: "w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300",
          onClick: a
        }
      ))
    ] }) })
  ] });
};
export {
  S as default
};
