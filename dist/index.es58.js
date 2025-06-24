import { j as e } from "./index.es64.js";
import { useState as c } from "react";
import { Copy as y, EyeOff as m, Eye as u, Check as v } from "lucide-react";
import { cva as j } from "class-variance-authority";
import d from "./index.es86.js";
const N = j("truncate transition-all duration-300", {
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
}), T = ({
  text: t,
  width: r,
  fontSize: h = "14px",
  type: n = "visible",
  withToolTip: p = !1,
  iconOnly: o = !1
}) => {
  const [x, l] = c(!1), [s, g] = c(!1), b = () => {
    navigator.clipboard.writeText(t.toString());
  }, f = () => {
    b(), l(!0), setTimeout(() => l(!1), 3500);
  }, a = () => g(!s), i = {
    maxWidth: r ? typeof r == "number" ? `${r}px` : r : void 0,
    fontSize: h,
    width: o ? "max-content" : void 0
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4 min-w-max justify-between", style: i, children: [
    !o && /* @__PURE__ */ e.jsx("span", { className: N({ type: n, unblur: s }), style: { maxWidth: i.maxWidth }, children: p ? /* @__PURE__ */ e.jsx(d, { overlayInnerStyle: { width: "300px" }, title: t, placement: "bottom", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t }) }) : t }),
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-3", children: x ? /* @__PURE__ */ e.jsx(d, { placement: "right", title: "Copied!", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e.jsx(v, { className: "w-4 h-4 text-green-500" }),
      n === "hiddenWithIcon" && (s ? /* @__PURE__ */ e.jsx(
        m,
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
    ] }) }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        y,
        {
          className: "w-4 h-4 text-muted-foreground hover:bg-gray-200 active:bg-gray-300 cursor-pointer",
          "data-cy": "copy-button",
          onClick: f
        }
      ),
      n === "hiddenWithIcon" && (s ? /* @__PURE__ */ e.jsx(
        m,
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
  T as default
};
