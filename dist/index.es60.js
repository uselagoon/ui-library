import { j as e } from "./index.es64.js";
import { AlertDialog as s, AlertDialogTrigger as g, AlertDialogContent as h, AlertDialogHeader as d, AlertDialogTitle as p, AlertDialogDescription as x, AlertDialogFooter as j, AlertDialogCancel as D, AlertDialogAction as A } from "./index.es7.js";
function m({
  title: o,
  message: r,
  cancelText: t,
  onCancel: i,
  confirmText: a,
  onConfirm: l,
  ...n
}) {
  const c = "rest" in arguments && "open" in n && "onOpenChange" in n ? { open: n.open, onOpenChange: n.onOpenChange } : {};
  return /* @__PURE__ */ e.jsxs(s, { ...c, children: [
    /* @__PURE__ */ e.jsx(g, { asChild: !0, children: "children" in n ? n.children : null }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsxs(d, { children: [
        /* @__PURE__ */ e.jsx(p, { children: o }),
        /* @__PURE__ */ e.jsx(x, { children: r })
      ] }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        /* @__PURE__ */ e.jsx(
          D,
          {
            onClick: () => {
              i && i();
            },
            children: t ?? "Cancel"
          }
        ),
        /* @__PURE__ */ e.jsx(
          A,
          {
            onClick: () => {
              l && l();
            },
            children: a ?? "Continue"
          }
        )
      ] })
    ] })
  ] });
}
export {
  m as default
};
