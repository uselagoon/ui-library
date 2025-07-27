import { jsxs as t, jsx as e, Fragment as N } from "react/jsx-runtime";
import { useState as d } from "react";
import { Copy as w, EyeOff as u, Eye as m, Check as T } from "lucide-react";
import { cva as W } from "class-variance-authority";
import { Tooltip as h, TooltipTrigger as p, TooltipContent as g } from "./index.es51.js";
const k = W("truncate transition-all duration-300", {
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
}), F = ({
  text: r,
  width: a,
  fontSize: b = "14px",
  type: l = "visible",
  withToolTip: f = !1,
  iconOnly: s = !1
}) => {
  const [y, i] = d(!1), [n, v] = d(!1), x = () => {
    navigator.clipboard.writeText(r.toString());
  }, C = () => {
    x(), i(!0), setTimeout(() => i(!1), 3500);
  }, o = () => v(!n), c = {
    maxWidth: a ? typeof a == "number" ? `${a}px` : a : void 0,
    fontSize: b,
    width: s ? "max-content" : void 0
  };
  return /* @__PURE__ */ t("div", { className: "flex items-start gap-4 min-w-max justify-between", style: c, children: [
    !s && /* @__PURE__ */ e("span", { className: k({ type: l, unblur: n }), style: { maxWidth: c.maxWidth }, children: f ? /* @__PURE__ */ t(h, { children: [
      /* @__PURE__ */ e(p, { asChild: !0, children: /* @__PURE__ */ e("span", { className: "truncate", children: r }) }),
      /* @__PURE__ */ e(g, { side: "bottom", children: /* @__PURE__ */ e("p", { children: r }) })
    ] }) : r }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-3", children: y ? /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(p, { asChild: !0, children: /* @__PURE__ */ e(T, { className: "w-4 h-4 text-green-500" }) }),
        /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("span", { className: "truncate", children: "Copied!" }) })
      ] }),
      l === "hiddenWithIcon" && (n ? /* @__PURE__ */ e(
        u,
        {
          className: "w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300",
          onClick: o
        }
      ) : /* @__PURE__ */ e(
        m,
        {
          className: "w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300",
          onClick: o
        }
      ))
    ] }) : /* @__PURE__ */ t(N, { children: [
      /* @__PURE__ */ e(
        w,
        {
          className: "w-4 h-4 text-muted-foreground hover:bg-gray-200 active:bg-gray-300 cursor-pointer",
          "data-cy": "copy-button",
          onClick: C
        }
      ),
      l === "hiddenWithIcon" && (n ? /* @__PURE__ */ e(
        u,
        {
          className: "w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300",
          onClick: o
        }
      ) : /* @__PURE__ */ e(
        m,
        {
          className: "w-4 h-4 ml-3 cursor-pointer text-muted-foreground hover:bg-gray-200 active:bg-gray-300",
          onClick: o
        }
      ))
    ] }) })
  ] });
};
export {
  F as default
};
