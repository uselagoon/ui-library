import { jsxs as i, jsx as n } from "react/jsx-runtime";
import { AlertDialog as h, AlertDialogTrigger as d, AlertDialogContent as p, AlertDialogHeader as D, AlertDialogTitle as A, AlertDialogDescription as C, AlertDialogFooter as u, AlertDialogCancel as s, AlertDialogAction as f } from "./index.es7.js";
function O({
  title: r,
  message: t,
  cancelText: a,
  onCancel: l,
  confirmText: c,
  onConfirm: o,
  ...e
}) {
  const g = "rest" in arguments && "open" in e && "onOpenChange" in e ? { open: e.open, onOpenChange: e.onOpenChange } : {};
  return /* @__PURE__ */ i(h, { ...g, children: [
    /* @__PURE__ */ n(d, { asChild: !0, children: "children" in e ? e.children : null }),
    /* @__PURE__ */ i(p, { children: [
      /* @__PURE__ */ i(D, { children: [
        /* @__PURE__ */ n(A, { children: r }),
        /* @__PURE__ */ n(C, { children: t })
      ] }),
      /* @__PURE__ */ i(u, { children: [
        /* @__PURE__ */ n(
          s,
          {
            onClick: () => {
              l && l();
            },
            children: a ?? "Cancel"
          }
        ),
        /* @__PURE__ */ n(
          f,
          {
            onClick: () => {
              o && o();
            },
            children: c ?? "Continue"
          }
        )
      ] })
    ] })
  ] });
}
export {
  O as default
};
